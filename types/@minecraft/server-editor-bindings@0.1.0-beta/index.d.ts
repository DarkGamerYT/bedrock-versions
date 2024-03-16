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
 *     "module_name": "@minecraft/server-editor-bindings",
 *     "version": "0.1.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export enum BlockPaletteItemType {
    Simple = 0,
    Probability = 1,
}

export enum CursorControlMode {
    Keyboard = 0,
    Mouse = 1,
    KeyboardAndMouse = 2,
    Fixed = 3,
}

export enum CursorTargetMode {
    Block = 0,
    Face = 1,
}

export enum EditorMode {
    Crosshair = "Crosshair",
    Tool = "Tool",
}

export enum GraphicsSettingsProperty {
    ShowInvisibleBlocks = "ShowInvisibleBlocks",
}

export enum PlaytestSessionResult {
    OK = 0,
    InvalidSessionHandle = 1,
    SessionInfoNotFound = 2,
    TooManyPlayers = 3,
    WorldExportFailed = 4,
    WorldExportBusy = 5,
    UnsupportedScenario = 6,
    EditorSystemFailure = 7,
    InvalidLevelId = 8,
    PlayerNotFound = 9,
    ResponseTimeout = 10,
    UnspecifiedError = 11,
}

export enum WidgetGroupSelectionMode {
    Multiple = "Multiple",
    None = "None",
    Single = "Single",
}

export class BlockPaletteManager {
    private constructor();
    /** @throws This function can throw errors. */
    getSelectedBlockType(): minecraftserver.BlockType;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setSelectedBlockType(block: minecraftserver.BlockType): void;
}

export class ClipboardItem {
    private constructor();
    /** @throws This property can throw when used. */
    readonly isEmpty: boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    clear(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getPredictedWriteAsCompoundBlockVolume(
        location: minecraftserver.Vector3,
        options?: ClipboardWriteOptions,
    ): minecraftserver.CompoundBlockVolume;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getPredictedWriteAsSelection(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): Selection;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getSize(): minecraftserver.Vector3;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    readFromSelection(selection: Selection): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    readFromWorld(from: minecraftserver.Vector3, to: minecraftserver.Vector3): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    writeToWorld(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): boolean;
}

export class ClipboardManager {
    private constructor();
    /** @throws This property can throw when used. */
    readonly clipboard: ClipboardItem;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    create(): ClipboardItem;
}

export class Cursor {
    private constructor();
    /** @throws This property can throw when used. */
    readonly faceDirection: number;
    /** @throws This property can throw when used. */
    readonly isVisible: boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getPosition(): minecraftserver.Vector3;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getProperties(): CursorProperties;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    hide(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    moveBy(offset: minecraftserver.Vector3): minecraftserver.Vector3;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    resetToDefaultState(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setProperties(properties: CursorProperties): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    show(): void;
}

export class CursorPropertiesChangeAfterEvent {
    private constructor();
    readonly properties: CursorProperties;
}

export class CursorPropertyChangeAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: CursorPropertiesChangeAfterEvent) => void): (arg: CursorPropertiesChangeAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: CursorPropertiesChangeAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class CustomWidget extends Widget {
    private constructor();
    readonly location: minecraftserver.Vector3;
    readonly rotation: minecraftserver.Vector2;
    readonly showTextOnlyWhenSelected: boolean;
    getText(): string;
    /** @remarks This function can't be called in read-only mode. */
    setText(text: string): void;
}

export class CustomWidgetMoveEventData {
    private constructor();
    readonly group: WidgetGroup;
    readonly location?: minecraftserver.Vector3;
    readonly rotation?: minecraftserver.Vector2;
    readonly widget: CustomWidget;
}

export class DataStore {
    private constructor();
    readonly actionContainer: DataStoreActionContainer;
    readonly afterEvents: DataStoreAfterEvents;
    readonly menuContainer: DataStoreMenuContainer;
}

export class DataStoreActionContainer {
    private constructor();
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    bindActionToControl(controlId: string, actionPayload: string): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    removeActionFromControl(controlId: string, actionPayload?: string): void;
}

export class DataStoreAfterEvents {
    private constructor();
    readonly payloadReceived: DataStorePayloadAfterEventSignal;
}

export class DataStoreMenuContainer {
    private constructor();
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    createItem(id: string, payload: string): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    destroyItem(id: string): void;
    /** @remarks This function can't be called in read-only mode. */
    getPayload(id: string): string;
    /** @remarks This function can't be called in read-only mode. */
    getProperty(id: string, property: string): boolean | number | string | undefined;
    /** @remarks This function can't be called in read-only mode. */
    hasPayload(id: string): boolean;
    /** @remarks This function can't be called in read-only mode. */
    hasProperty(id: string, property: string): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    updateItem(id: string, payload: string): void;
}

export class DataStorePayloadAfterEvent {
    private constructor();
    readonly dataTag: string;
    readonly payload: string;
}

export class DataStorePayloadAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: DataStorePayloadAfterEvent) => void): (arg: DataStorePayloadAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: DataStorePayloadAfterEvent) => void): void;
}

