import * as t from 'io-ts';

export function enumT<V extends string | number>(name: string, e: Record<string, string | V>): t.Type<V, V, unknown> {
  const isEnumValue = (input: unknown): input is V => Object.values<unknown>(e).includes(input);

  return new t.Type<V, V, unknown>(
    name,
    isEnumValue,
    (input, context) => isEnumValue(input) ? t.success(input) : t.failure(input, context),
    t.identity
  );
}
