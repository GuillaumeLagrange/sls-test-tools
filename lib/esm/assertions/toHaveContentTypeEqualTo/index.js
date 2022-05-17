"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _general = require("../../helpers/general");

var _testResult = require("../../utils/testResult");

var _utils = require("../utils");

var _default = {
  async toHaveContentTypeEqualTo({
    bucketName,
    objectName
  }, contentType) {
    const s3 = new _general.AWSClient.S3();
    const params = {
      Bucket: bucketName,
      Key: objectName
    };
    let message;

    try {
      const object = await s3.getObject(params).promise();

      if (object.ContentType === contentType) {
        message = `expected ${objectName} to have content type ${contentType}`;
        return (0, _testResult.testResult)(message, true);
      }

      message = `expected ${objectName} to have content type ${contentType}, but content type found was ${object.ContentType ?? "undefined"}`;
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