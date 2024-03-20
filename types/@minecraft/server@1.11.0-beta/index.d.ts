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
 *     "module_name": "@minecraft/server",
 *     "version": "1.11.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
export enum BlockComponentTypes {
    Inventory = "minecraft:inventory",
    LavaContainer = "minecraft:lavaContainer",
    Piston = "minecraft:piston",
    PotionContainer = "minecraft:potionContainer",
    RecordPlayer = "minecraft:recordPlayer",
    Sign = "minecraft:sign",
    SnowContainer = "minecraft:snowContainer",
    WaterContainer = "minecraft:waterContainer",
}

export enum BlockPistonState {
    Expanded = "Expanded",
    Expanding = "Expanding",
    Retracted = "Retracted",
    Retracting = "Retracting",
}

export enum BlockVolumeIntersection {
    Disjoint = 0,
    Contains = 1,
    Intersects = 2,
}

export enum CompoundBlockVolumeAction {
    Add = 0,
    Subtract = 1,
}

export enum CompoundBlockVolumePositionRelativity {
    Relative = 0,
    Absolute = 1,
}

export enum Difficulty {
    Peaceful = 0,
    Easy = 1,
    Normal = 2,
    Hard = 3,
}

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

export enum DyeColor {
    Black = "Black",
    Blue = "Blue",
    Brown = "Brown",
    Cyan = "Cyan",
    Gray = "Gray",
    Green = "Green",
    LightBlue = "LightBlue",
    Lime = "Lime",
    Magenta = "Magenta",
    Orange = "Orange",
    Pink = "Pink",
    Purple = "Purple",
    Red = "Red",
    Silver = "Silver",
    White = "White",
    Yellow = "Yellow",
}

export enum EasingType {
    InBack = "InBack",
    InBounce = "InBounce",
    InCirc = "InCirc",
    InCubic = "InCubic",
    InElastic = "InElastic",
    InExpo = "InExpo",
    InOutBack = "InOutBack",
    InOutBounce = "InOutBounce",
    InOutCirc = "InOutCirc",
    InOutCubic = "InOutCubic",
    InOutElastic = "InOutElastic",
    InOutExpo = "InOutExpo",
    InOutQuad = "InOutQuad",
    InOutQuart = "InOutQuart",
    InOutQuint = "InOutQuint",
    InOutSine = "InOutSine",
    InQuad = "InQuad",
    InQuart = "InQuart",
    InQuint = "InQuint",
    InSine = "InSine",
    Linear = "Linear",
    OutBack = "OutBack",
    OutBounce = "OutBounce",
    OutCirc = "OutCirc",
    OutCubic = "OutCubic",
    OutElastic = "OutElastic",
    OutExpo = "OutExpo",
    OutQuad = "OutQuad",
    OutQuart = "OutQuart",
    OutQuint = "OutQuint",
    OutSine = "OutSine",
    Spring = "Spring",
}

export enum EnchantmentSlot {
    ArmorFeet = "ArmorFeet",
    ArmorHead = "ArmorHead",
    ArmorLegs = "ArmorLegs",
    ArmorTorso = "ArmorTorso",
    Axe = "Axe",
    Bow = "Bow",
    CarrotStick = "CarrotStick",
    CosmeticHead = "CosmeticHead",
    Crossbow = "Crossbow",
    Elytra = "Elytra",
    FishingRod = "FishingRod",
    Flintsteel = "Flintsteel",
    Hoe = "Hoe",
    Pickaxe = "Pickaxe",
    Shears = "Shears",
    Shield = "Shield",
    Shovel = "Shovel",
    Spear = "Spear",
    Sword = "Sword",
}

export enum EntityComponentTypes {
    AddRider = "minecraft:addrider",
    Ageable = "minecraft:ageable",
    Breathable = "minecraft:breathable",
    CanClimb = "minecraft:can_climb",
    CanFly = "minecraft:can_fly",
    CanPowerJump = "minecraft:can_power_jump",
    Color = "minecraft:color",
    Color2 = "minecraft:color2",
    Equippable = "minecraft:equippable",
    FireImmune = "minecraft:fire_immune",
    FloatsInLiquid = "minecraft:floats_in_liquid",
    FlyingSpeed = "minecraft:flying_speed",
    FrictionModifier = "minecraft:friction_modifier",
    GroundOffset = "minecraft:ground_offset",
    Healable = "minecraft:healable",
    Health = "minecraft:health",
    Inventory = "minecraft:inventory",
    IsBaby = "minecraft:is_baby",
    IsCharged = "minecraft:is_charged",
    IsChested = "minecraft:is_chested",
    IsDyeable = "minecraft:is_dyeable",
    IsHiddenWhenInvisible = "minecraft:is_hidden_when_invisible",
    IsIgnited = "minecraft:is_ignited",
    IsIllagerCaptain = "minecraft:is_illager_captain",
    IsSaddled = "minecraft:is_saddled",
    IsShaking = "minecraft:is_shaking",
    IsSheared = "minecraft:is_sheared",
    IsStackable = "minecraft:is_stackable",
    IsStunned = "minecraft:is_stunned",
    IsTamed = "minecraft:is_tamed",
    Item = "minecraft:item",
    LavaMovement = "minecraft:lava_movement",
    Leashable = "minecraft:leashable",
    MarkVariant = "minecraft:mark_variant",
    Movement = "minecraft:movement",
    MovementAmphibious = "minecraft:movement.amphibious",
    MovementBasic = "minecraft:movement.basic",
    MovementFly = "minecraft:movement.fly",
    MovementGeneric = "minecraft:movement.generic",
    MovementGlide = "minecraft:movement.glide",
    MovementHover = "minecraft:movement.hover",
    MovementJump = "minecraft:movement.jump",
    MovementSkip = "minecraft:movement.skip",
    MovementSway = "minecraft:movement.sway",
    NavigationClimb = "minecraft:navigation.climb",
    NavigationFloat = "minecraft:navigation.float",
    NavigationFly = "minecraft:navigation.fly",
    NavigationGeneric = "minecraft:navigation.generic",
    NavigationHover = "minecraft:navigation.hover",
    NavigationWalk = "minecraft:navigation.walk",
    Npc = "minecraft:npc",
    OnFire = "minecraft:onfire",
    Projectile = "minecraft:projectile",
    PushThrough = "minecraft:push_through",
    Rideable = "minecraft:rideable",
    Riding = "minecraft:riding",
    Scale = "minecraft:scale",
    SkinId = "minecraft:skin_id",
    Strength = "minecraft:strength",
    Tameable = "minecraft:tameable",
    TameMount = "minecraft:tamemount",
    TypeFamily = "minecraft:type_family",
    UnderwaterMovement = "minecraft:underwater_movement",
    Variant = "minecraft:variant",
    WantsJockey = "minecraft:wants_jockey",
}

