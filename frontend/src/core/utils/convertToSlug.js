const from =
  "ÁÀẢÃẠĂẮẰẲẴẶÄÂẤẦẨẪẬÃÅĂÁẰẲẴÂẤẦẨẪČÇĆĎÉĚËÈÊẼĔȆẾÊẾỀỂỄỆĞÍÌÎÏİỊÍỈĨŇÑÓÖÒÔÕØÔỐỒỔỖỘƠỚỜỞỠỢŘŔŠŞŤÚŮÜÙÛƯỨỪỬỮỰÝŸỲỶỸỴŽáàảãạăắằẳẵặâấầẩẫậäâàãåăắằẳẵặâấầẩẩẫậảčçćďéěëèêẽĕȇếêếềểễệğíìîïỉĩịıňñóöòôõøðôốồổỗộơớớờởỡợřŕšşťúůüùûưứửữựữủũýÿỳỷỹỵžþÞĐđßÆa·/_,:;";

const to =
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCCDEEEEEEEEEEEEEEEGIIIIIIIIINNOOOOOOOOOOOOOOOOOORRSSTUUUUUUUUUUUYYYYYYZaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccdeeeeeeeeeeeeeeegiiiiiiiinnoooooooooooooooooooorrsstuuuuuuuuuuuuuyyyyyyzbBDdBAa------";

export const convertStringToSlug = (string) => {
  string = string.replace(/^\s+|\s+$/g, ""); // convert string to trim
  string = string.toLowerCase();

  for (let i = 0, l = from.length; i < l; i++) {
    string = string.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  string = string
    .replace(/[^a-z0-9 -]/g, "") // Xóa tất cả các ký tự có dấy hoặc ký tự đặc biệt
    .replace(/\s+/g, "-") // Thay khoảng trắng thành dấu -
    .replace(/-+/g, "-"); // Thay dấu -

  return string;
};
