"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assertions = _interopRequireDefault(require("./assertions"));

var _globalTypeChecker = require("./assertions/utils/globalTypeChecker");

var _helpers = require("./helpers");

Object.keys(_helpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _helpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _helpers[key];
    }
  });
});

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-namespace */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
if ((0, _globalTypeChecker.isGlobalWithExpectKey)(global)) {
  const jestExpect = global.expect;

  if (jestExpect !== undefined) {
    jestExpect.extend(_assertions.default);
  } else {
    console.error("Unable to find Jest's global expect.");
  }
}
//# sourceMappingURL=index.js.map