export enum EntityDamageCause {
    anvil = "anvil",
    blockExplosion = "blockExplosion",
    campfire = "campfire",
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
    ramAttack = "ramAttack",
    selfDestruct = "selfDestruct",
    sonicBoom = "sonicBoom",
    soulCampfire = "soulCampfire",
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

export enum EntityInitializationCause {
    Born = "Born",
    Event = "Event",
    Loaded = "Loaded",
    Spawned = "Spawned",
    Transformed = "Transformed",
}

export enum EntityLifetimeState {
    Loaded = "Loaded",
    Unloaded = "Unloaded",
}

export enum EquipmentSlot {
    Chest = "Chest",
    Feet = "Feet",
    Head = "Head",
    Legs = "Legs",
    Mainhand = "Mainhand",
    Offhand = "Offhand",
}

export enum FluidType {
    Lava = "Lava",
    Potion = "Potion",
    PowderSnow = "PowderSnow",
    Water = "Water",
}

export enum GameMode {
    adventure = "adventure",
    creative = "creative",
    spectator = "spectator",
    survival = "survival",
}

export enum GameRule {
    CommandBlockOutput = "commandBlockOutput",
    CommandBlocksEnabled = "commandBlocksEnabled",
    DoDayLightCycle = "doDayLightCycle",
    DoEntityDrops = "doEntityDrops",
    DoFireTick = "doFireTick",
    DoImmediateRespawn = "doImmediateRespawn",
    DoInsomnia = "doInsomnia",
    DoLimitedCrafting = "doLimitedCrafting",
    DoMobLoot = "doMobLoot",
    DoMobSpawning = "doMobSpawning",
    DoTileDrops = "doTileDrops",
    DoWeatherCycle = "doWeatherCycle",
    DrowningDamage = "drowningDamage",
    FallDamage = "fallDamage",
    FireDamage = "fireDamage",
    FreezeDamage = "freezeDamage",
    FunctionCommandLimit = "functionCommandLimit",
    KeepInventory = "keepInventory",
    MaxCommandChainLength = "maxCommandChainLength",
    MobGriefing = "mobGriefing",
    NaturalRegeneration = "naturalRegeneration",
    PlayersSleepingPercentage = "playersSleepingPercentage",
    ProjectilesCanBreakBlocks = "projectilesCanBreakBlocks",
    Pvp = "pvp",
    RandomTickSpeed = "randomTickSpeed",
    RecipesUnlock = "recipesUnlock",
    RespawnBlocksExplode = "respawnBlocksExplode",
    SendCommandFeedback = "sendCommandFeedback",
    ShowBorderEffect = "showBorderEffect",
    ShowCoordinates = "showCoordinates",
    ShowDeathMessages = "showDeathMessages",
    ShowRecipeMessages = "showRecipeMessages",
    ShowTags = "showTags",
    SpawnRadius = "spawnRadius",
    TntExplodes = "tntExplodes",
}

export enum HudElement {
    PaperDoll = 0,
    Armor = 1,
    ToolTips = 2,
    TouchControls = 3,
    Crosshair = 4,
    Hotbar = 5,
    Health = 6,
    ProgressBar = 7,
    Hunger = 8,
    AirBubbles = 9,
    HorseHealth = 10,
    StatusEffects = 11,
    ItemText = 12,
}

export enum HudVisibility {
    Hide = 0,
    Reset = 1,
}

export enum ItemComponentTypes {
    Cooldown = "minecraft:cooldown",
    Durability = "minecraft:durability",
    Enchantable = "minecraft:enchantable",
    Food = "minecraft:food",
}

export enum ItemLockMode {
    inventory = "inventory",
    none = "none",
    slot = "slot",
}

export enum MoonPhase {
    FullMoon = 0,
    WaningGibbous = 1,
    FirstQuarter = 2,
    WaningCrescent = 3,
    NewMoon = 4,
    WaxingCrescent = 5,
    LastQuarter = 6,
    WaxingGibbous = 7,
}

export enum ObjectiveSortOrder {
    Ascending = 0,
    Descending = 1,
}

export enum PaletteColor {
    White = 0,
    Orange = 1,
    Magenta = 2,
    LightBlue = 3,
    Yellow = 4,
    Lime = 5,
    Pink = 6,
    Gray = 7,
    Silver = 8,
    Cyan = 9,
    Purple = 10,
    Blue = 11,
    Brown = 12,
    Green = 13,
    Red = 14,
    Black = 15,
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

export enum SignSide {
    Back = "Back",
    Front = "Front",
}

export enum StructureAnimationMode {
    Blocks = "Blocks",
    Layers = "Layers",
    None = "None",
}

export enum StructureMirrorAxis {
    None = "None",
    X = "X",
    XZ = "XZ",
    Z = "Z",
}

export enum StructureRotation {
    None = "None",
    Rotate180 = "Rotate180",
    Rotate270 = "Rotate270",
    Rotate90 = "Rotate90",
}

export enum StructureSaveMode {
    Memory = "Memory",
    World = "World",
}

export enum TimeOfDay {
    Day = 1000,
    Noon = 6000,
    Sunset = 12000,
    Night = 13000,
    Midnight = 18000,
    Sunrise = 23000,
}

export enum WatchdogTerminateReason {
    Hang = "Hang",
    StackOverflow = "StackOverflow",
}

export enum WeatherType {
    Clear = "Clear",
    Rain = "Rain",
    Thunder = "Thunder",
}

export type BlockComponentTypeMap = {
    inventory: BlockInventoryComponent;
    piston: BlockPistonComponent;
    sign: BlockSignComponent;
    lavaContainer: BlockLavaContainerComponent;
    potionContainer: BlockPotionContainerComponent;
    snowContainer: BlockSnowContainerComponent;
    waterContainer: BlockWaterContainerComponent;
    recordPlayer: BlockRecordPlayerComponent;
    "minecraft:inventory": BlockInventoryComponent;
    "minecraft:piston": BlockPistonComponent;
    "minecraft:sign": BlockSignComponent;
    "minecraft:lavaContainer": BlockLavaContainerComponent;
    "minecraft:potionContainer": BlockPotionContainerComponent;
    "minecraft:snowContainer": BlockSnowContainerComponent;
    "minecraft:waterContainer": BlockWaterContainerComponent;
    "minecraft:recordPlayer": BlockRecordPlayerComponent;
};

export type EntityComponentTypeMap = {
    addrider: EntityAddRiderComponent;
    ageable: EntityAgeableComponent;
    breathable: EntityBreathableComponent;
    equippable: EntityEquippableComponent;
    healable: EntityHealableComponent;
    inventory: EntityInventoryComponent;
    item: EntityItemComponent;
    leashable: EntityLeashableComponent;
    tamemount: EntityTameMountComponent;
    npc: EntityNpcComponent;
    onfire: EntityOnFireComponent;
    projectile: EntityProjectileComponent;
    rideable: EntityRideableComponent;
    riding: EntityRidingComponent;
    strength: EntityStrengthComponent;
    tameable: EntityTameableComponent;
    type_family: EntityTypeFamilyComponent;
    can_climb: EntityCanClimbComponent;
    can_fly: EntityCanFlyComponent;
    can_power_jump: EntityCanPowerJumpComponent;
    fire_immune: EntityFireImmuneComponent;
    floats_in_liquid: EntityFloatsInLiquidComponent;
    is_baby: EntityIsBabyComponent;
    is_charged: EntityIsChargedComponent;
    is_chested: EntityIsChestedComponent;
    is_dyeable: EntityIsDyeableComponent;
    is_hidden_when_invisible: EntityIsHiddenWhenInvisibleComponent;
    is_ignited: EntityIsIgnitedComponent;
    is_illager_captain: EntityIsIllagerCaptainComponent;
    is_saddled: EntityIsSaddledComponent;
    is_shaking: EntityIsShakingComponent;
    is_sheared: EntityIsShearedComponent;
    is_stackable: EntityIsStackableComponent;
    is_stunned: EntityIsStunnedComponent;
    is_tamed: EntityIsTamedComponent;
    wants_jockey: EntityWantsJockeyComponent;
    color: EntityColorComponent;
    color2: EntityColor2Component;
    flying_speed: EntityFlyingSpeedComponent;
    friction_modifier: EntityFrictionModifierComponent;
    ground_offset: EntityGroundOffsetComponent;
    mark_variant: EntityMarkVariantComponent;
    push_through: EntityPushThroughComponent;
    scale: EntityScaleComponent;
    skin_id: EntitySkinIdComponent;
    variant: EntityVariantComponent;
    health: EntityHealthComponent;
    lava_movement: EntityLavaMovementComponent;
    "movement.amphibious": EntityMovementAmphibiousComponent;
    "movement.basic": EntityMovementBasicComponent;
    movement: EntityMovementComponent;
    "movement.fly": EntityMovementFlyComponent;
    "movement.generic": EntityMovementGenericComponent;
    "movement.glide": EntityMovementGlideComponent;
    "movement.hover": EntityMovementHoverComponent;
    "movement.jump": EntityMovementJumpComponent;
    "movement.skip": EntityMovementSkipComponent;
    "movement.sway": EntityMovementSwayComponent;
    "navigation.climb": EntityNavigationClimbComponent;
    "navigation.float": EntityNavigationFloatComponent;
    "navigation.fly": EntityNavigationFlyComponent;
    "navigation.generic": EntityNavigationGenericComponent;
    "navigation.hover": EntityNavigationHoverComponent;
    "navigation.walk": EntityNavigationWalkComponent;
    underwater_movement: EntityUnderwaterMovementComponent;
    "minecraft:addrider": EntityAddRiderComponent;
    "minecraft:ageable": EntityAgeableComponent;
    "minecraft:breathable": EntityBreathableComponent;
    "minecraft:equippable": EntityEquippableComponent;
    "minecraft:healable": EntityHealableComponent;
    "minecraft:inventory": EntityInventoryComponent;
    "minecraft:item": EntityItemComponent;
    "minecraft:leashable": EntityLeashableComponent;
    "minecraft:tamemount": EntityTameMountComponent;
    "minecraft:npc": EntityNpcComponent;
    "minecraft:onfire": EntityOnFireComponent;
    "minecraft:projectile": EntityProjectileComponent;
    "minecraft:rideable": EntityRideableComponent;
    "minecraft:riding": EntityRidingComponent;
    "minecraft:strength": EntityStrengthComponent;
    "minecraft:tameable": EntityTameableComponent;
    "minecraft:type_family": EntityTypeFamilyComponent;
    "minecraft:can_climb": EntityCanClimbComponent;
    "minecraft:can_fly": EntityCanFlyComponent;
    "minecraft:can_power_jump": EntityCanPowerJumpComponent;
    "minecraft:fire_immune": EntityFireImmuneComponent;
    "minecraft:floats_in_liquid": EntityFloatsInLiquidComponent;
    "minecraft:is_baby": EntityIsBabyComponent;
    "minecraft:is_charged": EntityIsChargedComponent;
    "minecraft:is_chested": EntityIsChestedComponent;
    "minecraft:is_dyeable": EntityIsDyeableComponent;
    "minecraft:is_hidden_when_invisible": EntityIsHiddenWhenInvisibleComponent;
    "minecraft:is_ignited": EntityIsIgnitedComponent;
    "minecraft:is_illager_captain": EntityIsIllagerCaptainComponent;
    "minecraft:is_saddled": EntityIsSaddledComponent;
    "minecraft:is_shaking": EntityIsShakingComponent;
    "minecraft:is_sheared": EntityIsShearedComponent;
    "minecraft:is_stackable": EntityIsStackableComponent;
    "minecraft:is_stunned": EntityIsStunnedComponent;
    "minecraft:is_tamed": EntityIsTamedComponent;
    "minecraft:wants_jockey": EntityWantsJockeyComponent;
    "minecraft:color": EntityColorComponent;
    "minecraft:color2": EntityColor2Component;
    "minecraft:flying_speed": EntityFlyingSpeedComponent;
    "minecraft:friction_modifier": EntityFrictionModifierComponent;
    "minecraft:ground_offset": EntityGroundOffsetComponent;
    "minecraft:mark_variant": EntityMarkVariantComponent;
    "minecraft:push_through": EntityPushThroughComponent;
    "minecraft:scale": EntityScaleComponent;
    "minecraft:skin_id": EntitySkinIdComponent;
    "minecraft:variant": EntityVariantComponent;
    "minecraft:health": EntityHealthComponent;
    "minecraft:lava_movement": EntityLavaMovementComponent;
    "minecraft:movement.amphibious": EntityMovementAmphibiousComponent;
    "minecraft:movement.basic": EntityMovementBasicComponent;
    "minecraft:movement": EntityMovementComponent;
    "minecraft:movement.fly": EntityMovementFlyComponent;
    "minecraft:movement.generic": EntityMovementGenericComponent;
    "minecraft:movement.glide": EntityMovementGlideComponent;
    "minecraft:movement.hover": EntityMovementHoverComponent;
    "minecraft:movement.jump": EntityMovementJumpComponent;
    "minecraft:movement.skip": EntityMovementSkipComponent;
    "minecraft:movement.sway": EntityMovementSwayComponent;
    "minecraft:navigation.climb": EntityNavigationClimbComponent;
    "minecraft:navigation.float": EntityNavigationFloatComponent;
    "minecraft:navigation.fly": EntityNavigationFlyComponent;
    "minecraft:navigation.generic": EntityNavigationGenericComponent;
    "minecraft:navigation.hover": EntityNavigationHoverComponent;
    "minecraft:navigation.walk": EntityNavigationWalkComponent;
    "minecraft:underwater_movement": EntityUnderwaterMovementComponent;
};

export type ItemComponentTypeMap = {
    food: ItemFoodComponent;
    enchantable: ItemEnchantableComponent;
    durability: ItemDurabilityComponent;
    cooldown: ItemCooldownComponent;
    "minecraft:food": ItemFoodComponent;
    "minecraft:enchantable": ItemEnchantableComponent;
    "minecraft:durability": ItemDurabilityComponent;
    "minecraft:cooldown": ItemCooldownComponent;
};

export class BiomeType {
    private constructor();
    readonly id: string;
}

export class BiomeTypes {
    private constructor();
    static get(typeName: string): BiomeType | undefined;
    static getAll(): BiomeType[];
}

export class Block {
    private constructor();
    readonly dimension: Dimension;
    /** 
     * @throws This property can throw when used.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isAir: boolean;
    /** 
     * @throws This property can throw when used.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isLiquid: boolean;
    /** 
     * @throws This property can throw when used.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isSolid: boolean;
    /** 
     * @throws This property can throw when used.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isWaterlogged: boolean;
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
    /** 
     * @throws This property can throw when used.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly type: BlockType;
    /** 
     * @throws This property can throw when used.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly typeId: string;
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
    above(steps?: number): Block | undefined;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    below(steps?: number): Block | undefined;
    bottomCenter(): Vector3;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    canPlace(blockToPlace: BlockPermutation | BlockType | string, faceToPlaceOn?: Direction): boolean;
    center(): Vector3;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    east(steps?: number): Block | undefined;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    getComponent<T extends keyof BlockComponentTypeMap>(componentId: T): BlockComponentTypeMap[T] | undefined;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    getItemStack(amount?: number, withData?: boolean): ItemStack | undefined;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    getRedstonePower(): number | undefined;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    getTags(): string[];
    /** 
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    hasTag(tag: string): boolean;
    isValid(): boolean;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    north(steps?: number): Block | undefined;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    offset(offset: Vector3): Block | undefined;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    setPermutation(permutation: BlockPermutation): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    setType(blockType: BlockType | string): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    setWaterlogged(isWaterlogged: boolean): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    south(steps?: number): Block | undefined;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    trySetPermutation(permutation: BlockPermutation): boolean;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    west(steps?: number): Block | undefined;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
    private constructor();
    readonly block: Block;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityFallOnEvent extends BlockEvent {
    private constructor();
    readonly entity?: Entity;
    readonly fallDistance: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentOnPlaceEvent extends BlockEvent {
    private constructor();
    readonly previousBlock: BlockPermutation;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerDestroyEvent extends BlockEvent {
    private constructor();
    readonly destroyedBlockPermutation: BlockPermutation;
    readonly player?: Player;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerInteractEvent extends BlockEvent {
    private constructor();
    readonly face: Direction;
    readonly faceLocation?: Vector3;
    readonly player?: Player;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent {
    private constructor();
    cancel: boolean;
    readonly face: Direction;
    permutationToPlace: BlockPermutation;
    readonly player?: Player;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentRandomTickEvent extends BlockEvent {
    private constructor();
}

export class BlockComponentRegistry {
    private constructor();
    /** 
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.EngineError}
     * 
     * {@link Error}
     */
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOffEvent extends BlockEvent {
    private constructor();
    readonly entity?: Entity;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOnEvent extends BlockEvent {
    private constructor();
    readonly entity?: Entity;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentTickEvent extends BlockEvent {
    private constructor();
}

export class BlockEvent {
    private constructor();
    readonly block: Block;
    readonly dimension: Dimension;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockExplodeAfterEvent extends BlockEvent {
    private constructor();
    readonly explodedBlockPermutation: BlockPermutation;
    readonly source?: Entity;
}

export class BlockExplodeAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: BlockExplodeAfterEvent) => void): (arg: BlockExplodeAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockExplodeAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly container?: Container;
    static readonly componentId = "minecraft:inventory";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockLavaContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = "minecraft:lavaContainer";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockLiquidContainerComponent extends BlockComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    fillLevel: number;
    isValidLiquid(): boolean;
}

export class BlockLocationIterator implements Iterable<Vector3> {
    private constructor();
    /** @throws This function can throw errors. */
    [Symbol.iterator](): Iterator<Vector3>;
    /** @throws This function can throw errors. */
    next(): IteratorResult<Vector3>;
}

export class BlockPermutation {
    private constructor();
    readonly type: BlockType;
    clone(): BlockPermutation;
    getAllStates(): Record<string, boolean | number | string>;
    getItemStack(amount?: number): ItemStack | undefined;
    getState(stateName: string): boolean | number | string | undefined;
    getTags(): string[];
    hasTag(tag: string): boolean;
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /** @throws This function can throw errors. */
    withState(name: string, value: boolean | number | string): BlockPermutation;
    /** @throws This function can throw errors. */
    static resolve(blockName: string, states?: Record<string, boolean | number | string>): BlockPermutation;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPistonComponent extends BlockComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly isMoving: boolean;
    /** @throws This property can throw when used. */
    readonly state: BlockPistonState;
    static readonly componentId = "minecraft:piston";
    /** @throws This function can throw errors. */
    getAttachedBlocks(): Block[];
    /** @throws This function can throw errors. */
    getAttachedBlocksLocations(): Vector3[];
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPotionContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = "minecraft:potionContainer";
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setPotionType(itemStack: ItemStack): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRecordPlayerComponent extends BlockComponent {
    private constructor();
    static readonly componentId = "minecraft:recordPlayer";
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    clearRecord(): void;
    /** @throws This function can throw errors. */
    isPlaying(): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setRecord(recordItemType: ItemType | string): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockSignComponent extends BlockComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly isWaxed: boolean;
    static readonly componentId = "minecraft:sign";
    /** @throws This function can throw errors. */
    getRawText(side?: SignSide): RawText | undefined;
    /** @throws This function can throw errors. */
    getText(side?: SignSide): string | undefined;
    /** @throws This function can throw errors. */
    getTextDyeColor(side?: SignSide): DyeColor | undefined;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setText(message: RawMessage | RawText | string, side?: SignSide): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setTextDyeColor(color?: DyeColor, side?: SignSide): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setWaxed(waxed: boolean): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockSnowContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = "minecraft:snowContainer";
}

export class BlockStates {
    private constructor();
    static get(stateName: string): BlockStateType | undefined;
    static getAll(): BlockStateType[];
}

export class BlockStateType {
    private constructor();
    readonly id: string;
    readonly validValues: (boolean | number | string)[];
}

export class BlockType {
    private constructor();
    readonly canBeWaterlogged: boolean;
    readonly id: string;
}

export class BlockTypes {
    private constructor();
    static get(typeName: string): BlockType | undefined;
    static getAll(): BlockType[];
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockVolume extends BlockVolumeBase {
    /** @remarks This property can't be edited in read-only mode. */
    from: Vector3;
    /** @remarks This property can't be edited in read-only mode. */
    to: Vector3;
    constructor(from: Vector3, to: Vector3);
    /** @remarks This function can't be called in read-only mode. */
    doesLocationTouchFaces(pos: Vector3): boolean;
    /** @remarks This function can't be called in read-only mode. */
    doesVolumeTouchFaces(other: BlockVolume): boolean;
    /** @remarks This function can't be called in read-only mode. */
    intersects(other: BlockVolume): BlockVolumeIntersection;
}

export class BlockVolumeBase {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    getBlockLocationIterator(): BlockLocationIterator;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getBoundingBox(): BoundingBox;
    /** @remarks This function can't be called in read-only mode. */
    getCapacity(): number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getMax(): Vector3;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getMin(): Vector3;
    /** @remarks This function can't be called in read-only mode. */
    getSpan(): Vector3;
    /** @remarks This function can't be called in read-only mode. */
    isInside(pos: Vector3): boolean;
    /** @remarks This function can't be called in read-only mode. */
    translate(delta: Vector3): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockWaterContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = "minecraft:waterContainer";
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addDye(itemType: ItemType): void;
    /** @throws This function can throw errors. */
    getCustomColor(): RGBA;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setCustomColor(color: RGBA): void;
}

export class BoundingBoxUtils {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    static createValid(min: Vector3, max: Vector3): BoundingBox;
    /** @remarks This function can't be called in read-only mode. */
    static dilate(box: BoundingBox, size: Vector3): BoundingBox;
    /** @remarks This function can't be called in read-only mode. */
    static equals(box: BoundingBox, other: BoundingBox): boolean;
    /** @remarks This function can't be called in read-only mode. */
    static expand(box: BoundingBox, other: BoundingBox): BoundingBox;
    /** @remarks This function can't be called in read-only mode. */
    static getCenter(box: BoundingBox): Vector3;
    /** @remarks This function can't be called in read-only mode. */
    static getIntersection(box: BoundingBox, other: BoundingBox): BoundingBox | undefined;
    /** @remarks This function can't be called in read-only mode. */
    static getSpan(box: BoundingBox): Vector3;
    /** @remarks This function can't be called in read-only mode. */
    static intersects(box: BoundingBox, other: BoundingBox): boolean;
    /** @remarks This function can't be called in read-only mode. */
    static isInside(box: BoundingBox, pos: Vector3): boolean;
    /** @remarks This function can't be called in read-only mode. */
    static isValid(box: BoundingBox): boolean;
    /** @remarks This function can't be called in read-only mode. */
    static translate(box: BoundingBox, delta: Vector3): BoundingBox;
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

export class Camera {
    private constructor();
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    clear(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setCamera(
        cameraPreset: string,
        setOptions?: 
            | CameraDefaultOptions
            | CameraSetFacingOptions
            | CameraSetLocationOptions
            | CameraSetPosOptions
            | CameraSetRotOptions,
    ): void;
}

export class ChatSendAfterEvent {
    private constructor();
    readonly message: string;
    readonly sender: Player;
    readonly targets?: Player[];
}

export class ChatSendAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ChatSendAfterEvent) => void): (arg: ChatSendAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ChatSendAfterEvent) => void): void;
}

export class ChatSendBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly message: string;
    readonly sender: Player;
    readonly targets?: Player[];
}

export class ChatSendBeforeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ChatSendBeforeEvent) => void): (arg: ChatSendBeforeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ChatSendBeforeEvent) => void): void;
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

