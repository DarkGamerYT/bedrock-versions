// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-versions
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * 
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server",
 *     "version": "1.5.0"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
export enum Direction {
    Down = "Down",
    East = "East",
    North = "North",
    South = "South",
    Up = "Up",
    West = "West",
}

export enum DisplaySlotId {
    BelowName = "BelowName",
    List = "List",
    Sidebar = "Sidebar",
}

export enum EntityDamageCause {
    anvil = "anvil",
    blockExplosion = "blockExplosion",
    charging = "charging",
    contact = "contact",
    drowning = "drowning",
    entityAttack = "entityAttack",
    entityExplosion = "entityExplosion",
    fall = "fall",
    fallingBlock = "fallingBlock",
    fire = "fire",
    fireTick = "fireTick",
    fireworks = "fireworks",
    flyIntoWall = "flyIntoWall",
    freezing = "freezing",
    lava = "lava",
    lightning = "lightning",
    magic = "magic",
    magma = "magma",
    none = "none",
    override = "override",
    piston = "piston",
    projectile = "projectile",
    selfDestruct = "selfDestruct",
    stalactite = "stalactite",
    stalagmite = "stalagmite",
    starve = "starve",
    suffocation = "suffocation",
    suicide = "suicide",
    temperature = "temperature",
    thorns = "thorns",
    void = "void",
    wither = "wither",
}

export enum EquipmentSlot {
    Chest = "Chest",
    Feet = "Feet",
    Head = "Head",
    Legs = "Legs",
    Mainhand = "Mainhand",
    Offhand = "Offhand",
}

export enum GameMode {
    adventure = "adventure",
    creative = "creative",
    spectator = "spectator",
    survival = "survival",
}

export enum ItemLockMode {
    inventory = "inventory",
    none = "none",
    slot = "slot",
}

export enum ObjectiveSortOrder {
    Ascending = 0,
    Descending = 1,
}

export enum ScoreboardIdentityType {
    Entity = "Entity",
    FakePlayer = "FakePlayer",
    Player = "Player",
}

export enum ScriptEventSource {
    Block = "Block",
    Entity = "Entity",
    NPCDialogue = "NPCDialogue",
    Server = "Server",
}

export enum TimeOfDay {
    Day = 1000,
    Noon = 6000,
    Sunset = 12000,
    Night = 13000,
    Midnight = 18000,
    Sunrise = 23000,
}

