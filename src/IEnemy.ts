import * as t from 'io-ts';
import { Archetype, archetypeEnumT, PrimaryStat, primaryStatT, Stat, statEnumT } from './BuildingBlocks';
import { IIdentifiable } from './IIdentifiable';

export interface IEnemy extends IIdentifiable {
  name: string;                           // character name
  art: string;
  spritesheet: string;

  primaryStat: PrimaryStat;               // primary character stat, used for basic attack scaling
  basePoints: Record<Archetype, number>;  // base stat points bought per class
  baseStats: Record<Stat, number>;        // base stat values (lv1, lb0)

  levelPoints: Record<Archetype, number>; // level stat points bought per class
  levelStats: Record<Stat, number>;       // stats gained per level

  abilities: string[];                    // character abilities
  skills: string[];                       // character skills
}

export const enemyT: t.Type<IEnemy> = t.type({
  id: t.string,
  name: t.string,
  art: t.string,
  spritesheet: t.string,

  primaryStat: primaryStatT,
  basePoints: t.record(archetypeEnumT, t.number),
  baseStats: t.record(statEnumT, t.number),

  levelPoints: t.record(archetypeEnumT, t.number),
  levelStats: t.record(statEnumT, t.number),

  abilities: t.array(t.string),
  skills: t.array(t.string),
});
