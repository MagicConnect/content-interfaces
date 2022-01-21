import * as t from 'io-ts';
import { IIdentifiable } from './IIdentifiable';
import { enumT } from './io-ts-enum';

export enum ItemType {
  None = 'None',

  Weapon = 'Weapon',
  Accessory = 'Accessory',
  ShopToken = 'ShopToken',
  Gold = 'Gold',
  Crystal = 'Crystal',
  
  GeneralDraw = 'GeneralDraw',
  LimitedDraw = 'LimitedDraw',

  WeaponThreeStarDraw = 'WeaponThreeStarDraw',
  WeaponFourStarDraw = 'WeaponFourStarDraw',
  WeaponFiveStarDraw = 'WeaponFiveStarDraw',

  AccessoryThreeStarDraw = 'AccessoryThreeStarDraw',
  AccessoryFourStarDraw = 'AccessoryFourStarDraw',
  AccessoryFiveStarDraw = 'AccessoryFiveStarDraw',

  CharacterThreeStarDraw = 'CharacterThreeStarDraw',
  CharacterFourStarDraw = 'CharacterFourStarDraw',
  CharacterFiveStarDraw = 'CharacterFiveStarDraw',
  CharacterFiveStarDrawChoose = 'CharacterFiveStarDrawChoose',

  Sticker = 'Sticker',

  CosmeticBackdrop = 'CosmeticBackdrop',
  CosmeticCharacter = 'CosmeticCharacter',
  CosmeticBanner = 'CosmeticBanner',

  LBSmall = 'LBSmall',
  LBMedium = 'LBMedium',
  LBLarge = 'LBLarge',

  EssenceHP = 'EssenceHP',
  EssenceATK = 'EssenceATK',
  EssenceDEF = 'EssenceDEF',
  EssenceMAG = 'EssenceMAG',
  EssenceSPC = 'EssenceSPC',
  EssenceCRT = 'EssenceCRT',

  ReinforcePurpleSmall = 'ReinforcePurpleSmall',
  ReinforcePurpleMedium = 'ReinforcePurpleMedium',
  ReinforcePurpleLarge = 'ReinforcePurpleLarge',

  ReinforceBlueSmall = 'ReinforceBlueSmall',
  ReinforceBlueMedium = 'ReinforceBlueMedium',
  ReinforceBlueLarge = 'ReinforceBlueLarge',

  ReinforceGreenSmall = 'ReinforceGreenSmall',
  ReinforceGreenMedium = 'ReinforceGreenMedium',
  ReinforceGreenLarge = 'ReinforceGreenLarge',

  ReinforceYellowSmall = 'ReinforceYellowSmall',
  ReinforceYellowMedium = 'ReinforceYellowMedium',
  ReinforceYellowLarge = 'ReinforceYellowLarge',

  ReinforceRedSmall = 'ReinforceRedSmall',
  ReinforceRedMedium = 'ReinforceRedMedium',
  ReinforceRedLarge = 'ReinforceRedLarge',

  ReinforceRainbowSmall = 'ReinforceRainbowSmall',
  ReinforceRainbowMedium = 'ReinforceRainbowMedium',
  ReinforceRainbowLarge = 'ReinforceRainbowLarge',

  XPWeaponSmall = 'XPWeaponSmall',
  XPWeaponMedium = 'XPWeaponMedium',
  XPWeaponLarge = 'XPWeaponLarge',

  XPCharacterSmall = 'XPCharacterSmall',
  XPCharacterMedium = 'XPCharacterMedium',
  XPCharacterLarge = 'XPCharacterLarge',

  XPChipSmall = 'XPChipSmall',
  XPChipMedium = 'XPChipMedium',
  XPChipLarge = 'XPChipLarge',
}

export const itemTypeT = enumT('ItemType', ItemType);

export interface IItem extends IIdentifiable {
  name: string;
  art: string;
  description: string;
  sellValue: number;
  itemType: ItemType;

  cosmeticCharacterFor?: string;
}

export const itemT: t.Type<IItem> = t.intersection([
  t.type({
    id: t.string,
    name: t.string,
    art: t.string,
    description: t.string,
    sellValue: t.number,
    itemType: itemTypeT,
  }),
  t.partial({
    cosmeticCharacterFor: t.string
  })
]);
