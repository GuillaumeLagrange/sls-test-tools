"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeUndefinedMessages = void 0;

const removeUndefinedMessages = messageHandlers => messageHandlers === null || messageHandlers === void 0 ? void 0 : messageHandlers.filter(messageHandler => messageHandler.Id !== undefined && messageHandler.ReceiptHandle !== undefined);

exports.removeUndefinedMessages = removeUndefinedMessages;
//# sourceMappingURL=removeUndefinedMessages.js.map