export class Extension {
    private constructor();
    readonly defaultToolGroupId: string;
    readonly description: string;
    readonly name: string;
    readonly notes: string;
}

export class ExtensionContext {
    private constructor();
    readonly afterEvents: ExtensionContextAfterEvents;
    readonly blockPalette: BlockPaletteManager;
    readonly clipboardManager: ClipboardManager;
    readonly cursor: Cursor;
    readonly extensionInfo: Extension;
    readonly player: minecraftserver.Player;
    readonly playtest: PlaytestManager;
    readonly selectionManager: SelectionManager;
    readonly settings: SettingsManager;
    readonly transactionManager: TransactionManager;
    readonly widgetManager: WidgetManager;
}

export class ExtensionContextAfterEvents {
    private constructor();
    readonly cursorPropertyChange: CursorPropertyChangeAfterEventSignal;
    readonly modeChange: ModeChangeAfterEventSignal;
    readonly primarySelectionChange: PrimarySelectionChangeAfterEventSignal;
}

export class GraphicsSettings {
    private constructor();
    get(property: GraphicsSettingsProperty): boolean | number | string | undefined;
    getAll(): Record<string, boolean | number | string>;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    set(property: GraphicsSettingsProperty, value: boolean | number | string): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setAll(properties: Record<string, boolean | number | string>): void;
}

export class IBlockPaletteItem {
    private constructor();
    getBlock(): minecraftserver.BlockType | undefined;
    getDisplayName(): string;
    getType(): BlockPaletteItemType;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     */
    setBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class LineWidget extends Widget {
    private constructor();
}

export class Logger {
    private constructor();
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    debug(message: string, properties?: LogProperties): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    error(message: string, properties?: LogProperties): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    info(message: string, properties?: LogProperties): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    warning(message: string, properties?: LogProperties): void;
}

export class MinecraftEditor {
    private constructor();
    /** @throws This property can throw when used. */
    readonly log: Logger;
    readonly simulation: SimulationState;
}

export class MinecraftEditorInternal {
    private constructor();
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getDataStore(player: minecraftserver.Player): DataStore;
    /** @remarks This function can't be called in read-only mode. */
    registerExtension(
        extensionName: string,
        activationFunction: (arg: ExtensionContext) => void,
        shutdownFunction: (arg: ExtensionContext) => void,
        options?: ExtensionOptionalParameters,
    ): Extension;
}

export class ModeChangeAfterEvent {
    private constructor();
    readonly mode: EditorMode;
}

export class ModeChangeAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ModeChangeAfterEvent) => void): (arg: ModeChangeAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ModeChangeAfterEvent) => void): void;
}

export class PlaytestManager {
    private constructor();
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    beginPlaytest(options: PlaytestGameOptions): Promise<PlaytestSessionResult>;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getPlaytestSessionAvailability(): PlaytestSessionResult;
}

export class PrimarySelectionChangeAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: SelectionEventAfterEvent) => void): (arg: SelectionEventAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: SelectionEventAfterEvent) => void): void;
}

export class PrimarySelectionChangedEvent {
    private constructor();
    readonly volume?: minecraftserver.CompoundBlockVolume;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ProbabilityBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     */
    addBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string, weight: number): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     * 
     * {@link Error}
     */
    removeBlockAt(index: number): void;
}