export class Block {
    private constructor();
    readonly dimension: Dimension;
    /** @throws This property can throw when used. */
    readonly location: Vector3;
    /** 
     * @throws This property can throw when used.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly permutation: BlockPermutation;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    getComponent(componentId: string): BlockComponent | undefined;
    isValid(): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    setPermutation(permutation: BlockPermutation): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
    private constructor();
    readonly block: Block;
}

export class BlockEvent {
    private constructor();
    readonly block: Block;
    readonly dimension: Dimension;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly container?: Container;
    static readonly componentId = "minecraft:inventory";
}

export class BlockPermutation {
    private constructor();
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /** @throws This function can throw errors. */
    static resolve(blockName: string, states?: Record<string, boolean | number | string>): BlockPermutation;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEvent extends BlockEvent {
    private constructor();
    readonly source: Entity;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal {
    private constructor();
}

export class CommandResult {
    private constructor();
    readonly successCount: number;
}

export class Component {
    private constructor();
    readonly typeId: string;
    isValid(): boolean;
}

export class Container {
    private constructor();
    /** @throws This property can throw when used. */
    readonly emptySlotsCount: number;
    /** @throws This property can throw when used. */
    readonly size: number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    clearAll(): void;
    /** @throws This function can throw errors. */
    getItem(slot: number): ItemStack | undefined;
    isValid(): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}

export class Dimension {
    private constructor();
    readonly id: string;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBlock(location: Vector3): Block | undefined;
    /** @throws This function can throw errors. */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /** @throws This function can throw errors. */
    getEntities(options?: EntityQueryOptions): Entity[];
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
    /** @throws This function can throw errors. */
    getPlayers(options?: EntityQueryOptions): Player[];
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link CommandError}
     */
    runCommand(commandString: string): CommandResult;
    /** @throws This function can throw errors. */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnEntity(identifier: string, location: Vector3): Entity;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
}

export class Effect {
    private constructor();
    /** @throws This property can throw when used. */
    readonly amplifier: number;
    /** @throws This property can throw when used. */
    readonly displayName: string;
    /** @throws This property can throw when used. */
    readonly duration: number;
    /** @throws This property can throw when used. */
    readonly typeId: string;
    isValid(): boolean;
}

export class EffectType {
    private constructor();
    getName(): string;
}

export class Entity {
    private constructor();
    /** @throws This property can throw when used. */
    readonly dimension: Dimension;
    readonly id: string;
    /** @throws This property can throw when used. */
    readonly location: Vector3;
    /** @remarks This property can't be edited in read-only mode. */
    nameTag: string;
    readonly scoreboardIdentity?: ScoreboardIdentity;
    readonly typeId: string;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addTag(tag: string): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    applyImpulse(vector: Vector3): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    clearVelocity(): void;
    /** @throws This function can throw errors. */
    getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    getComponent(componentId: string): EntityComponent | undefined;
    getComponents(): EntityComponent[];
    /** @throws This function can throw errors. */
    getEffect(effectType: EffectType | string): Effect | undefined;
    /** @throws This function can throw errors. */
    getEffects(): Effect[];
    /** @throws This function can throw errors. */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
    /** @throws This function can throw errors. */
    getHeadLocation(): Vector3;
    /** @throws This function can throw errors. */
    getTags(): string[];
    /** @throws This function can throw errors. */
    getVelocity(): Vector3;
    /** @throws This function can throw errors. */
    getViewDirection(): Vector3;
    hasComponent(componentId: string): boolean;
    /** @throws This function can throw errors. */
    hasTag(tag: string): boolean;
    isValid(): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    kill(): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    removeEffect(effectType: EffectType | string): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link CommandError}
     * 
     * {@link Error}
     */
    runCommand(commandString: string): CommandResult;
    /** @throws This function can throw errors. */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    triggerEvent(eventName: string): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly currentValue: number;
    /** @throws This property can throw when used. */
    readonly defaultValue: number;
    /** @throws This property can throw when used. */
    readonly effectiveMax: number;
    /** @throws This property can throw when used. */
    readonly effectiveMin: number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setCurrentValue(value: number): boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBaseMovementComponent extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly maxTurn: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanClimbComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:can_climb";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanFlyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:can_fly";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanPowerJumpComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:can_power_jump";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColorComponent extends EntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
    static readonly componentId = "minecraft:color";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityComponent extends Component {
    private constructor();
}

export class EntityDieAfterEvent {
    private constructor();
    readonly damageSource: EntityDamageSource;
    readonly deadEntity: Entity;
}

export class EntityDieAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(
        callback: (arg: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityDieAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityDieAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEquippableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:equippable";
    /** @throws This function can throw errors. */
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFireImmuneComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:fire_immune";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFloatsInLiquidComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:floats_in_liquid";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFlyingSpeedComponent extends EntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
    static readonly componentId = "minecraft:flying_speed";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
    static readonly componentId = "minecraft:friction_modifier";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityGroundOffsetComponent extends EntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
    static readonly componentId = "minecraft:ground_offset";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly forceUse: boolean;
    static readonly componentId = "minecraft:healable";
    /** @throws This function can throw errors. */
    getFeedItems(): FeedItem[];
}

export class EntityHealthChangedAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly newValue: number;
    readonly oldValue: number;
}

export class EntityHealthChangedAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(
        callback: (arg: EntityHealthChangedAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHealthChangedAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHealthChangedAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealthComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = "minecraft:health";
}

export class EntityHitBlockAfterEvent {
    private constructor();
    readonly blockFace: Direction;
    readonly damagingEntity: Entity;
    readonly hitBlock: Block;
}

export class EntityHitBlockAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(
        callback: (arg: EntityHitBlockAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHitBlockAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHitBlockAfterEvent) => void): void;
}

export class EntityHitEntityAfterEvent {
    private constructor();
    readonly damagingEntity: Entity;
    readonly hitEntity: Entity;
}

export class EntityHitEntityAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(
        callback: (arg: EntityHitEntityAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHitEntityAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHitEntityAfterEvent) => void): void;
}

