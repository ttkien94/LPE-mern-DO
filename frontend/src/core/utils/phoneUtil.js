/**
 * Kiểm tra số điện thoại
 * @param {string || number} phone
 * @returns {boolean}
 */
export function phoneValidate(phone) {
  const regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  return phone.match(regex);
}