export class Selection {
    private constructor();
    /** @throws This property can throw when used. */
    readonly isEmpty: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    visible: boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    clear(): void;
    /** @remarks This function can't be called in read-only mode. */
    getBlockLocationIterator(): minecraftserver.BlockLocationIterator;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getBoundingBox(): minecraftserver.BoundingBox;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getFillColor(): minecraftserver.RGBA;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getOutlineColor(): minecraftserver.RGBA;
    /** @remarks This function can't be called in read-only mode. */
    getVolumeOrigin(): minecraftserver.Vector3;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    moveBy(delta: minecraftserver.Vector3): minecraftserver.Vector3;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    moveTo(location: minecraftserver.Vector3): minecraftserver.Vector3;
    /** @remarks This function can't be called in read-only mode. */
    peekLastVolume(forceRelativity?: minecraftserver.CompoundBlockVolumePositionRelativity): minecraftserver.CompoundBlockVolumeItem | undefined;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    popVolume(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    pushVolume(item: minecraftserver.CompoundBlockVolumeItem): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    set(other: minecraftserver.CompoundBlockVolume | Selection): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setFillColor(color: minecraftserver.RGBA): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setOutlineColor(color: minecraftserver.RGBA): void;
}

export class SelectionEventAfterEvent {
    private constructor();
    readonly selectionEvent: PrimarySelectionChangedEvent;
}

export class SelectionManager {
    private constructor();
    /** @throws This property can throw when used. */
    readonly selection: Selection;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    create(): Selection;
}

export class SettingsManager {
    private constructor();
    readonly graphics: GraphicsSettings;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class SimpleBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
}

export class SimulationState {
    private constructor();
    isPaused(): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setPaused(isPaused: boolean): void;
}

export class TransactionManager {
    private constructor();
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addUserDefinedOperation(
        transactionHandlerId: UserDefinedTransactionHandlerId,
        operationData: string,
        operationName?: string,
    ): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    commitOpenTransaction(): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    commitTrackedChanges(): number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    createUserDefinedTransactionHandler(
        undoClosure: (arg: string) => void,
        redoClosure: (arg: string) => void,
    ): UserDefinedTransactionHandlerId;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    discardOpenTransaction(): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    discardTrackedChanges(): number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    openTransaction(name: string): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    redo(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    redoSize(): number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    trackBlockChangeArea(from: minecraftserver.Vector3, to: minecraftserver.Vector3): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    trackBlockChangeCompoundBlockVolume(compoundBlockVolume: minecraftserver.CompoundBlockVolume): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    trackBlockChangeList(locations: minecraftserver.Vector3[]): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    trackBlockChangeSelection(selection: Selection): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    undo(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    undoSize(): number;
}

export class UserDefinedTransactionHandlerId {
    private constructor();
}

export class Widget {
    private constructor();
    readonly valid: boolean;
    getIsSelected(): boolean;
    getIsVisible(): boolean;
    /** @remarks This function can't be called in read-only mode. */
    setIsVisible(isVisible: boolean): void;
}

export class WidgetGroup {
    private constructor();
    readonly valid: boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    createCustomWidget(
        customEntityName: string,
        location: minecraftserver.Vector3,
        rotation?: minecraftserver.Vector2,
        options?: CustomWidgetCreateOptions,
    ): CustomWidget;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    deleteWidget(widgetToDelete: Widget): void;
    /** @remarks This function can't be called in read-only mode. */
    getIsVisible(): boolean;
    /** @remarks This function can't be called in read-only mode. */
    setIsVisible(isVisible: boolean): void;
}

export class WidgetManager {
    private constructor();
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    createGroup(options?: WidgetGroupCreateOptions): WidgetGroup;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    deleteGroup(groupToDelete: WidgetGroup): void;
}

export class WidgetStateChangeEventData {
    private constructor();
    readonly group: WidgetGroup;
    readonly isSelected?: boolean;
    readonly isVisible?: boolean;
    readonly widget: Widget;
}

export interface ClipboardWriteOptions {
    anchor?: minecraftserver.Vector3;
    mirror?: minecraftserver.StructureMirrorAxis;
    offset?: minecraftserver.Vector3;
    rotation?: minecraftserver.StructureRotation;
}

export interface CursorProperties {
    controlMode?: CursorControlMode;
    fixedModeDistance?: number;
    outlineColor?: minecraftserver.RGBA;
    projectThroughLiquid?: boolean;
    targetMode?: CursorTargetMode;
    visible?: boolean;
}

export interface CustomWidgetCreateOptions extends WidgetCreateOptions {
    moveEvent?: (arg: CustomWidgetMoveEventData) => void;
    showTextOnlyWhenSelected?: boolean;
    text?: string;
    visualOffset?: minecraftserver.Vector3;
}

export interface ExtensionOptionalParameters {
    description?: string;
    notes?: string;
    toolGroupId?: string;
}

export interface LogProperties {
    player?: minecraftserver.Player;
    tags?: string[];
}

export interface PlaytestGameOptions {
    alwaysDay?: boolean;
    difficulty?: minecraftserver.Difficulty;
    disableWeather?: boolean;
    gameMode?: minecraftserver.GameMode;
    showCoordinates?: boolean;
    spawnPosition?: minecraftserver.Vector3;
    timeOfDay?: number;
    weather?: number;
}

export interface WidgetCreateOptions {
    initialVisibility?: boolean;
    isSelectable?: boolean;
    stateChangeEvent?: (arg: WidgetStateChangeEventData) => void;
}

export interface WidgetGroupCreateOptions {
    groupSelectionMode?: WidgetGroupSelectionMode;
}

export const editor: MinecraftEditor;
export const editorInternal: MinecraftEditorInternal;