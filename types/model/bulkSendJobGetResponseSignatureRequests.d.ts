import { AttributeTypeMap } from "./models";
import { SignatureRequestResponseAttachment } from "./signatureRequestResponseAttachment";
import { SignatureRequestResponseCustomFieldBase } from "./signatureRequestResponseCustomFieldBase";
import { SignatureRequestResponseData } from "./signatureRequestResponseData";
import { SignatureRequestResponseSignatures } from "./signatureRequestResponseSignatures";
export declare class BulkSendJobGetResponseSignatureRequests {
    "testMode"?: boolean | null;
    "signatureRequestId"?: string;
    "requesterEmailAddress"?: string;
    "title"?: string;
    "originalTitle"?: string;
    "subject"?: string | null;
    "message"?: string | null;
    "metadata"?: object;
    "createdAt"?: number;
    "isComplete"?: boolean;
    "isDeclined"?: boolean;
    "hasError"?: boolean;
    "filesUrl"?: string;
    "signingUrl"?: string | null;
    "detailsUrl"?: string;
    "ccEmailAddresses"?: Array<string>;
    "signingRedirectUrl"?: string | null;
    "templateIds"?: Array<string> | null;
    "customFields"?: Array<SignatureRequestResponseCustomFieldBase> | null;
    "attachments"?: Array<SignatureRequestResponseAttachment> | null;
    "responseData"?: Array<SignatureRequestResponseData> | null;
    "signatures"?: Array<SignatureRequestResponseSignatures>;
    "bulkSendJobId"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
