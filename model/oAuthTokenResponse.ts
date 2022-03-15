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

export class OAuthTokenResponse {
  "accessToken"?: string;
  "tokenType"?: string;
  "refreshToken"?: string;
  /**
   * in seconds
   */
  "expiresIn"?: number;
  "state"?: string | null;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "accessToken",
      baseName: "access_token",
      type: "string",
    },
    {
      name: "tokenType",
      baseName: "token_type",
      type: "string",
    },
    {
      name: "refreshToken",
      baseName: "refresh_token",
      type: "string",
    },
    {
      name: "expiresIn",
      baseName: "expires_in",
      type: "number",
    },
    {
      name: "state",
      baseName: "state",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return OAuthTokenResponse.attributeTypeMap;
  }
}
