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
import { TeamParentResponse } from "./teamParentResponse";

export class TeamInfoResponse {
  /**
   * The id of a team
   */
  "teamId"?: string;
  "teamParent"?: TeamParentResponse | null;
  /**
   * The name of a team
   */
  "name"?: string;
  /**
   * Number of members within a team
   */
  "numMembers"?: number;
  /**
   * Number of sub teams within a team
   */
  "numSubTeams"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "teamId",
      baseName: "team_id",
      type: "string",
    },
    {
      name: "teamParent",
      baseName: "team_parent",
      type: "TeamParentResponse",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "numMembers",
      baseName: "num_members",
      type: "number",
    },
    {
      name: "numSubTeams",
      baseName: "num_sub_teams",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamInfoResponse.attributeTypeMap;
  }
}
