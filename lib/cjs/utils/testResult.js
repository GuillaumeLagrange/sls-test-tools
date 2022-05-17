"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testResult = void 0;

// eslint-disable-next-line import/prefer-default-export
const testResult = (message, pass) => ({
  message: () => message,
  pass
});

exports.testResult = testResult;
//# sourceMappingURL=testResult.js.map