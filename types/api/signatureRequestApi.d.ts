import { Authentication, BulkSendJobSendResponse, FileResponse, FileResponseDataUri, HttpBasicAuth, HttpBearerAuth, Interceptor, SignatureRequestBulkCreateEmbeddedWithTemplateRequest, SignatureRequestBulkSendWithTemplateRequest, SignatureRequestCreateEmbeddedRequest, SignatureRequestCreateEmbeddedWithTemplateRequest, SignatureRequestEditEmbeddedRequest, SignatureRequestEditEmbeddedWithTemplateRequest, SignatureRequestEditRequest, SignatureRequestEditWithTemplateRequest, SignatureRequestGetResponse, SignatureRequestListResponse, SignatureRequestRemindRequest, SignatureRequestSendRequest, SignatureRequestSendWithTemplateRequest, SignatureRequestUpdateRequest } from "../model";
import { optionsI, returnTypeI, returnTypeT } from "./";
export declare enum SignatureRequestApiApiKeys {
}
export declare class SignatureRequestApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        api_key: HttpBasicAuth;
        oauth2: HttpBearerAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: string): void;
    set username(username: string);
    set password(password: string);
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    signatureRequestBulkCreateEmbeddedWithTemplate(signatureRequestBulkCreateEmbeddedWithTemplateRequest: SignatureRequestBulkCreateEmbeddedWithTemplateRequest, options?: optionsI): Promise<returnTypeT<BulkSendJobSendResponse>>;
    signatureRequestBulkSendWithTemplate(signatureRequestBulkSendWithTemplateRequest: SignatureRequestBulkSendWithTemplateRequest, options?: optionsI): Promise<returnTypeT<BulkSendJobSendResponse>>;
    signatureRequestCancel(signatureRequestId: string, options?: optionsI): Promise<returnTypeI>;
    signatureRequestCreateEmbedded(signatureRequestCreateEmbeddedRequest: SignatureRequestCreateEmbeddedRequest, options?: optionsI): Promise<returnTypeT<SignatureRequestGetResponse>>;
    signatureRequestCreateEmbeddedWithTemplate(signatureRequestCreateEmbeddedWithTemplateRequest: SignatureRequestCreateEmbeddedWithTemplateRequest, options?: optionsI): Promise<returnTypeT<SignatureRequestGetResponse>>;
    signatureRequestEdit(signatureRequestId: string, signatureRequestEditRequest: SignatureRequestEditRequest, options?: optionsI): Promise<returnTypeT<SignatureRequestGetResponse>>;
    signatureRequestEditEmbedded(signatureRequestId: string, signatureRequestEditEmbeddedRequest: SignatureRequestEditEmbeddedRequest, options?: optionsI): Promise<returnTypeT<SignatureRequestGetResponse>>;
    signatureRequestEditEmbeddedWithTemplate(signatureRequestId: string, signatureRequestEditEmbeddedWithTemplateRequest: SignatureRequestEditEmbeddedWithTemplateRequest, options?: optionsI): Promise<returnTypeT<SignatureRequestGetResponse>>;
    signatureRequestEditWithTemplate(signatureRequestId: string, signatureRequestEditWithTemplateRequest: SignatureRequestEditWithTemplateRequest, options?: optionsI): Promise<returnTypeT<SignatureRequestGetResponse>>;
    signatureRequestFiles(signatureRequestId: string, fileType?: "pdf" | "zip", options?: optionsI): Promise<returnTypeT<Buffer>>;
    signatureRequestFilesAsDataUri(signatureRequestId: string, options?: optionsI): Promise<returnTypeT<FileResponseDataUri>>;
    signatureRequestFilesAsFileUrl(signatureRequestId: string, forceDownload?: number, options?: optionsI): Promise<returnTypeT<FileResponse>>;
    signatureRequestGet(signatureRequestId: string, options?: optionsI): Promise<returnTypeT<SignatureRequestGetResponse>>;
    signatureRequestList(accountId?: string, page?: number, pageSize?: number, query?: string, options?: optionsI): Promise<returnTypeT<SignatureRequestListResponse>>;
    signatureRequestReleaseHold(signatureRequestId: string, options?: optionsI): Promise<returnTypeT<SignatureRequestGetResponse>>;
    signatureRequestRemind(signatureRequestId: string, signatureRequestRemindRequest: SignatureRequestRemindRequest, options?: optionsI): Promise<returnTypeT<SignatureRequestGetResponse>>;
    signatureRequestRemove(signatureRequestId: string, options?: optionsI): Promise<returnTypeI>;
    signatureRequestSend(signatureRequestSendRequest: SignatureRequestSendRequest, options?: optionsI): Promise<returnTypeT<SignatureRequestGetResponse>>;
    signatureRequestSendWithTemplate(signatureRequestSendWithTemplateRequest: SignatureRequestSendWithTemplateRequest, options?: optionsI): Promise<returnTypeT<SignatureRequestGetResponse>>;
    signatureRequestUpdate(signatureRequestId: string, signatureRequestUpdateRequest: SignatureRequestUpdateRequest, options?: optionsI): Promise<returnTypeT<SignatureRequestGetResponse>>;
}
