import { isString, isNumber, isBoolean, isFunction, isUndefined, isNull, isSymbol, isArray, isObject, isDate, isRegExp, isSet, isMap, isError } from '.';

describe('isString', () => {
  test('isString test1', () => {
    expect(isString(true)).toBe(false);
  });
  test('isNumber test1', () => {
    expect(isNumber(1)).toBe(true);
  });
  test('isBoolean test1', () => {
    expect(isBoolean(true)).toBe(true);
  });
  test('isFunction test1', () => {
    expect(isFunction(() => {})).toBe(true);
  });
  test('isUndefined test1', () => {
    expect(isUndefined(undefined)).toBe(true);
  });
  test('isNull test1', () => {
    expect(isNull(null)).toBe(true);
  });
  test('isSymbol test1', () => {
    expect(isSymbol(Symbol('1'))).toBe(true);
  });
  test('isArray test1', () => {
    expect(isArray([])).toBe(true);
  });
  test('isObject test1', () => {
    expect(isObject({})).toBe(true);
  });
  test('isDate test1', () => {
    expect(isDate(new Date())).toBe(true);
  });
  test('isRegExp test1', () => {
    expect(isRegExp(/1/)).toBe(true);
  });
  test('isSet test1', () => {
    expect(isSet(new Set())).toBe(true);
  });
  test('isMap test1', () => {
    expect(isMap(new Map())).toBe(true);
  });
  test('isError test1', () => {
    expect(isError(new Error())).toBe(true);
  });
});