export class CompoundBlockVolume {
    readonly capacity: number;
    readonly volumeCount: number;
    constructor(origin?: Vector3);
    /** @remarks This function can't be called in read-only mode. */
    clear(): void;
    /** @remarks This function can't be called in read-only mode. */
    getBlockLocationIterator(): BlockLocationIterator;
    /** @remarks This function can't be called in read-only mode. */
    getBoundingBox(): BoundingBox;
    /** @remarks This function can't be called in read-only mode. */
    getMax(): Vector3;
    /** @remarks This function can't be called in read-only mode. */
    getMin(): Vector3;
    /** @remarks This function can't be called in read-only mode. */
    getOrigin(): Vector3;
    /** @remarks This function can't be called in read-only mode. */
    isEmpty(): boolean;
    /** @remarks This function can't be called in read-only mode. */
    isInside(worldLocation: Vector3): boolean;
    /** @remarks This function can't be called in read-only mode. */
    peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined;
    /** @remarks This function can't be called in read-only mode. */
    popVolume(): boolean;
    /** @remarks This function can't be called in read-only mode. */
    pushVolume(item: CompoundBlockVolumeItem): void;
    /** @remarks This function can't be called in read-only mode. */
    replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean;
    /** @remarks This function can't be called in read-only mode. */
    setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void;
    /** @remarks This function can't be called in read-only mode. */
    translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void;
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
    /** @throws This function can throw errors. */
    getSlot(slot: number): ContainerSlot;
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

export class ContainerSlot {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    amount: number;
    /** 
     * @throws This property can throw when used.
     * 
     * {@link InvalidContainerSlotError}
     */
    readonly isStackable: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    keepOnDeath: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    lockMode: ItemLockMode;
    /** 
     * @throws This property can throw when used.
     * 
     * {@link InvalidContainerSlotError}
     */
    readonly maxAmount: number;
    /** @remarks This property can't be edited in read-only mode. */
    nameTag?: string;
    /** 
     * @throws This property can throw when used.
     * 
     * {@link minecraftcommon.EngineError}
     * 
     * {@link InvalidContainerSlotError}
     */
    readonly type: ItemType;
    /** 
     * @throws This property can throw when used.
     * 
     * {@link InvalidContainerSlotError}
     */
    readonly typeId: string;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    clearDynamicProperties(): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    getCanDestroy(): string[];
    /** 
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    getCanPlaceOn(): string[];
    /** 
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyIds(): string[];
    /** 
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyTotalByteCount(): number;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    getItem(): ItemStack | undefined;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    getLore(): string[];
    /** 
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    getTags(): string[];
    /** 
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    hasItem(): boolean;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    hasTag(tag: string): boolean;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    isStackableWith(itemStack: ItemStack): boolean;
    isValid(): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link InvalidContainerSlotError}
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link InvalidContainerSlotError}
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link InvalidContainerSlotError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    setItem(itemStack?: ItemStack): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link InvalidContainerSlotError}
     */
    setLore(loreList?: string[]): void;
}

export class DataDrivenEntityTriggerAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly eventId: string;
    getModifiers(): DefinitionModifier[];
}

export class DataDrivenEntityTriggerAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(
        callback: (arg: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: DataDrivenEntityTriggerAfterEvent) => void): void;
}

export class Dimension {
    private constructor();
    /** @throws This property can throw when used. */
    readonly heightRange: minecraftcommon.NumberRange;
    readonly id: string;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link UnloadedChunksError}
     */
    containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    fillBlocks(
        begin: Vector3,
        end: Vector3,
        block: BlockPermutation | BlockType | string,
        options?: BlockFillOptions,
    ): number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.EngineError}
     * 
     * {@link Error}
     */
    findClosestBiome(pos: Vector3, biomeToFind: BiomeType | string, options?: BiomeSearchOptions): Vector3 | undefined;
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
    /** 
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link UnloadedChunksError}
     */
    getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume;
    /** @throws This function can throw errors. */
    getEntities(options?: EntityQueryOptions): Entity[];
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
    /** @throws This function can throw errors. */
    getPlayers(options?: EntityQueryOptions): Player[];
    /** @remarks This function can't be called in read-only mode. */
    getWeather(): WeatherType;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
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
    setBlockPermutation(location: Vector3, permutation: BlockPermutation): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockType(location: Vector3, blockType: BlockType | string): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setWeather(weatherType: WeatherType, duration?: number): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnEntity(identifier: string, location: Vector3, options?: SpawnEntityOptions): Entity;
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

export class DimensionType {
    private constructor();
    readonly typeId: string;
}

export class DimensionTypes {
    private constructor();
    static get(dimensionTypeId: string): DimensionType | undefined;
    static getAll(): DimensionType[];
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

export class EffectAddAfterEvent {
    private constructor();
    readonly effect: Effect;
    readonly entity: Entity;
}

export class EffectAddAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(
        callback: (arg: EffectAddAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EffectAddAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EffectAddAfterEvent) => void): void;
}

export class EffectAddBeforeEvent {
    private constructor();
    cancel: boolean;
    duration: number;
    readonly effectType: string;
    readonly entity: Entity;
}

export class EffectAddBeforeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: EffectAddBeforeEvent) => void): (arg: EffectAddBeforeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EffectAddBeforeEvent) => void): void;
}

export class EffectType {
    private constructor();
    getName(): string;
}

export class EffectTypes {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    static get(identifier: string): EffectType | undefined;
    /** @remarks This function can't be called in read-only mode. */
    static getAll(): EffectType[];
}

export class EnchantmentType {
    readonly id: string;
    readonly maxLevel: number;
    /** @throws This function can throw errors. */
    constructor(enchantmentType: string);
}

export class EnchantmentTypes {
    private constructor();
    static get(enchantmentId: string): EnchantmentType | undefined;
}

