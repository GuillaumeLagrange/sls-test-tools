"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _testResult = require("../../utils/testResult");

var _default = {
  toHaveEvent(eventBridgeEvents) {
    if (eventBridgeEvents === undefined || eventBridgeEvents.Messages === undefined || eventBridgeEvents.Messages.length === 0) {
      return (0, _testResult.testResult)("no message intercepted from EventBridge Bus", false);
    }

    return (0, _testResult.testResult)("expected to have message in EventBridge Bus", true);
  }

};
exports.default = _default;
//# sourceMappingURL=index.js.map