import { formatPassTime } from '.';

describe('formatPassTime', () => {
  test('formatPassTime()返回值是否正常', () => {
    expect(formatPassTime(new Date())).toBe('刚刚');
  });
  test('formatPassTime()返回值是否正常', () => {
    expect(formatPassTime(new Date('2020'))).toBe('4年前');
  });
});