export class Entity {
    private constructor();
    /** @throws This property can throw when used. */
    readonly dimension: Dimension;
    /** @throws This property can throw when used. */
    readonly fallDistance: number;
    readonly id: string;
    /** @throws This property can throw when used. */
    readonly isClimbing: boolean;
    /** @throws This property can throw when used. */
    readonly isFalling: boolean;
    /** @throws This property can throw when used. */
    readonly isInWater: boolean;
    /** @throws This property can throw when used. */
    readonly isOnGround: boolean;
    /** @throws This property can throw when used. */
    readonly isSleeping: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    isSneaking: boolean;
    /** @throws This property can throw when used. */
    readonly isSprinting: boolean;
    /** @throws This property can throw when used. */
    readonly isSwimming: boolean;
    readonly lifetimeState: EntityLifetimeState;
    /** @throws This property can throw when used. */
    readonly location: Vector3;
    /** @remarks This property can't be edited in read-only mode. */
    nameTag: string;
    readonly scoreboardIdentity?: ScoreboardIdentity;
    /** @throws This property can throw when used. */
    readonly target?: Entity;
    readonly typeId: string;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): Effect | undefined;
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
    /** @throws This function can throw errors. */
    clearDynamicProperties(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    clearVelocity(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    extinguishFire(useEffects?: boolean): boolean;
    /** @throws This function can throw errors. */
    getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    getComponent<T extends keyof EntityComponentTypeMap>(componentId: T): EntityComponentTypeMap[T] | undefined;
    getComponents(): EntityComponent[];
    /** @throws This function can throw errors. */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /** @throws This function can throw errors. */
    getDynamicPropertyIds(): string[];
    /** @throws This function can throw errors. */
    getDynamicPropertyTotalByteCount(): number;
    /** @throws This function can throw errors. */
    getEffect(effectType: EffectType | string): Effect | undefined;
    /** @throws This function can throw errors. */
    getEffects(): Effect[];
    /** @throws This function can throw errors. */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
    /** @throws This function can throw errors. */
    getHeadLocation(): Vector3;
    /** @throws This function can throw errors. */
    getProperty(identifier: string): boolean | number | string | undefined;
    /** @throws This function can throw errors. */
    getRotation(): Vector2;
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
    /** @throws This function can throw errors. */
    matches(options: EntityQueryOptions): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    remove(): void;
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
     * {@link minecraftcommon.EngineError}
     * 
     * {@link Error}
     */
    resetProperty(identifier: string): boolean | number | string;
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
    /** @throws This function can throw errors. */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setProperty(identifier: string, value: boolean | number | string): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setRotation(rotation: Vector2): void;
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
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly entityType: string;
    /** @throws This property can throw when used. */
    readonly spawnEvent: string;
    static readonly componentId = "minecraft:addrider";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly duration: number;
    /** @throws This property can throw when used. */
    readonly growUp: Trigger;
    /** @throws This property can throw when used. */
    readonly transformToItem: string;
    static readonly componentId = "minecraft:ageable";
    /** @throws This function can throw errors. */
    getDropItems(): string[];
    /** @throws This function can throw errors. */
    getFeedItems(): EntityDefinitionFeedItem[];
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
export class EntityBreathableComponent extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly breathesAir: boolean;
    /** @throws This property can throw when used. */
    readonly breathesLava: boolean;
    /** @throws This property can throw when used. */
    readonly breathesSolids: boolean;
    /** @throws This property can throw when used. */
    readonly breathesWater: boolean;
    /** @throws This property can throw when used. */
    readonly generatesBubbles: boolean;
    /** @throws This property can throw when used. */
    readonly inhaleTime: number;
    /** @throws This property can throw when used. */
    readonly suffocateTime: number;
    /** @throws This property can throw when used. */
    readonly totalSupply: number;
    static readonly componentId = "minecraft:breathable";
    /** @throws This function can throw errors. */
    getBreatheBlocks(): BlockPermutation[];
    /** @throws This function can throw errors. */
    getNonBreatheBlocks(): BlockPermutation[];
    /** @throws This function can throw errors. */
    setAirSupply(value: number): void;
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
export class EntityColor2Component extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly value: PaletteColor;
    static readonly componentId = "minecraft:color2";
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
    readonly entity: Entity;
}

export class EntityDefinitionFeedItem {
    private constructor();
    readonly growth: number;
    readonly item: string;
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
    /** @throws This function can throw errors. */
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
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
    readonly hitBlockPermutation: BlockPermutation;
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

export class EntityIterator implements Iterable<Entity> {
    private constructor();
    /** @throws This function can throw errors. */
    [Symbol.iterator](): Iterator<Entity>;
    /** @throws This function can throw errors. */
    next(): IteratorResult<Entity>;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLavaMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = "minecraft:lava_movement";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly softDistance: number;
    static readonly componentId = "minecraft:leashable";
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    leash(leashHolder: Entity): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unleash(): void;
}

export class EntityLoadAfterEvent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    entity: Entity;
}

export class EntityLoadAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: EntityLoadAfterEvent) => void): (arg: EntityLoadAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityLoadAfterEvent) => void): void;
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
export class EntityMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = "minecraft:movement";
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
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly speedWhenTurning: number;
    /** @throws This property can throw when used. */
    readonly startSpeed: number;
    static readonly componentId = "minecraft:movement.glide";
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
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly swayAmplitude: number;
    /** @throws This property can throw when used. */
    readonly swayFrequency: number;
    static readonly componentId = "minecraft:movement.sway";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationClimbComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.climb";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationComponent extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly avoidDamageBlocks: boolean;
    /** @throws This property can throw when used. */
    readonly avoidPortals: boolean;
    /** @throws This property can throw when used. */
    readonly avoidSun: boolean;
    /** @throws This property can throw when used. */
    readonly avoidWater: boolean;
    /** @throws This property can throw when used. */
    readonly canBreach: boolean;
    /** @throws This property can throw when used. */
    readonly canBreakDoors: boolean;
    /** @throws This property can throw when used. */
    readonly canFloat: boolean;
    /** @throws This property can throw when used. */
    readonly canJump: boolean;
    /** @throws This property can throw when used. */
    readonly canOpenDoors: boolean;
    /** @throws This property can throw when used. */
    readonly canOpenIronDoors: boolean;
    /** @throws This property can throw when used. */
    readonly canPassDoors: boolean;
    /** @throws This property can throw when used. */
    readonly canPathFromAir: boolean;
    /** @throws This property can throw when used. */
    readonly canPathOverLava: boolean;
    /** @throws This property can throw when used. */
    readonly canPathOverWater: boolean;
    /** @throws This property can throw when used. */
    readonly canSink: boolean;
    /** @throws This property can throw when used. */
    readonly canSwim: boolean;
    /** @throws This property can throw when used. */
    readonly canWalk: boolean;
    /** @throws This property can throw when used. */
    readonly canWalkInLava: boolean;
    /** @throws This property can throw when used. */
    readonly isAmphibious: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFloatComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.float";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFlyComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.fly";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationGenericComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.generic";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationHoverComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.hover";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.walk";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNpcComponent extends EntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    defaultScene: string;
    /** @remarks This property can't be edited in read-only mode. */
    name: string;
    /** @remarks This property can't be edited in read-only mode. */
    skinIndex: number;
    static readonly componentId = "minecraft:npc";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityOnFireComponent extends EntityComponent {
    private constructor();
    readonly onFireTicksRemaining: number;
    static readonly componentId = "minecraft:onfire";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityProjectileComponent extends EntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    airInertia: number;
    /** @remarks This property can't be edited in read-only mode. */
    catchFireOnHurt: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    critParticlesOnProjectileHurt: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    destroyOnProjectileHurt: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    gravity: number;
    /** @remarks This property can't be edited in read-only mode. */
    hitEntitySound?: string;
    /** @remarks This property can't be edited in read-only mode. */
    hitGroundSound?: string;
    /** @remarks This property can't be edited in read-only mode. */
    hitParticle?: string;
    /** @remarks This property can't be edited in read-only mode. */
    lightningStrikeOnHit: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    liquidInertia: number;
    /** @remarks This property can't be edited in read-only mode. */
    onFireTime: number;
    /** @remarks This property can't be edited in read-only mode. */
    owner?: Entity;
    /** @remarks This property can't be edited in read-only mode. */
    shouldBounceOnHit: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    stopOnHit: boolean;
    static readonly componentId = "minecraft:projectile";
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
    static readonly componentId = "minecraft:push_through";
}

export class EntityRemoveAfterEvent {
    private constructor();
    readonly removedEntityId: string;
    readonly typeId: string;
}

export class EntityRemoveAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(
        callback: (arg: EntityRemoveAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityRemoveAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityRemoveAfterEvent) => void): void;
}

export class EntityRemoveBeforeEvent {
    private constructor();
    readonly removedEntity: Entity;
}

