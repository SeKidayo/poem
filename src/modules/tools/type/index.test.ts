import { isString } from '.';

describe('isString', () => {
  test('检查值: true', () => {
    expect(isString(true)).toBe(false);
  });
  test('检查值: 1', () => {
    expect(isString(1)).toBe(false);
  });
  test('检查值: "1"', () => {
    expect(isString('1')).toBe(true);
  });
  test('检查值: null', () => {
    expect(isString(null)).toBe(false);
  });
});
