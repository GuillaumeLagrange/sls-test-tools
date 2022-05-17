"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _testResult = require("../../utils/testResult");

var _stepFunctions = _interopRequireDefault(require("../../helpers/stepFunctions"));

var _general = require("../../helpers/general");

var _default = {
  async toHaveCompletedExecutionWithStatus(stateMachineName, expectedStatus) {
    const stepFunctions = new _general.AWSClient.StepFunctions();
    const stepFunctionsObject = await _stepFunctions.default.build(); // Helper to get stateMachine ARN from stateMachine name

    const smArn = await stepFunctionsObject.obtainStateMachineArn(stateMachineName);
    const listExecutionsParams = {
      stateMachineArn: smArn
    }; // Get all executions of specified state machine

    const smExecutions = await stepFunctions.listExecutions(listExecutionsParams).promise(); // Get the latest execution (list ordered in reverse chronological)

    const latestExecution = smExecutions.executions[0];

    if (latestExecution.status === expectedStatus) {
      return (0, _testResult.testResult)(`Execution status is ${expectedStatus}, as expected.`, true);
    }

    return (0, _testResult.testResult)(`Execution status was ${latestExecution.status}, where it was expected to be ${expectedStatus}`, false);
  }

};
exports.default = _default;
//# sourceMappingURL=index.js.map