export class EntityHurtAfterEvent {
    private constructor();
    readonly damage: number;
    readonly damageSource: EntityDamageSource;
    readonly hurtEntity: Entity;
}

export class EntityHurtAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(
        callback: (arg: EntityHurtAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHurtAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHurtAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityInventoryComponent extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly additionalSlotsPerStrength: number;
    /** @throws This property can throw when used. */
    readonly canBeSiphonedFrom: boolean;
    /** @throws This property can throw when used. */
    readonly container?: Container;
    /** @throws This property can throw when used. */
    readonly containerType: string;
    /** @throws This property can throw when used. */
    readonly inventorySize: number;
    /** @throws This property can throw when used. */
    readonly private: boolean;
    /** @throws This property can throw when used. */
    readonly restrictToOwner: boolean;
    static readonly componentId = "minecraft:inventory";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsBabyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_baby";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChargedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_charged";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChestedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_chested";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsDyeableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_dyeable";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_hidden_when_invisible";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIgnitedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_ignited";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIllagerCaptainComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_illager_captain";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsSaddledComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_saddled";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShakingComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_shaking";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShearedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_sheared";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStackableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_stackable";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStunnedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_stunned";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsTamedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_tamed";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityItemComponent extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly itemStack: ItemStack;
    static readonly componentId = "minecraft:item";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMarkVariantComponent extends EntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
    static readonly componentId = "minecraft:mark_variant";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.amphibious";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementBasicComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.basic";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.fly";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.generic";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.hover";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.jump";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.skip";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
    static readonly componentId = "minecraft:push_through";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityScaleComponent extends EntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
    static readonly componentId = "minecraft:scale";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySkinIdComponent extends EntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
    static readonly componentId = "minecraft:skin_id";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityVariantComponent extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly value: number;
    static readonly componentId = "minecraft:variant";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWantsJockeyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:wants_jockey";
}

export class FeedItem {
    private constructor();
    readonly healAmount: number;
    readonly item: string;
    getEffects(): FeedItemEffect[];
}

export class FeedItemEffect {
    private constructor();
    readonly amplifier: number;
    readonly chance: number;
    readonly duration: number;
    readonly name: string;
}

export class IButtonPushAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ButtonPushAfterEvent) => void): (arg: ButtonPushAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ButtonPushAfterEvent) => void): void;
}

export class ILeverActionAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: LeverActionAfterEvent) => void): (arg: LeverActionAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: LeverActionAfterEvent) => void): void;
}

export class IPlayerJoinAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PlayerJoinAfterEvent) => void): (arg: PlayerJoinAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerJoinAfterEvent) => void): void;
}

export class IPlayerLeaveAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PlayerLeaveAfterEvent) => void): (arg: PlayerLeaveAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerLeaveAfterEvent) => void): void;
}

export class IPlayerSpawnAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PlayerSpawnAfterEvent) => void): (arg: PlayerSpawnAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerSpawnAfterEvent) => void): void;
}

export class ItemCompleteUseAfterEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemCompleteUseAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): (arg: ItemCompleteUseAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponent extends Component {
    private constructor();
}

export class ItemReleaseUseAfterEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemReleaseUseAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): (arg: ItemReleaseUseAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): void;
}

export class ItemStack {
    readonly amount: number;
    readonly isStackable: boolean;
    readonly keepOnDeath: boolean;
    readonly lockMode: ItemLockMode;
    readonly maxAmount: number;
    readonly nameTag?: string;
    readonly type: ItemType;
    readonly typeId: string;
    /** @throws This function can throw errors. */
    constructor(itemType: ItemType | string, amount?: number);
    getComponent(componentId: string): ItemComponent | undefined;
    getComponents(): ItemComponent[];
    getLore(): string[];
    hasComponent(componentId: string): boolean;
    isStackableWith(itemStack: ItemStack): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setLore(loreList?: string[]): void;
}

export class ItemStartUseAfterEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStartUseAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ItemStartUseAfterEvent) => void): (arg: ItemStartUseAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartUseAfterEvent) => void): void;
}

export class ItemStartUseOnAfterEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    readonly itemStack?: ItemStack;
    readonly source: Player;
}

export class ItemStartUseOnAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): (arg: ItemStartUseOnAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): void;
}

