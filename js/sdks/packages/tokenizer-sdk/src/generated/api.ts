/* tslint:disable */
/* eslint-disable */
/**
 * Full Tokenizer API
 * The Tokenizer API used for tokenizing and detokenizing data and working with tokens using the GoLang backend
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface DetokenizeRequest
 */
export interface DetokenizeRequest {
    /**
     * Needs to be a UUID.
     * @type {string}
     * @memberof DetokenizeRequest
     */
    tokenId: string;
}
/**
 * 
 * @export
 * @interface DetokenizeResponse
 */
export interface DetokenizeResponse {
    /**
     * 
     * @type {boolean}
     * @memberof DetokenizeResponse
     */
    success: boolean;
    /**
     * 
     * @type {DetokenizeResponseData}
     * @memberof DetokenizeResponse
     */
    data: DetokenizeResponseData;
}
/**
 * 
 * @export
 * @interface DetokenizeResponseData
 */
export interface DetokenizeResponseData {
    /**
     * 
     * @type {string}
     * @memberof DetokenizeResponseData
     */
    downloadUrl: string;
    /**
     * 
     * @type {object}
     * @memberof DetokenizeResponseData
     */
    headers: object;
}
/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ErrorResponse
     */
    success: boolean;
    /**
     * 
     * @type {ErrorResponseError}
     * @memberof ErrorResponse
     */
    error: ErrorResponseError;
}
/**
 * 
 * @export
 * @interface ErrorResponseError
 */
export interface ErrorResponseError {
    /**
     * Needs to be a UUID.
     * @type {string}
     * @memberof ErrorResponseError
     */
    name: string;
    /**
     * machine parsable human readable short name
     * @type {string}
     * @memberof ErrorResponseError
     */
    message: string;
}
/**
 * 
 * @export
 * @interface FileMeta
 */
export interface FileMeta {
    /**
     * 
     * @type {object}
     * @memberof FileMeta
     */
    customFields?: object;
    /**
     * 
     * @type {string}
     * @memberof FileMeta
     */
    dataType: string;
    /**
     * 
     * @type {number}
     * @memberof FileMeta
     */
    createdAt?: number;
    /**
     * 
     * @type {FileMetaFileinfo}
     * @memberof FileMeta
     */
    fileinfo: FileMetaFileinfo;
}
/**
 * 
 * @export
 * @interface FileMetaFileinfo
 */
export interface FileMetaFileinfo {
    /**
     * 
     * @type {string}
     * @memberof FileMetaFileinfo
     */
    filename: string;
    /**
     * 
     * @type {string}
     * @memberof FileMetaFileinfo
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof FileMetaFileinfo
     */
    lastModified?: number;
}
/**
 * 
 * @export
 * @interface GetMetadataRequest
 */
export interface GetMetadataRequest {
    /**
     * Needs to be a UUID.
     * @type {string}
     * @memberof GetMetadataRequest
     */
    tokenId: string;
}
/**
 * 
 * @export
 * @interface GetMetadataResponse
 */
export interface GetMetadataResponse {
    /**
     * 
     * @type {boolean}
     * @memberof GetMetadataResponse
     */
    success: boolean;
    /**
     * 
     * @type {GetMetadataResponseData}
     * @memberof GetMetadataResponse
     */
    data: GetMetadataResponseData;
}
/**
 * 
 * @export
 * @interface GetMetadataResponseData
 */
export interface GetMetadataResponseData {
    /**
     * 
     * @type {MetaData}
     * @memberof GetMetadataResponseData
     */
    metadata: MetaData;
}
/**
 * 
 * @export
 * @enum {string}
 */

export enum GrantType {
    ReadToken = 'read_token',
    StoreToken = 'store_token'
}

/**
 * @type MetaData
 * @export
 */
export type MetaData = FileMeta | StringMeta;

/**
 * 
 * @export
 * @interface SetGrantRequest
 */
