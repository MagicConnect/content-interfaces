import * as t from 'io-ts';
import { Element, elementEnumT } from './BuildingBlocks';
import { IIdentifiable } from './IIdentifiable';
import { enumT } from './io-ts-enum';
import { intStringT } from './io-ts-integer-string-brand';

export enum MapDropType {
  FirstTimeClear = 'FirstTimeClear',

  // single player
  StageCompleteGuaranteed = 'StageCompleteGuaranteed',
  StageCompleteBonus = 'StageCompleteBonus',

  // multiplayer
  HostCompleteGuaranteed = 'HostCompleteGuaranteed',
  HostCompleteBonus = 'HostCompleteBonus',
  GuestCompleteGuaranteed = 'GuestCompleteGuaranteed',
  GuestCompleteBonus = 'GuestCompleteBonus',
}

export const mapDropTypeEnumT: t.Type<MapDropType> = enumT(
  'MapDropType',
  MapDropType,
);

export interface IMapNodeDroppable {
  name: string;
  dropPercent: number;
  quantity: number;
  maxQuantity: number;
  dropType: MapDropType;
}

export const mapNodeDroppableT: t.Type<IMapNodeDroppable> = t.type({
  name: t.string,
  dropPercent: t.number,
  quantity: t.number,
  maxQuantity: t.number,
  dropType: mapDropTypeEnumT
});

export interface IMap extends IIdentifiable {
  name: string;
  art: string;
  nodes: IMapNode[];
  nodeConnections: Record<number, number[]>;

  activeStarts: string;
  activeEnds: string;
}

export interface IMapNode {
  id: number;
  name: string;
  isDefaultAvailable: boolean;
  x: number;
  y: number;
  description: string;
  combat: IMapCombat;
  staminaCost: number;
  unlocksMap: string;

  abilities: string[];
  drops: IMapNodeDroppable[];
}

export interface IMapCombat {
  grid: Record<number, Record<number, IMapCombatGrid>>;
  usesDefaultSaturation: boolean;
  usesDefaultHardCap: boolean;
  elementSaturation: Record<Element, number>;
  elementHardCap: Record<Element, number>;
}

export interface IMapCombatGrid {
  enemy: IMapCombatEnemy;
}

export interface IMapCombatEnemy {
  name: string;
  level: number;
  width: number;
  height: number;
}
export const mapCombatEnemyT: t.Type<IMapCombatEnemy> = t.type({
  name: t.string,
  level: t.number,
  width: t.number,
  height: t.number,
});

export const mapCombatGridT: t.Type<IMapCombatGrid> = t.type({
  enemy: mapCombatEnemyT,
});

export const mapCombatT: t.Type<IMapCombat> = t.type({
  grid: t.record(t.string, t.record(t.string, mapCombatGridT)),
  usesDefaultSaturation: t.boolean,
  usesDefaultHardCap: t.boolean,
  elementSaturation: t.record(elementEnumT, t.number),
  elementHardCap: t.record(elementEnumT, t.number),
});

export const mapNodeT: t.Type<IMapNode> = t.type({
  id: t.number,
  name: t.string,
  isDefaultAvailable: t.boolean,
  x: t.number,
  y: t.number,
  description: t.string,
  combat: mapCombatT,
  staminaCost: t.number,
  unlocksMap: t.string,

  abilities: t.array(t.string),
  drops: t.array(mapNodeDroppableT),
});

export const mapT: t.Type<IMap> = t.type({
  id: t.string,
  name: t.string,
  art: t.string,
  nodes: t.array(mapNodeT),
  nodeConnections: t.record(intStringT, t.array(t.number)),

  activeStarts: t.string,
  activeEnds: t.string,
});

export interface ICombatReward {
  xp: number;
  currency: Record<string, number>;
}
export const combatRewardT: t.Type<ICombatReward> = t.type({
  xp: t.number,
  currency: t.record(t.string, t.number),
});
