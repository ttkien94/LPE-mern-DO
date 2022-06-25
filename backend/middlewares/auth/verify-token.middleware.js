/**
 * Author: Mạnh Đạt
 * On 7/7/2021
 */

const { verifyToken } = require("../../helpers/jwt.helper");
const { config } = require("../../config");

/**
 * Kiểm tra người dùng đã đăng nhập
 */
const authenticate = async (req, res, next) => {
  // Nhận token lên từ phía người dùng
  const token = req.body.token || req.query.token || req.header("token");
  const secretkey = config.credential.secretKey;

  // Giải mã token bằng hàm verfyToken
  if (token) {
    try {
      // Hàm verify nhận vào 2 tham số là token của khách hàng và secretkey của LPE
      const decode = await verifyToken(token, secretkey);
      // gửi token vào lần middleware tiếp theo
      req.user = decode;

      next();
    } catch (error) {
      res.status(400).send({
        status: "fail",
        message: "You have not login!",
      });
    }
  } else {
    // Lỗi nếu không nhận được token từ phía người dùng gửi lên
    return res.status(403).send({
      status: "fail",
      message: "Don't find your token",
    });
  }
};

/**
 * Kiểm tra phân quyền người dùng
 * array permission = ["admin", "client"]
 * 1. "admin" => admin = user.role => next()
 * 2. "client" => client = user.role => next()
 */

const authorize = (userTypeArray) => {
  return (req, res, next) => {
    const { user } = req;
    // xem user có quyền thực hiện action đó không
    if (userTypeArray.findIndex((role) => role === user.role) > -1) {
      // user có đủ quyền

      return next();
    } else {
      // Nếu user không có quyền
      return res.status(403).json({
        status: "fail",
        message: "You don't have permission!!!",
      });
    }
  };
};

module.exports = { authenticate, authorize };
