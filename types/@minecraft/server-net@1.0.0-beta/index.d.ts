// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-versions
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @beta
 * @packageDocumentation
 * 
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-net",
 *     "version": "1.0.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserveradmin from "@minecraft/server-admin";
export enum HttpRequestMethod {
    Delete = "Delete",
    Get = "Get",
    Head = "Head",
    Post = "Post",
    Put = "Put",
}

export class HttpClient {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    cancelAll(reason: string): void;
    /** @remarks This function can't be called in read-only mode. */
    get(uri: string): Promise<HttpResponse>;
    /** @remarks This function can't be called in read-only mode. */
    request(config: HttpRequest): Promise<HttpResponse>;
}

export class HttpHeader {
    /** @remarks This property can't be edited in read-only mode. */
    key: string;
    /** @remarks This property can't be edited in read-only mode. */
    value: minecraftserveradmin.SecretString | string;
    constructor(key: string, value: minecraftserveradmin.SecretString | string);
}

export class HttpRequest {
    /** @remarks This property can't be edited in read-only mode. */
    body: string;
    /** @remarks This property can't be edited in read-only mode. */
    headers: HttpHeader[];
    /** @remarks This property can't be edited in read-only mode. */
    method: HttpRequestMethod;
    /** @remarks This property can't be edited in read-only mode. */
    timeout: number;
    /** @remarks This property can't be edited in read-only mode. */
    uri: string;
    constructor(uri: string);
    /** @remarks This function can't be called in read-only mode. */
    addHeader(key: string, value: minecraftserveradmin.SecretString | string): HttpRequest;
    /** @remarks This function can't be called in read-only mode. */
    setBody(body: string): HttpRequest;
    /** @remarks This function can't be called in read-only mode. */
    setHeaders(headers: HttpHeader[]): HttpRequest;
    /** @remarks This function can't be called in read-only mode. */
    setMethod(method: HttpRequestMethod): HttpRequest;
    /** @remarks This function can't be called in read-only mode. */
    setTimeout(timeout: number): HttpRequest;
}

export class HttpResponse {
    private constructor();
    readonly body: string;
    readonly headers: HttpHeader[];
    readonly request: HttpRequest;
    readonly status: number;
}

export const http: HttpClient;