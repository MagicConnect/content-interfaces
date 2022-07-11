import { IIdentifiable } from "./IIdentifiable";
import { ItemType } from "./IItem";
import * as t from 'io-ts';
import { enumT } from "./io-ts-enum";

export const storeItemTypeT = enumT('ItemType', ItemType);

export interface IStoreItemBundle {
  itemType: ItemType;
  quantity: number;
}

export const storeItemBundleT: t.Type<IStoreItemBundle> = t.type({
  itemType: storeItemTypeT,
  quantity: t.number,
})

export interface IStore extends IIdentifiable {
  id: string;
  name: string;
  items: IStoreItemBundle[];
  cost: number;
}

export const storeT: t.Type<IStore> = t.type({
  id: t.string,
  name: t.string,
  items: t.array(storeItemBundleT),
  cost: t.number,
});
