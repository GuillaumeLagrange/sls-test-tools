"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _general = require("../../helpers/general");

var _testResult = require("../../utils/testResult");

var _utils = require("../utils");

var _default = {
  async toExistAsS3Bucket(bucketName) {
    const s3 = new _general.AWSClient.S3();
    const params = {
      Bucket: bucketName
    };
    let message;

    try {
      await s3.headBucket(params).promise();
      message = `expected S3 bucket to exist with name ${bucketName}`;
      return (0, _testResult.testResult)(message, true);
    } catch (error) {
      if ((0, _utils.is404Error)(error)) {
        message = `expected S3 bucket to exist with name ${bucketName} - not found`;
        return (0, _testResult.testResult)(message, false);
      }

      throw error;
    }
  }

};
exports.default = _default;
//# sourceMappingURL=index.js.map