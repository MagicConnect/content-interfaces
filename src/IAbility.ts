import * as t from 'io-ts';
import { enumT } from './io-ts-enum';
import {
  Element,
  elementEnumT,
  MonsterType,
  monsterTypeEnumT,
  Stat,
  statEnumT,
  StatusEffect,
  statusEffectEnumT,
} from './BuildingBlocks';
import { intStringT } from './io-ts-integer-string-brand';
import { IIdentifiable } from './IIdentifiable';

// enums for abilities
export enum ActiveEffectTrigger {
  OnSelfDeath = 'OnSelfDeath', // when this character dies
  OnAllyDeath = 'OnAllyDeath', // when an ally (not this character) dies
  OnEnemyDeath = 'OnEnemyDeath', // when an enemy dies

  OnSelfHit = 'OnSelfHit', // when this character hits an enemy
  OnAllyHit = 'OnAllyHit', // when an ally (not this character) hits an enemy
  OnEnemyHit = 'OnEnemyHit', // when an enemy hits anyone

  OnSelfHeal = 'OnSelfHeal', // when this character heals
  OnAllyHeal = 'OnAllyHeal', // when an ally (not this character) heals
  OnEnemyHeal = 'OnEnemyHeal', // when an enemy heals

  OnRoundStart = 'OnRoundStart', // when the round starts (before characters take their turns)
  OnRoundEnd = 'OnRoundEnd', // when the round ends (after characters have taken their turns)

  OnCombatStart = 'OnCombatStart', // when the combat starts
}

export const activeEffectTriggerEnumT: t.Type<ActiveEffectTrigger> = enumT(
  'ActiveEffectTrigger',
  ActiveEffectTrigger,
);

export enum HitType {
  BasicAttack = 'BasicAttack',
  Skill = 'Skill',
  Special = 'Special',
}

export const hitTypeEnumT: t.Type<HitType> = enumT('HitType', HitType);

export interface IActiveEffectTriggerProps {
  hitType?: HitType;
}

export const activeEffectTriggerPropsT: t.Type<IActiveEffectTriggerProps> =
  t.partial({
    hitType: hitTypeEnumT,
  });

export enum ActiveEffectType {
  None = '',

  StatBoostActive = 'StatBoostActive', // boost a characters stat by the value given

  HPRegen = 'HPRegen', // regenerate X hp when the trigger happens
  HPLeech = 'HPLeech', // leech X hp when the trigger happens (typically, OnXHit)

  SpecialGaugeBoost = 'SpecialGaugeBoost', // boost the connect gauge when the trigger happens
  SpecialGaugeLeech = 'SpecialGaugeLeech', // leech X gauge when the trigger happens (typically, OnXHit)

  // damage related
  Counterattack = 'Counterattack', // counterattack with a basic attack when trigger happens (probably, OnSelfHit)

  Push = 'Push', // push a creature X tiles
  Pull = 'Pull', // pull a creature X tiles

  ApplyPassive = 'ApplyPassive',
  ApplyStatusEffect = 'ApplyStatusEffect',
}

export const activeEffectTypeEnumT: t.Type<ActiveEffectType> = enumT(
  'ActiveEffectType',
  ActiveEffectType,
);

export enum PassiveEffectType {
  None = '',

  // stat related
  StatBoost = 'StatBoost', // boost a characters stat by the value given
  ConvertStat = 'ConvertStat', // convert X of a stat to the stat given

  OutgoingStatDamage = 'OutgoingStatDamage', // boost or reduce outgoing stat damage (e.g. +50% MAG means all MAG damage is boosted by an additional 50%)
  IncomingStatDamage = 'IncomingStatDamage', // boost or reduce incoming stat damage

  OutgoingDamage = 'OutgoingDamage', // boost or reduce outgoing damage of given hit type
  OutgoingMonsterTypeDamage = 'OutgoingMonsterTypeDamage', // boost or reduce outgoing damage to a specific monster type
  IncomingMonsterTypeDamage = 'IncomingMonsterTypeDamage', // boost or reduce incoming damage from a specific monster type

  OutgoingElementDamage = 'OutgoingElementDamage', // boost or reduce outgoing element damage
  IncomingElementDamage = 'IncomingElementDamage', // boost or reduce incoming element damage

  DamageBoostSingleTarget = 'DamageBoostSingleTarget', // boost or reduce damage to single target attacks (still applies if an AoE attack only hits one target)
  DamageBoostMultiTarget = 'DamageBoostMultiTarget', // boost or reduce damage that hit multiple targets (only applies if an AoE attack hits >1 target)

  ResistStatusEffect = 'ResistStatusEffect', // resist a status effect X% of the time (non-% values don't work here)
  InflictStatusEffect = 'InflictStatusEffect', // inflict a status element X% more of the time (non-% values don't work here)

