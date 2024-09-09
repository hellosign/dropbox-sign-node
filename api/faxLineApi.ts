/**
 * The MIT License (MIT)
 *
 * Copyright (C) 2023 dropbox.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import {
  Authentication,
  FaxLineAddUserRequest,
  FaxLineAreaCodeGetResponse,
  FaxLineCreateRequest,
  FaxLineDeleteRequest,
  FaxLineListResponse,
  FaxLineRemoveUserRequest,
  FaxLineResponse,
  HttpBasicAuth,
  HttpBearerAuth,
  Interceptor,
  ObjectSerializer,
  VoidAuth,
} from "../model";

import {
  generateFormData,
  HttpError,
  optionsI,
  queryParamsSerializer,
  returnTypeI,
  returnTypeT,
  toFormData,
  USER_AGENT,
} from "./";

let defaultBasePath = "https://api.hellosign.com/v3";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum FaxLineApiApiKeys {}

export class FaxLineApi {
  protected _basePath = defaultBasePath;
  protected _defaultHeaders: any = { "User-Agent": USER_AGENT };
  protected _useQuerystring: boolean = false;

  protected authentications = {
    default: <Authentication>new VoidAuth(),
    api_key: new HttpBasicAuth(),
    oauth2: new HttpBearerAuth(),
  };

  protected interceptors: Interceptor[] = [];

  constructor(basePath?: string) {
    if (basePath) {
      this.basePath = basePath;
    }
  }

  set useQuerystring(value: boolean) {
    this._useQuerystring = value;
  }

  set basePath(basePath: string) {
    this._basePath = basePath;
  }

  set defaultHeaders(defaultHeaders: any) {
    this._defaultHeaders = { ...defaultHeaders, "User-Agent": USER_AGENT };
  }

  get defaultHeaders() {
    return this._defaultHeaders;
  }

  get basePath() {
    return this._basePath;
  }

  public setDefaultAuthentication(auth: Authentication) {
    this.authentications.default = auth;
  }

  public setApiKey(key: string) {
    this.authentications.api_key.username = key;
  }

  set username(username: string) {
    this.authentications.api_key.username = username;
  }

  set password(password: string) {
    this.authentications.api_key.password = password;
  }

  set accessToken(accessToken: string | (() => string)) {
    this.authentications.oauth2.accessToken = accessToken;
  }

  public addInterceptor(interceptor: Interceptor) {
    this.interceptors.push(interceptor);
  }

  /**
   * Grants a user access to the specified Fax Line.
   * @summary Add Fax Line User
   * @param faxLineAddUserRequest
   * @param options
   */
  public async faxLineAddUser(
    faxLineAddUserRequest: FaxLineAddUserRequest,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeT<FaxLineResponse>> {
    faxLineAddUserRequest = deserializeIfNeeded(
      faxLineAddUserRequest,
      "FaxLineAddUserRequest"
    );
    const localVarPath = this.basePath + "/fax_line/add_user";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams["content-type"] = "application/json";
    } else {
      localVarHeaderParams["content-type"] = produces.join(",");
    }
    let localVarFormParams: any = {};
    let localVarBodyParams: any = undefined;

    // verify required parameter 'faxLineAddUserRequest' is not null or undefined
    if (faxLineAddUserRequest === null || faxLineAddUserRequest === undefined) {
      throw new Error(
        "Required parameter faxLineAddUserRequest was null or undefined when calling faxLineAddUser."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    const result = generateFormData(
      faxLineAddUserRequest,
      FaxLineAddUserRequest.attributeTypeMap
    );
    localVarUseFormData = result.localVarUseFormData;

    let data = {};
    if (localVarUseFormData) {
      const formData = toFormData(result.data);
      data = formData;
      localVarHeaderParams = {
        ...localVarHeaderParams,
        ...formData.getHeaders(),
      };
    } else {
      data = ObjectSerializer.serialize(
        faxLineAddUserRequest,
        "FaxLineAddUserRequest"
      );
    }

    let localVarRequestOptions: AxiosRequestConfig = {
      method: "PUT",
      params: localVarQueryParameters,
      headers: localVarHeaderParams,
      url: localVarPath,
      paramsSerializer: this._useQuerystring
        ? queryParamsSerializer
        : undefined,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      responseType: "json",
      data,
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.api_key.username) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.api_key.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      return new Promise<returnTypeT<FaxLineResponse>>((resolve, reject) => {
        axios.request(localVarRequestOptions).then(
          (response) => {
            handleSuccessfulResponse<FaxLineResponse>(
              resolve,
              reject,
              response,
              "FaxLineResponse"
            );
          },
          (error: AxiosError) => {
            if (error.response == null) {
              reject(error);
              return;
            }

            if (
              handleErrorCodeResponse(
                reject,
                error.response,
                200,
                "FaxLineResponse"
              )
            ) {
              return;
            }

            if (
              handleErrorRangeResponse(
                reject,
                error.response,
                "4XX",
                "ErrorResponse"
              )
            ) {
              return;
            }

            reject(error);
          }
        );
      });
    });
  }
  /**
   * Returns a response with the area codes available for a given state/provice and city.
   * @summary Get Available Fax Line Area Codes
   * @param country Filter area codes by country.
   * @param state Filter area codes by state.
   * @param province Filter area codes by province.
   * @param city Filter area codes by city.
   * @param options
   */
  public async faxLineAreaCodeGet(
    country: "CA" | "US" | "UK",
    state?:
      | "AK"
      | "AL"
      | "AR"
      | "AZ"
      | "CA"
      | "CO"
      | "CT"
      | "DC"
      | "DE"
      | "FL"
      | "GA"
      | "HI"
      | "IA"
      | "ID"
      | "IL"
      | "IN"
      | "KS"
      | "KY"
      | "LA"
      | "MA"
      | "MD"
      | "ME"
      | "MI"
      | "MN"
      | "MO"
      | "MS"
      | "MT"
      | "NC"
      | "ND"
      | "NE"
      | "NH"
      | "NJ"
      | "NM"
      | "NV"
      | "NY"
      | "OH"
      | "OK"
      | "OR"
      | "PA"
      | "RI"
      | "SC"
      | "SD"
      | "TN"
      | "TX"
      | "UT"
      | "VA"
      | "VT"
      | "WA"
      | "WI"
      | "WV"
      | "WY",
    province?:
      | "AB"
      | "BC"
      | "MB"
      | "NB"
      | "NL"
      | "NT"
      | "NS"
      | "NU"
      | "ON"
      | "PE"
      | "QC"
      | "SK"
      | "YT",
    city?: string,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeT<FaxLineAreaCodeGetResponse>> {
    const localVarPath = this.basePath + "/fax_line/area_codes";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams["content-type"] = "application/json";
    } else {
      localVarHeaderParams["content-type"] = produces.join(",");
    }
    let localVarFormParams: any = {};
    let localVarBodyParams: any = undefined;

    // verify required parameter 'country' is not null or undefined
    if (country === null || country === undefined) {
      throw new Error(
        "Required parameter country was null or undefined when calling faxLineAreaCodeGet."
      );
    }

    if (country !== undefined) {
      localVarQueryParameters["country"] = ObjectSerializer.serialize(
        country,
        "'CA' | 'US' | 'UK'"
      );
    }

    if (state !== undefined) {
      localVarQueryParameters["state"] = ObjectSerializer.serialize(
        state,
        "'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY'"
      );
    }

    if (province !== undefined) {
      localVarQueryParameters["province"] = ObjectSerializer.serialize(
        province,
        "'AB' | 'BC' | 'MB' | 'NB' | 'NL' | 'NT' | 'NS' | 'NU' | 'ON' | 'PE' | 'QC' | 'SK' | 'YT'"
      );
    }

    if (city !== undefined) {
      localVarQueryParameters["city"] = ObjectSerializer.serialize(
        city,
        "string"
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: AxiosRequestConfig = {
      method: "GET",
      params: localVarQueryParameters,
      headers: localVarHeaderParams,
      url: localVarPath,
      paramsSerializer: this._useQuerystring
        ? queryParamsSerializer
        : undefined,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      responseType: "json",
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.api_key.username) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.api_key.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      return new Promise<returnTypeT<FaxLineAreaCodeGetResponse>>(
        (resolve, reject) => {
          axios.request(localVarRequestOptions).then(
            (response) => {
              handleSuccessfulResponse<FaxLineAreaCodeGetResponse>(
                resolve,
                reject,
                response,
                "FaxLineAreaCodeGetResponse"
              );
            },
            (error: AxiosError) => {
              if (error.response == null) {
                reject(error);
                return;
              }

              if (
                handleErrorCodeResponse(
                  reject,
                  error.response,
                  200,
                  "FaxLineAreaCodeGetResponse"
                )
              ) {
                return;
              }

              if (
                handleErrorRangeResponse(
                  reject,
                  error.response,
                  "4XX",
                  "ErrorResponse"
                )
              ) {
                return;
              }

              reject(error);
            }
          );
        }
      );
    });
  }
  /**
   * Purchases a new Fax Line.
   * @summary Purchase Fax Line
   * @param faxLineCreateRequest
   * @param options
   */
  public async faxLineCreate(
    faxLineCreateRequest: FaxLineCreateRequest,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeT<FaxLineResponse>> {
    faxLineCreateRequest = deserializeIfNeeded(
      faxLineCreateRequest,
      "FaxLineCreateRequest"
    );
    const localVarPath = this.basePath + "/fax_line/create";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams["content-type"] = "application/json";
    } else {
      localVarHeaderParams["content-type"] = produces.join(",");
    }
    let localVarFormParams: any = {};
    let localVarBodyParams: any = undefined;

    // verify required parameter 'faxLineCreateRequest' is not null or undefined
    if (faxLineCreateRequest === null || faxLineCreateRequest === undefined) {
      throw new Error(
        "Required parameter faxLineCreateRequest was null or undefined when calling faxLineCreate."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    const result = generateFormData(
      faxLineCreateRequest,
      FaxLineCreateRequest.attributeTypeMap
    );
    localVarUseFormData = result.localVarUseFormData;

    let data = {};
    if (localVarUseFormData) {
      const formData = toFormData(result.data);
      data = formData;
      localVarHeaderParams = {
        ...localVarHeaderParams,
        ...formData.getHeaders(),
      };
    } else {
      data = ObjectSerializer.serialize(
        faxLineCreateRequest,
        "FaxLineCreateRequest"
      );
    }

    let localVarRequestOptions: AxiosRequestConfig = {
      method: "POST",
      params: localVarQueryParameters,
      headers: localVarHeaderParams,
      url: localVarPath,
      paramsSerializer: this._useQuerystring
        ? queryParamsSerializer
        : undefined,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      responseType: "json",
      data,
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.api_key.username) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.api_key.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      return new Promise<returnTypeT<FaxLineResponse>>((resolve, reject) => {
        axios.request(localVarRequestOptions).then(
          (response) => {
            handleSuccessfulResponse<FaxLineResponse>(
              resolve,
              reject,
              response,
              "FaxLineResponse"
            );
          },
          (error: AxiosError) => {
            if (error.response == null) {
              reject(error);
              return;
            }

            if (
              handleErrorCodeResponse(
                reject,
                error.response,
                200,
                "FaxLineResponse"
              )
            ) {
              return;
            }

            if (
              handleErrorRangeResponse(
                reject,
                error.response,
                "4XX",
                "ErrorResponse"
              )
            ) {
              return;
            }

            reject(error);
          }
        );
      });
    });
  }
  /**
   * Deletes the specified Fax Line from the subscription.
   * @summary Delete Fax Line
   * @param faxLineDeleteRequest
   * @param options
   */
  public async faxLineDelete(
    faxLineDeleteRequest: FaxLineDeleteRequest,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeI> {
    faxLineDeleteRequest = deserializeIfNeeded(
      faxLineDeleteRequest,
      "FaxLineDeleteRequest"
    );
    const localVarPath = this.basePath + "/fax_line";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams["content-type"] = "application/json";
    } else {
      localVarHeaderParams["content-type"] = produces.join(",");
    }
    let localVarFormParams: any = {};
    let localVarBodyParams: any = undefined;

    // verify required parameter 'faxLineDeleteRequest' is not null or undefined
    if (faxLineDeleteRequest === null || faxLineDeleteRequest === undefined) {
      throw new Error(
        "Required parameter faxLineDeleteRequest was null or undefined when calling faxLineDelete."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    const result = generateFormData(
      faxLineDeleteRequest,
      FaxLineDeleteRequest.attributeTypeMap
    );
    localVarUseFormData = result.localVarUseFormData;

    let data = {};
    if (localVarUseFormData) {
      const formData = toFormData(result.data);
      data = formData;
      localVarHeaderParams = {
        ...localVarHeaderParams,
        ...formData.getHeaders(),
      };
    } else {
      data = ObjectSerializer.serialize(
        faxLineDeleteRequest,
        "FaxLineDeleteRequest"
      );
    }

    let localVarRequestOptions: AxiosRequestConfig = {
      method: "DELETE",
      params: localVarQueryParameters,
      headers: localVarHeaderParams,
      url: localVarPath,
      paramsSerializer: this._useQuerystring
        ? queryParamsSerializer
        : undefined,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      responseType: "json",
      data,
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.api_key.username) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.api_key.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      return new Promise<returnTypeI>((resolve, reject) => {
        axios.request(localVarRequestOptions).then(
          (response) => {
            handleSuccessfulResponse(resolve, reject, response);
          },
          (error: AxiosError) => {
            if (error.response == null) {
              reject(error);
              return;
            }

            if (
              handleErrorRangeResponse(
                reject,
                error.response,
                "4XX",
                "ErrorResponse"
              )
            ) {
              return;
            }

            reject(error);
          }
        );
      });
    });
  }
  /**
   * Returns the properties and settings of a Fax Line.
   * @summary Get Fax Line
   * @param number The Fax Line number.
   * @param options
   */
  public async faxLineGet(
    number: string,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeT<FaxLineResponse>> {
    const localVarPath = this.basePath + "/fax_line";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams["content-type"] = "application/json";
    } else {
      localVarHeaderParams["content-type"] = produces.join(",");
    }
    let localVarFormParams: any = {};
    let localVarBodyParams: any = undefined;

    // verify required parameter 'number' is not null or undefined
    if (number === null || number === undefined) {
      throw new Error(
        "Required parameter number was null or undefined when calling faxLineGet."
      );
    }

    if (number !== undefined) {
      localVarQueryParameters["number"] = ObjectSerializer.serialize(
        number,
        "string"
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: AxiosRequestConfig = {
      method: "GET",
      params: localVarQueryParameters,
      headers: localVarHeaderParams,
      url: localVarPath,
      paramsSerializer: this._useQuerystring
        ? queryParamsSerializer
        : undefined,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      responseType: "json",
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.api_key.username) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.api_key.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      return new Promise<returnTypeT<FaxLineResponse>>((resolve, reject) => {
        axios.request(localVarRequestOptions).then(
          (response) => {
            handleSuccessfulResponse<FaxLineResponse>(
              resolve,
              reject,
              response,
              "FaxLineResponse"
            );
          },
          (error: AxiosError) => {
            if (error.response == null) {
              reject(error);
              return;
            }

            if (
              handleErrorCodeResponse(
                reject,
                error.response,
                200,
                "FaxLineResponse"
              )
            ) {
              return;
            }

            if (
              handleErrorRangeResponse(
                reject,
                error.response,
                "4XX",
                "ErrorResponse"
              )
            ) {
              return;
            }

            reject(error);
          }
        );
      });
    });
  }
  /**
   * Returns the properties and settings of multiple Fax Lines.
   * @summary List Fax Lines
   * @param accountId Account ID
   * @param page Page
   * @param pageSize Page size
   * @param showTeamLines Show team lines
   * @param options
   */
  public async faxLineList(
    accountId?: string,
    page?: number,
    pageSize?: number,
    showTeamLines?: boolean,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeT<FaxLineListResponse>> {
    const localVarPath = this.basePath + "/fax_line/list";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams["content-type"] = "application/json";
    } else {
      localVarHeaderParams["content-type"] = produces.join(",");
    }
    let localVarFormParams: any = {};
    let localVarBodyParams: any = undefined;

    if (accountId !== undefined) {
      localVarQueryParameters["account_id"] = ObjectSerializer.serialize(
        accountId,
        "string"
      );
    }

    if (page !== undefined) {
      localVarQueryParameters["page"] = ObjectSerializer.serialize(
        page,
        "number"
      );
    }

    if (pageSize !== undefined) {
      localVarQueryParameters["page_size"] = ObjectSerializer.serialize(
        pageSize,
        "number"
      );
    }

    if (showTeamLines !== undefined) {
      localVarQueryParameters["show_team_lines"] = ObjectSerializer.serialize(
        showTeamLines,
        "boolean"
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: AxiosRequestConfig = {
      method: "GET",
      params: localVarQueryParameters,
      headers: localVarHeaderParams,
      url: localVarPath,
      paramsSerializer: this._useQuerystring
        ? queryParamsSerializer
        : undefined,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      responseType: "json",
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.api_key.username) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.api_key.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      return new Promise<returnTypeT<FaxLineListResponse>>(
        (resolve, reject) => {
          axios.request(localVarRequestOptions).then(
            (response) => {
              handleSuccessfulResponse<FaxLineListResponse>(
                resolve,
                reject,
                response,
                "FaxLineListResponse"
              );
            },
            (error: AxiosError) => {
              if (error.response == null) {
                reject(error);
                return;
              }

              if (
                handleErrorCodeResponse(
                  reject,
                  error.response,
                  200,
                  "FaxLineListResponse"
                )
              ) {
                return;
              }

              if (
                handleErrorRangeResponse(
                  reject,
                  error.response,
                  "4XX",
                  "ErrorResponse"
                )
              ) {
                return;
              }

              reject(error);
            }
          );
        }
      );
    });
  }
  /**
   * Removes a user\'s access to the specified Fax Line.
   * @summary Remove Fax Line Access
   * @param faxLineRemoveUserRequest
   * @param options
   */
  public async faxLineRemoveUser(
    faxLineRemoveUserRequest: FaxLineRemoveUserRequest,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeT<FaxLineResponse>> {
    faxLineRemoveUserRequest = deserializeIfNeeded(
      faxLineRemoveUserRequest,
      "FaxLineRemoveUserRequest"
    );
    const localVarPath = this.basePath + "/fax_line/remove_user";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams["content-type"] = "application/json";
    } else {
      localVarHeaderParams["content-type"] = produces.join(",");
    }
    let localVarFormParams: any = {};
    let localVarBodyParams: any = undefined;

    // verify required parameter 'faxLineRemoveUserRequest' is not null or undefined
    if (
      faxLineRemoveUserRequest === null ||
      faxLineRemoveUserRequest === undefined
    ) {
      throw new Error(
        "Required parameter faxLineRemoveUserRequest was null or undefined when calling faxLineRemoveUser."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    const result = generateFormData(
      faxLineRemoveUserRequest,
      FaxLineRemoveUserRequest.attributeTypeMap
    );
    localVarUseFormData = result.localVarUseFormData;

    let data = {};
    if (localVarUseFormData) {
      const formData = toFormData(result.data);
      data = formData;
      localVarHeaderParams = {
        ...localVarHeaderParams,
        ...formData.getHeaders(),
      };
    } else {
      data = ObjectSerializer.serialize(
        faxLineRemoveUserRequest,
        "FaxLineRemoveUserRequest"
      );
    }

    let localVarRequestOptions: AxiosRequestConfig = {
      method: "PUT",
      params: localVarQueryParameters,
      headers: localVarHeaderParams,
      url: localVarPath,
      paramsSerializer: this._useQuerystring
        ? queryParamsSerializer
        : undefined,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      responseType: "json",
      data,
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.api_key.username) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.api_key.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      return new Promise<returnTypeT<FaxLineResponse>>((resolve, reject) => {
        axios.request(localVarRequestOptions).then(
          (response) => {
            handleSuccessfulResponse<FaxLineResponse>(
              resolve,
              reject,
              response,
              "FaxLineResponse"
            );
          },
          (error: AxiosError) => {
            if (error.response == null) {
              reject(error);
              return;
            }

            if (
              handleErrorCodeResponse(
                reject,
                error.response,
                200,
                "FaxLineResponse"
              )
            ) {
              return;
            }

            if (
              handleErrorRangeResponse(
                reject,
                error.response,
                "4XX",
                "ErrorResponse"
              )
            ) {
              return;
            }

            reject(error);
          }
        );
      });
    });
  }
}

