"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _general = require("../../helpers/general");

var _testResult = require("../../utils/testResult");

var _default = {
  async toContainUser(userPoolId, username) {
    const cognitoClient = new _general.AWSClient.CognitoIdentityServiceProvider();

    try {
      await cognitoClient.adminGetUser({
        UserPoolId: userPoolId,
        Username: username
      }).promise();
      return (0, _testResult.testResult)(`User with username ${username} exists in User Pool with Id ${userPoolId}`, true);
    } catch (e) {
      console.log(e);
      return (0, _testResult.testResult)(`User does not exist in User Pool with Id ${userPoolId}`, false);
    }
  }

};
exports.default = _default;
//# sourceMappingURL=index.js.map