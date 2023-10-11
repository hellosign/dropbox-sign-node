import { AttributeTypeMap } from "./";
export declare class TemplateCreateResponseTemplate {
    "templateId"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateCreateResponseTemplate;
}
