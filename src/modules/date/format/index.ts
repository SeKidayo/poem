/**
 * @file format date
 * @author seki
 */

/**
 * 格式化过去时间距当前时间的距离
 * @param {Date} passTime 过去的时间
 * @returns {string}
 */
export function formatPassTime(passTime: Date): string {
  const currentTime = new Date();
  const timeDiff = currentTime.getTime() - passTime.getTime();
  const day = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
  const hour = Math.floor(timeDiff / 1000 / 60 / 60);
  const minute = Math.floor(timeDiff / 1000 / 60);
  // const second = Math.floor(timeDiff / 1000);
  const month = Math.floor(day / 30);
  const year = Math.floor(month / 12);
  if (year > 0) {
    return `${year}年前`;
  }
  if (month > 0) {
    return `${month}个月前`;
  }
  if (day > 0) {
    return `${day}天前`;
  }
  if (hour > 0) {
    return `${hour}小时前`;
  }
  if (minute > 0) {
    return `${minute}分钟前`;
  }
  return `刚刚`;
}
