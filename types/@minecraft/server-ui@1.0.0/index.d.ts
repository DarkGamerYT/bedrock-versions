// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-versions
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * 
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-ui",
 *     "version": "1.0.0"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export enum FormRejectReason {
    MalformedResponse = "MalformedResponse",
    PlayerQuit = "PlayerQuit",
    ServerShutdown = "ServerShutdown",
}

export class ActionFormData {
    body(bodyText: minecraftserver.RawMessage | string): ActionFormData;
    button(text: minecraftserver.RawMessage | string, iconPath?: string): ActionFormData;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    show(player: minecraftserver.Player): Promise<ActionFormResponse>;
    title(titleText: minecraftserver.RawMessage | string): ActionFormData;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ActionFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
}

export class FormResponse {
    private constructor();
}

export class MessageFormData {
    body(bodyText: minecraftserver.RawMessage | string): MessageFormData;
    button1(text: minecraftserver.RawMessage | string): MessageFormData;
    button2(text: minecraftserver.RawMessage | string): MessageFormData;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    show(player: minecraftserver.Player): Promise<MessageFormResponse>;
    title(titleText: minecraftserver.RawMessage | string): MessageFormData;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class MessageFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
}

export class ModalFormData {
    dropdown(
        label: minecraftserver.RawMessage | string,
        options: (minecraftserver.RawMessage | string)[],
        defaultValueIndex?: number,
    ): ModalFormData;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    show(player: minecraftserver.Player): Promise<ModalFormResponse>;
    slider(
        label: minecraftserver.RawMessage | string,
        minimumValue: number,
        maximumValue: number,
        valueStep: number,
        defaultValue?: number,
    ): ModalFormData;
    textField(
        label: minecraftserver.RawMessage | string,
        placeholderText: minecraftserver.RawMessage | string,
        defaultValue?: minecraftserver.RawMessage | string,
    ): ModalFormData;
    title(titleText: minecraftserver.RawMessage | string): ModalFormData;
    toggle(label: minecraftserver.RawMessage | string, defaultValue?: boolean): ModalFormData;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ModalFormResponse extends FormResponse {
    private constructor();
    readonly formValues?: (boolean | number | string)[];
}

// @ts-ignore Class inheritance allowed for native defined classes
export class FormRejectError extends Error {
    private constructor();
    readonly reason: FormRejectReason;
}
