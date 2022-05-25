import { StepFunctions as AWSStepFunctions } from "aws-sdk";
export default class StepFunctions {
    stepFunctions: AWSStepFunctions | undefined;
    allStateMachines: AWSStepFunctions.ListStateMachinesOutput | undefined;
    init(): Promise<void>;
    static build(): Promise<StepFunctions>;
    startExecution(stateMachineName: string, input: unknown): Promise<AWSStepFunctions.StartExecutionOutput>;
    runExecution(stateMachineName: string, input: unknown): Promise<AWSStepFunctions.DescribeExecutionOutput>;
    obtainStateMachineArn(stateMachineName: string): Promise<string>;
    obtainExecutionArn(StateMachineArn: string): Promise<string>;
}
