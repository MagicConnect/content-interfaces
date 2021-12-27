import * as t from 'io-ts';
import { enumT } from './io-ts-enum';
import { Element, elementEnumT, Stat, statEnumT, StatusEffect, statusEffectEnumT } from './BuildingBlocks';
import { IIdentifiable } from './IIdentifiable';

export enum SkillValidTargets {
  All = 'All',                                      // allow targetting for all units on both sides
  Enemies = 'Enemies',                              // allow targetting only for enemies
  Allies = 'Allies',                                // allow targetting only for allies
}
export const skillValidTargetsT = enumT('SkillValidTargets', SkillValidTargets);

export enum SkillActionPattern {
  SingleTarget = 'SingleTarget',                    // single target attack
  All = 'All',                                      // all targets
  SmallSquare = 'SmallSquare',                      // 2x2 square
  BigSquare = 'BigSquare',                          // 3x3 square
  VerticalLine = 'VerticalLine',                    // vertical line
  HorizontalLine = 'HorizontalLine',                // horizontal line
  DiagonalLeftRightLine = 'DiagonalLeftRightLine',  // diagonal line from left to right
  DiagonalRightLeftLine = 'DiagonalRightLeftLine',  // diagonal line from right to left
  Cross = 'Cross',                                  // vertical line + horizontal line
  DiagonalCross = 'DiagonalCross',                  // diagonal line LtR + diagonal line RtL
}
export const skillActionPatternT = enumT('SkillActionPattern', SkillActionPattern);

export interface ISkillActionStatusEffect {
  effect: StatusEffect;                             // status effect to apply
  value: number;                                    // value of the status effect (damage, percentage, etc)
  valueScaleStat?: Stat;                            // the stat by which to scale the value (if present charstat * value)
  duration: number;                                 // duration of the status effect
  probability: number;                              // probability of applying the status effect (0-100)
}
export const skillActionStatusEffectT: t.Type<ISkillActionStatusEffect> = t.intersection([
  t.type({
    effect: statusEffectEnumT,
    value: t.number,
    duration: t.number,
    probability: t.number,
  }),
  t.partial({
    valueScaleStat: statEnumT,
  })
]);

export interface ISkillAction {
  pattern: SkillActionPattern;                        // attack pattern
  validTargets: SkillValidTargets;                    // valid targets for the attack
  castTime: number;                                   // cast time in round (0 = instant, 1+ = delay)
  elements: Element[];                                // element of the attack
  push: number;                                       // # of tiles to push the target away from the caster
  pull: number;                                       // # of tiles to pull the target towards the caster
  statusEffectChanges: ISkillActionStatusEffect[];    // status effect changes to the target
  statScaling: Record<Stat, number>;                  // stat scaling of the attack, eg { ATK: 200 } for 200% ATK
  hits: number;                                       // the number of hits the attack will do
  dropsTrap: boolean;                                 // whether the attack drops a trap that does this attack later, as opposed to casting it right away
}
export const skillActionT: t.Type<ISkillAction> = t.type({
  pattern: skillActionPatternT,
  validTargets: skillValidTargetsT,
  castTime: t.number,
  elements: t.array(elementEnumT),
  push: t.number,
  pull: t.number,
  statusEffectChanges: t.array(skillActionStatusEffectT),
  statScaling: t.record(statEnumT, t.number),
  hits: t.number,
  dropsTrap: t.boolean,
});

export interface ISkill extends IIdentifiable {
  name: string;             // name of the skill
  description: string;      // description of the skill
  hpCost: number;           // HP cost of the skill
  mpCost: number;           // MP cost of the skill
  spcCost: number;          // SPC cost of the skill
  cooldown: number;         // cooldown of the skill in rounds

  actions: ISkillAction[];  // attack sequence for the skill
}
export const skillT: t.Type<ISkill> = t.type({
  id: t.string,
  name: t.string,
  description: t.string,
  hpCost: t.number,
  mpCost: t.number,
  spcCost: t.number,
  cooldown: t.number,

  actions: t.array(skillActionT),
});
