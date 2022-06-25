import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import useSiteTitle from "core/hooks/useSiteTitle";

// MUI
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

// Formik
import * as Yup from "yup";
import { FastField, Form, Formik } from "formik";
import InputField from "app/components/customField/inputField";

// Action
import { loginAction } from "core/redux/actions/authAction";

// const
import { KEY_TOKEN } from "app/const/App";

import "./styles/styles.scss";

const ButtonSubmit = styled(Button)`
  color: #fff;
  background: #3777bc;
  padding: 10px 20px;

  :hover {
    color: #fff;
    background: #6499e7;
  }
`;

function Login() {
  useSiteTitle("login");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const isLogined = Boolean(localStorage.getItem(KEY_TOKEN));

  const handleLogin = (data) => {
    dispatch(loginAction(data));
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Vui lòng không để trống"),

    email: Yup.string()
      .required("Vui lòng nhập trường này")
      .email("Email chưa đúng"),
  });

  return (
    <>
      {!isLogined ? (
        <div className="loginContainer">
          <div className="formContainer">
            <h3 className="text-center pt-3 text-secondary">Đăng nhập</h3>

            {error && <p className="text-left text-danger mb-4">{error}</p>}

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {(formikProps) => {
                const { values, errors, touched } = formikProps;

                console.log({ values, errors, touched });

                return (
                  <Form
                    className="mt-4 py-3 form-login"
                    style={{
                      width: "400px",
                    }}
                  >
                    <div className="col-12">
                      <FastField
                        name="email"
                        component={InputField}
                        label="Email"
                        placeholder="Nhập email"
                        className="w-100 mb-4"
                      />
                    </div>

                    <div className="col-12">
                      <FastField
                        name="password"
                        type="password"
                        component={InputField}
                        label="Mật khẩu"
                        placeholder="Nhập mật khẩu"
                        className="w-100 mb-4"
                        typePassword="icon"
                      />
                    </div>

                    <div className="col-12">
                      <ButtonSubmit type="submit">
                        Đăng nhập
                        {loading && <div className="loader ml-1"></div>}
                      </ButtonSubmit>
                    </div>
                  </Form>
                );
              }}
            </Formik>

            <Link
              to="/quen-mat-khau"
              className="forgetPassword"
              style={{
                marginTop: "20px",
              }}
            >
              Quên mật khẩu?
            </Link>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link to="/dang-ky" className="createButton">
                Tạo tài khoản mới
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}

export default Login;
