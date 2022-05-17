import { TestResultOutput } from "../../utils/testResult";
declare const _default: {
    toExistInDynamoTable({ PK, SK }: {
        PK: string;
        SK?: string | undefined;
    }, tableName: string): Promise<TestResultOutput>;
};
export default _default;
