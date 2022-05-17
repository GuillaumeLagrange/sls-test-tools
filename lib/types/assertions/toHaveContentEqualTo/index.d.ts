import { TestResultOutput } from "../../utils/testResult";
declare const _default: {
    toHaveContentEqualTo({ bucketName, objectName }: {
        bucketName: string;
        objectName: string;
    }, content: Record<string, unknown> | string): Promise<TestResultOutput>;
};
export default _default;
