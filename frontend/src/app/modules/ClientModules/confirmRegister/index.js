import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import useSiteTitle from "core/hooks/useSiteTitle";

import { API_ENDPOINT, VERIFY_REGISTER } from "app/const/Api";

import "./styles/styles.scss";

function ConfirmRegister() {
  useSiteTitle("confirm_register");
  let { token } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios({
      method: "post",
      url: API_ENDPOINT + VERIFY_REGISTER,
      data: {
        token: token,
      },
    })
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [token]);

  return (
    <>
      <main className="forgetContainer">
        {isLoading ? (
          "Đang tải"
        ) : (
          <div className="formContainerForget">
            <div className="formHeading">
              <h5>Tạo tài khoản thành công</h5>
            </div>

            <p className="descText px-4">Tài khoản của bạn đã được xác thực</p>

            <p className="descText px-4">
              Giờ đây bạn có thể đăng nhập và sử dụng tài khoản.
            </p>

            <div className="formInput mt-3">
              <Link to="/dang-nhap" className="confirmBtn my-3">
                Đăng nhập
              </Link>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default ConfirmRegister;