export class ItemStopUseAfterEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStopUseAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ItemStopUseAfterEvent) => void): (arg: ItemStopUseAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopUseAfterEvent) => void): void;
}

export class ItemStopUseOnAfterEvent {
    private constructor();
    readonly block: Block;
    readonly itemStack?: ItemStack;
    readonly source: Player;
}

export class ItemStopUseOnAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): (arg: ItemStopUseOnAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): void;
}

export class ItemType {
    private constructor();
    readonly id: string;
}

export class ItemUseAfterEvent {
    private constructor();
    itemStack: ItemStack;
    readonly source: Player;
}

export class ItemUseAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ItemUseAfterEvent) => void): (arg: ItemUseAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    cancel: boolean;
}

export class ItemUseBeforeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ItemUseBeforeEvent) => void): (arg: ItemUseBeforeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseBeforeEvent) => void): void;
}

export class ItemUseOnAfterEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    readonly faceLocation: Vector3;
    readonly itemStack: ItemStack;
    readonly source: Player;
}

export class ItemUseOnAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ItemUseOnAfterEvent) => void): (arg: ItemUseOnAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseOnAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseOnBeforeEvent extends ItemUseOnAfterEvent {
    private constructor();
    cancel: boolean;
}

export class ItemUseOnBeforeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ItemUseOnBeforeEvent) => void): (arg: ItemUseOnBeforeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseOnBeforeEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    readonly isPowered: boolean;
    readonly player: Player;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEventSignal extends ILeverActionAfterEventSignal {
    private constructor();
}

export class MinecraftDimensionTypes {
    private constructor();
    static readonly nether = "minecraft:nether";
    static readonly overworld = "minecraft:overworld";
    static readonly theEnd = "minecraft:the_end";
}

export class MolangVariableMap {
    /** @throws This function can throw errors. */
    setColorRGB(variableName: string, color: RGB): void;
    /** @throws This function can throw errors. */
    setColorRGBA(variableName: string, color: RGBA): void;
    /** @throws This function can throw errors. */
    setFloat(variableName: string, number: number): void;
    /** @throws This function can throw errors. */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void;
    /** @throws This function can throw errors. */
    setVector3(variableName: string, vector: Vector3): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class Player extends Entity {
    private constructor();
    /** @throws This property can throw when used. */
    readonly name: string;
    /** @throws This property can throw when used. */
    readonly onScreenDisplay: ScreenDisplay;
    /** @throws This function can throw errors. */
    getSpawnPoint(): DimensionLocation | undefined;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    playSound(soundId: string, soundOptions?: PlayerSoundOptions): void;
    /** @throws This function can throw errors. */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
}

export class PlayerJoinAfterEvent {
    private constructor();
    readonly playerId: string;
    readonly playerName: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerJoinAfterEventSignal extends IPlayerJoinAfterEventSignal {
    private constructor();
}

export class PlayerLeaveAfterEvent {
    private constructor();
    readonly playerId: string;
    readonly playerName: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerLeaveAfterEventSignal extends IPlayerLeaveAfterEventSignal {
    private constructor();
}

export class PlayerSpawnAfterEvent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    initialSpawn: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    player: Player;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerSpawnAfterEventSignal extends IPlayerSpawnAfterEventSignal {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
}

export class PressurePlatePopAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PressurePlatePopAfterEvent) => void): (arg: PressurePlatePopAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PressurePlatePopAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
    readonly source: Entity;
}

export class PressurePlatePushAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PressurePlatePushAfterEvent) => void): (arg: PressurePlatePushAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PressurePlatePushAfterEvent) => void): void;
}

export class ProjectileHitBlockAfterEvent {
    private constructor();
    readonly dimension: Dimension;
    readonly hitVector: Vector3;
    readonly location: Vector3;
    readonly projectile: Entity;
    readonly source?: Entity;
    /** @remarks This function can't be called in read-only mode. */
    getBlockHit(): BlockHitInformation;
}

export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): (arg: ProjectileHitBlockAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): void;
}

export class ProjectileHitEntityAfterEvent {
    private constructor();
    readonly dimension: Dimension;
    readonly hitVector: Vector3;
    readonly location: Vector3;
    readonly projectile: Entity;
    readonly source?: Entity;
    /** @remarks This function can't be called in read-only mode. */
    getEntityHit(): EntityHitInformation;
}

