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
import { AccountResponse } from "./accountResponse";

export class TeamResponse {
  /**
   * The name of your Team
   */
  "name"?: string;
  "accounts"?: Array<AccountResponse>;
  /**
   * A list of all Accounts that have an outstanding invitation to join your Team. Note that this response is a subset of the response parameters found in `GET /account`.
   */
  "invitedAccounts"?: Array<AccountResponse>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "accounts",
      baseName: "accounts",
      type: "Array<AccountResponse>",
    },
    {
      name: "invitedAccounts",
      baseName: "invited_accounts",
      type: "Array<AccountResponse>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamResponse.attributeTypeMap;
  }
}
