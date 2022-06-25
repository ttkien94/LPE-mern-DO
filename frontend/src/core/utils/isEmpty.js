/**
 * Check empty Object
 * @params {Object}: input is Object
 * @return {Boolean} empty return true / not empty return false
 */
export const isEmpty = (object) => {
  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      return false;
    }
  }

  return JSON.stringify(object) === JSON.stringify({});
};
