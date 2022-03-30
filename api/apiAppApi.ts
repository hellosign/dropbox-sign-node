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
import { ApiAppCreateRequest } from "../model/apiAppCreateRequest";
import { ApiAppGetResponse } from "../model/apiAppGetResponse";
import { ApiAppListResponse } from "../model/apiAppListResponse";
import { ApiAppUpdateRequest } from "../model/apiAppUpdateRequest";
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

export enum ApiAppApiApiKeys {}

export class ApiAppApi {
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
   * Creates a new API App.
   * @summary Create API App
   * @param apiAppCreateRequest
   * @param options
   */
  public async apiAppCreate(
    apiAppCreateRequest: ApiAppCreateRequest,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeT<ApiAppGetResponse>> {
    const localVarPath = this.basePath + "/api_app";
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

    // verify required parameter 'apiAppCreateRequest' is not null or undefined
    if (apiAppCreateRequest === null || apiAppCreateRequest === undefined) {
      throw new Error(
        "Required parameter apiAppCreateRequest was null or undefined when calling apiAppCreate."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    const result = generateFormData(
      apiAppCreateRequest,
      ApiAppCreateRequest.attributeTypeMap,
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
        apiAppCreateRequest,
        "ApiAppCreateRequest"
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
      return new Promise<returnTypeT<ApiAppGetResponse>>((resolve, reject) => {
        axios.request(localVarRequestOptions).then(
          (response) => {
            let body = response.data;

            if (
              response.status &&
              response.status >= 200 &&
              response.status <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "ApiAppGetResponse");
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
                "ApiAppGetResponse"
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
          }
        );
      });
    });
  }
  /**
   * Deletes an API App. Can only be invoked for apps you own.
   * @summary Delete API App
   * @param clientId The client id of the ApiApp to delete.
   * @param options
   */
  public async apiAppDelete(
    clientId: string,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeI> {
    const localVarPath =
      this.basePath +
      "/api_app/{client_id}".replace(
        "{" + "client_id" + "}",
        encodeURIComponent(String(clientId))
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

    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new Error(
        "Required parameter clientId was null or undefined when calling apiAppDelete."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: AxiosRequestConfig = {
      method: "DELETE",
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
      return new Promise<returnTypeI>((resolve, reject) => {
        axios.request(localVarRequestOptions).then(
          (response) => {
            let body = response.data;

            if (
              response.status &&
              response.status >= 200 &&
              response.status <= 299
            ) {
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
          }
        );
      });
    });
  }
  /**
   * Returns an object with information about an API App.
   * @summary Get API App
   * @param clientId The client ID of the ApiApp to retrieve.
   * @param options
   */
  public async apiAppGet(
    clientId: string,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeT<ApiAppGetResponse>> {
    const localVarPath =
      this.basePath +
      "/api_app/{client_id}".replace(
        "{" + "client_id" + "}",
        encodeURIComponent(String(clientId))
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

    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new Error(
        "Required parameter clientId was null or undefined when calling apiAppGet."
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
      return new Promise<returnTypeT<ApiAppGetResponse>>((resolve, reject) => {
        axios.request(localVarRequestOptions).then(
          (response) => {
            let body = response.data;

            if (
              response.status &&
              response.status >= 200 &&
              response.status <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "ApiAppGetResponse");
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
                "ApiAppGetResponse"
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
          }
        );
      });
    });
  }
  /**
   * Returns a list of API Apps that are accessible by you. If you are on a team with an Admin or Developer role, this list will include apps owned by teammates.
   * @summary List API Apps
   * @param page Which page number of the ApiApp List to return. Defaults to &#x60;1&#x60;.
   * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;.
   * @param options
   */
  public async apiAppList(
    page?: number,
    pageSize?: number,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeT<ApiAppListResponse>> {
    const localVarPath = this.basePath + "/api_app/list";
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
      return new Promise<returnTypeT<ApiAppListResponse>>((resolve, reject) => {
        axios.request(localVarRequestOptions).then(
          (response) => {
            let body = response.data;

            if (
              response.status &&
              response.status >= 200 &&
              response.status <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "ApiAppListResponse");
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
                "ApiAppListResponse"
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
          }
        );
      });
    });
  }
  /**
   * Updates an existing API App. Can only be invoked for apps you own. Only the fields you provide will be updated. If you wish to clear an existing optional field, provide an empty string.
   * @summary Update API App
   * @param clientId The client ID of the ApiApp to update.
   * @param apiAppUpdateRequest
   * @param options
   */
  public async apiAppUpdate(
    clientId: string,
    apiAppUpdateRequest: ApiAppUpdateRequest,
    options: optionsI = { headers: {} }
  ): Promise<returnTypeT<ApiAppGetResponse>> {
    const localVarPath =
      this.basePath +
      "/api_app/{client_id}".replace(
        "{" + "client_id" + "}",
        encodeURIComponent(String(clientId))
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

    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new Error(
        "Required parameter clientId was null or undefined when calling apiAppUpdate."
      );
    }

    // verify required parameter 'apiAppUpdateRequest' is not null or undefined
    if (apiAppUpdateRequest === null || apiAppUpdateRequest === undefined) {
      throw new Error(
        "Required parameter apiAppUpdateRequest was null or undefined when calling apiAppUpdate."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    const result = generateFormData(
      apiAppUpdateRequest,
      ApiAppUpdateRequest.attributeTypeMap,
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
        apiAppUpdateRequest,
        "ApiAppUpdateRequest"
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
      return new Promise<returnTypeT<ApiAppGetResponse>>((resolve, reject) => {
        axios.request(localVarRequestOptions).then(
          (response) => {
            let body = response.data;

            if (
              response.status &&
              response.status >= 200 &&
              response.status <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "ApiAppGetResponse");
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
                "ApiAppGetResponse"
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
          }
        );
      });
    });
  }
}
