declare type Error404 = {
    statusCode: 404;
};
export declare const is404Error: (error: unknown) => error is Error404;
declare type ErrorNoSuchKey = {
    code: "NoSuchKey";
};
export declare const isNoSuchKeyError: (error: unknown) => error is ErrorNoSuchKey;
declare type ErrorNoSuchBucket = {
    code: "NoSuchBucket";
};
export declare const isNoSuchBucketError: (error: unknown) => error is ErrorNoSuchBucket;
export {};
