"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errorTypesCheckers = require("./errorTypesCheckers");

Object.keys(_errorTypesCheckers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _errorTypesCheckers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _errorTypesCheckers[key];
    }
  });
});
//# sourceMappingURL=index.js.map