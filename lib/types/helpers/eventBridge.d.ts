import { AWSError, EventBridge as AWSEventBridge, SQS } from "aws-sdk";
import { PromiseResult } from "aws-sdk/lib/request";
export default class EventBridge {
    QueueUrl: string | undefined;
    eventBridgeClient: AWSEventBridge | undefined;
    eventBridgeName: string | undefined;
    keep: boolean | undefined;
    ruleName: string | undefined;
    sqsClient: SQS | undefined;
    targetId: string | undefined;
    init(eventBridgeName: string): Promise<void>;
    static build(eventBridgeName: string): Promise<EventBridge>;
    publishEvent(source: string | undefined, detailType: string | undefined, detail: string | undefined): Promise<PromiseResult<AWSEventBridge.PutEventsResponse, AWSError>>;
    getEvents(): Promise<SQS.ReceiveMessageResult | undefined>;
    clear(): Promise<any>;
    destroy(): Promise<boolean>;
}
