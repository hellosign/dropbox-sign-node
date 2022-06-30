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
 * Contains information about an error that occurred.
 */
export class ErrorResponseError {
  /**
   * Message describing an error.
   */
  "errorMsg": string;
  /**
   * Name of the error.
   */
  "errorName": string;
  /**
   * Path at which an error occurred.
   */
  "errorPath"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "errorMsg",
      baseName: "error_msg",
      type: "string",
    },
    {
      name: "errorName",
      baseName: "error_name",
      type: "string",
    },
    {
      name: "errorPath",
      baseName: "error_path",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return ErrorResponseError.attributeTypeMap;
  }
}
