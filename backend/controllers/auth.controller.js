const { User } = require("../models/users.model");
const bcrypt = require("bcryptjs/dist/bcrypt");
const { config } = require("../config");
const jwt = require("jsonwebtoken");
const { mailer } = require("../helpers/mailer.helper");
const { verifyToken } = require("../helpers/jwt.helper");

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const userLogin = await User.findByEmail(email);

  if (!userLogin) {
    res.status(500).send({
      status: "failed",
      message: "Email or Password incorrect!!!",
    });
  } else {
    const secretKey = config.credential.secretKey;
    const isAuth = bcrypt.compareSync(password, userLogin.password);

    if (isAuth) {
      const token = jwt.sign(
        {
          _id: userLogin._id,
          email: userLogin.email,
          role: userLogin.role,
        },
        secretKey
      );

      res.status(200).send({ status: "success", token, userLogin });
    } else {
      res.status(500).send({
        status: "failed",
        message: "Email or Password incorrect!!!",
      });
    }
  }
};

const signUp = async (req, res) => {
  const userData = req.body;

  const userRegiser = await User.findByEmail(userData.email);

  if (userRegiser) {
    res.status(500).send({
      status: "failed",
      message: "Register not success!!!, maybe your email already registered",
    });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(userData.password, salt);

    const secretKey = config.credential.secretKey;

    // Create Token
    const token = jwt.sign(
      {
        ...userData,
        password: hashPassword,
      },
      secretKey,
      { expiresIn: 60 * 5 } // (60 giây x 5) => 5 phút
    );

    const htmlTemplate = `<div>
      <h1>
        Xin chào, LPE nếu bạn đang đăng ký tài khoản tại LPE thì bạn hãy click vào link bên dưới
      </h1>

      <a href="${process.env.CLIENT_HOSTNAME}/xac-nhan-dang-ky/${token}">
        Click Vào Đây
      </a>

      <p>Nếu đây là sự nhầm lẫn, bạn có thể bỏ qua. Đây là Email tự động bạn không cần phải phản hồi. Cảm ơn bạn</p>
      </div>
      `;

    try {
      mailer(
        userData.email,
        "BƯỚC CUỐI HOÀN THÀNH VIỆC ĐĂNG KÝ TÀI KHOẢN",
        "Xác thực tài khoản",
        htmlTemplate
      );

      res.status(200).send({
        status: "success",
        token: token,
      });
    } catch (error) {
      res.status(500).send({
        status: "failed",
        message: "Register not success!!!, maybe your email already registered",
      });
    }
  }
};

const verifySignUp = async (req, res) => {
  const token = req.body.token || req.query.token || req.header("token");

  try {
    const decode = await verifyToken(token, config.credential.secretKey);

    const { name, email, gender, phone, birthDay, password } = decode;

    const newUser = new User({
      name,
      email,
      gender,
      phone,
      birthDay,
      password,
    });

    await newUser.save();

    res.status(200).send({
      status: "success",
      user: newUser,
    });
  } catch (error) {
    res.status(404).send({
      status: "failed",
      message: "Verify Email is not success. DB maybe error when save user",
    });
  }
};

const changePassword = async (req, res) => {
  const { id, newPassword, oldPassword } = req.body;

  let userInfo = await User.findById(id);

  if (!userInfo) {
    res.status(404).send({
      status: "failed",
      message: "Can't find user to change password!!!",
    });
  } else {
    const isAuth = bcrypt.compareSync(oldPassword, userInfo.password);

    if (isAuth) {
      const salt = bcrypt.genSaltSync(10);
      const hashNewPassword = bcrypt.hashSync(newPassword, salt);

      await User.findByIdAndUpdate(id, {
        password: hashNewPassword,
      }).exec();

      res.status(200).send({
        status: "success",
        message: "Changed Password Successfully!!!",
      });
    } else {
      res.status(404).send({
        status: "failed",
        message: "Can't change password, Wrong old password!!!",
      });
    }
  }
};

const forgotPassword = async (req, res) => {
  const email = req.body.email;

  const userForgot = await User.findByEmail(email);

  if (!userForgot) {
    res.status(404).send({
      status: "failed",
      message: "Email is not exist!!!",
    });
  } else {
    const secretKey = config.credential.secretKey;

    const token = jwt.sign(
      {
        email,
      },
      secretKey,
      { expiresIn: 60 * 5 } // (60 x 5) => 5 minutes
    );

    const htmlTemplate = `
    <p>
      Để lấy lại mật khẩu bạn truy cập đường link bên dưới.
    </p>
    <br />
    <a href="${process.env.CLIENT_HOSTNAME}/xac-nhan-quen-mat-khau/${token}">Click vào đây</a>
    `;

    // Create a link contains token email
    // /api/auth/veirfy-forgot-password/${token}
    try {
      mailer(email, "Xác nhận quên mật khẩu", "Lấy lại mật khẩu", htmlTemplate);

      res.status(200).send({
        status: "success",
        message: "Forgot password email has been sent!!!",
      });
    } catch (error) {
      res.status(404).send({
        status: "failed",
        message: "Can't send email. Maybe Error mailer module!!!",
      });
    }
  }
};

const verifyForgotPassword = async (req, res) => {
  const token = req.body.token || req.query.token || req.header("token");
  const { password } = req.body;

  try {
    const decode = await verifyToken(token, config.credential.secretKey);
    const { email } = decode;

    const salt = bcrypt.genSaltSync(10);
    const hashNewPassword = bcrypt.hashSync(password, salt);

    await User.findOneAndUpdate(
      { email },
      {
        password: hashNewPassword,
      }
    );

    res.status(200).send({
      status: "success",
      message: "Changed Password Successfully!!!",
    });
  } catch (error) {
    res.status(404).send({
      status: "failed",
      message: "Change password error!!!",
    });
  }
};

const fetchWithToken = async (req, res) => {
  const token = req.body.token || req.query.token || req.header("token");

  try {
    const decode = await verifyToken(token, config.credential.secretKey);

    const userLogin = await User.findByEmail(decode.email);

    res.status(200).send({
      status: "success",
      data: userLogin,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: error,
    });
  }
};

module.exports = {
  signIn,
  signUp,
  changePassword,
  forgotPassword,
  verifyForgotPassword,
  verifySignUp,
  fetchWithToken,
};
