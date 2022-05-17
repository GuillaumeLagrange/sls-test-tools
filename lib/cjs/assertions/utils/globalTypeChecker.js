"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isGlobalWithExpectKey = void 0;

const isGlobalWithExpectKey = global => "expect" in global;

exports.isGlobalWithExpectKey = isGlobalWithExpectKey;
//# sourceMappingURL=globalTypeChecker.js.map