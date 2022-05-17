"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadArg = void 0;

var _yargs = _interopRequireDefault(require("yargs"));

const argv = (0, _yargs.default)(process.argv).argv;

const isNonEmptyString = arg => typeof arg === "string" && arg !== "";

const loadArg = ({
  cliArg,
  processEnvName,
  defaultValue
}) => {
  let arg = argv[cliArg];

  if (isNonEmptyString(arg)) {
    return arg;
  }

  arg = process.env[processEnvName];

  if (isNonEmptyString(arg)) {
    return arg;
  }

  if (defaultValue === undefined) {
    throw new Error(`--${cliArg} CLI argument or ${processEnvName} env var required.`);
  }

  return defaultValue;
};

exports.loadArg = loadArg;
//# sourceMappingURL=loadArg.js.map