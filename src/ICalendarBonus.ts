import * as t from 'io-ts';
import { IIdentifiable } from "./IIdentifiable";

export interface ICalendarBonus extends IIdentifiable {

}
export const calendarBonusT: t.Type<ICalendarBonus> = t.type({
  id: t.string,
});