export class EntityRemoveBeforeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: EntityRemoveBeforeEvent) => void): (arg: EntityRemoveBeforeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityRemoveBeforeEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRideableComponent extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly controllingSeat: number;
    /** @throws This property can throw when used. */
    readonly crouchingSkipInteract: boolean;
    /** @throws This property can throw when used. */
    readonly interactText: string;
    /** @throws This property can throw when used. */
    readonly passengerMaxWidth: number;
    /** @throws This property can throw when used. */
    readonly pullInEntities: boolean;
    /** @throws This property can throw when used. */
    readonly riderCanInteract: boolean;
    /** @throws This property can throw when used. */
    readonly seatCount: number;
    static readonly componentId = "minecraft:rideable";
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addRider(rider: Entity): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    ejectRider(rider: Entity): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    ejectRiders(): void;
    /** @throws This function can throw errors. */
    getFamilyTypes(): string[];
    /** @throws This function can throw errors. */
    getRiders(): Entity[];
    /** @throws This function can throw errors. */
    getSeats(): Seat[];
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRidingComponent extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly entityRidingOn: Entity;
    static readonly componentId = "minecraft:riding";
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

export class EntitySpawnAfterEvent {
    private constructor();
    readonly cause: EntityInitializationCause;
    /** @remarks This property can't be edited in read-only mode. */
    entity: Entity;
}

export class EntitySpawnAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: EntitySpawnAfterEvent) => void): (arg: EntitySpawnAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntitySpawnAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityStrengthComponent extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly max: number;
    /** @throws This property can throw when used. */
    readonly value: number;
    static readonly componentId = "minecraft:strength";
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly probability: number;
    static readonly componentId = "minecraft:tameable";
    /** @throws This function can throw errors. */
    getTameItems(): string[];
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    tame(): boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:tamemount";
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    tame(showParticles: boolean): void;
}

export class EntityType {
    private constructor();
    readonly id: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTypeFamilyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:type_family";
    /** @throws This function can throw errors. */
    getTypeFamilies(): string[];
    /** @throws This function can throw errors. */
    hasTypeFamily(typeFamily: string): boolean;
}

export class EntityTypeIterator implements Iterable<EntityType> {
    private constructor();
    /** @throws This function can throw errors. */
    [Symbol.iterator](): Iterator<EntityType>;
    /** @throws This function can throw errors. */
    next(): IteratorResult<EntityType>;
}

export class EntityTypes {
    private constructor();
    static get(identifier: string): EntityType | undefined;
    static getAll(): EntityType[];
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = "minecraft:underwater_movement";
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

export class ExplosionAfterEvent {
    private constructor();
    readonly dimension: Dimension;
    readonly source?: Entity;
    getImpactedBlocks(): Block[];
}

export class ExplosionAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ExplosionAfterEvent) => void): (arg: ExplosionAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ExplosionAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ExplosionBeforeEvent extends ExplosionAfterEvent {
    private constructor();
    cancel: boolean;
    setImpactedBlocks(blocks: Block[]): void;
}

export class ExplosionBeforeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ExplosionBeforeEvent) => void): (arg: ExplosionBeforeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ExplosionBeforeEvent) => void): void;
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

export class FilterGroup {
    private constructor();
}

export class FluidContainer {
    private constructor();
    static readonly maxFillLevel = 6;
    static readonly minFillLevel = 0;
}

export class GameRuleChangeAfterEvent {
    private constructor();
    readonly rule: GameRule;
    readonly value: boolean | number;
}

export class GameRuleChangeAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: GameRuleChangeAfterEvent) => void): (arg: GameRuleChangeAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: GameRuleChangeAfterEvent) => void): void;
}

export class GameRules {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    commandBlockOutput: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    commandBlocksEnabled: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doDayLightCycle: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doEntityDrops: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doFireTick: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doImmediateRespawn: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doInsomnia: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doLimitedCrafting: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doMobLoot: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doMobSpawning: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doTileDrops: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doWeatherCycle: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    drowningDamage: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    fallDamage: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    fireDamage: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    freezeDamage: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    functionCommandLimit: number;
    /** @remarks This property can't be edited in read-only mode. */
    keepInventory: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    maxCommandChainLength: number;
    /** @remarks This property can't be edited in read-only mode. */
    mobGriefing: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    naturalRegeneration: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    playersSleepingPercentage: number;
    /** @remarks This property can't be edited in read-only mode. */
    projectilesCanBreakBlocks: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    pvp: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    randomTickSpeed: number;
    /** @remarks This property can't be edited in read-only mode. */
    recipesUnlock: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    respawnBlocksExplode: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    sendCommandFeedback: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    showBorderEffect: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    showCoordinates: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    showDeathMessages: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    showRecipeMessages: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    showTags: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    spawnRadius: number;
    /** @remarks This property can't be edited in read-only mode. */
    tntExplodes: boolean;
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

export class ItemComponentRegistry {
    private constructor();
    /** 
     * @throws This function can throw errors.
     * 
     * {@link ItemCustomComponentAlreadyRegisteredError}
     * 
     * {@link ItemCustomComponentNameError}
     * 
     * {@link ItemCustomComponentReloadNewComponentError}
     * 
     * {@link ItemCustomComponentReloadNewEventError}
     * 
     * {@link ItemCustomComponentReloadVersionError}
     */
    registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void;
}

export class ItemComponentUseEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly cooldownCategory: string;
    /** @throws This property can throw when used. */
    readonly cooldownTicks: number;
    static readonly componentId = "minecraft:cooldown";
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getCooldownTicksRemaining(player: Player): number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    isCooldownCategory(cooldownCategory: string): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    startCooldown(player: Player): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    damage: number;
    /** @throws This property can throw when used. */
    readonly maxDurability: number;
    static readonly componentId = "minecraft:durability";
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getDamageChanceRange(): minecraftcommon.NumberRange;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemEnchantableComponent extends ItemComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly slots: EnchantmentSlot[];
    static readonly componentId = "minecraft:enchantable";
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link EnchantmentLevelOutOfBoundsError}
     * 
     * {@link EnchantmentTypeNotCompatibleError}
     * 
     * {@link EnchantmentTypeUnknownIdError}
     * 
     * {@link Error}
     */
    addEnchantment(enchantment: Enchantment): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link EnchantmentLevelOutOfBoundsError}
     * 
     * {@link EnchantmentTypeNotCompatibleError}
     * 
     * {@link EnchantmentTypeUnknownIdError}
     * 
     * {@link Error}
     */
    addEnchantments(enchantments: Enchantment[]): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link EnchantmentLevelOutOfBoundsError}
     * 
     * {@link EnchantmentTypeUnknownIdError}
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link EnchantmentTypeUnknownIdError}
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    /** @throws This function can throw errors. */
    getEnchantments(): Enchantment[];
    /** 
     * @throws This function can throw errors.
     * 
     * {@link EnchantmentTypeUnknownIdError}
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    removeAllEnchantments(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link EnchantmentTypeUnknownIdError}
     * 
     * {@link Error}
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly canAlwaysEat: boolean;
    /** @throws This property can throw when used. */
    readonly nutrition: number;
    /** @throws This property can throw when used. */
    readonly saturationModifier: number;
    /** @throws This property can throw when used. */
    readonly usingConvertsTo: string;
    static readonly componentId = "minecraft:food";
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
    /** @remarks This property can't be edited in read-only mode. */
    amount: number;
    readonly isStackable: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    keepOnDeath: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    lockMode: ItemLockMode;
    readonly maxAmount: number;
    /** @remarks This property can't be edited in read-only mode. */
    nameTag?: string;
    readonly type: ItemType;
    readonly typeId: string;
    /** @throws This function can throw errors. */
    constructor(itemType: ItemType | string, amount?: number);
    clearDynamicProperties(): void;
    clone(): ItemStack;
    /** @remarks This function can't be called in read-only mode. */
    getCanDestroy(): string[];
    /** @remarks This function can't be called in read-only mode. */
    getCanPlaceOn(): string[];
    getComponent<T extends keyof ItemComponentTypeMap>(componentId: T): ItemComponentTypeMap[T] | undefined;
    getComponents(): ItemComponent[];
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    getDynamicPropertyIds(): string[];
    getDynamicPropertyTotalByteCount(): number;
    getLore(): string[];
    getTags(): string[];
    hasComponent(componentId: string): boolean;
    hasTag(tag: string): boolean;
    isStackableWith(itemStack: ItemStack): boolean;
    matches(itemName: string, states?: Record<string, boolean | number | string>): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /** @throws This function can throw errors. */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
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