function deserializeIfNeeded<T>(obj: T, classname: string): T {
  if (obj !== null && obj !== undefined && obj.constructor.name !== classname) {
    return ObjectSerializer.deserialize(obj, classname);
  }

  return obj;
}

type AxiosResolve<T> = (
  value: returnTypeT<T> | PromiseLike<returnTypeT<T>>
) => void;

type AxiosReject = (reason?: any) => void;

function handleSuccessfulResponse<T>(
  resolve: AxiosResolve<T>,
  reject: AxiosReject,
  response: AxiosResponse,
  returnType?: string
) {
  let body = response.data;

  if (response.status && response.status >= 200 && response.status <= 299) {
    if (returnType) {
      body = ObjectSerializer.deserialize(body, returnType);
    }

    resolve({ response: response, body: body });
  } else {
    reject(new HttpError(response, body, response.status));
  }
}

function handleErrorCodeResponse(
  reject: AxiosReject,
  response: AxiosResponse,
  code: number,
  returnType: string
): boolean {
  if (response.status !== code) {
    return false;
  }

  const body = ObjectSerializer.deserialize(response.data, returnType);

  reject(new HttpError(response, body, response.status));

  return true;
}

function handleErrorRangeResponse(
  reject: AxiosReject,
  response: AxiosResponse,
  code: string,
  returnType: string
): boolean {
  let rangeCodeLeft = Number(code[0] + "00");
  let rangeCodeRight = Number(code[0] + "99");

  if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
    const body = ObjectSerializer.deserialize(response.data, returnType);

    reject(new HttpError(response, body, response.status));

    return true;
  }

  return false;
}
