import React, { useState } from "react";
import { Formik, Form, FastField } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import emptyAvatar from "assets/images/btnLogin.png";
import InputField from "app/components/customField/inputField";
import SelectField from "app/components/customField/selectField";
import DatePickerField from "app/components/customField/datePickerField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import { DEFALT_OPTIONS } from "app/components/customField/selectField/options";
import { adminUpdateUserAction } from "core/redux/actions/userAction";

import "./styles/styles.scss";

const ButtonSubmit = styled(Button)`
  color: #fff;
  background: #3777bc;

  :hover {
    color: #fff;
    background: #3777bc;
  }
`;

const ButtonCancel = styled(Button)`
  color: #adb5bd;
`;

function EditUser({ onToggleDrawer, userEdit }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const phoneRegExp = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

  const handleEdit = (data) => {
    dispatch(adminUpdateUserAction(userEdit._id, data, setIsLoading));
  };

  const handleCloseEdit = () => {
    onToggleDrawer && onToggleDrawer();
  };

  const initialValues = {
    name: userEdit?.name,
    gender: userEdit?.gender,
    email: userEdit?.email,
    phone: userEdit?.phone,
    address: userEdit?.address || "",
    birthDay: userEdit?.birthDay,
    role: userEdit?.role,
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Vui lòng nhập trường này.")
      .min(3, "Có ít nhất là 3 ký tự.")
      .max(40, "Có nhiều nhất là 40 ký tự."),
    phone: Yup.string().matches(phoneRegExp, "Số điện thoại không hợp lệ."),
    address: Yup.string().max(400, "Có nhiều nhất là 400 ký tự."),
  });

  return (
    <div className="admin-user-screen">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleEdit}
      >
        {(formikProps) => {
          // const { values, errors, touched } = formikProps;

          // console.log({ values, errors, touched });

          return (
            <div>
              <div className="row mt-3 avatar">
                <img
                  src={userEdit?.avatar || emptyAvatar}
                  alt={userEdit?.avatar || emptyAvatar}
                  className="img-fluid"
                />
              </div>

              <Form
                className="row"
                style={{
                  maxWidth: "600px",
                  margin: "20px 0",
                }}
              >
                <div className="col-6">
                  <FastField
                    name="name"
                    component={InputField}
                    label="Tên đầy đủ"
                    placeholder="Nhập tên"
                    className="w-100 mb-4"
                  />
                </div>

                <div className="col-6">
                  <FastField
                    name="email"
                    component={InputField}
                    label="Email"
                    placeholder="Nhập email"
                    className="w-100 mb-4"
                    disabled
                  />
                </div>

                <div className="col-6">
                  <FastField
                    name="phone"
                    component={InputField}
                    label="Số điện thoại"
                    placeholder="Nhập số điện thoại"
                    className="w-100 mb-4"
                    autocomplete
                  />
                </div>

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

                <div className="col-12 justify-content-end d-flex">
                  <ButtonSubmit type="submit">
                    Xác nhận
                    {isLoading && <div className="loader ml-1"></div>}
                  </ButtonSubmit>

                  <ButtonCancel onClick={handleCloseEdit}>Hủy</ButtonCancel>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default EditUser;
