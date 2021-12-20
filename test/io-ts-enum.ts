import test, { ExecutionContext } from 'ava';
import { right } from 'fp-ts/lib/Either';

import { enumT } from '../src/io-ts-enum';

enum StringEnumTest {
  One = 'one',
  Two = 'two'
}

enum NumberEnumTest {
  One = 1,
  Two = 2
}

function enumTestMacro(enumName: string, e: Record<string, string | number>) {
  const enumTestT = enumT(enumName, e);

  return {
    success: (t: ExecutionContext, input: string | number) => {
      t.deepEqual(enumTestT.decode(input), right(input));
    },
    fail: (t: ExecutionContext, input: string | number) => {
      t.deepEqual<'Left' | 'Right'>(enumTestT.decode(input)._tag, 'Left');
    }
  }
}

const stringEnumTestMacro = enumTestMacro('StringEnumTest', StringEnumTest);

test('string enum success - one', stringEnumTestMacro.success, 'one');
test('string enum success - two', stringEnumTestMacro.success, 'two');
test('string enum failure', stringEnumTestMacro.fail, 'three');

const numberEnumTestMacro = enumTestMacro('NumberEnumTest', NumberEnumTest);

test('number enum success - one', numberEnumTestMacro.success, 1);
test('number enum success - two', numberEnumTestMacro.success, 2);
test('number enum failure', numberEnumTestMacro.fail, 3);
