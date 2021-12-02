
import { IBanner } from './IBanner';
import { ICharacter } from './ICharacter';
import { IChip } from './IChip';
import { IItem } from './IItem';
import { IWeapon } from './IWeapon';
import { IShop } from './IShop';
import { IEnemy } from './IEnemy';
import { IMap } from './IMap';
import { IAbility } from './IAbility';
import { ISkill } from '.';

export interface IContentPack {
  abilities: IAbility[];
  banners: IBanner[];
  characters: ICharacter[];
  chips: IChip[];
  enemies: IEnemy[];
  items: IItem[];
  maps: IMap[];
  shops: IShop[];
  skills: ISkill[];
  weapons: IWeapon[];
}

export interface IArtPack {
  meta: {
    fileExt: string;
    basePath: string;
  };

  banners: string[];
  characters: string[];
  charactersheets: string[];
  chips: string[];
  enemies: string[];
  enemysheets: string[];
  items: string[];
  maps: string[];
  weapons: string[];
}