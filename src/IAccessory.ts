import * as t from 'io-ts';
import { PrimaryStat, primaryStatT } from './BuildingBlocks';
import { IItem, itemT } from './IItem';

export type IAccessory = IItem & {
  stars: 1|2|3|4|5;                       // accessory rarity
  primaryStat: PrimaryStat;               // accessory main stat

  abilities: string[];                    // accessory base abilities (un-upgraded)
}
export const accessoryT: t.Type<IAccessory> = t.intersection([
  itemT,
  t.type({
    stars: t.union([
      t.literal(1),
      t.literal(2),
      t.literal(3),
      t.literal(4),
      t.literal(5),
    ]),
    primaryStat: primaryStatT,
    abilities: t.array(t.string),
  })
]);
