import { max, min, sum, average } from '.';

describe('max', () => {
  test('max()返回值是否正常', () => {
    expect(max([1, 2, 3, 4, 5])).toBe(5);
  });
  test('min()返回值是否正常', () => {
    expect(min([1, 2, 3, 4, 5])).toBe(1);
  });
  test('sum()返回值是否正常', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });
  test('average()返回值是否正常', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });
});
