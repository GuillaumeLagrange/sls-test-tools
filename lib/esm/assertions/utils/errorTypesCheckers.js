"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNoSuchKeyError = exports.isNoSuchBucketError = exports.is404Error = void 0;

const is404Error = error => error.statusCode === 404;

exports.is404Error = is404Error;

const isNoSuchKeyError = error => error.code === "NoSuchKey";

exports.isNoSuchKeyError = isNoSuchKeyError;

const isNoSuchBucketError = error => error.code === "NoSuchBucket";

exports.isNoSuchBucketError = isNoSuchBucketError;
//# sourceMappingURL=errorTypesCheckers.js.map