/**
 * Validation Email
 * @param {type: string} email
 */

// Regular Expression Email String
const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const ValidationEmail = (email) => {
  return re.test(String(email).toLowerCase());
};
