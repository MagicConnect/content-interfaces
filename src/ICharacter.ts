import * as t from 'io-ts';
import { IUnitSpritesheetData, unitSpritesheetDataT } from './ISpritesheetData';
import {
  Archetype,
  archetypeEnumT,
  PrimaryStat,
  primaryStatT,
  Stat,
  statEnumT,
  Weapon,
  weaponEnumT,
} from './BuildingBlocks';
import { IIdentifiable } from './IIdentifiable';
import { enumT } from './io-ts-enum';
import { string } from 'fp-ts';

export enum CharacterSpeed {
  VerySlow = 9,
  Slow = 7,
  Normal = 5,
  Fast = 3,
  VeryFast = 1,
}

export const characterSpeedEnumT: t.Type<CharacterSpeed> = enumT(
  'CharacterSpeed',
  CharacterSpeed,
);

export interface ICharacterAbility {
  name: string; // the name of the ability group
  abilities: string[]; // the abilities in the group
}

export const characterAbilityT: t.Type<ICharacterAbility> = t.type({
  name: t.string,
  abilities: t.array(t.string),
});

export interface ICharacterSkill {
  name: string; // the name of the skill
  lb: number; // the LB the skill is earned at
}

export const characterSkillT: t.Type<ICharacterSkill> = t.type({
  name: t.string,
  lb: t.number,
});

export interface ICharacter extends IIdentifiable {
  name: string; // character name
  art: string; // character base splash art
  headArt: string; // character head art
  title: string; // character title
  spritesheet: string; // character base spritesheet
  spritesheetData: IUnitSpritesheetData; // character spritesheet frame data
  reinforceItem: string; // item used to reinforce character
  speed: CharacterSpeed; // character speed

  archetype: Archetype; // character class/archetype
  weapon: Weapon; // weapon used by the character
  stars: 3 | 4 | 5; // character star value (3-5*)

  primaryStat: PrimaryStat; // primary character stat, used for basic attack scaling
  basePoints: Record<Archetype, number>; // base stat points bought per class
  baseStats: Record<Stat, number>; // base stat values (lv1, lb0)

  levelPoints: Record<Archetype, number>; // level stat points bought per class
  levelStats: Record<Stat, number>; // stats gained per level

  lbPoints: Record<Archetype, number>; // lb stat points bought per class
  lbStats: Record<Stat, number>; // stats gained per lb

  abilities: ICharacterAbility[]; // character abilities
  skills: ICharacterSkill[]; // character skills
  specialSkill: string; // character special ability
}

export const characterT: t.Type<ICharacter> = t.type({
  id: t.string,
  name: t.string,
  title: t.string,
  art: t.string,
  headArt: t.string,
  spritesheet: t.string,
  spritesheetData: unitSpritesheetDataT,
  reinforceItem: t.string,
  speed: characterSpeedEnumT,

  archetype: archetypeEnumT,
  weapon: weaponEnumT,
  stars: t.union([t.literal(3), t.literal(4), t.literal(5)]),

  primaryStat: primaryStatT,
  basePoints: t.record(archetypeEnumT, t.number),
  baseStats: t.record(statEnumT, t.number),

  levelPoints: t.record(archetypeEnumT, t.number),
  levelStats: t.record(statEnumT, t.number),

  lbPoints: t.record(archetypeEnumT, t.number),
  lbStats: t.record(statEnumT, t.number),

  abilities: t.array(characterAbilityT),
  skills: t.array(characterSkillT),
  specialSkill: t.string,
});
