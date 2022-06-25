import moment from "moment-timezone";

/**
 *
 * @param {String} fullDate: Full date Tue Sep 19 2000 21:11:00 GMT+0700 (Indochina Time)
 * @param {String} typeFormat: ex: "DD-MM-yyyy"
 * @returns dd-MM-yyyy
 */

// const timezone = "Asia/Ho_Chi_Minh";

export const convertFullDate = (fullDate, typeFormat) => {
  return moment(fullDate).format(typeFormat);
};

/**
 * Function to convert `unix timestamp` to `UTC`
 * @param {number} time unix timestamp
 * @param {string} timezone timezone
 */
export const unixToTime = (timestamp) => {
  return moment.tz(parseInt(timestamp), "Asia/Ho_Chi_Minh").format();
};

/**
 * * Function to convert `string date` to `unix timestamp`
 * @param {string} time string date
 * @param {string} timezone timezone
 * @returns unix timestamp
 */

export const timeToUnix = (time) => {
  return moment(time).tz("Asia/Ho_Chi_Minh").format("x");
};
