export interface Message {
    fulfillmentHeader?: string;
    fulfillmentDescription?: string;
    isIntent?: boolean;
    source?: string;
    intent?: string;
    payload?: any[];
    prompts?: string[];
}