export interface SetGrantRequest {
    /**
     * 
     * @type {string}
     * @memberof SetGrantRequest
     */
    sessionId: string;
    /**
     * 
     * @type {string}
     * @memberof SetGrantRequest
     */
    tokenId: string;
    /**
     * 
     * @type {GrantType}
     * @memberof SetGrantRequest
     */
    grantType: GrantType;
}
/**
 * 
 * @export
 * @interface SetGrantResponse
 */
export interface SetGrantResponse {
    /**
     * 
     * @type {boolean}
     * @memberof SetGrantResponse
     */
    success: boolean;
    /**
     * 
     * @type {object}
     * @memberof SetGrantResponse
     */
    data: object;
}
/**
 * 
 * @export
 * @interface StringMeta
 */
export interface StringMeta {
    /**
     * 
     * @type {object}
     * @memberof StringMeta
     */
    customFields?: object;
    /**
     * 
     * @type {string}
     * @memberof StringMeta
     */
    dataType: string;
}
/**
 * 
 * @export
 * @interface TokenizeRequest
 */
export interface TokenizeRequest {
    /**
     * 
     * @type {MetaData}
     * @memberof TokenizeRequest
     */
    metadata: MetaData;
}
/**
 * 
 * @export
 * @interface TokenizeResponse
 */
export interface TokenizeResponse {
    /**
     * 
     * @type {boolean}
     * @memberof TokenizeResponse
     */
    success: boolean;
    /**
     * 
     * @type {TokenizeResponseData}
     * @memberof TokenizeResponse
     */
    data: TokenizeResponseData;
}
/**
 * 
 * @export
 * @interface TokenizeResponseData
 */
export interface TokenizeResponseData {
    /**
     * 
     * @type {string}
     * @memberof TokenizeResponseData
     */
    tokenId: string;
    /**
     * 
     * @type {string}
     * @memberof TokenizeResponseData
     */
    uploadUrl: string;
    /**
     * 
     * @type {object}
     * @memberof TokenizeResponseData
     */
    headers: object;
}
/**
 * 
 * @export
 * @interface VerifyGrantRequest
 */
export interface VerifyGrantRequest {
    /**
     * 
     * @type {string}
     * @memberof VerifyGrantRequest
     */
    sessionId: string;
    /**
     * 
     * @type {string}
     * @memberof VerifyGrantRequest
     */
    tokenId: string;
    /**
     * 
     * @type {GrantType}
     * @memberof VerifyGrantRequest
     */
    grantType: GrantType;
}
/**
 * 
 * @export
 * @interface VerifyGrantResponse
 */
export interface VerifyGrantResponse {
    /**
     * 
     * @type {boolean}
     * @memberof VerifyGrantResponse
     */
    success: boolean;
    /**
     * 
     * @type {VerifyGrantResponseData}
     * @memberof VerifyGrantResponse
     */
    data: VerifyGrantResponseData;
}
/**
 * 
 * @export
 * @interface VerifyGrantResponseData
 */
