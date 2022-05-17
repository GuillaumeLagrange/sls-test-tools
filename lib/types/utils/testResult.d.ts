export interface TestResultOutput {
    message: () => string;
    pass: boolean;
}
export declare const testResult: (message: string, pass: boolean) => TestResultOutput;
