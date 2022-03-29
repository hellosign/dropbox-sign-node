/**
 * HelloSign API
 * HelloSign v3 API
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: apisupport@hellosign.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile, AttributeTypeMap } from "./models";
import { SubAttachment } from "./subAttachment";
import { SubCustomField } from "./subCustomField";
import { SubFieldOptions } from "./subFieldOptions";
import { SubFormFieldGroup } from "./subFormFieldGroup";
import { SubFormFieldRule } from "./subFormFieldRule";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
import { SubSignatureRequestSigner } from "./subSignatureRequestSigner";
import { SubSigningOptions } from "./subSigningOptions";

/**
 * Calls SignatureRequestSend in controller
 */
export class SignatureRequestCreateEmbeddedRequest {
  /**
   * Client id of the app you\'re using to create this embedded signature request. Visit our [embedded page](https://app.hellosign.com/api/embeddedSigningWalkthrough) to learn more about this parameter.
   */
  "clientId": string;
  /**
   * **file** or **file_url** is required, but not both.  Use `file[]` to indicate the uploaded file(s) to send for signature.  Currently we only support use of either the `file[]` parameter or `file_url[]` parameter, not both.
   */
  "file"?: Array<RequestFile>;
  /**
   * **file_url** or **file** is required, but not both.  Use `file_url[]` to have HelloSign download the file(s) to send for signature.  Currently we only support use of either the `file[]` parameter or `file_url[]` parameter, not both.
   */
  "fileUrl"?: Array<string>;
  /**
   * Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  "allowDecline"?: boolean = false;
  /**
   * Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.  **Note**: Only available for Gold plan and higher.
   */
  "allowReassign"?: boolean = false;
  "attachments"?: Array<SubAttachment>;
  /**
   * The email addresses that should be CCed.
   */
  "ccEmailAddresses"?: Array<string>;
  /**
   * An array defining values and options for custom fields. Required when defining pre-set values in `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro).
   */
  "customFields"?: Array<SubCustomField>;
  "fieldOptions"?: SubFieldOptions;
  /**
   * Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.
   */
  "formFieldGroups"?: Array<SubFormFieldGroup>;
  /**
   * Conditional Logic rules for fields defined in `form_fields_per_document`.
   */
  "formFieldRules"?: Array<SubFormFieldRule>;
  /**
   * The fields that should appear on the document, expressed as a 2-dimensional JSON array serialized to a string. The main array represents documents, with each containing an array of form fields. One document array is required for each file provided by the `file[]` parameter. In the case of a file with no fields, an empty list must be specified.  **NOTE**: Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](https://app.hellosign.com/api/reference#FormFieldsPerDocument) for these field types.  * Text Field use `SubFormFieldsPerDocumentText` * Dropdown Field use `SubFormFieldsPerDocumentDropdown` * Hyperlink Field use `SubFormFieldsPerDocumentHyperlink` * Checkbox Field use `SubFormFieldsPerDocumentCheckbox` * Radio Field use `SubFormFieldsPerDocumentRadio` * Signature Field use `SubFormFieldsPerDocumentSignature` * Date Signed Field use `SubFormFieldsPerDocumentDateSigned` * Initials Field use `SubFormFieldsPerDocumentInitials` * Text Merge Field use `SubFormFieldsPerDocumentTextMerge` * Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
   */
  "formFieldsPerDocument"?: Array<Array<SubFormFieldsPerDocumentBase>>;
  /**
   * The custom message in the email that will be sent to the signers.
   */
  "message"?: string;
  /**
   * Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer\'s order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys, with key names up to 40 characters long and values up to 1000 characters long.
   */
  "metadata"?: { [key: string]: any };
  /**
   * Add Signers to your Signature Request.
   */
  "signers"?: Array<SubSignatureRequestSigner>;
  "signingOptions"?: SubSigningOptions;
  /**
   * The subject in the email that will be sent to the signers.
   */
  "subject"?: string;
  /**
   * Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.
   */
  "testMode"?: boolean = false;
  /**
   * The title you want to assign to the SignatureRequest.
   */
  "title"?: string;
  /**
   * Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.
   */
  "useTextTags"?: boolean = false;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "clientId",
      baseName: "client_id",
      type: "string",
    },
    {
      name: "file",
      baseName: "file",
      type: "Array<RequestFile>",
    },
    {
      name: "fileUrl",
      baseName: "file_url",
      type: "Array<string>",
    },
    {
      name: "allowDecline",
      baseName: "allow_decline",
      type: "boolean",
    },
    {
      name: "allowReassign",
      baseName: "allow_reassign",
      type: "boolean",
    },
    {
      name: "attachments",
      baseName: "attachments",
      type: "Array<SubAttachment>",
    },
    {
      name: "ccEmailAddresses",
      baseName: "cc_email_addresses",
      type: "Array<string>",
    },
    {
      name: "customFields",
      baseName: "custom_fields",
      type: "Array<SubCustomField>",
    },
    {
      name: "fieldOptions",
      baseName: "field_options",
      type: "SubFieldOptions",
    },
    {
      name: "formFieldGroups",
      baseName: "form_field_groups",
      type: "Array<SubFormFieldGroup>",
    },
    {
      name: "formFieldRules",
      baseName: "form_field_rules",
      type: "Array<SubFormFieldRule>",
    },
    {
      name: "formFieldsPerDocument",
      baseName: "form_fields_per_document",
      type: "Array<Array<SubFormFieldsPerDocumentBase>>",
    },
    {
      name: "message",
      baseName: "message",
      type: "string",
    },
    {
      name: "metadata",
      baseName: "metadata",
      type: "{ [key: string]: any; }",
    },
    {
      name: "signers",
      baseName: "signers",
      type: "Array<SubSignatureRequestSigner>",
    },
    {
      name: "signingOptions",
      baseName: "signing_options",
      type: "SubSigningOptions",
    },
    {
      name: "subject",
      baseName: "subject",
      type: "string",
    },
    {
      name: "testMode",
      baseName: "test_mode",
      type: "boolean",
    },
    {
      name: "title",
      baseName: "title",
      type: "string",
    },
    {
      name: "useTextTags",
      baseName: "use_text_tags",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SignatureRequestCreateEmbeddedRequest.attributeTypeMap;
  }
}
