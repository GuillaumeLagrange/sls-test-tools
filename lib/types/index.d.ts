export * from "./helpers";
declare global {
    namespace jest {
        interface Matchers<R> {
            toExistAsS3Bucket(): Promise<R>;
            toExistInDynamoTable(table: string): Promise<R>;
            toHaveContentEqualTo(content: Record<string, unknown> | string): Promise<R>;
            toHaveContentTypeEqualTo(contentType: string): Promise<R>;
            toHaveEvent(): R;
            toHaveEventWithSource(expectedSourceName: string): R;
            toHaveS3ObjectWithNameEqualTo(objectName: string): Promise<R>;
            toContainItemWithValues(values: {
                [key: string]: unknown;
            }): Promise<R>;
        }
    }
}
