import { useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import useSiteTitle from "core/hooks/useSiteTitle";
import * as Yup from "yup";
import { FastField, Form, Formik } from "formik";

// component
import LPEButton from "app/components/button";
import InputField from "app/components/customField/inputField";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

// constant
import {
  API_ENDPOINT,
  CODE_SUCCESS,
  VERIFY_FORGET_PASSWORD,
} from "app/const/Api";
import { isEmpty } from "core/utils/isEmpty";

// styles
import "./styles/styles.scss";

const ButtonSubmit = styled(Button)`
  color: #fff;
  background: #3777bc;

  :hover {
    color: #fff;
    background: #3777bc;
  }
`;

const passRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;

function VerifyForgotPassword() {
  useSiteTitle("confirm_forgot_password");

  const { token } = useParams();
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const handleSubmit = async (data) => {
    setError("");
    setLoading(true);

    await axios({
      method: "POST",
      url: API_ENDPOINT + VERIFY_FORGET_PASSWORD,
      data: {
        password: data.rePassword,
      },
      headers: {
        token: `${token}`,
      },
    })
      .then((res) => {
        if (res.status === CODE_SUCCESS) {
          setLoading(false);
          setStep((prevStep) => prevStep + 1);
        }
      })
      .catch(() => {
        setLoading(false);
        setError("Hết hạn truy xuất đường dẫn này!!");
      });
  };

  const initialValues = {
    password: "",
    rePassword: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Vui lòng không để trống")
      .matches(
        passRegExp,
        "Mật khẩu có ít nhất 8 ký tự, bao gồm chữ thường, số và ít nhất 1 ký tự in hoa, ký tự đặc biệt."
      ),
    rePassword: Yup.string()
      .required("Vui lòng không để trống")
      .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp"),
  });

  const renderUI = (step) => {
    switch (step) {
      case 0:
        return (
          <main className="submitForgetContainer">
            <div className="formContainer">
              <div className="formHeading">
                <h5>Xác nhận đổi mật khẩu mới</h5>
              </div>

              <p className="descText">
                Vui lòng nhập mật khẩu mới cho tài khoản của bạn.
              </p>

              {error.length > 0 && <p className="text-danger">{error}</p>}

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {(formikProps) => {
                  const { values, errors, touched } = formikProps;

                  console.log({ values, errors, touched });

                  return (
                    <Form className="row py-3 m-0 ">
                      <div className="col-12 mb-3 mb-md-0">
                        <FastField
                          name="password"
                          type="password"
                          component={InputField}
                          label="Mật khẩu"
                          placeholder="Nhập mật khẩu"
                          className="w-100 mb-2 mb-md-4"
                        />
                      </div>

                      <div className="col-12 mb-3 mb-md-0">
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
                        <ButtonSubmit
                          type="submit"
                          disabled={!isEmpty(errors) || loading}
                        >
                          Xác nhận
                          {loading && <div className="loader ml-1"></div>}
                        </ButtonSubmit>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </main>
        );

      case 1:
        return (
          <main className="forgetContainer">
            <div className="formContainerForget">
              <div className="formHeading">
                <h5>Lấy lại mật khẩu thành công</h5>
              </div>

              <p className="descText px-3">
                Tài khoản của bạn đã được tạo mật khẩu mới
              </p>

              <p className="descText px-3">
                Giờ đây bạn có thể đăng nhập và sử dụng tài khoản.
              </p>

              <div className="formInput mt-3">
                <LPEButton
                  name="Đăng nhập"
                  handleOnClick={() => {
                    history.push("/dang-nhap");
                  }}
                />
              </div>
            </div>
          </main>
        );
      default: {
        throw Error("Invalid Case!!!");
      }
    }
  };

  return <>{renderUI(step)}</>;
}

export default VerifyForgotPassword;
