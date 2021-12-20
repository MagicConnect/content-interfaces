import * as t from 'io-ts';
import { enumT } from './io-ts-enum';
import { Element, elementEnumT, MonsterType, monsterTypeEnumT, Stat, statEnumT, StatusEffect, statusEffectEnumT } from './BuildingBlocks';

// enums for abilities
export enum AbilityTrigger {
  Always = 'Always',

  OnSelfDeath = 'OnSelfDeath',
  OnAllyDeath = 'OnAllyDeath',
  OnEnemyDeath = 'OnEnemyDeath',

  OnSelfHit = 'OnSelfHit',
  OnAllyHit = 'OnAllyHit',
  OnEnemyHit = 'OnEnemyHit',

  OnSelfHeal = 'OnSelfHeal',
  OnAllyHeal = 'OnAllyHeal',
  OnEnemyHeal = 'OnEnemyHeal',

  OnRoundStart = 'OnRoundStart',
  OnRoundEnd = 'OnRoundEnd',

  OnCombatStart = 'OnCombatStart'
}
export const abilityTriggerEnumT: t.Type<AbilityTrigger> = enumT('AbilityTrigger', AbilityTrigger);

export enum AbilityEffect {
  None = '', // used for editor

  // stat related
  StatBoost = 'StatBoost',
  ConvertStat = 'ConvertStat',

  HPRegen = 'HPRegen',
  MPRegen = 'MPRegen',
  HPLeech = 'HPLeech',
  MPLeech = 'MPLeech',

  SpecialGaugeBoost = 'SpecialGaugeBoost',
  SpecialGaugeRegen = 'SpecialGaugeRegen',
  SpecialGaugeLeech = 'SpecialGaugeLeech',

  // damage related
  Counterattack = 'Counterattack',

  OutgoingStatDamage = 'OutgoingStatDamage',
  IncomingStatDamage = 'IncomingStatDamage',

  OutgoingSkillDamage = 'OutgoingSkillDamage',
  OutgoingSpecialDamage = 'OutgoingSpecialDamage',
  OutgoingBasicAttackDamage = 'OutgoingBasicAttackDamage',
  OutgoingMonsterTypeDamage = 'OutgoingMonsterTypeDamage',
  IncomingMonsterTypeDamage = 'IncomingMonsterTypeDamage',

  OutgoingElementDamage = 'OutgoingElementDamage',
  IncomingElementDamage = 'IncomingElementDamage',

  DamageBoostSingleTarget = 'DamageBoostSingleTarget',
  DamageBoostMultiTarget = 'DamageBoostMultiTarget',

  NegateDamageInstances = 'NegateDamageInstances',

  // status effect related
  ResistStatusEffect = 'ResistStatusEffect',
  InflictStatusEffect = 'InflictStatusEffect',

  BasicAttackStatusEffect = 'BasicAttackStatusEffect',
  PhysicalAttackStatusEffect = 'PhysicalAttackStatusEffect',
  MagicalAttackStatusEffect = 'MagicalAttackStatusEffect',
  SkillStatusEffect = 'SkillStatusEffect',
  SpecialStatusEffect = 'SpecialStatusEffect',

  StatusEffectDuration = 'StatusEffectDuration',

  // explosion
  // BasicAttackExplodes = 'BasicAttackExplodes',
  // PhysicalAttackExplodes = 'PhysicalAttackExplodes',
  // MagicalAttackExplodes = 'MagicalAttackExplodes',
  // SkillExplodes = 'SkillExplodes',

  // misc
  PhysicalAttackElement = 'PhysicalAttackElement',
  MagicalAttackElement = 'MagicalAttackElement',

  SurviveDeath = 'SurviveDeath',
  AdditionalHit = 'AdditionalHit',

  CastSpeedChange = 'CastSpeedChange',
  CooldownChange = 'CooldownReductionChange',
  Overheal = 'Overheal',

  ModifyBaseSkill = 'ModifyBaseSkill'

}
export const abilityEffectEnumT: t.Type<AbilityEffect> = enumT('AbilityEffect', AbilityEffect);

export enum AbilityTarget {
  Self = 'Self',
  All = 'All',

  AllEnemies = 'AllEnemies',
  AllAllies = 'AllAllies',
  AllAlliesAndSelf = 'AllAlliesAndSelf',

  AllyIsArcher = 'AllyIsArcher',
  AllyIsNotArcher = 'AllyIsNotArcher',
  AllyIsAttacker = 'AllyIsAttacker',
  AllyNotAttacker = 'AllyNotAttacker',
  AllyIsCaster = 'AllyIsCaster',
  AllyNotCaster = 'AllyNotCaster',
  AllyIsDefender = 'AllyIsDefender',
  AllyNotDefender = 'AllyNotDefender',
  AllyIsHealer = 'AllyIsHealer',
  AllyNotHealer = 'AllyNotHealer',

}
export const abilityTargetEnumT: t.Type<AbilityTarget> = enumT('AbilityTarget', AbilityTarget);

