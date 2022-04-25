import * as t from 'io-ts';
import { Weapon, weaponEnumT as weaponTypeT, PrimaryStat, primaryStatT } from './BuildingBlocks';
import { IItem, itemT } from './IItem';

export type IWeapon = IItem & {
  weaponType: Weapon;                     // the type of weapon
  stars: 1|2|3|4|5;                       // weapon rarity
  primaryStat: PrimaryStat;               // weapon main stat
  secondaryStat?: PrimaryStat;            // weapon secondary stat
  hasHigherPotential?: boolean;           // whether the weapon has a higher potential than other items of its type (f.ex. banner weapons have a higher stat potential)

  abilities: string[];                    // weapon base abilities (un-upgraded)
}

export const weaponT: t.Type<IWeapon> = t.intersection([
  itemT,
  t.type({
    weaponType: weaponTypeT,
    stars: t.union([
      t.literal(1),
      t.literal(2),
      t.literal(3),
      t.literal(4),
      t.literal(5),
    ]),
    primaryStat: primaryStatT,
    abilities: t.array(t.string),
  }),
  t.partial({
    secondaryStat: primaryStatT,
    hasHigherPotential: t.boolean
  })
]);
