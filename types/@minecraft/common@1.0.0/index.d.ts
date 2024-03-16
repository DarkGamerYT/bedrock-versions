// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-versions
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * 
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/common",
 *     "version": "1.0.0"
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ArgumentOutOfBoundsError extends Error {
    private constructor();
    readonly maxValue: number;
    readonly minValue: number;
    readonly value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EngineError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidArgumentError extends Error {
    private constructor();
    readonly index: number;
}
