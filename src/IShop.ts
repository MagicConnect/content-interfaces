import * as t from 'io-ts';
import { IIdentifiable } from './IIdentifiable';
import { enumT } from './io-ts-enum';

export enum ShopReset {
  None = 'None',
  Daily = 'Daily',
  Weekly = 'Weekly',
  Monthly = 'Monthly',
}

export const shopResetT: t.Type<ShopReset> = enumT('ShopReset', ShopReset);

export interface IShopBuyable {
  name: string;
  cost: number;
  quantity: number;
}

export const shopBuyableT: t.Type<IShopBuyable> = t.type({
  name: t.string,
  cost: t.number,
  quantity: t.number,
});

export interface IShop extends IIdentifiable {
  name: string;
  description: string;
  currencyItem: string;
  activeStarts: string;
  activeEnds: string;
  shopReset: ShopReset;

  characters: IShopBuyable[];
  accessories: IShopBuyable[];
  items: IShopBuyable[];
  weapons: IShopBuyable[];
}

export const shopT: t.Type<IShop> = t.type({
  id: t.string,
  name: t.string,
  description: t.string,
  currencyItem: t.string,
  activeStarts: t.string,
  activeEnds: t.string,
  shopReset: shopResetT,

  characters: t.array(shopBuyableT),
  accessories: t.array(shopBuyableT),
  items: t.array(shopBuyableT),
  weapons: t.array(shopBuyableT),
});
