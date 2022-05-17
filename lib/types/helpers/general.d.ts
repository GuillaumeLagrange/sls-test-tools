import AWS, { AWSError } from "aws-sdk";
import { DescribeStacksOutput } from "aws-sdk/clients/cloudformation";
import { PromiseResult } from "aws-sdk/lib/request";
export declare const stackName: string;
export declare const region: string;
export declare const AWSClient: typeof AWS;
export declare const getStackResources: (stack: string | undefined) => Promise<void | PromiseResult<DescribeStacksOutput, AWSError>>;
interface GetOptionsOutput {
    method: string;
    headers: {
        "x-api-key": string | null;
        "Content-Type": string;
    };
}
export declare const getOptions: () => Promise<void | GetOptionsOutput>;
export {};
