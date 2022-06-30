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
import { TemplateResponseFieldAvgTextLength } from "./templateResponseFieldAvgTextLength";

export class TemplateResponseCustomField {
  /**
   * The name of the Custom Field.
   */
  "name"?: string;
  /**
   * The type of this Custom Field. Only `text` and `checkbox` are currently supported.
   */
  "type"?: TemplateResponseCustomField.TypeEnum;
  /**
   * The horizontal offset in pixels for this form field.
   */
  "x"?: number;
  /**
   * The vertical offset in pixels for this form field.
   */
  "y"?: number;
  /**
   * The width in pixels of this form field.
   */
  "width"?: number;
  /**
   * The height in pixels of this form field.
   */
  "height"?: number;
  /**
   * Boolean showing whether or not this field is required.
   */
  "required"?: boolean;
  /**
   * The unique ID for this field.
   */
  "apiId"?: string;
  /**
   * The name of the group this field is in. If this field is not a group, this defaults to `null`.
   */
  "group"?: string | null;
  "avgTextLength"?: TemplateResponseFieldAvgTextLength;
  /**
   * Whether this form field is multiline text.
   */
  "isMultiline"?: string | null;
  /**
   * Original font size used in this form field\'s text.
   */
  "originalFontSize"?: number | null;
  /**
   * Font family used in this form field\'s text.
   */
  "fontFamily"?: number | null;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "type",
      baseName: "type",
      type: "TemplateResponseCustomField.TypeEnum",
    },
    {
      name: "x",
      baseName: "x",
      type: "number",
    },
    {
      name: "y",
      baseName: "y",
      type: "number",
    },
    {
      name: "width",
      baseName: "width",
      type: "number",
    },
    {
      name: "height",
      baseName: "height",
      type: "number",
    },
    {
      name: "required",
      baseName: "required",
      type: "boolean",
    },
    {
      name: "apiId",
      baseName: "api_id",
      type: "string",
    },
    {
      name: "group",
      baseName: "group",
      type: "string",
    },
    {
      name: "avgTextLength",
      baseName: "avg_text_length",
      type: "TemplateResponseFieldAvgTextLength",
    },
    {
      name: "isMultiline",
      baseName: "isMultiline",
      type: "string",
    },
    {
      name: "originalFontSize",
      baseName: "originalFontSize",
      type: "number",
    },
    {
      name: "fontFamily",
      baseName: "fontFamily",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TemplateResponseCustomField.attributeTypeMap;
  }
}

export namespace TemplateResponseCustomField {
  export enum TypeEnum {
    Text = "text",
    Checkbox = "checkbox",
  }
}
