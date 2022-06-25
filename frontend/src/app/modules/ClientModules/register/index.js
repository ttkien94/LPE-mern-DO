import { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import useSiteTitle from "core/hooks/useSiteTitle";

import * as Yup from "yup";
import { YupSchema } from "app/const/yup";
import { FastField, Form, Formik } from "formik";

import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import InputField from "app/components/customField/inputField";
import SelectField from "app/components/customField/selectField";
import DatePickerField from "app/components/customField/datePickerField";

import { DEFALT_OPTIONS } from "app/components/customField/selectField/options";
import { API_ENDPOINT, CODE_SUCCESS, SIGN_UP } from "app/const/Api";
import { KEY_TOKEN } from "app/const/App";

import "./styles/styles.scss";

const ButtonSubmit = styled(Button)`
  color: #fff;
  background: #3777bc;

  :hover {
    color: #fff;
    background: #3777bc;
  }
`;

function Register() {
  useSiteTitle("register");
  const isLogined = Boolean(localStorage.getItem(KEY_TOKEN));
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (data) => {
    setLoading(true);

    delete data["rePassword"];

    await axios({
      method: "POST",
      url: API_ENDPOINT + SIGN_UP,
      data,
    })
      .then((response) => {
        if (response.status === CODE_SUCCESS) {
          setLoading(false);
          setStep((prevState) => prevState + 1);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("Email này đã được đăng ký");
        console.log(err);
      });
  };

  const initialValues = {
    name: "",
    gender: "nam",
    email: "",
    phone: "",
    birthDay: Number(new Date()),
    password: "",
    rePassword: "",
  };

  const validationSchema = Yup.object().shape(YupSchema);

  const RenderUI = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <div className="registerContainer">
              <div
                className="formContainer"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h3 className="text-center pt-3 text-secondary">
                  Đăng ký tài khoản
                </h3>

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleRegister}
                >
                  {(formikProps) => {
                    const { values, errors, touched } = formikProps;

                    console.log({ values, errors, touched });

                    return (
                      <Form
                        className="row mt-4 py-3"
                        style={{
                          maxWidth: "700px",
                        }}
                      >
                        <div className="col-12">
                          <FastField
                            name="name"
                            component={InputField}
                            label="Tên đầy đủ"
                            placeholder="Nhập tên"
                            className="w-100 mb-4"
                          />
                        </div>

                        <div className="col-12 col-md-6">
                          <FastField
                            name="email"
                            component={InputField}
                            label="Email"
                            placeholder="Nhập email"
                            className="w-100 mb-4"
                          />

                          {error && <p className="text-danger mb-4">{error}</p>}
                        </div>

                        <div className="col-12 col-md-6">
                          <FastField
                            name="phone"
                            component={InputField}
                            label="Số điện thoại"
                            placeholder="Nhập số điện thoại"
                            className="w-100 mb-4"
                            autocomplete
                          />
                        </div>

                        <div className="col-12 col-md-6">
                          <FastField
                            name="gender"
                            component={SelectField}
                            label="Giới tính"
                            placeholder="Nhập giới tính"
                            className="w-100 mb-4"
                            options={DEFALT_OPTIONS.gender}
                          />
                        </div>

                        <div className="col-12 col-md-6 mb-2">
                          <FastField
                            name="birthDay"
                            component={DatePickerField}
                            label="Ngày sinh"
                            placeholder="Nhập ngày sinh"
                            className="w-100 mb-2 mb-md-4"
                          />
                        </div>

                        <div className="col-12">
                          <FastField
                            name="password"
                            type="password"
                            component={InputField}
                            label="Mật khẩu"
                            placeholder="Nhập mật khẩu"
                            className="w-100 mb-2 mb-md-4"
                          />
                        </div>

                        <div className="col-12">
                          <FastField
                            name="rePassword"
                            type="password"
                            component={InputField}
                            label="Nhập lại mật khẩu"
                            placeholder="Nhập lại mật khẩu"
                            className="w-100 mb-4"
                          />
                        </div>

                        <div className="col-12 justify-content-end d-flex">
                          <ButtonSubmit type="submit">
                            Xác nhận
                            {loading && <div className="loader ml-1"></div>}
                          </ButtonSubmit>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className="OTPContainer">
              <div className="formContainerOTP">
                <div className="formHeading">
                  <h5>LPE đã gửi một Email xác thực đến cho bạn</h5>
                </div>

                <p className="descText px-4">
                  Vui lòng kiểm tra hộp thư đến, có thể Email nằm trong mục spam
                  của bạn.
                </p>
              </div>
            </div>
          </>
        );

      default:
        throw new Error("Invalid Screen!!!");
    }
  };

  return <>{!isLogined ? RenderUI(step) : <Redirect to="/" />}</>;
}

export default Register;
