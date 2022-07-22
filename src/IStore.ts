import { IIdentifiable } from './IIdentifiable';
import * as t from 'io-ts';

export interface IStoreItemBundle {
  itemId: string;
  quantity: number;
}

export const storeItemBundleT: t.Type<IStoreItemBundle> = t.type({
  itemId: t.string,
  quantity: t.number,
});

export interface IStore extends IIdentifiable {
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
