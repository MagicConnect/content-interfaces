import * as t from 'io-ts';
import { equippableItemT, IEquippableItem, IItem, itemT } from './IItem';

export type IAccessory = IItem & IEquippableItem & {
  
};

export const accessoryT: t.Type<IAccessory> = t.intersection([
  itemT,
  equippableItemT,
]);
