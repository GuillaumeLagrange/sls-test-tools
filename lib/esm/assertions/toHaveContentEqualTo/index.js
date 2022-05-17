"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _general = require("../../helpers/general");

var _testResult = require("../../utils/testResult");

var _utils = require("../utils");

var _default = {
  // Import & use s3 type ?
  async toHaveContentEqualTo({
    bucketName,
    objectName
  }, content) {
    const s3 = new _general.AWSClient.S3();
    const params = {
      Bucket: bucketName,
      Key: objectName
    };
    let message;

    try {
      var _object$Body;

      const object = await s3.getObject(params).promise();

      if (JSON.stringify(object.Body) === JSON.stringify(content)) {
        message = `expected ${objectName} to have content ${JSON.stringify(content)}`;
        return (0, _testResult.testResult)(message, true);
      }

      const stringifiedObjectBody = (_object$Body = object.Body) === null || _object$Body === void 0 ? void 0 : _object$Body.toString();

      if (stringifiedObjectBody === undefined) {
        message = `expected ${objectName} to have content ${JSON.stringify(content)}, but content found was undefined`;
        return (0, _testResult.testResult)(message, false);
      }

      message = `expected ${objectName} to have content ${JSON.stringify(content)}, but content found was ${stringifiedObjectBody}`;
      return (0, _testResult.testResult)(message, false);
    } catch (error) {
      if ((0, _utils.isNoSuchKeyError)(error)) {
        message = `expected ${bucketName} to have object with name ${objectName} - not found`;
        return (0, _testResult.testResult)(message, false);
      }

      if ((0, _utils.isNoSuchBucketError)(error)) {
        message = `expected ${bucketName} to exist - not found`;
        return (0, _testResult.testResult)(message, false);
      }

      throw error;
    }
  }

};
exports.default = _default;
//# sourceMappingURL=index.js.map