import * as t from 'io-ts';
import { bannerT, IBanner } from './IBanner';
import { characterT, ICharacter } from './ICharacter';
import { accessoryT, IAccessory } from './IAccessory';
import { IItem, itemT } from './IItem';
import { IWeapon, weaponT } from './IWeapon';
import { IShop, shopT } from './IShop';
import { enemyT, IEnemy } from './IEnemy';
import { IMap, mapT } from './IMap';
import { abilityT, IAbility } from './IAbility';
import { ISkill, skillT } from './ISkill';
import { IAchievement, achievementT } from './IAchievement';
import { IStore, storeT } from './IStore';
import { calendarBonusT, ICalendarBonus } from './ICalendarBonus';

export interface IContentPack {
  abilities: IAbility[];
  accessories: IAccessory[];
  achievements: IAchievement[];
  banners: IBanner[];
  calendarBonuses: ICalendarBonus[];
  characters: ICharacter[];
  enemies: IEnemy[];
  items: IItem[];
  maps: IMap[];
  shops: IShop[];
  stores: IStore[];
  skills: ISkill[];
  weapons: IWeapon[];
}
export const contentPackT: t.Type<IContentPack> = t.type({
  abilities: t.array(abilityT),
  accessories: t.array(accessoryT),
  achievements: t.array(achievementT),
  banners: t.array(bannerT),
  calendarBonuses: t.array(calendarBonusT),
  characters: t.array(characterT),
  enemies: t.array(enemyT),
  items: t.array(itemT),
  maps: t.array(mapT),
  shops: t.array(shopT),
  stores: t.array(storeT),
  skills: t.array(skillT),
  weapons: t.array(weaponT),
});

export interface IArtPack {
  meta: {
    fileExt: string;
    basePath: string;
  };

  accessories: string[];
  achievements: string[];
  banners: string[];
  characterheads: string[];
  characters: string[];
  charactersheets: string[];
  enemies: string[];
  enemysheets: string[];
  items: string[];
  maps: string[];
  npcs: string[];
  skillicons: string[];
  weapons: string[];
}
export const artPackT: t.Type<IArtPack> = t.type({
  meta: t.type({
    fileExt: t.string,
    basePath: t.string,
  }),

  accessories: t.array(t.string),
  achievements: t.array(t.string),
  banners: t.array(t.string),
  characterheads: t.array(t.string),
  characters: t.array(t.string),
  charactersheets: t.array(t.string),
  enemies: t.array(t.string),
  enemysheets: t.array(t.string),
  items: t.array(t.string),
  maps: t.array(t.string),
  npcs: t.array(t.string),
  skillicons: t.array(t.string),
  weapons: t.array(t.string),
});
