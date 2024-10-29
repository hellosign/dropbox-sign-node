import { AccountApi } from "./accountApi";
import { ApiAppApi } from "./apiAppApi";
import { BulkSendJobApi } from "./bulkSendJobApi";
import { EmbeddedApi } from "./embeddedApi";
import { FaxApi } from "./faxApi";
import { FaxLineApi } from "./faxLineApi";
import { OAuthApi } from "./oAuthApi";
import { ReportApi } from "./reportApi";
import { SignatureRequestApi } from "./signatureRequestApi";
import { TeamApi } from "./teamApi";
import { TemplateApi } from "./templateApi";
import { UnclaimedDraftApi } from "./unclaimedDraftApi";

export {
  AccountApi,
  ApiAppApi,
  BulkSendJobApi,
  EmbeddedApi,
  FaxApi,
  FaxLineApi,
  OAuthApi,
  ReportApi,
  SignatureRequestApi,
  TeamApi,
  TemplateApi,
  UnclaimedDraftApi,
};

export {
  generateFormData,
  HttpError,
  optionsI,
  queryParamsSerializer,
  returnTypeI,
  returnTypeT,
  toFormData,
  USER_AGENT,
} from "./apis";

export const APIS = [
  AccountApi,
  ApiAppApi,
  BulkSendJobApi,
  EmbeddedApi,
  FaxApi,
  FaxLineApi,
  OAuthApi,
  ReportApi,
  SignatureRequestApi,
  TeamApi,
  TemplateApi,
  UnclaimedDraftApi,
];
