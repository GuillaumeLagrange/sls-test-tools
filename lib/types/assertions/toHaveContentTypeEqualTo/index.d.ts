import { TestResultOutput } from "../../utils/testResult";
declare const _default: {
    toHaveContentTypeEqualTo({ bucketName, objectName }: {
        bucketName: string;
        objectName: string;
    }, contentType: string): Promise<TestResultOutput>;
};
export default _default;
