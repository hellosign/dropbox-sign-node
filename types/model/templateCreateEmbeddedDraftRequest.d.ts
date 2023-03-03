import { RequestFile, AttributeTypeMap } from "./";
import { SubAttachment } from "./subAttachment";
import { SubEditorOptions } from "./subEditorOptions";
import { SubFieldOptions } from "./subFieldOptions";
import { SubFormFieldGroup } from "./subFormFieldGroup";
import { SubFormFieldRule } from "./subFormFieldRule";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
import { SubMergeField } from "./subMergeField";
import { SubTemplateRole } from "./subTemplateRole";
export declare class TemplateCreateEmbeddedDraftRequest {
    "clientId": string;
    "files"?: Array<RequestFile>;
    "fileUrls"?: Array<string>;
    "allowCcs"?: boolean;
    "allowReassign"?: boolean;
    "attachments"?: Array<SubAttachment>;
    "ccRoles"?: Array<string>;
    "editorOptions"?: SubEditorOptions;
    "fieldOptions"?: SubFieldOptions;
    "forceSignerRoles"?: boolean;
    "forceSubjectMessage"?: boolean;
    "formFieldGroups"?: Array<SubFormFieldGroup>;
    "formFieldRules"?: Array<SubFormFieldRule>;
    "formFieldsPerDocument"?: Array<SubFormFieldsPerDocumentBase>;
    "mergeFields"?: Array<SubMergeField>;
    "message"?: string;
    "metadata"?: {
        [key: string]: any;
    };
    "showPreview"?: boolean;
    "showProgressStepper"?: boolean;
    "signerRoles"?: Array<SubTemplateRole>;
    "skipMeNow"?: boolean;
    "subject"?: string;
    "testMode"?: boolean;
    "title"?: string;
    "usePreexistingFields"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateCreateEmbeddedDraftRequest;
}
