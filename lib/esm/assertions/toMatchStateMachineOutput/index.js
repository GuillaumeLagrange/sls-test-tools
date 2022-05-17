"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _testResult = require("../../utils/testResult");

var _awsSdk = require("aws-sdk");

var _stepFunctions = _interopRequireDefault(require("../../helpers/stepFunctions"));

var _default = {
  async toMatchStateMachineOutput(stateMachineName, expectedOutput) {
    const stepFunctions = new _awsSdk.StepFunctions();
    const stepFunctionObject = await _stepFunctions.default.build(); // Helper to get stateMachine ARN from stateMachine name

    const smArn = await stepFunctionObject.obtainStateMachineArn(stateMachineName); // Helper to get latest execution ARN for given stateMachine

    const exArn = await stepFunctionObject.obtainExecutionArn(smArn);
    const executionResult = await stepFunctions.describeExecution({
      executionArn: exArn
    }).promise();

    if (executionResult.status === "SUCCEEDED") {
      if (executionResult.output === expectedOutput) {
        return (0, _testResult.testResult)(`Output is ${JSON.stringify(executionResult.output)} as expected`, true);
      } else {
        return (0, _testResult.testResult)(`Expected output was ${JSON.stringify(expectedOutput)}, but output received was ${JSON.stringify(executionResult.output)}`, false);
      }
    }

    return (0, _testResult.testResult)("Step Function execution failed. Cannot verify output for failed executions.", false);
  }

};
exports.default = _default;
//# sourceMappingURL=index.js.map