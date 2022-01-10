
import * as t from 'io-ts';
import { IIdentifiable } from '.';
import { enumT } from './io-ts-enum';

export enum AchievementStat {

  // 5x stats
  Kills = 'Kills',
  KillsAttacker = 'KillsAttacker',
  KillsCaster = 'KillsCaster',
  KillsDefender = 'KillsDefender',
  KillsHealer = 'KillsHealer',
  KillsRanger = 'KillsRanger',

  Damage = 'Damage',
  DamageAttacker = 'DamageAttacker',
  DamageCaster = 'DamageCaster',
  DamageDefender = 'DamageDefender',
  DamageHealer = 'DamageHealer',
  DamageRanger = 'DamageRanger',

  Moves = 'Moves',
  MovesAttacker = 'MovesAttacker',
  MovesCaster = 'MovesCaster',
  MovesDefender = 'MovesDefender',
  MovesHealer = 'MovesHealer',
  MovesRanger = 'MovesRanger',

  Attacks = 'Attacks',
  AttacksAttacker = 'AttacksAttacker',
  AttacksCaster = 'AttacksCaster',
  AttacksDefender = 'AttacksDefender',
  AttacksHealer = 'AttacksHealer',
  AttacksRanger = 'AttacksRanger',

  SkillsUsed = 'SkillsUsed',
  SkillsUsedAttacker = 'SkillsUsedAttacker',
  SkillsUsedCaster = 'SkillsUsedCaster',
  SkillsUsedDefender = 'SkillsUsedDefender',
  SkillsUsedHealer = 'SkillsUsedHealer',
  SkillsUsedRanger = 'SkillsUsedRanger',

  ConnectsUsed = 'ConnectsUsed',
  ConnectsUsedAttacker = 'ConnectsUsedAttacker',
  ConnectsUsedCaster = 'ConnectsUsedCaster',
  ConnectsUsedDefender = 'ConnectsUsedDefender',
  ConnectsUsedHealer = 'ConnectsUsedHealer',
  ConnectsUsedRanger = 'ConnectsUsedRanger',

  BattlesCleared = 'BattlesCleared',
  BattlesClearedAttacker = 'BattlesClearedAttacker',
  BattlesClearedCaster = 'BattlesClearedCaster',
  BattlesClearedDefender = 'BattlesClearedDefender',
  BattlesClearedHealer = 'BattlesClearedHealer',
  BattlesClearedRanger = 'BattlesClearedRanger',

  BattlesLost = 'BattlesLost',
  BattlesLostAttacker = 'BattlesLostAttacker',
  BattlesLostCaster = 'BattlesLostCaster',
  BattlesLostDefender = 'BattlesLostDefender',
  BattlesLostHealer = 'BattlesLostHealer',
  BattlesLostRanger = 'BattlesLostRanger',

  Deaths = 'Deaths',
  DeathsAttacker = 'DeathsAttacker',
  DeathsCaster = 'DeathsCaster',
  DeathsDefender = 'DeathsDefender',
  DeathsHealer = 'DeathsHealer',
  DeathsRanger = 'DeathsRanger',

  Misses = 'Misses',
  MissesAttacker = 'MissesAttacker',
  MissesCaster = 'MissesCaster',
  MissesDefender = 'MissesDefender',
  MissesHealer = 'MissesHealer',
  MissesRanger = 'MissesRanger',

  Dodges = 'Dodges',
  DodgesAttacker = 'DodgesAttacker',
  DodgesCaster = 'DodgesCaster',
  DodgesDefender = 'DodgesDefender',
  DodgesHealer = 'DodgesHealer',
  DodgesRanger = 'DodgesRanger',

  Healing = 'Healing',
  HealingAttacker = 'HealingAttacker',
  HealingCaster = 'HealingCaster',
  HealingDefender = 'HealingDefender',
  HealingHealer = 'HealingHealer',
  HealingRanger = 'HealingRanger',

  Revives = 'Revives',
  RevivesAttacker = 'RevivesAttacker',
  RevivesCaster = 'RevivesCaster',
  RevivesDefender = 'RevivesDefender',
  RevivesHealer = 'RevivesHealer',
  RevivesRanger = 'RevivesRanger',

  StatusEffectsInflicted = 'StatusEffectsInflicted',
  StatusEffectsInflictedAttacker = 'StatusEffectsInflictedAttacker',
  StatusEffectsInflictedCaster = 'StatusEffectsInflictedCaster',
  StatusEffectsInflictedDefender = 'StatusEffectsInflictedDefender',
  StatusEffectsInflictedHealer = 'StatusEffectsInflictedHealer',
  StatusEffectsInflictedRanger = 'StatusEffectsInflictedRanger',

