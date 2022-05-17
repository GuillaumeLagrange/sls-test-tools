declare const _default: {
    toContainUser(userPoolId: string, username: string): Promise<import("../utils/testResult").TestResultOutput>;
    toMatchStateMachineOutput(stateMachineName: string, expectedOutput: unknown): Promise<import("../utils/testResult").TestResultOutput>;
    toContainItemWithValues(tableName: string, values: {
        [key: string]: unknown;
    }): Promise<import("../utils/testResult").TestResultOutput>;
    toHaveCompletedExecutionWithStatus(stateMachineName: string, expectedStatus: string): Promise<import("../utils/testResult").TestResultOutput>;
    toExistInDynamoTable({ PK, SK }: {
        PK: string;
        SK?: string | undefined;
    }, tableName: string): Promise<import("../utils/testResult").TestResultOutput>;
    toHaveS3ObjectWithNameEqualTo(bucketName: string, objectName: string): Promise<import("../utils/testResult").TestResultOutput>;
    toHaveEventWithSource({ Messages }: {
        Messages: [{
            Body: string;
        }];
    }, expectedSourceName: string): import("../utils/testResult").TestResultOutput;
    toHaveEvent(eventBridgeEvents?: import("aws-sdk/clients/sqs").ReceiveMessageResult | undefined): import("../utils/testResult").TestResultOutput;
    toHaveContentTypeEqualTo({ bucketName, objectName }: {
        bucketName: string;
        objectName: string;
    }, contentType: string): Promise<import("../utils/testResult").TestResultOutput>;
    toHaveContentEqualTo({ bucketName, objectName }: {
        bucketName: string;
        objectName: string;
    }, content: string | Record<string, unknown>): Promise<import("../utils/testResult").TestResultOutput>;
    toExistAsS3Bucket(bucketName: string): Promise<import("../utils/testResult").TestResultOutput>;
};
export default _default;