export class ProjectileHitEntityAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ProjectileHitEntityAfterEvent) => void): (arg: ProjectileHitEntityAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ProjectileHitEntityAfterEvent) => void): void;
}

export class Scoreboard {
    private constructor();
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addObjective(objectiveId: string, displayName?: string): ScoreboardObjective;
    /** @remarks This function can't be called in read-only mode. */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    getObjectives(): ScoreboardObjective[];
    getParticipants(): ScoreboardIdentity[];
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}

export class ScoreboardIdentity {
    private constructor();
    readonly displayName: string;
    readonly id: number;
    readonly type: ScoreboardIdentityType;
    /** @throws This function can throw errors. */
    getEntity(): Entity | undefined;
    isValid(): boolean;
}

export class ScoreboardObjective {
    private constructor();
    /** @throws This property can throw when used. */
    readonly displayName: string;
    /** @throws This property can throw when used. */
    readonly id: string;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    /** @throws This function can throw errors. */
    getParticipants(): ScoreboardIdentity[];
    /** @throws This function can throw errors. */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /** @throws This function can throw errors. */
    getScores(): ScoreboardScoreInfo[];
    /** @throws This function can throw errors. */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    isValid(): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}

export class ScoreboardScoreInfo {
    private constructor();
    readonly participant: ScoreboardIdentity;
    readonly score: number;
}

export class ScreenDisplay {
    private constructor();
    isValid(): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}

export class ScriptEventCommandMessageAfterEvent {
    private constructor();
    readonly id: string;
    readonly initiator?: Entity;
    readonly message: string;
    readonly sourceBlock?: Block;
    readonly sourceEntity?: Entity;
    readonly sourceType: ScriptEventSource;
}

export class ScriptEventCommandMessageAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(
        callback: (arg: ScriptEventCommandMessageAfterEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg: ScriptEventCommandMessageAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ScriptEventCommandMessageAfterEvent) => void): void;
}

export class System {
    private constructor();
    readonly afterEvents: SystemAfterEvents;
    readonly currentTick: number;
    clearRun(runId: number): void;
    run(callback: () => void): number;
    runInterval(callback: () => void, tickInterval?: number): number;
    runTimeout(callback: () => void, tickDelay?: number): number;
}

export class SystemAfterEvents {
    private constructor();
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class TargetBlockHitAfterEvent extends BlockEvent {
    private constructor();
    readonly hitVector: Vector3;
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
    readonly source: Entity;
}

export class TargetBlockHitAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: TargetBlockHitAfterEvent) => void): (arg: TargetBlockHitAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: TargetBlockHitAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class TripWireTripAfterEvent extends BlockEvent {
    private constructor();
    readonly isPowered: boolean;
    readonly sources: Entity[];
}

export class TripWireTripAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: TripWireTripAfterEvent) => void): (arg: TripWireTripAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: TripWireTripAfterEvent) => void): void;
}

export class World {
    private constructor();
    readonly afterEvents: WorldAfterEvents;
    readonly beforeEvents: WorldBeforeEvents;
    readonly scoreboard: Scoreboard;
    getAbsoluteTime(): number;
    /** @throws This function can throw errors. */
    getAllPlayers(): Player[];
    getDay(): number;
    getDefaultSpawnLocation(): Vector3;
    /** @throws This function can throw errors. */
    getDimension(dimensionId: string): Dimension;
    /** @throws This function can throw errors. */
    getPlayers(options?: EntityQueryOptions): Player[];
    getTimeOfDay(): number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /** @throws This function can throw errors. */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /** @remarks This function can't be called in read-only mode. */
    setAbsoluteTime(absoluteTime: number): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    setDefaultSpawnLocation(spawnLocation: Vector3): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setTimeOfDay(timeOfDay: number | TimeOfDay): void;
    /** @remarks This function can't be called in read-only mode. */
    stopMusic(): void;
}

