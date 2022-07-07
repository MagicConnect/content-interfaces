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
  name: string;
  Items: IItemBundle[];
  cost: number;
}

export declare const storeT: t.Type<IStore>;

export interface IBundle {
  bundle: Record<string, IStore>;
}

export declare const bundleT: t.Type<IBundle>;