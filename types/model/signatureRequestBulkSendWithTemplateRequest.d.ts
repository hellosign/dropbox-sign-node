import { RequestFile, AttributeTypeMap } from "./";
import { SubBulkSignerList } from "./subBulkSignerList";
import { SubCC } from "./subCC";
import { SubCustomField } from "./subCustomField";
export declare class SignatureRequestBulkSendWithTemplateRequest {
    "templateIds": Array<string>;
    "signerFile"?: RequestFile;
    "signerList"?: Array<SubBulkSignerList>;
    "allowDecline"?: boolean;
    "ccs"?: Array<SubCC>;
    "clientId"?: string;
    "customFields"?: Array<SubCustomField>;
    "message"?: string;
    "metadata"?: {
        [key: string]: any;
    };
    "signingRedirectUrl"?: string;
    "subject"?: string;
    "testMode"?: boolean;
    "title"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SignatureRequestBulkSendWithTemplateRequest;
}
