import { IIdentifiable } from "./IIdentifiable";
import { ItemType } from "./IItem";
import * as t from 'io-ts';
import { enumT } from "./io-ts-enum";

export const itemTypeT = enumT('ItemType', ItemType);

export interface IItemBundle {
  itemType: ItemType;
  quantity: number;
}

export const itemBundleT: t.Type<IItemBundle> = t.type({
  itemType: itemTypeT,
  quantity: t.number,
})

export interface IStore extends IIdentifiable {
  id: string;
  name: string;
  items: IItemBundle[];
  cost: number;
}

export const storeT: t.Type<IStore> = t.type({
  id: t.string,
  name: t.string,
  items: t.array(itemBundleT),
  cost: t.number,
});

// export interface IBundle {
//   bundle: Record<string, IStore>;
// }

// export declare const bundleT: t.Type<IBundle>;