  StatusEffectOnHit = 'StatusEffectOnHit', // apply a status effect X% of the time when doing a hit of given hit type

  StatusEffectDuration = 'StatusEffectDuration', // buff or reduce status effect durations by a certain value (% does not apply here)

  // explosion
  // BasicAttackExplodes = 'BasicAttackExplodes',
  // PhysicalAttackExplodes = 'PhysicalAttackExplodes',
  // MagicalAttackExplodes = 'MagicalAttackExplodes',
  // SkillExplodes = 'SkillExplodes',

  GenerateElementOnHit = 'GenerateElementOnHit', // generate a specific element and a number of stacks on a given hit type

  AttackElement = 'AttackElement', // treat all hits of given hit type additionally as X element

  SurviveDeath = 'SurviveDeath', // survive death when dealt X% of max HP with Y% HP
  AdditionalHit = 'AdditionalHit', // all skills deal an additional X hits

  CastSpeedChange = 'CastSpeedChange', // boost or reduce cast speed (no %)
  CooldownChange = 'CooldownReductionChange', // boost or reduce cooldowns (no %)
  Overheal = 'Overheal', // allow overhealing of HP in combat - healing matching the trigger/target can exceed max HP

  ModifyBaseSkill = 'ModifyBaseSkill', // modify a base skill SPECIFICALLY and only - will boost all damage/healing of that specific skill by X

  NegateHits = 'NegateHits', // negate a certain number of hits
  Stun = 'Stun', // stunned and cannot act
  Silence = 'Silence', // silenced and cannot do skills

  TriggerActive = 'TriggerActive',
}

export const passiveEffectTypeEnumT: t.Type<PassiveEffectType> = enumT(
  'PassiveEffectType',
  PassiveEffectType,
);

export enum EffectTarget {
  Self = 'Self',
  All = 'All',
  SkillTarget = 'SkillTarget',
  TriggerTarget = 'TriggerTarget',

  AllEnemies = 'AllEnemies',
  AllAllies = 'AllAllies',
  AllAlliesAndSelf = 'AllAlliesAndSelf',

  AllyIsRanger = 'AllyIsRanger',
  AllyIsNotRanger = 'AllyIsNotRanger',
  AllyIsAttacker = 'AllyIsAttacker',
  AllyNotAttacker = 'AllyNotAttacker',
  AllyIsCaster = 'AllyIsCaster',
  AllyNotCaster = 'AllyNotCaster',
  AllyIsDefender = 'AllyIsDefender',
  AllyNotDefender = 'AllyNotDefender',
  AllyIsHealer = 'AllyIsHealer',
  AllyNotHealer = 'AllyNotHealer',
}

export const effectTargetEnumT: t.Type<EffectTarget> = enumT(
  'EffectTarget',
  EffectTarget,
);

export enum AbilityCondition {
  None = '', // used for editor

  AboveHP = 'AboveHP',
  BelowHP = 'BelowHP',
  AboveSPC = 'AboveSPC',
  BelowSPC = 'BelowSPC',

  EnemiesAlive = 'EnemiesAlive',
  EnemiesDead = 'EnemiesDead',
  AlliesAlive = 'AlliesAlive',
  AlliesDead = 'AlliesDead',

  SelfStatusEffect = 'SelfStatusEffect',
  SelfNoStatusEffect = 'SelfNoStatusEffect',

  FrontlineCharacters = 'FrontlineCharacters', // the "first characters" seen by the enemies, ie, frontliners
  NotFrontlineCharacters = 'NotFrontlineCharacters', // the back row characters, "defended" by the rest

  RangersInParty = 'RangersInParty',
  AttackersInParty = 'AttackersInParty',
  CastersInParty = 'CastersInParty',
  DefendersInParty = 'DefendersInParty',
  HealersInParty = 'HealersInParty',

  FirstTurns = 'FirstTurns',
}

export const abilityConditionEnumT: t.Type<AbilityCondition> = enumT(
  'AbilityCondition',
  AbilityCondition,
);

// interfaces for ability props / abilities

export interface ICommonEffectProps {
  effectTarget?: EffectTarget; // the target of the ability (used for effects like leech)

  isPercent?: boolean; // if this ability effect should change by a percent, this is true
  baseValue?: number; // the base value of the effect (used for effects that rely on stats)
  baseStat?: Stat; // the base stat to scale the ability from
  convertToStat?: Stat; // the stat to convert the base stat to
  skillName?: string; // the skill name to modify
  monsterType?: MonsterType; // the monster type affected by the ability
  statusEffect?: StatusEffect; // the status effect referenced by the ability
  // explodeRadius?: number;               // the explode radius of the ability
  element?: Element; // the element imbued by the ability
  surviveDeathReboundValue?: number; // the survive HP rebound value
}