export class WorldAfterEvents {
    private constructor();
    readonly buttonPush: ButtonPushAfterEventSignal;
    readonly entityDie: EntityDieAfterEventSignal;
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    readonly entityHurt: EntityHurtAfterEventSignal;
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    readonly itemUse: ItemUseAfterEventSignal;
    readonly itemUseOn: ItemUseOnAfterEventSignal;
    readonly leverAction: LeverActionAfterEventSignal;
    readonly playerJoin: PlayerJoinAfterEventSignal;
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    readonly tripWireTrip: TripWireTripAfterEventSignal;
}

export class WorldBeforeEvents {
    private constructor();
    readonly itemUse: ItemUseBeforeEventSignal;
    readonly itemUseOn: ItemUseOnBeforeEventSignal;
}

export interface BlockHitInformation {
    block: Block;
    face: Direction;
    faceLocation: Vector3;
}

export interface BlockRaycastHit {
    block: Block;
    face: Direction;
    faceLocation: Vector3;
}

export interface BlockRaycastOptions {
    includeLiquidBlocks?: boolean;
    includePassableBlocks?: boolean;
    maxDistance?: number;
}

export interface DimensionLocation {
    dimension: Dimension;
    x: number;
    y: number;
    z: number;
}

export interface EntityApplyDamageByProjectileOptions {
    damagingEntity?: Entity;
    damagingProjectile: Entity;
}

export interface EntityApplyDamageOptions {
    cause: EntityDamageCause;
    damagingEntity?: Entity;
}

export interface EntityDamageSource {
    cause: EntityDamageCause;
    damagingEntity?: Entity;
    damagingProjectile?: Entity;
}

export interface EntityEffectOptions {
    amplifier?: number;
    showParticles?: boolean;
}

export interface EntityEventOptions {
    entities?: Entity[];
    entityTypes?: string[];
}

export interface EntityHitInformation {
    entity?: Entity;
}

export interface EntityQueryOptions {
    closest?: number;
    excludeFamilies?: string[];
    excludeGameModes?: GameMode[];
    excludeNames?: string[];
    excludeTags?: string[];
    excludeTypes?: string[];
    families?: string[];
    farthest?: number;
    gameMode?: GameMode;
    location?: Vector3;
    maxDistance?: number;
    maxHorizontalRotation?: number;
    maxLevel?: number;
    maxVerticalRotation?: number;
    minDistance?: number;
    minHorizontalRotation?: number;
    minLevel?: number;
    minVerticalRotation?: number;
    name?: string;
    scoreOptions?: EntityQueryScoreOptions[];
    tags?: string[];
    type?: string;
}

export interface EntityQueryScoreOptions {
    exclude?: boolean;
    maxScore?: number;
    minScore?: number;
    objective?: string;
}

export interface EntityRaycastHit {
    distance: number;
    entity: Entity;
}

export interface EntityRaycastOptions {
    maxDistance?: number;
}

export interface MusicOptions {
    fade?: number;
    loop?: boolean;
    volume?: number;
}

export interface PlayerSoundOptions {
    location?: Vector3;
    pitch?: number;
    volume?: number;
}

export interface RawMessage {
    rawtext?: RawMessage[];
    score?: RawMessageScore;
    text?: string;
    translate?: string;
    with?: string[] | RawMessage;
}

export interface RawMessageScore {
    name?: string;
    objective?: string;
}

export interface RGB {
    blue: number;
    green: number;
    red: number;
}

export interface RGBA extends RGB {
    alpha: number;
}

export interface ScoreboardObjectiveDisplayOptions {
    objective: ScoreboardObjective;
    sortOrder?: ObjectiveSortOrder;
}

export interface ScriptEventMessageFilterOptions {
    namespaces: string[];
}

export interface TeleportOptions {
    checkForBlocks?: boolean;
    dimension?: Dimension;
    facingLocation?: Vector3;
    keepVelocity?: boolean;
    rotation?: Vector2;
}

export interface TitleDisplayOptions {
    fadeInDuration: number;
    fadeOutDuration: number;
    stayDuration: number;
    subtitle?: (RawMessage | string)[] | RawMessage | string;
}

export interface Vector2 {
    x: number;
    y: number;
}

export interface Vector3 {
    x: number;
    y: number;
    z: number;
}

export interface WorldSoundOptions {
    pitch?: number;
    volume?: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class CommandError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class LocationInUnloadedChunkError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class LocationOutOfWorldBoundariesError extends Error {
    private constructor();
}

export const system: System;
export const world: World;