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

import axios, { AxiosError, AxiosRequestConfig } from "axios";

/* tslint:disable:no-unused-locals */
import {
  ObjectSerializer,
  Authentication,
  VoidAuth,
  Interceptor,
  HttpBasicAuth,
  HttpBearerAuth,
  ApiKeyAuth,
  OAuth,
  EmbeddedEditUrlRequest,
  EmbeddedEditUrlResponse,
  EmbeddedSignUrlResponse,
  ErrorResponse,
} from "../model";

import {
  HttpError,
  optionsI,
  returnTypeT,
  returnTypeI,
  generateFormData,
  toFormData,
  queryParamsSerializer,
  USER_AGENT,
} from "./";

let defaultBasePath = "https://api.hellosign.com/v3";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum EmbeddedApiApiKeys {}

export class EmbeddedApi {
  protected _basePath = defaultBasePath;
  protected _defaultHeaders: any = {
    "User-Agent": USER_AGENT,
  };
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
    this._defaultHeaders = defaultHeaders;
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
   * Retrieves an embedded object containing a template url that can be opened in an iFrame. Note that only templates created via the embedded template process are available to be edited with this endpoint.
   * @summary Get Embedded Template Edit URL
   * @param templateId The id of the template to edit.
   * @param embeddedEditUrlRequest
   * @param options
   */
  public async embeddedEditUrl(
    templateId: string,
    embeddedEditUrlRequest: EmbeddedEditUrlRequest,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeT<EmbeddedEditUrlResponse>> {
    if (
      embeddedEditUrlRequest !== null &&
      embeddedEditUrlRequest !== undefined &&
      embeddedEditUrlRequest.constructor.name !== "EmbeddedEditUrlRequest"
    ) {
      embeddedEditUrlRequest = ObjectSerializer.deserialize(
        embeddedEditUrlRequest,
        "EmbeddedEditUrlRequest"
      );
    }

    const localVarPath =
      this.basePath +
      "/embedded/edit_url/{template_id}".replace(
        "{" + "template_id" + "}",
        encodeURIComponent(String(templateId))
      );
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

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new Error(
        "Required parameter templateId was null or undefined when calling embeddedEditUrl."
      );
    }

    // verify required parameter 'embeddedEditUrlRequest' is not null or undefined
    if (
      embeddedEditUrlRequest === null ||
      embeddedEditUrlRequest === undefined
    ) {
      throw new Error(
        "Required parameter embeddedEditUrlRequest was null or undefined when calling embeddedEditUrl."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    const result = generateFormData(
      embeddedEditUrlRequest,
      EmbeddedEditUrlRequest.attributeTypeMap
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
        embeddedEditUrlRequest,
        "EmbeddedEditUrlRequest"
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
    if (this.authentications.oauth2.accessToken) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.oauth2.applyToRequest(localVarRequestOptions)
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
      return new Promise<returnTypeT<EmbeddedEditUrlResponse>>(
        (resolve, reject) => {
          axios.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;

              if (
                response.status &&
                response.status >= 200 &&
                response.status <= 299
              ) {
                body = ObjectSerializer.deserialize(
                  body,
                  "EmbeddedEditUrlResponse"
                );
                resolve({ response: response, body: body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error: AxiosError) => {
              if (error.response == null) {
                reject(error);
                return;
              }

              const response = error.response;

              let body;

              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "EmbeddedEditUrlResponse"
                );

                reject(new HttpError(response, body, response.status));
                return;
              }

              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (
                response.status >= rangeCodeLeft &&
                response.status <= rangeCodeRight
              ) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );

                reject(new HttpError(response, body, response.status));
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
   * Retrieves an embedded object containing a signature url that can be opened in an iFrame. Note that templates created via the embedded template process will only be accessible through the API.
   * @summary Get Embedded Sign URL
   * @param signatureId The id of the signature to get a signature url for.
   * @param options
   */
  public async embeddedSignUrl(
    signatureId: string,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeT<EmbeddedSignUrlResponse>> {
    const localVarPath =
      this.basePath +
      "/embedded/sign_url/{signature_id}".replace(
        "{" + "signature_id" + "}",
        encodeURIComponent(String(signatureId))
      );
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

    // verify required parameter 'signatureId' is not null or undefined
    if (signatureId === null || signatureId === undefined) {
      throw new Error(
        "Required parameter signatureId was null or undefined when calling embeddedSignUrl."
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
    if (this.authentications.oauth2.accessToken) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.oauth2.applyToRequest(localVarRequestOptions)
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
      return new Promise<returnTypeT<EmbeddedSignUrlResponse>>(
        (resolve, reject) => {
          axios.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;

              if (
                response.status &&
                response.status >= 200 &&
                response.status <= 299
              ) {
                body = ObjectSerializer.deserialize(
                  body,
                  "EmbeddedSignUrlResponse"
                );
                resolve({ response: response, body: body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error: AxiosError) => {
              if (error.response == null) {
                reject(error);
                return;
              }

              const response = error.response;

              let body;

              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "EmbeddedSignUrlResponse"
                );

                reject(new HttpError(response, body, response.status));
                return;
              }

              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (
                response.status >= rangeCodeLeft &&
                response.status <= rangeCodeRight
              ) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );

                reject(new HttpError(response, body, response.status));
                return;
              }

              reject(error);
            }
          );
        }
      );
    });
  }
}