export const commonEffectPropsT: t.Type<ICommonEffectProps> = t.partial({
  effectTarget: effectTargetEnumT,

  isPercent: t.boolean,
  baseValue: t.number,
  baseStat: statEnumT,
  convertToStat: statEnumT,
  skillName: t.string,
  monsterType: monsterTypeEnumT,
  statusEffect: statusEffectEnumT,
  // explodeRadius: t.number,
  element: elementEnumT,
  surviveDeathReboundValue: t.number,
});

export interface IPassiveEffectProps extends ICommonEffectProps {
  hitType?: HitType;

  triggerWhen?: ActiveEffectTrigger;
  triggerProps?: IActiveEffectTriggerProps;
  triggerActiveEffects?: IActiveEffect[];
}

export const passiveEffectPropsT: t.Type<IPassiveEffectProps> = t.intersection([
  commonEffectPropsT,
  t.partial({
    hitType: hitTypeEnumT,

    triggerWhen: activeEffectTriggerEnumT,
    triggerProps: activeEffectTriggerPropsT,
    triggerActiveEffects: t.array(
      t.recursion<IActiveEffect>('IActiveEffect', () => activeEffectT),
    ),
  }),
]);

export interface IActiveEffectProps extends ICommonEffectProps {
  applyPassiveEffects?: IPassiveEffect[];
  duration?: number; // duration of the status effect or passive effect
  applyStatusEffectProbability?: number; // probability of applying the status effect (0-100)
}

export const activeEffectPropsT: t.Type<IActiveEffectProps> = t.intersection([
  commonEffectPropsT,
  t.partial({
    applyPassiveEffects: t.array(
      t.recursion<IPassiveEffect>('IPassiveEffect', () => passiveEffectT),
    ),
    duration: t.number,
    applyStatusEffectProbability: t.number,
  }),
]);

export interface IAbilityConditionProps {
  isPercent?: boolean; // whether or not the condition relies on a percent

  hpValue?: number; // the hp value to check for for the ability condition
  spcValue?: number; // the spc value to check for for the ability condition
  enemyCount?: number; // the number of enemies alive or dead to check for for the ability condition
  alliesCount?: number; // the number of allies alive or dead to check for for the ability condition

  selfStatusEffect?: string; // the status effect to check for on self for the ability condition

  archetypesInParty?: number; // the number of <archetype> in the party to check for for the ability condition

  firstTurns?: number; // the number of turns at the start of combat that the ability applies for
}

export const abilityConditionPropsT: t.Type<IAbilityConditionProps> = t.partial(
  {
    isPercent: t.boolean,

    hpValue: t.number,
    mpValue: t.number,
    spcValue: t.number,
    enemyCount: t.number,
    alliesCount: t.number,

    selfStatusEffect: t.string,

    archetypesInParty: t.number,

    firstTurns: t.number,
  },
);

export interface IActiveEffect {
  value: ActiveEffectType;
  props: IActiveEffectProps;
  target: EffectTarget;
}

export const activeEffectT: t.Type<IActiveEffect> = t.type({
  value: activeEffectTypeEnumT,
  props: activeEffectPropsT,
  target: effectTargetEnumT,
});

export interface IPassiveEffect {
  value: PassiveEffectType;
  props: IPassiveEffectProps;
  target: EffectTarget;
}

export const passiveEffectT: t.Type<IPassiveEffect> = t.type({
  value: passiveEffectTypeEnumT,
  props: passiveEffectPropsT,
  target: effectTargetEnumT,
});

export interface IAbilityCondition {
  value: AbilityCondition;
  props: IAbilityConditionProps;
}

export const abilityConditionT: t.Type<IAbilityCondition> = t.type({
  value: abilityConditionEnumT,
  props: abilityConditionPropsT,
});

export interface IAbilityUtility {
  name: string;
  description: string;
  effects: IPassiveEffect[];
  conditions: IAbilityCondition[];
}

export interface IAbility extends IIdentifiable, IAbilityUtility {
  isAbilityUsedAtBase: boolean;
  abilityChanges: Record<string, IAbilityUtility & { shouldHide: boolean }>;
}

export const abilityT: t.Type<IAbility> = t.recursion('Ability', () =>
  t.type({
    id: t.string,
    isAbilityUsedAtBase: t.boolean,
    name: t.string,
    description: t.string,

    effects: t.array(passiveEffectT),
    conditions: t.array(abilityConditionT),

    abilityChanges: t.record(
      intStringT,
      t.type({
        name: t.string,
        description: t.string,
        effects: t.array(passiveEffectT),
        conditions: t.array(abilityConditionT),
        shouldHide: t.boolean,
      }),
    ),
  }),
);
