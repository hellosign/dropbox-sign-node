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
import { WarningResponse } from "./warningResponse";

/**
 * Template object with parameters: `template_id`, `edit_url`, `expires_at`.
 */
export class TemplateCreateEmbeddedDraftResponseTemplate {
  /**
   * The id of the Template.
   */
  "templateId"?: string;
  /**
   * Link to edit the template.
   */
  "editUrl"?: string;
  /**
   * When the link expires.
   */
  "expiresAt"?: number;
  /**
   * A list of warnings.
   */
  "warnings"?: Array<WarningResponse>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "templateId",
      baseName: "template_id",
      type: "string",
    },
    {
      name: "editUrl",
      baseName: "edit_url",
      type: "string",
    },
    {
      name: "expiresAt",
      baseName: "expires_at",
      type: "number",
    },
    {
      name: "warnings",
      baseName: "warnings",
      type: "Array<WarningResponse>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TemplateCreateEmbeddedDraftResponseTemplate.attributeTypeMap;
  }
}