export class ItemTypes {
    private constructor();
    static get(itemId: string): ItemType | undefined;
    static getAll(): ItemType[];
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

// @ts-ignore Class inheritance allowed for native defined classes
export class ListBlockVolume extends BlockVolumeBase {
    constructor(locations: Vector3[]);
    /** @remarks This function can't be called in read-only mode. */
    add(locations: Vector3[]): void;
    /** @remarks This function can't be called in read-only mode. */
    remove(locations: Vector3[]): void;
}

export class MessageReceiveAfterEvent {
    private constructor();
    readonly id: string;
    readonly message: string;
    readonly player: Player;
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
export class PistonActivateAfterEvent extends BlockEvent {
    private constructor();
    readonly isExpanding: boolean;
    readonly piston: BlockPistonComponent;
}

export class PistonActivateAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PistonActivateAfterEvent) => void): (arg: PistonActivateAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PistonActivateAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class Player extends Entity {
    private constructor();
    /** @throws This property can throw when used. */
    readonly camera: Camera;
    /** @throws This property can throw when used. */
    readonly isEmoting: boolean;
    /** @throws This property can throw when used. */
    readonly isFlying: boolean;
    /** @throws This property can throw when used. */
    readonly isGliding: boolean;
    /** @throws This property can throw when used. */
    readonly isJumping: boolean;
    /** @throws This property can throw when used. */
    readonly level: number;
    /** @throws This property can throw when used. */
    readonly name: string;
    /** @throws This property can throw when used. */
    readonly onScreenDisplay: ScreenDisplay;
    /** @remarks This property can't be edited in read-only mode. */
    selectedSlot: number;
    /** @throws This property can throw when used. */
    readonly totalXpNeededForNextLevel: number;
    /** @throws This property can throw when used. */
    readonly xpEarnedAtCurrentLevel: number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addExperience(amount: number): number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addLevels(amount: number): number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    eatItem(itemStack: ItemStack): void;
    /** @throws This function can throw errors. */
    getGameMode(): GameMode;
    /** @throws This function can throw errors. */
    getItemCooldown(cooldownCategory: string): number;
    /** @throws This function can throw errors. */
    getSpawnPoint(): DimensionLocation | undefined;
    /** @throws This function can throw errors. */
    getTotalXp(): number;
    /** @throws This function can throw errors. */
    isOp(): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    playSound(soundId: string, soundOptions?: PlayerSoundOptions): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    postClientMessage(id: string, value: string): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    resetLevel(): void;
    /** @throws This function can throw errors. */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setGameMode(gameMode?: GameMode): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setOp(isOp: boolean): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    stopMusic(): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    private constructor();
    readonly brokenBlockPermutation: BlockPermutation;
    readonly itemStackAfterBreak?: ItemStack;
    readonly itemStackBeforeBreak?: ItemStack;
    readonly player: Player;
}

export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(
        callback: (arg: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerBreakBlockAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerBreakBlockAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockBeforeEvent extends BlockEvent {
    private constructor();
    cancel: boolean;
    itemStack?: ItemStack;
    readonly player: Player;
}

export class PlayerBreakBlockBeforeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(
        callback: (arg: PlayerBreakBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerBreakBlockBeforeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerBreakBlockBeforeEvent) => void): void;
}

export class PlayerDimensionChangeAfterEvent {
    private constructor();
    readonly fromDimension: Dimension;
    readonly fromLocation: Vector3;
    readonly player: Player;
    readonly toDimension: Dimension;
    readonly toLocation: Vector3;
}

export class PlayerDimensionChangeAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): (arg: PlayerDimensionChangeAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): void;
}

export class PlayerGameModeChangeAfterEvent {
    private constructor();
    readonly fromGameMode: GameMode;
    readonly player: Player;
    readonly toGameMode: GameMode;
}

export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PlayerGameModeChangeAfterEvent) => void): (arg: PlayerGameModeChangeAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerGameModeChangeAfterEvent) => void): void;
}

export class PlayerGameModeChangeBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly fromGameMode: GameMode;
    readonly player: Player;
    toGameMode: GameMode;
}

export class PlayerGameModeChangeBeforeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PlayerGameModeChangeBeforeEvent) => void): (arg: PlayerGameModeChangeBeforeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerGameModeChangeBeforeEvent) => void): void;
}

export class PlayerInteractWithBlockAfterEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    readonly faceLocation: Vector3;
    readonly itemStack?: ItemStack;
    readonly player: Player;
}

export class PlayerInteractWithBlockAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PlayerInteractWithBlockAfterEvent) => void): (arg: PlayerInteractWithBlockAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerInteractWithBlockAfterEvent) => void): void;
}

export class PlayerInteractWithBlockBeforeEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    cancel: boolean;
    readonly faceLocation: Vector3;
    readonly itemStack?: ItemStack;
    readonly player: Player;
}

export class PlayerInteractWithBlockBeforeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void): (arg: PlayerInteractWithBlockBeforeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void): void;
}

export class PlayerInteractWithEntityAfterEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly player: Player;
    readonly target: Entity;
}

export class PlayerInteractWithEntityAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void): (arg: PlayerInteractWithEntityAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void): void;
}

export class PlayerInteractWithEntityBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly itemStack?: ItemStack;
    readonly player: Player;
    readonly target: Entity;
}

export class PlayerInteractWithEntityBeforeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PlayerInteractWithEntityBeforeEvent) => void): (arg: PlayerInteractWithEntityBeforeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerInteractWithEntityBeforeEvent) => void): void;
}

export class PlayerIterator implements Iterable<Player> {
    private constructor();
    /** @throws This function can throw errors. */
    [Symbol.iterator](): Iterator<Player>;
    /** @throws This function can throw errors. */
    next(): IteratorResult<Player>;
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

export class PlayerLeaveBeforeEvent {
    private constructor();
    readonly player: Player;
}

export class PlayerLeaveBeforeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PlayerLeaveBeforeEvent) => void): (arg: PlayerLeaveBeforeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerLeaveBeforeEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockAfterEvent extends BlockEvent {
    private constructor();
    readonly player: Player;
}

export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(
        callback: (arg: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerPlaceBlockAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerPlaceBlockAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
    private constructor();
    cancel: boolean;
    readonly face: Direction;
    readonly faceLocation: Vector3;
    readonly permutationBeingPlaced: BlockPermutation;
    readonly player: Player;
}

export class PlayerPlaceBlockBeforeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(
        callback: (arg: PlayerPlaceBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerPlaceBlockBeforeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerPlaceBlockBeforeEvent) => void): void;
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
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getHiddenHudElements(): HudElement[];
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    hideAllExcept(hudElements?: HudElement[]): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    isForcedHidden(hudElement: HudElement): boolean;
    isValid(): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    resetHudElements(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
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

export class Seat {
    private constructor();
    readonly lockRiderRotation: number;
    readonly maxRiderCount: number;
    readonly minRiderCount: number;
    readonly position: Vector3;
    readonly seatRotation: number;
}

export class ServerMessageAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: MessageReceiveAfterEvent) => void): (arg: MessageReceiveAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: MessageReceiveAfterEvent) => void): void;
}

export class Structure {
    private constructor();
    readonly id: string;
    /** 
     * @throws This property can throw when used.
     * 
     * {@link InvalidStructureError}
     */
    readonly size: Vector3;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     * 
     * {@link InvalidStructureError}
     */
    getBlockPermutation(location: Vector3): BlockPermutation | undefined;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     * 
     * {@link InvalidStructureError}
     */
    getIsWaterlogged(location: Vector3): boolean;
    isValid(): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.EngineError}
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     * 
     * {@link InvalidStructureError}
     */
    saveAs(identifier: string, saveMode?: StructureSaveMode): Structure;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link InvalidStructureError}
     */
    saveToWorld(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     * 
     * {@link InvalidStructureError}
     */
    setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void;
}

export class StructureManager {
    private constructor();
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.EngineError}
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createFromWorld(
        identifier: string,
        dimension: Dimension,
        blockVolume: BlockVolume,
        options?: StructureCreateOptions,
    ): Structure;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     */
    delete(structure: string | Structure): boolean;
    /** @remarks This function can't be called in read-only mode. */
    get(identifier: string): Structure | undefined;
    /** @remarks This function can't be called in read-only mode. */
    getIds(): string[];
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     * 
     * {@link InvalidStructureError}
     */
    place(structure: string | Structure, dimension: Dimension, location: Vector3, options?: StructurePlaceOptions): void;
}

export class System {
    private constructor();
    readonly afterEvents: SystemAfterEvents;
    readonly beforeEvents: SystemBeforeEvents;
    readonly currentTick: number;
    clearJob(jobId: number): void;
    clearRun(runId: number): void;
    run(callback: () => void): number;
    runInterval(callback: () => void, tickInterval?: number): number;
    runJob(generator: Generator<void, void, void>): number;
    runTimeout(callback: () => void, tickDelay?: number): number;
}

export class SystemAfterEvents {
    private constructor();
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}

export class SystemBeforeEvents {
    private constructor();
    readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
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

export class Trigger {
    eventName: string;
    constructor(eventName: string);
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

export class WatchdogTerminateBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly terminateReason: WatchdogTerminateReason;
}

export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: WatchdogTerminateBeforeEvent) => void): (arg: WatchdogTerminateBeforeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WatchdogTerminateBeforeEvent) => void): void;
}

export class WeatherChangeAfterEvent {
    private constructor();
    readonly dimension: string;
    readonly newWeather: WeatherType;
    readonly previousWeather: WeatherType;
}

export class WeatherChangeAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: WeatherChangeAfterEvent) => void): (arg: WeatherChangeAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WeatherChangeAfterEvent) => void): void;
}

export class WeatherChangeBeforeEvent {
    private constructor();
    cancel: boolean;
    duration: number;
    newWeather: WeatherType;
    readonly previousWeather: WeatherType;
}

export class WeatherChangeBeforeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: WeatherChangeBeforeEvent) => void): (arg: WeatherChangeBeforeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WeatherChangeBeforeEvent) => void): void;
}

