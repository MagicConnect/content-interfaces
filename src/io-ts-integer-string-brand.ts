import { getOrElse } from 'fp-ts/Either';
import * as t from 'io-ts';

interface IntStringBrand {
  readonly IntString: unique symbol;
}

export const intStringT = t.brand(
  t.string,
  (s): s is t.Branded<string, IntStringBrand> => /\d+/ig.test(s),
  'IntString'
);

export type IntString = t.TypeOf<typeof intStringT>;

export function intStringToInt(intStr: IntString): t.Int {
  return getOrElse<unknown, t.Int>(() => {
    throw new Error(`intStr ${JSON.stringify(intStr)} somehow not actually a string containing an integer [SHOULD NEVER HAPPEN]`);
  })(
    t.Int.decode(parseInt(intStr, 10))
  );
}
