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
import { TemplateResponseAccount } from "./templateResponseAccount";
import { TemplateResponseCCRole } from "./templateResponseCCRole";
import { TemplateResponseCustomField } from "./templateResponseCustomField";
import { TemplateResponseDocument } from "./templateResponseDocument";
import { TemplateResponseSignerRole } from "./templateResponseSignerRole";
import { WarningResponse } from "./warningResponse";

export class TemplateResponse {
  /**
   * The id of the Template.
   */
  "templateId"?: string;
  /**
   * The title of the Template. This will also be the default subject of the message sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest.
   */
  "title"?: string;
  /**
   * The default message that will be sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest.
   */
  "message"?: string;
  /**
   * Time the template was last updated.
   */
  "updatedAt"?: number;
  /**
   * `true` if this template was created using an embedded flow, `false` if it was created on our website.
   */
  "isEmbedded"?: boolean | null;
  /**
   * `true` if you are the owner of this template, `false` if it\'s been shared with you by a team member.
   */
  "isCreator"?: boolean | null;
  /**
   * Indicates whether edit rights have been granted to you by the owner (always `true` if that\'s you).
   */
  "canEdit"?: boolean | null;
  /**
   * `true` if you exceed Template quota; these can only be used in test mode. `false` if the template is included with the Template quota; these can be used at any time.
   */
  "isLocked"?: boolean | null;
  /**
   * The metadata attached to the template.
   */
  "metadata"?: object;
  "signerRoles"?: Array<TemplateResponseSignerRole>;
  "ccRoles"?: Array<TemplateResponseCCRole>;
  "documents"?: Array<TemplateResponseDocument>;
  "customFields"?: Array<TemplateResponseCustomField> | null;
  "accounts"?: Array<TemplateResponseAccount> | null;
  "warnings"?: Array<WarningResponse>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "templateId",
      baseName: "template_id",
      type: "string",
    },
    {
      name: "title",
      baseName: "title",
      type: "string",
    },
    {
      name: "message",
      baseName: "message",
      type: "string",
    },
    {
      name: "updatedAt",
      baseName: "updated_at",
      type: "number",
    },
    {
      name: "isEmbedded",
      baseName: "is_embedded",
      type: "boolean",
    },
    {
      name: "isCreator",
      baseName: "is_creator",
      type: "boolean",
    },
    {
      name: "canEdit",
      baseName: "can_edit",
      type: "boolean",
    },
    {
      name: "isLocked",
      baseName: "is_locked",
      type: "boolean",
    },
    {
      name: "metadata",
      baseName: "metadata",
      type: "object",
    },
    {
      name: "signerRoles",
      baseName: "signer_roles",
      type: "Array<TemplateResponseSignerRole>",
    },
    {
      name: "ccRoles",
      baseName: "cc_roles",
      type: "Array<TemplateResponseCCRole>",
    },
    {
      name: "documents",
      baseName: "documents",
      type: "Array<TemplateResponseDocument>",
    },
    {
      name: "customFields",
      baseName: "custom_fields",
      type: "Array<TemplateResponseCustomField>",
    },
    {
      name: "accounts",
      baseName: "accounts",
      type: "Array<TemplateResponseAccount>",
    },
    {
      name: "warnings",
      baseName: "warnings",
      type: "Array<WarningResponse>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TemplateResponse.attributeTypeMap;
  }
}
