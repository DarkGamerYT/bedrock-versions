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
 *     "module_name": "@minecraft/debug-utilities",
 *     "version": "1.0.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
/** @throws This function can throw errors. */
export function disableWatchdog(isStopped: boolean): void;