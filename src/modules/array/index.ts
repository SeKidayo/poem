/**
 * 获取数组中的最大值
 * @param array 数值数组
 * @returns
 */
export function max(array: number[]) {
  return Math.max(...array);
}

/**
 * 获取数组中的最小值
 * @param array 数值数组
 * @returns
 */
export function min(array: number[]) {
  return Math.min(...array);
}

/**
 * 数组求和
 * @param array 数值数组
 * @returns
 */
export function sum(array: number[]) {
  return array.reduce((pre, cur) => pre + cur);
}

/**
 * 数组求平均值
 * @param array 数值数组
 * @returns
 */
export function average(array: number[]) {
  return sum(array) / array.length;
}
