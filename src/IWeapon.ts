import * as t from 'io-ts';
import {
  Weapon,
  weaponEnumT as weaponTypeT,
  PrimaryStat,
  primaryStatT,
} from './BuildingBlocks';
import { dupeableItemT, equippableItemT, IDupeableItem, IEquippableItem, IItem, itemT } from './IItem';

export type IWeapon = IItem & IEquippableItem & IDupeableItem & {
  weaponType: Weapon;           // the type of weapon
  secondaryStat?: PrimaryStat;  // weapon secondary stat
  hasHigherPotential?: boolean; // whether the weapon has a higher potential than other items of its type (f.ex. banner weapons have a higher stat potential)
};

export const weaponT: t.Type<IWeapon> = t.intersection([
  itemT,
  equippableItemT,
  dupeableItemT,
  t.type({
    weaponType: weaponTypeT,
  }),
  t.partial({
    secondaryStat: primaryStatT,
    hasHigherPotential: t.boolean,
  }),
]);
