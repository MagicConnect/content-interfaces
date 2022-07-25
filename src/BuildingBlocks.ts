import * as t from 'io-ts';
import { enumT } from './io-ts-enum';

export enum MonsterType {
  Beast = 'Beast',
  Bug = 'Bug',
  Celestial = 'Celestial',
  Corruption = 'Corruption',
  Flying = 'Flying',
  Humanoid = 'Humanoid',
  Mechanical = 'Mechanical',
  Plant = 'Plant',
  Undead = 'Undead',
}

export const monsterTypeEnumT: t.Type<MonsterType> = enumT(
  'MonsterType',
  MonsterType,
);

export enum Archetype {
  Attacker = 'Attacker',
  Caster = 'Caster',
  Defender = 'Defender',
  Healer = 'Healer',
  Ranger = 'Ranger',
}
export const archetypeEnumT: t.Type<Archetype> = enumT('Archetype', Archetype);

export enum Weapon {
  Axe = 'Axe',
  Bow = 'Bow',
  Dagger = 'Dagger',
  Greatsword = 'Greatsword',
  Knuckles = 'Knuckles',
  Staff = 'Staff',
  SwordAndShield = 'SwordAndShield',
}
export const weaponEnumT: t.Type<Weapon> = enumT('Weapon', Weapon);

export enum Element {
  Neutral = 'Neutral',
  Fire = 'Fire',
  Ice = 'Ice',
  Thunder = 'Thunder',
  Earth = 'Earth',
  Dark = 'Dark',
  Light = 'Light',
}
export const elementEnumT: t.Type<Element> = enumT('Element', Element);

export enum StatusEffect {
  // unique debuffs
  Curse = 'Curse', // outgoing damage reduced, incoming damage increased
  Poison = 'Poison', // taking damage every turn
  Silence = 'Silence', // cannot use skills
  Stun = 'Stun', // cannot act for a turn

  // unique buffs
  Barrier = 'Barrier', // lower incoming magical damage
  Deflect = 'Deflect', // negate incoming damage X times
  Regen = 'Regen', // heal every turn
  Shield = 'Shield', // lower incoming physical damage

  // stat buffs
  HPUp = 'HPUp',
  ATKUp = 'ATKUp',
  DEFUp = 'DEFUp',
  MAGUp = 'MAGUp',
  SPCUp = 'SPCUp',
  ACCUp = 'ACCUp',
  CRITUp = 'CRITUp',
  EVAUp = 'EVAUp',

  // stat debuffs
  HPDown = 'HPDown',
  ATKDown = 'ATKDown',
  DEFDown = 'DEFDown',
  MAGDown = 'MAGDown',
  SPCDown = 'SPCDown',
  ACCDown = 'ACCDown',
  CRITDown = 'CRITDown',
  EVADown = 'EVADown',
}
export const statusEffectEnumT: t.Type<StatusEffect> = enumT(
  'StatusEffect',
  StatusEffect,
);

export enum Stat {
  Attack = 'attack',
  Defense = 'defense',
  Magic = 'magic',
  Special = 'special',
  HP = 'hp',
  Evasion = 'evasion',
  Critical = 'critical',
  Accuracy = 'accuracy',
}
export const statEnumT: t.Type<Stat> = enumT('Stat', Stat);

export type PrimaryStat =
  | Stat.Attack
  | Stat.Defense
  | Stat.Magic
  | Stat.Special;
export type SecondaryStat =
  | Stat.HP
  | Stat.Evasion
  | Stat.Critical
  | Stat.Accuracy;

export const primaryStatT: t.Type<PrimaryStat> = t.union([
  t.literal(Stat.Attack),
  t.literal(Stat.Defense),
  t.literal(Stat.Magic),
  t.literal(Stat.Special),
]);
export const secondaryStatT: t.Type<SecondaryStat> = t.union([
  t.literal(Stat.HP),
  t.literal(Stat.Evasion),
  t.literal(Stat.Critical),
  t.literal(Stat.Accuracy),
]);
