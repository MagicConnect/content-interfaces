import * as t from 'io-ts';

export interface IUnitSpritesheetData {
  idleFrames: number;
  moveFrames: number;
  castFrames: number;
  attackFrames: number;
  onHitFrames: number;
  onDeathFrames: number;
  deadFrames: number;
}

export const spritesheetDataT: t.Type<IUnitSpritesheetData> = t.type({
  idleFrames: t.number,
  moveFrames: t.number,
  castFrames: t.number,
  attackFrames: t.number,
  onHitFrames: t.number,
  onDeathFrames: t.number,
  deadFrames: t.number,
});