export enum AbilityCondition {
  None = '', // used for editor

  AboveHP = 'AboveHP',
  BelowHP = 'BelowHP',
  AboveMP = 'AboveMP',
  BelowMP = 'BelowMP',
  AboveSPC = 'AboveSPC',
  BelowSPC = 'BelowSPC',

  EnemiesAlive = 'EnemiesAlive',
  EnemiesDead = 'EnemiesDead',
  AlliesAlive = 'AlliesAlive',
  AlliesDead = 'AlliesDead',

  SelfStatusEffect = 'SelfStatusEffect',
  SelfNoStatusEffect = 'SelfNoStatusEffect',

  FrontlineCharacters = 'FrontlineCharacters',          // the "first characters" seen by the enemies, ie, frontliners
  NotFrontlineCharacters = 'NotFrontlineCharacters',    // the back row characters, "defended" by the rest

  ArchersInParty = 'ArchersInParty',
  AttackersInParty = 'AttackersInParty',
  CastersInParty = 'CastersInParty',
  DefendersInParty = 'DefendersInParty',
  HealersInParty = 'HealersInParty',

  FirstTurns = 'FirstTurns'
}
export const abilityConditionEnumT: t.Type<AbilityCondition> = enumT('AbilityCondition', AbilityCondition);

// interfaces for ability props / abilities

export interface IAbilityEffectProps {
  effectTarget?: AbilityTarget;         // the target of the ability (used for effects like leech)

  isPercent?: boolean;                  // if this ability effect should change by a percent, this is true
  baseValue?: number;                   // the base value of the effect (used for effects that rely on stats)
  baseStat?: Stat;                      // the base stat to scale the ability from
  convertToStat?: Stat;                 // the stat to convert the base stat to
  skillName?: string;                   // the skill name to modify
  monsterType?: MonsterType;            // the monster type affected by the ability
  statusEffect?: StatusEffect;          // the status effect referenced by the ability
  // explodeRadius?: number;               // the explode radius of the ability
  element?: Element;                    // the element imbued by the ability
  surviveDeathReboundValue?: number;    // the survive HP rebound value
}
export const abilityEffectPropsT: t.Type<IAbilityEffectProps> = t.partial({
  effectTarget: abilityTargetEnumT,

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

export interface IAbilityConditionProps {
  isPercent?: boolean;                  // whether or not the condition relies on a percent

  hpValue?: number;                     // the hp value to check for for the ability condition
  mpValue?: number;                     // the mp value to check for for the ability condition
  spcValue?: number;                    // the spc value to check for for the ability condition
  enemyCount?: number;                // the number of enemies alive or dead to check for for the ability condition
  alliesCount?: number;                 // the number of allies alive or dead to check for for the ability condition

  selfStatusEffect?: string;            // the status effect to check for on self for the ability condition

  archetypesInParty?: number;              // the number of <archetype> in the party to check for for the ability condition

  firstTurns?: number;                  // the number of turns at the start of combat that the ability applies for
}
export const abilityConditionPropsT: t.Type<IAbilityConditionProps> = t.partial({
  isPercent: t.boolean,

  hpValue: t.number,
  mpValue: t.number,
  spcValue: t.number,
  enemyCount: t.number,
  alliesCount: t.number,

  selfStatusEffect: t.string,

  archetypesInParty: t.number,

  firstTurns: t.number,
});

export interface IAbilityEffect {
  value: AbilityEffect;
  props: IAbilityEffectProps;
  target: AbilityTarget;
}
export const abilityEffectT: t.Type<IAbilityEffect> = t.type({
  value: abilityEffectEnumT,
  props: abilityEffectPropsT,
  target: abilityTargetEnumT,
});

export interface IAbilityCondition {
  value: AbilityCondition;
  props: IAbilityConditionProps;
}
export const abilityConditionT: t.Type<IAbilityCondition> = t.type({
  value: abilityConditionEnumT,
  props: abilityConditionPropsT,
});

export interface IAbility {
  name: string;
  description: string;

  trigger: AbilityTrigger;
  effects: IAbilityEffect[];
  conditions: IAbilityCondition[];

  lbChanges: Record<number, IAbility & { shouldHide: boolean }>;
}
export const abilityT: t.Type<IAbility> = t.recursion('Ability', () =>
  t.type({
    name: t.string,
    description: t.string,

    trigger: abilityTriggerEnumT,
    effects: t.array(abilityEffectT),
    conditions: t.array(abilityConditionT),

    lbChanges: t.record(t.number, t.intersection([
      abilityT,
      t.type({ shouldHide: t.boolean })
    ])),
  })
);
