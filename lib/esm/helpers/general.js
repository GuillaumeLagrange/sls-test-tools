"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stackName = exports.region = exports.getStackResources = exports.getOptions = exports.AWSClient = void 0;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _loadArg = require("./utils/loadArg");

const stackName = (0, _loadArg.loadArg)({
  cliArg: "stack",
  processEnvName: "CFN_STACK_NAME"
});
exports.stackName = stackName;
const profile = (0, _loadArg.loadArg)({
  cliArg: "profile",
  processEnvName: "AWS_PROFILE",
  defaultValue: "default"
});
const region = (0, _loadArg.loadArg)({
  cliArg: "region",
  processEnvName: "AWS_REGION",
  defaultValue: "eu-west-2"
});
exports.region = region;
let creds;

if (process.env.AWS_ACCESS_KEY_ID !== undefined && process.env.AWS_SECRET_ACCESS_KEY !== undefined) {
  creds = new _awsSdk.default.Credentials({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_SESSION_TOKEN
  });
} else {
  creds = new _awsSdk.default.SharedIniFileCredentials({
    profile,
    callback: err => {
      if (err) {
        console.error(`SharedIniFileCreds Error: ${err.name} - ${err.message}`);
      }
    }
  });
}

_awsSdk.default.config.credentials = creds;
_awsSdk.default.config.region = region;
const AWSClient = _awsSdk.default;
exports.AWSClient = AWSClient;
const cloudformation = new AWSClient.CloudFormation();

const getStackResources = stack => cloudformation.describeStacks({
  StackName: stack
}).promise().catch(error => {
  console.error(error);
});

exports.getStackResources = getStackResources;
const apigateway = new AWSClient.APIGateway();
let apiKey = null;

const getOptions = async () => {
  if (apiKey === null) {
    const resources = await cloudformation.listStackResources({
      StackName: stackName
    }).promise();
    const stackResourceSummaries = resources.StackResourceSummaries;

    if (stackResourceSummaries === undefined) {
      return;
    }

    const stackResourceSummary = stackResourceSummaries.find(r => r.ResourceType === "AWS::ApiGateway::ApiKey");

    if (stackResourceSummary === undefined) {
      return;
    }

    const id = stackResourceSummary.PhysicalResourceId;

    if (id === undefined) {
      return;
    }

    const params = {
      apiKey: id,
      includeValue: true
    };
    const data = await apigateway.getApiKey(params).promise();
    apiKey = data.value !== undefined ? data.value : null;
  }

  return {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "application/json"
    }
  };
};

exports.getOptions = getOptions;
//# sourceMappingURL=general.js.map