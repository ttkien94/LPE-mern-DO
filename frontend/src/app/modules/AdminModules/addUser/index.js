import React, { useState } from "react";
import { Formik, Form, FastField } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import InputField from "app/components/customField/inputField";
import DatePickerField from "app/components/customField/datePickerField";
import { Box, Button } from "@mui/material";
import { DEFALT_OPTIONS } from "app/components/customField/selectField/options";

import SelectField from "app/components/customField/selectField";
import { styled } from "@mui/material/styles";
import UploadImage from "./components/uploadImage";
import { addUserAction } from "core/redux/actions/userAction";

const ButtonSubmit = styled(Button)`
  color: #fff;
  background: #3777bc;

  :hover {
    color: #fff;
    background: #3777bc;
  }
`;
const phoneRegExp = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
const passRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;

function AddUser() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState("");
  const [file, setFile] = useState([]);

  const initialValues = {
    name: "",
    gender: "nam",
    email: "",
    phone: "",
    address: "",
    birthDay: Number(new Date()),
    role: "client",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Vui lòng nhập trường này.")
      .min(3, "Có ít nhất là 3 ký tự.")
      .max(40, "Có nhiều nhất là 40 ký tự."),
    email: Yup.string()
      .required("Vui lòng nhập trường này")
      .max(255)
      .email("Email chưa đúng"),
    phone: Yup.string()
      .required("Vui lòng nhập trường này")
      .matches(phoneRegExp, "Số điện thoại chưa đúng."),
    birthDay: Yup.number("Vui lòng nhập đúng định dạng")
      .required("Vui lòng nhập trường này")
      .min(new Date(1900, 0, 1), "Ngày thấp nhất không dưới năm 1900")
      .max(new Date(), "Ngày lớn nhất không được quá hôm nay"),
    gender: Yup.mixed().oneOf(["nam", "nu"], "Vui lòng nhập đúng trường này"),
    password: Yup.string()
      .required("Vui lòng không để trống")
      .matches(
        passRegExp,
        "Mật khẩu có ít nhất 8 ký tự, bao gồm chữ thường, số và ít nhất 1 ký tự in hoa, ký tự đặc biệt."
      ),
    address: Yup.string().max(400, "Có nhiều nhất là 400 ký tự."),
    role: Yup.mixed().oneOf(
      ["client", "admin"],
      "Vui lòng nhập đúng trường này"
    ),
  });

  const changeImage = (e) => {
    setError("");
    // setLoadingImage(true);

    const file = e.target.files[0];

    if (!file) {
      return;
    }

    if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      // setLoadingImage(false);
      return setError("Chỉ hỗ trợ file hình ảnh");
    }

    if (file.size / 1024 / 1024 < 1) {
      if (file) {
        const createUrl = URL.createObjectURL(file);

        setAvatar(createUrl);
        setFile(file);
      }
    } else {
      setError("Chỉ hỗ trợ file ảnh tối đa 3MB");
    }
  };

  const handleRemoveImage = () => {
    setAvatar(null);
  };

  const handleAddUser = (data) => {
    const formData = new FormData();

    for (let key in data) {
      formData.append(key, data[key]);
    }

    formData.append("avatar", file);

    dispatch(addUserAction(formData, setIsLoading));
  };

  return (
    <div className="container wrapper-single-form">
      <h4 className="mb-4">Tạo người dùng mới</h4>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleAddUser}
      >
        {(formikProps) => {
          const { values, errors, touched } = formikProps;

          console.log({ values, errors, touched });

          return (
            <div>
              <Box
                sx={{
                  display: "flex",
                  border: "1px solid #e4e6eb",
                  borderRadius: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                className="row"
              >
                <div
                  className="mt-3 col-4"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <UploadImage
                    image={avatar}
                    onChangeImage={changeImage}
                    removeImage={handleRemoveImage}
                    type="avatar"
                  />

                  <p className="text-secondary text-center mt-3">
                    Cho phép upload file ảnh *.jpeg, *.jpg, *.png với kích cỡ
                    không quá 3MB
                  </p>

                  {error && <p className="text-danger text-center">{error}</p>}
                </div>

                <Form className="col-8 p-4">
                  <FastField
                    name="name"
                    component={InputField}
                    label="Tên đầy đủ"
                    placeholder="Nhập tên"
                    className="w-100 mb-4"
                  />

                  <div className="row">
                    <div className="col-6">
                      <FastField
                        name="email"
                        component={InputField}
                        label="Email"
                        placeholder="Nhập email"
                        className="w-100 mb-4"
                      />
                    </div>

                    <div className="col-6">
                      <FastField
                        name="phone"
                        component={InputField}
                        label="Số điện thoại"
                        placeholder="Nhập số điện thoại"
                        className="w-100 mb-4"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <FastField
                        name="password"
                        type="password"
                        component={InputField}
                        label="Mật khẩu"
                        placeholder="Nhập mật khẩu"
                        className="w-100 mb-4"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <FastField
                        name="address"
                        component={InputField}
                        label="Địa chỉ"
                        placeholder="Nhập địa chỉ"
                        className="w-100 mb-4"
                      />
                    </div>

                    <div className="col-6">
                      <FastField
                        name="birthDay"
                        component={DatePickerField}
                        label="Ngày sinh"
                        placeholder="Nhập ngày sinh"
                        className="w-100 mb-4"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <FastField
                        name="gender"
                        component={SelectField}
                        label="Giới tính"
                        placeholder="Nhập giới tính"
                        className="w-100 mb-4"
                        options={DEFALT_OPTIONS.gender}
                      />
                    </div>

                    <div className="col-6">
                      <FastField
                        name="role"
                        component={SelectField}
                        label="Phân quyền"
                        placeholder="Nhập quyền người dùng"
                        className="w-100 mb-4"
                        options={DEFALT_OPTIONS.role}
                      />
                    </div>
                  </div>

                  <div className="col-12 justify-content-end d-flex">
                    <ButtonSubmit type="submit">
                      Xác nhận
                      {isLoading && <div className="loader ml-1"></div>}
                    </ButtonSubmit>
                  </div>
                </Form>
              </Box>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default AddUser;
