import * as t from 'io-ts';
import { dupeableItemT, equippableItemT, IDupeableItem, IEquippableItem, IItem, itemT } from './IItem';

export type IAccessory = IItem & IEquippableItem & IDupeableItem & {
  
};

export const accessoryT: t.Type<IAccessory> = t.intersection([
  itemT,
  equippableItemT,
  dupeableItemT,
]);
