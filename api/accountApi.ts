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

import axios, { AxiosError, AxiosRequestConfig } from "axios";

/* tslint:disable:no-unused-locals */
import { AccountCreateRequest } from "../model/accountCreateRequest";
import { AccountCreateResponse } from "../model/accountCreateResponse";
import { AccountGetResponse } from "../model/accountGetResponse";
import { AccountUpdateRequest } from "../model/accountUpdateRequest";
import { AccountVerifyRequest } from "../model/accountVerifyRequest";
import { AccountVerifyResponse } from "../model/accountVerifyResponse";
import { ErrorResponse } from "../model/errorResponse";

import {
  ObjectSerializer,
  Authentication,
  VoidAuth,
  Interceptor,
} from "../model/models";
import {
  HttpBasicAuth,
  HttpBearerAuth,
  ApiKeyAuth,
  OAuth,
} from "../model/models";

import {
  HttpError,
  optionsI,
  returnTypeT,
  returnTypeI,
  generateFormData,
  toFormData,
  queryParamsSerializer,
} from "./apis";

let defaultBasePath = "https://api.hellosign.com/v3";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AccountApiApiKeys {}

export class AccountApi {
  protected _basePath = defaultBasePath;
  protected _defaultHeaders: any = {};
  protected _useQuerystring: boolean = false;

  /**
   * Allows instantiating files when using ObjectSerializer::deserialize()
   * @param bool
   */
  protected _instantiateFiles = false;

  /**
   * Define the base location to look for file uploads
   * @param path
   */
  protected _rootFilePath?: string;

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

  set instantiateFiles(flag: boolean) {
    this._instantiateFiles = flag;
  }

  set rootFilePath(path: string | undefined) {
    this._rootFilePath = path;
  }

  /**
   * Creates a new HelloSign Account that is associated with the specified `email_address`.
   * @summary Create Account
   * @param accountCreateRequest
   * @param options
   */
  public async accountCreate(
    accountCreateRequest: AccountCreateRequest,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeT<AccountCreateResponse>> {
    const localVarPath = this.basePath + "/account/create";
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

    // verify required parameter 'accountCreateRequest' is not null or undefined
    if (accountCreateRequest === null || accountCreateRequest === undefined) {
      throw new Error(
        "Required parameter accountCreateRequest was null or undefined when calling accountCreate."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    const result = generateFormData(
      accountCreateRequest,
      AccountCreateRequest.attributeTypeMap,
      this._instantiateFiles,
      this._rootFilePath
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
        accountCreateRequest,
        "AccountCreateRequest"
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
      return new Promise<returnTypeT<AccountCreateResponse>>(
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
                  "AccountCreateResponse"
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

              switch (response.status) {
                case 200:
                  body = ObjectSerializer.deserialize(
                    response.data.error,
                    "AccountCreateResponse"
                  );

                  reject(new HttpError(response, body, response.status));
                  return;
                case 400:
                  body = ObjectSerializer.deserialize(
                    response.data.error,
                    "ErrorResponse"
                  );

                  reject(new HttpError(response, body, response.status));
                  return;
              }
            }
          );
        }
      );
    });
  }
  /**
   * Returns the properties and settings of your Account.
   * @summary Get Account
   * @param options
   */
  public async accountGet(
    options: optionsI = { headers: {} }
  ): Promise<returnTypeT<AccountGetResponse>> {
    const localVarPath = this.basePath + "/account";
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
      return new Promise<returnTypeT<AccountGetResponse>>((resolve, reject) => {
        axios.request(localVarRequestOptions).then(
          (response) => {
            let body = response.data;

            if (
              response.status &&
              response.status >= 200 &&
              response.status <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "AccountGetResponse");
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

            switch (response.status) {
              case 200:
                body = ObjectSerializer.deserialize(
                  response.data.error,
                  "AccountGetResponse"
                );

                reject(new HttpError(response, body, response.status));
                return;
              case 400:
                body = ObjectSerializer.deserialize(
                  response.data.error,
                  "ErrorResponse"
                );

                reject(new HttpError(response, body, response.status));
                return;
            }
          }
        );
      });
    });
  }
  /**
   * Updates the properties and settings of your Account.
   * @summary Update Account
   * @param accountUpdateRequest
   * @param options
   */
  public async accountUpdate(
    accountUpdateRequest: AccountUpdateRequest,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeT<AccountGetResponse>> {
    const localVarPath = this.basePath + "/account";
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

    // verify required parameter 'accountUpdateRequest' is not null or undefined
    if (accountUpdateRequest === null || accountUpdateRequest === undefined) {
      throw new Error(
        "Required parameter accountUpdateRequest was null or undefined when calling accountUpdate."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    const result = generateFormData(
      accountUpdateRequest,
      AccountUpdateRequest.attributeTypeMap,
      this._instantiateFiles,
      this._rootFilePath
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
        accountUpdateRequest,
        "AccountUpdateRequest"
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
      return new Promise<returnTypeT<AccountGetResponse>>((resolve, reject) => {
        axios.request(localVarRequestOptions).then(
          (response) => {
            let body = response.data;

            if (
              response.status &&
              response.status >= 200 &&
              response.status <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "AccountGetResponse");
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

            switch (response.status) {
              case 200:
                body = ObjectSerializer.deserialize(
                  response.data.error,
                  "AccountGetResponse"
                );

                reject(new HttpError(response, body, response.status));
                return;
              case 400:
                body = ObjectSerializer.deserialize(
                  response.data.error,
                  "ErrorResponse"
                );

                reject(new HttpError(response, body, response.status));
                return;
            }
          }
        );
      });
    });
  }
  /**
   * Verifies whether an HelloSign Account exists for the given email address.  **NOTE** This method is restricted to paid API users.
   * @summary Verify Account
   * @param accountVerifyRequest
   * @param options
   */
  public async accountVerify(
    accountVerifyRequest: AccountVerifyRequest,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeT<AccountVerifyResponse>> {
    const localVarPath = this.basePath + "/account/verify";
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

    // verify required parameter 'accountVerifyRequest' is not null or undefined
    if (accountVerifyRequest === null || accountVerifyRequest === undefined) {
      throw new Error(
        "Required parameter accountVerifyRequest was null or undefined when calling accountVerify."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    const result = generateFormData(
      accountVerifyRequest,
      AccountVerifyRequest.attributeTypeMap,
      this._instantiateFiles,
      this._rootFilePath
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
        accountVerifyRequest,
        "AccountVerifyRequest"
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
      return new Promise<returnTypeT<AccountVerifyResponse>>(
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
                  "AccountVerifyResponse"
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

              switch (response.status) {
                case 200:
                  body = ObjectSerializer.deserialize(
                    response.data.error,
                    "AccountVerifyResponse"
                  );

                  reject(new HttpError(response, body, response.status));
                  return;
                case 400:
                  body = ObjectSerializer.deserialize(
                    response.data.error,
                    "ErrorResponse"
                  );

                  reject(new HttpError(response, body, response.status));
                  return;
              }
            }
          );
        }
      );
    });
  }
}
