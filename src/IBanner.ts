import * as t from 'io-ts';
import { IIdentifiable } from './IIdentifiable';

export interface IBannerRollable {
  name: string;
  isBannerSpecial: boolean;
}

export const bannerRollableT: t.Type<IBannerRollable> = t.type({
  name: t.string,
  isBannerSpecial: t.boolean,
});

export interface IBanner extends IIdentifiable {
  name: string;
  art: string;
  description: string;
  rollItem: string;

  activeStarts: string;
  activeEnds: string;

  characters: IBannerRollable[];
  accessories: IBannerRollable[];
  items: IBannerRollable[];
  weapons: IBannerRollable[];
}

export const bannerT: t.Type<IBanner> = t.type({
  id: t.string,
  name: t.string,
  art: t.string,
  description: t.string,
  rollItem: t.string,

  activeStarts: t.string,
  activeEnds: t.string,

  characters: t.array(bannerRollableT),
  accessories: t.array(bannerRollableT),
  items: t.array(bannerRollableT),
  weapons: t.array(bannerRollableT),
});
