import * as t from 'io-ts';
import { IIdentifiable } from "./IIdentifiable";
import { enumT } from './io-ts-enum';

export enum CalendarBonusRepeat {
  Repeatable = 'Repeatable',
  NotRepeatable = 'NotRepeatable',
  ConditionallyRepeatable = 'ConditionallyRepeatable',
}

export const calendarBonusRepeatT = enumT('CalendarBonusRepeat', CalendarBonusRepeat);

export interface ICalendarBonusItem {
  day: number;
  itemId: string;
  quantity: number;
}

export const calendarBonusItemT: t.Type<ICalendarBonusItem> = t.type({
  day: t.number,
  itemId: t.string,
  quantity: t.number,
})

export interface ICalendarBonus extends IIdentifiable {
  name: string;
  description: string;
  activeStarts: string;
  activeEnds: string;
  calendarBonusRepeat: CalendarBonusRepeat;
  rewardItems: ICalendarBonusItem[];
}

export const calendarBonusT: t.Type<ICalendarBonus> = t.type({
  id: t.string,
  name: t.string,
  description: t.string,
  activeStarts: t.string,
  activeEnds: t.string,
  calendarBonusRepeat: calendarBonusRepeatT,
  rewardItems: t.array(calendarBonusItemT),
});
