import { ENType } from '../../../enums/ENType';

/**
 * JS数据类型判别
 * @param data
 * @returns {ENType}
 */
function detectType(data: unknown): ENType {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() as ENType;
}

/**
 * 是否字符串
 * @param data
 * @returns {boolean}
 */
export const isString = (data: unknown): boolean => {
  return detectType(data) === ENType.STRING;
};