export class World {
    private constructor();
    readonly afterEvents: WorldAfterEvents;
    readonly beforeEvents: WorldBeforeEvents;
    readonly gameRules: GameRules;
    readonly scoreboard: Scoreboard;
    readonly structureManager: StructureManager;
    /** @remarks This function can't be called in read-only mode. */
    broadcastClientMessage(id: string, value: string): void;
    clearDynamicProperties(): void;
    getAbsoluteTime(): number;
    /** @throws This function can throw errors. */
    getAllPlayers(): Player[];
    getDay(): number;
    getDefaultSpawnLocation(): Vector3;
    /** @throws This function can throw errors. */
    getDimension(dimensionId: string): Dimension;
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    getDynamicPropertyIds(): string[];
    getDynamicPropertyTotalByteCount(): number;
    /** @throws This function can throw errors. */
    getEntity(id: string): Entity | undefined;
    getMoonPhase(): MoonPhase;
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
    /** @throws This function can throw errors. */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
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
    readonly blockExplode: BlockExplodeAfterEventSignal;
    readonly buttonPush: ButtonPushAfterEventSignal;
    readonly chatSend: ChatSendAfterEventSignal;
    readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;
    readonly effectAdd: EffectAddAfterEventSignal;
    readonly entityDie: EntityDieAfterEventSignal;
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    readonly entityHurt: EntityHurtAfterEventSignal;
    readonly entityLoad: EntityLoadAfterEventSignal;
    readonly entityRemove: EntityRemoveAfterEventSignal;
    readonly entitySpawn: EntitySpawnAfterEventSignal;
    readonly explosion: ExplosionAfterEventSignal;
    readonly gameRuleChange: GameRuleChangeAfterEventSignal;
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    readonly itemUse: ItemUseAfterEventSignal;
    readonly itemUseOn: ItemUseOnAfterEventSignal;
    readonly leverAction: LeverActionAfterEventSignal;
    readonly messageReceive: ServerMessageAfterEventSignal;
    readonly pistonActivate: PistonActivateAfterEventSignal;
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal;
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;
    readonly playerJoin: PlayerJoinAfterEventSignal;
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    readonly tripWireTrip: TripWireTripAfterEventSignal;
    readonly weatherChange: WeatherChangeAfterEventSignal;
    readonly worldInitialize: WorldInitializeAfterEventSignal;
}

export class WorldBeforeEvents {
    private constructor();
    readonly chatSend: ChatSendBeforeEventSignal;
    readonly effectAdd: EffectAddBeforeEventSignal;
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    readonly explosion: ExplosionBeforeEventSignal;
    readonly itemUse: ItemUseBeforeEventSignal;
    readonly itemUseOn: ItemUseOnBeforeEventSignal;
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
    readonly weatherChange: WeatherChangeBeforeEventSignal;
    readonly worldInitialize: WorldInitializeBeforeEventSignal;
}

export class WorldInitializeAfterEvent {
    private constructor();
}

export class WorldInitializeAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: WorldInitializeAfterEvent) => void): (arg: WorldInitializeAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WorldInitializeAfterEvent) => void): void;
}

export class WorldInitializeBeforeEvent {
    private constructor();
    readonly blockTypeRegistry: BlockComponentRegistry;
    readonly itemComponentRegistry: ItemComponentRegistry;
}

export class WorldInitializeBeforeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: WorldInitializeBeforeEvent) => void): (arg: WorldInitializeBeforeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WorldInitializeBeforeEvent) => void): void;
}

export interface BiomeSearchOptions {
    boundingSize?: Vector3;
}

export interface BlockCustomComponent {
    beforeOnPlayerPlace?: (arg: BlockComponentPlayerPlaceBeforeEvent) => void;
    onEntityFallOn?: (arg: BlockComponentEntityFallOnEvent) => void;
    onPlace?: (arg: BlockComponentOnPlaceEvent) => void;
    onPlayerDestroy?: (arg: BlockComponentPlayerDestroyEvent) => void;
    onPlayerInteract?: (arg: BlockComponentPlayerInteractEvent) => void;
    onRandomTick?: (arg: BlockComponentRandomTickEvent) => void;
    onStepOff?: (arg: BlockComponentStepOffEvent) => void;
    onStepOn?: (arg: BlockComponentStepOnEvent) => void;
    onTick?: (arg: BlockComponentTickEvent) => void;
}

export interface BlockEventOptions {
    blockTypes?: string[];
    permutations?: BlockPermutation[];
}

export interface BlockFillOptions {
    matchingBlock?: BlockPermutation;
}

export interface BlockFilter {
    excludePermutations?: BlockPermutation[];
    excludeTags?: string[];
    excludeTypes?: string[];
    includePermutations?: BlockPermutation[];
    includeTags?: string[];
    includeTypes?: string[];
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
    blockFilter?: BlockFilter;
    includeLiquidBlocks?: boolean;
    includePassableBlocks?: boolean;
    maxDistance?: number;
}

export interface BoundingBox {
    max: Vector3;
    min: Vector3;
}

export interface CameraDefaultOptions {
    easeOptions: CameraEaseOptions;
}

export interface CameraEaseOptions {
    easeTime?: number;
    easeType?: EasingType;
}

export interface CameraFadeOptions {
    fadeColor?: RGB;
    fadeTime?: CameraFadeTimeOptions;
}

export interface CameraFadeTimeOptions {
    fadeInTime: number;
    fadeOutTime: number;
    holdTime: number;
}

export interface CameraSetFacingOptions {
    easeOptions?: CameraEaseOptions;
    facingEntity: Entity;
    location?: Vector3;
}

export interface CameraSetLocationOptions {
    easeOptions?: CameraEaseOptions;
    location: Vector3;
}

export interface CameraSetPosOptions {
    easeOptions?: CameraEaseOptions;
    facingLocation: Vector3;
    location?: Vector3;
}

export interface CameraSetRotOptions {
    easeOptions?: CameraEaseOptions;
    location?: Vector3;
    rotation: Vector2;
}

export interface CompoundBlockVolumeItem {
    action?: CompoundBlockVolumeAction;
    locationRelativity?: CompoundBlockVolumePositionRelativity;
    volume: BlockVolume;
}

export interface DefinitionModifier {
    addedComponentGroups: string[];
    removedComponentGroups: string[];
    triggers: Trigger[];
}

export interface DimensionLocation {
    dimension: Dimension;
    x: number;
    y: number;
    z: number;
}

export interface Enchantment {
    level: number;
    type: EnchantmentType;
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

export interface EntityDataDrivenTriggerEventOptions {
    entities?: Entity[];
    entityTypes?: string[];
    eventTypes?: string[];
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
    propertyOptions?: EntityQueryPropertyOptions[];
    scoreOptions?: EntityQueryScoreOptions[];
    tags?: string[];
    type?: string;
    volume?: Vector3;
}

export interface EntityQueryPropertyOptions {
    exclude?: boolean;
    propertyId: string;
    value?: 
        | boolean
        | string
        | EqualsComparison
        | GreaterThanComparison
        | GreaterThanOrEqualsComparison
        | LessThanComparison
        | LessThanOrEqualsComparison
        | NotEqualsComparison
        | RangeComparison;
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

export interface EqualsComparison {
    equals: boolean | number | string;
}

export interface ExplosionOptions {
    allowUnderwater?: boolean;
    breaksBlocks?: boolean;
    causesFire?: boolean;
    source?: Entity;
}

export interface GreaterThanComparison {
    greaterThan: number;
}

export interface GreaterThanOrEqualsComparison {
    greaterThanOrEquals: number;
}

export interface ItemCustomComponent {
    onUse?: (arg: ItemComponentUseEvent) => void;
}

export interface LessThanComparison {
    lessThan: number;
}

export interface LessThanOrEqualsComparison {
    lessThanOrEquals: number;
}

export interface MusicOptions {
    fade?: number;
    loop?: boolean;
    volume?: number;
}

export interface NotEqualsComparison {
    notEquals: boolean | number | string;
}

export interface PlayAnimationOptions {
    blendOutTime?: number;
    controller?: string;
    nextState?: string;
    players?: string[];
    stopExpression?: string;
}

export interface PlayerSoundOptions {
    location?: Vector3;
    pitch?: number;
    volume?: number;
}

export interface ProjectileShootOptions {
    uncertainty?: number;
}

export interface RangeComparison {
    lowerBound: number;
    upperBound: number;
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

export interface RawText {
    rawtext?: RawMessage[];
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

export interface SpawnEntityOptions {
    initialPersistence?: boolean;
}

export interface StructureCreateOptions {
    includeBlocks?: boolean;
    includeEntities?: boolean;
    saveMode?: StructureSaveMode;
}

export interface StructurePlaceOptions {
    animationMode?: StructureAnimationMode;
    animationSeconds?: number;
    includeBlocks?: boolean;
    includeEntities?: boolean;
    integrity?: number;
    integritySeed?: string;
    mirror?: StructureMirrorAxis;
    rotation?: StructureRotation;
    waterlogged?: boolean;
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
export class EnchantmentLevelOutOfBoundsError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantmentTypeNotCompatibleError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantmentTypeUnknownIdError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidContainerSlotError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidStructureError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentAlreadyRegisteredError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentNameError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewComponentError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewEventError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadVersionError extends Error {
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

// @ts-ignore Class inheritance allowed for native defined classes
export class UnloadedChunksError extends Error {
    private constructor();
}

export const HudElementsCount = 13;
export const HudVisibilityCount = 2;
export const MoonPhaseCount = 8;
export const TicksPerDay = 24000;
export const TicksPerSecond = 20;
export const system: System;
export const world: World;