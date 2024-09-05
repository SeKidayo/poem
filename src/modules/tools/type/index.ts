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
 * 是否为字符串
 * @param data
 * @returns {boolean}
 */
export const isString = (data: unknown): boolean => {
  return detectType(data) === ENType.STRING;
};

/**
 * 是否为数字
 * @param data
 * @returns {boolean}
 */
export const isNumber = (data: unknown): boolean => {
  return detectType(data) === ENType.NUMBER;
};

/**
 * 是否为布尔值
 * @param data
 * @returns {boolean}
 */
export const isBoolean = (data: unknown): boolean => {
  return detectType(data) === ENType.BOOLEAN;
};

/**
 * 是否为函数
 * @param data
 * @returns {boolean}
 */
export const isFunction = (data: unknown): boolean => {
  return detectType(data) === ENType.FUNCTION;
};

/**
 * 是否为undefined
 * @param data
 * @returns {boolean}
 */
export const isUndefined = (data: unknown): boolean => {
  return detectType(data) === ENType.UNDEFINED;
};

/**
 * 是否为null
 * @param data
 * @returns {boolean}
 */
export const isNull = (data: unknown): boolean => {
  return detectType(data) === ENType.NULL;
};

/**
 * 是否为Symbol
 * @param data
 * @returns {boolean}
 */
export const isSymbol = (data: unknown): boolean => {
  return detectType(data) === ENType.SYMBOL;
};

/**
 * 是否为Date
 * @param data
 * @returns {boolean}
 */
export const isDate = (data: unknown): boolean => {
  return detectType(data) === ENType.DATE;
};

/**
 * 是否为RegExp
 * @param data
 * @returns {boolean}
 */
export const isRegExp = (data: unknown): boolean => {
  return detectType(data) === ENType.REGEXP;
};

/**
 * 是否为Error
 * @param data
 * @returns {boolean}
 */
export const isError = (data: unknown): boolean => {
  return detectType(data) === ENType.ERROR;
};

/**
 * 是否为Map
 * @param data
 * @returns {boolean}
 */
export const isMap = (data: unknown): boolean => {
  return detectType(data) === ENType.MAP;
};

/**
 * 是否为Set
 * @param data
 * @returns {boolean}
 */
export const isSet = (data: unknown): boolean => {
  return detectType(data) === ENType.SET;
};

/**
 * 是否为数组
 * @param data
 * @returns {boolean}
 */
export const isArray = (data: unknown): boolean => {
  return detectType(data) === ENType.ARRAY;
};

/**
 * 是否为对象
 * @param data
 * @returns {boolean}
 */
export const isObject = (data: unknown): boolean => {
  return detectType(data) === ENType.OBJECT;
};