  StatusEffectsCured = 'StatusEffectsCured',
  StatusEffectsCuredAttacker = 'StatusEffectsCuredAttacker',
  StatusEffectsCuredCaster = 'StatusEffectsCuredCaster',
  StatusEffectsCuredDefender = 'StatusEffectsCuredDefender',
  StatusEffectsCuredHealer = 'StatusEffectsCuredHealer',
  StatusEffectsCuredRanger = 'StatusEffectsCuredRanger',

  // elemental stats
  ElementsGenerated = 'ElementsGenerated',
  ElementsGeneratedAttacker = 'ElementsGeneratedAttacker',
  ElementsGeneratedCaster = 'ElementsGeneratedCaster',
  ElementsGeneratedDefender = 'ElementsGeneratedDefender',
  ElementsGeneratedHealer = 'ElementsGeneratedHealer',
  ElementsGeneratedRanger = 'ElementsGeneratedRanger',

  ElementsGeneratedFire = 'ElementsGeneratedFire',
  ElementsGeneratedIce = 'ElementsGeneratedIce',
  ElementsGeneratedWater = 'ElementsGeneratedWater',
  ElementsGeneratedThunder = 'ElementsGeneratedThunder',
  ElementsGeneratedLight = 'ElementsGeneratedLight',
  ElementsGeneratedDark = 'ElementsGeneratedDark',

  ElementsConsumed = 'ElementsConsumed',
  ElementsConsumedAttacker = 'ElementsConsumedAttacker',
  ElementsConsumedCaster = 'ElementsConsumedCaster',
  ElementsConsumedDefender = 'ElementsConsumedDefender',
  ElementsConsumedHealer = 'ElementsConsumedHealer',
  ElementsConsumedRanger = 'ElementsConsumedRanger',

  ElementsConsumedFire = 'ElementsConsumedFire',
  ElementsConsumedIce = 'ElementsConsumedIce',
  ElementsConsumedWater = 'ElementsConsumedWater',
  ElementsConsumedThunder = 'ElementsConsumedThunder',
  ElementsConsumedLight = 'ElementsConsumedLight',
  ElementsConsumedDark = 'ElementsConsumedDark',

  // other stats
  SpecificMapClears = 'SpecificMapClears',
  SpecificMapClearsBattle = 'SpecificMapClearsBattle',
  SpecificMapFails = 'SpecificMapFails',
  SpecificMapFailsBattle = 'SpecificMapFailsBattle',

  GoldSpent = 'GoldSpent',
  CrystalsSpent = 'CrystalsSpent',

  UnitsCollected = 'UnitsCollected',
  UnitsReinforced = 'UnitsReinforced',
  UnitsGT50 = 'UnitsGT50',
  UnitsGT60 = 'UnitsGT60',
  UnitsGT70 = 'UnitsGT70',

  WeaponCollected = 'WeaponCollected',
}

export const achievementStatEnumT: t.Type<AchievementStat> = enumT('AchievementStat', AchievementStat);

export interface IAchievementReward {
  name: string;
  quantity: number;
}

export const achievementRewardT: t.Type<IAchievementReward> = t.type({
  name: t.string,
  quantity: t.number
});

export interface IAchievement extends IIdentifiable {
  id: string;
  name: string;
  description: string;
  art: string;

  lockedBy?: string;

  requirements: {
    stat: AchievementStat;
    statValue: number;
    mapName?: string;
    mapNodeId?: number;
  };

  rewards: {
    accessories: IAchievementReward[];
    items: IAchievementReward[];
    characters: IAchievementReward[];
    weapons: IAchievementReward[];
  };
}

export const achievementT: t.Type<IAchievement> = t.intersection([
  t.type({
    id: t.string,
    name: t.string,
    description: t.string,
    art: t.string,

    requirements: t.intersection([
      t.type({
        stat: achievementStatEnumT,
        statValue: t.number
      }),
      t.partial({
        mapName: t.string,
        mapNodeId: t.number
      })
    ]),

    rewards: t.type({
      accessories: t.array(achievementRewardT),
      items: t.array(achievementRewardT),
      characters: t.array(achievementRewardT),
      weapons: t.array(achievementRewardT)
    })
  }),
  t.partial({
    lockedBy: t.string
  })
]);