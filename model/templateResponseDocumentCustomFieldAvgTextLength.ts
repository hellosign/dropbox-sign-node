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

/**
 * Average text length in custom field.
 */
export class TemplateResponseDocumentCustomFieldAvgTextLength {
  /**
   * Number of lines.
   */
  "numLines"?: number;
  /**
   * Number of character per line.
   */
  "numCharsPerLine"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "numLines",
      baseName: "num_lines",
      type: "number",
    },
    {
      name: "numCharsPerLine",
      baseName: "num_chars_per_line",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TemplateResponseDocumentCustomFieldAvgTextLength.attributeTypeMap;
  }
}
