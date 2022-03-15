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
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";

/**
 * This class extends `SubFormFieldsPerDocumentBase`.
 */
export class SubFormFieldsPerDocumentText extends SubFormFieldsPerDocumentBase {
  /**
   * A text input field. Use the `SubFormFieldsPerDocumentText` class.
   */
  "type": string = "text";
  /**
   * Placeholder value for text field.
   */
  "placeholder"?: string;
  /**
   * Auto fill type for populating fields automatically. Check out the list of [auto fill types](https://app.hellosign.com/api/reference#AutoFillTypes) to learn more about the possible values.
   */
  "autoFillType"?: string;
  /**
   * Masks entered data. For more information see [Masking sensitive information](https://app.hellosign.com/api/reference#:~:text=Masking%20sensitive%20information). `true` for masking the data in a text field, otherwise `false`.
   */
  "masked"?: boolean;
  /**
   * Each text field may contain a `validation_type` parameter. Check out the list of [validation types](https://faq.hellosign.com/hc/en-us/articles/217115577) to learn more about the possible values.  **NOTE**: When using `custom_regex` you are required to pass a second parameter `validation_custom_regex` and you can optionally provide `validation_custom_regex_format_label` for the error message the user will see in case of an invalid value.
   */
  "validationType"?: SubFormFieldsPerDocumentText.ValidationTypeEnum;
  "validationCustomRegex"?: string;
  "validationCustomRegexFormatLabel"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "type",
      baseName: "type",
      type: "string",
    },
    {
      name: "placeholder",
      baseName: "placeholder",
      type: "string",
    },
    {
      name: "autoFillType",
      baseName: "auto_fill_type",
      type: "string",
    },
    {
      name: "masked",
      baseName: "masked",
      type: "boolean",
    },
    {
      name: "validationType",
      baseName: "validation_type",
      type: "SubFormFieldsPerDocumentText.ValidationTypeEnum",
    },
    {
      name: "validationCustomRegex",
      baseName: "validation_custom_regex",
      type: "string",
    },
    {
      name: "validationCustomRegexFormatLabel",
      baseName: "validation_custom_regex_format_label",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return super
      .getAttributeTypeMap()
      .concat(SubFormFieldsPerDocumentText.attributeTypeMap);
  }
}

export namespace SubFormFieldsPerDocumentText {
  export enum ValidationTypeEnum {
    NumbersOnly = "numbers_only",
    LettersOnly = "letters_only",
    PhoneNumber = "phone_number",
    BankRoutingNumber = "bank_routing_number",
    BankAccountNumber = "bank_account_number",
    EmailAddress = "email_address",
    ZipCode = "zip_code",
    SocialSecurityNumber = "social_security_number",
    EmployerIdentificationNumber = "employer_identification_number",
    CustomRegex = "custom_regex",
  }
}