export interface VerifyGrantResponseData {
    /**
     * 
     * @type {boolean}
     * @memberof VerifyGrantResponseData
     */
    valid: boolean;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get an S3 signed download URL for a token
         * @param {DetokenizeRequest} detokenizeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        detokenize: async (detokenizeRequest: DetokenizeRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'detokenizeRequest' is not null or undefined
            assertParamExists('detokenize', 'detokenizeRequest', detokenizeRequest)
            const localVarPath = `/detokenize`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(detokenizeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get an S3 signed download URL for a token
         * @param {GetMetadataRequest} getMetadataRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetaData: async (getMetadataRequest: GetMetadataRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'getMetadataRequest' is not null or undefined
            assertParamExists('getMetaData', 'getMetadataRequest', getMetadataRequest)
            const localVarPath = `/metadata/get`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(getMetadataRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a grant for a token, of type store or read
         * @param {SetGrantRequest} setGrantRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setGrant: async (setGrantRequest: SetGrantRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'setGrantRequest' is not null or undefined
            assertParamExists('setGrant', 'setGrantRequest', setGrantRequest)
            const localVarPath = `/grant/set`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(setGrantRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Submit metadata about a token that was uploaded to s3
         * @param {TokenizeRequest} tokenizeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenize: async (tokenizeRequest: TokenizeRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tokenizeRequest' is not null or undefined
            assertParamExists('tokenize', 'tokenizeRequest', tokenizeRequest)
            const localVarPath = `/tokenize`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(tokenizeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get an S3 signed download URL for a token
         * @param {VerifyGrantRequest} verifyGrantRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyGrant: async (verifyGrantRequest: VerifyGrantRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'verifyGrantRequest' is not null or undefined
            assertParamExists('verifyGrant', 'verifyGrantRequest', verifyGrantRequest)
            const localVarPath = `/grant/verify`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(verifyGrantRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get an S3 signed download URL for a token
         * @param {DetokenizeRequest} detokenizeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async detokenize(detokenizeRequest: DetokenizeRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DetokenizeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.detokenize(detokenizeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get an S3 signed download URL for a token
         * @param {GetMetadataRequest} getMetadataRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMetaData(getMetadataRequest: GetMetadataRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMetadataResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMetaData(getMetadataRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create a grant for a token, of type store or read
         * @param {SetGrantRequest} setGrantRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setGrant(setGrantRequest: SetGrantRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SetGrantResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setGrant(setGrantRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Submit metadata about a token that was uploaded to s3
         * @param {TokenizeRequest} tokenizeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tokenize(tokenizeRequest: TokenizeRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenizeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tokenize(tokenizeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get an S3 signed download URL for a token
         * @param {VerifyGrantRequest} verifyGrantRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyGrant(verifyGrantRequest: VerifyGrantRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VerifyGrantResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyGrant(verifyGrantRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Get an S3 signed download URL for a token
         * @param {DetokenizeRequest} detokenizeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        detokenize(detokenizeRequest: DetokenizeRequest, options?: any): AxiosPromise<DetokenizeResponse> {
            return localVarFp.detokenize(detokenizeRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get an S3 signed download URL for a token
         * @param {GetMetadataRequest} getMetadataRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetaData(getMetadataRequest: GetMetadataRequest, options?: any): AxiosPromise<GetMetadataResponse> {
            return localVarFp.getMetaData(getMetadataRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a grant for a token, of type store or read
         * @param {SetGrantRequest} setGrantRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setGrant(setGrantRequest: SetGrantRequest, options?: any): AxiosPromise<SetGrantResponse> {
            return localVarFp.setGrant(setGrantRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Submit metadata about a token that was uploaded to s3
         * @param {TokenizeRequest} tokenizeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenize(tokenizeRequest: TokenizeRequest, options?: any): AxiosPromise<TokenizeResponse> {
            return localVarFp.tokenize(tokenizeRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get an S3 signed download URL for a token
         * @param {VerifyGrantRequest} verifyGrantRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyGrant(verifyGrantRequest: VerifyGrantRequest, options?: any): AxiosPromise<VerifyGrantResponse> {
            return localVarFp.verifyGrant(verifyGrantRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Get an S3 signed download URL for a token
     * @param {DetokenizeRequest} detokenizeRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public detokenize(detokenizeRequest: DetokenizeRequest, options?: any) {
        return DefaultApiFp(this.configuration).detokenize(detokenizeRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get an S3 signed download URL for a token
     * @param {GetMetadataRequest} getMetadataRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getMetaData(getMetadataRequest: GetMetadataRequest, options?: any) {
        return DefaultApiFp(this.configuration).getMetaData(getMetadataRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create a grant for a token, of type store or read
     * @param {SetGrantRequest} setGrantRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public setGrant(setGrantRequest: SetGrantRequest, options?: any) {
        return DefaultApiFp(this.configuration).setGrant(setGrantRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Submit metadata about a token that was uploaded to s3
     * @param {TokenizeRequest} tokenizeRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public tokenize(tokenizeRequest: TokenizeRequest, options?: any) {
        return DefaultApiFp(this.configuration).tokenize(tokenizeRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get an S3 signed download URL for a token
     * @param {VerifyGrantRequest} verifyGrantRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public verifyGrant(verifyGrantRequest: VerifyGrantRequest, options?: any) {
        return DefaultApiFp(this.configuration).verifyGrant(verifyGrantRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


