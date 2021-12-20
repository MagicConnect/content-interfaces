import * as t from 'io-ts';

export type BannerType = 'characters' | 'accessories' | 'items' | 'weapons';

export const bannerTypeT: t.Type<BannerType> = t.keyof({
  characters: null,
  accessories: null,
  items: null,
  weapons: null,
});

export interface IBannerRollable {
  name: string;
  isBannerSpecial: boolean;
}

export const bannerRollableT: t.Type<IBannerRollable> = t.type({
  name: t.string,
  isBannerSpecial: t.boolean,
});

export interface IBanner {
  name: string;
  art: string;
  description: string;
  type: BannerType;

  activeStarts: string;
  activeEnds: string;

  characters: IBannerRollable[];
  accessories: IBannerRollable[];
  items: IBannerRollable[];
  weapons: IBannerRollable[];
}

export const bannerT: t.Type<IBanner> = t.type({
  name: t.string,
  art: t.string,
  description: t.string,
  type: bannerTypeT,

  activeStarts: t.string,
  activeEnds: t.string,

  characters: t.array(bannerRollableT),
  accessories: t.array(bannerRollableT),
  items: t.array(bannerRollableT),
  weapons: t.array(bannerRollableT),
});
