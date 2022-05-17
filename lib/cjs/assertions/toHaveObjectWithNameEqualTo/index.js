"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _general = require("../../helpers/general");

var _testResult = require("../../utils/testResult");

var _utils = require("../utils");

var _default = {
  async toHaveS3ObjectWithNameEqualTo(bucketName, objectName) {
    const s3 = new _general.AWSClient.S3();
    const params = {
      Bucket: bucketName,
      Key: objectName
    };
    let message;

    try {
      await s3.getObject(params).promise();
      message = `expected ${bucketName} to have object with name ${objectName}`;
      return (0, _testResult.testResult)(message, true);
    } catch (error) {
      if ((0, _utils.isNoSuchKeyError)(error)) {
        message = `expected ${bucketName} to have object with name ${objectName} - not found`;
        return (0, _testResult.testResult)(message, false);
      }

      throw error;
    }
  }

};
exports.default = _default;
//# sourceMappingURL=index.js.map