import jsSHA from "jssha";

// const for bill to pay course
const COMMAND = "pay";
const CURRENCY = "VND";
const LOCALE = "vn";
const VERSION = 2;

// domain of onepay
const urlPayment = "https://onepay.vn/paygate/vpcpay.op?";
// domain demo of onepay
// const urlPayment = "https://mtf.onepay.vn/paygate/vpcpay.op?";

// account payment
const accountPayment = {
  merchantId: "OP_LPETEAM",
  accessCode: "E2907B55",
  hashCode: "38C7AFBA6A821D326A11535C37B1DBE1",
};

// const accountPayment = {
//   merchantId: "TESTONEPAY",
//   accessCode: "6BEB2546",
//   hashCode: "6D0870CDE5F24F34F3915FB0045120DB",
// };

export const objectToQuery = (object) => {
  const queryString = Object.keys(object)
    .map((key) => `${key}=${object[key]}`)
    .join("&");

  const shaResult = createSha(queryString);

  const url = urlPayment + `${queryString}&vpc_SecureHash=${shaResult}`;

  return url;
};

const createSha = (query) => {
  let result = "";
  // Create object SHA-256 type TEXT
  const sha256 = new jsSHA("SHA-256", "TEXT");
  // import hashCode type HEX
  sha256.setHMACKey(accountPayment.hashCode, "HEX");
  sha256.update(query);

  result = sha256.getHMAC("HEX");
  return result.toUpperCase();
};

export const createOrderCourse = (detail, customIP, returnUrl) => {
  const params = {
    vpc_AccessCode: accountPayment.accessCode,
    vpc_Amount: detail.price * 100,
    vpc_CardList: detail.typepay,
    vpc_Command: COMMAND,
    vpc_Currency: CURRENCY,
    vpc_Locale: LOCALE,
    vpc_MerchTxnRef: detail.merchRef,
    vpc_Merchant: accountPayment.merchantId,
    vpc_OrderInfo: detail.merchRef.toUpperCase(),
    vpc_ReturnURL: returnUrl,
    vpc_TicketNo: customIP,
    vpc_Version: VERSION,
  };

  return objectToQuery(params);
};

export const compareSecurity = (params, hashSecurity) => {
  const hashParams = createSha(params);

  if (hashParams === hashSecurity) {
    return true;
  } else {
    return false;
  }
};
