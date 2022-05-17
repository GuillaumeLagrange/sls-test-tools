interface MessageHandler {
    Id: string | undefined;
    ReceiptHandle: string | undefined;
}
interface DefinedMessageHandler {
    Id: string;
    ReceiptHandle: string;
}
export declare const removeUndefinedMessages: (messageHandlers: MessageHandler[] | undefined) => DefinedMessageHandler[] | undefined;
export {};
