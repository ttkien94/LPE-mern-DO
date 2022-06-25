import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import TextInput from "app/components/textInput";
import LPEButton from "app/components/button";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";

import { phoneValidate } from "core/utils/phoneUtil";
import { convertFullDate, timeToUnix } from "core/utils/dateUtil";
import {
  deleteAvatarAction,
  updateAvatarAction,
} from "core/redux/actions/userAction";
import { updateUserAction } from "core/redux/actions/authAction";

import "./styles/styles.scss";

function AccountInfo({ id }) {
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const [birthDay, setBirthDay] = useState();
  const dispatch = useDispatch();
  const [loadingImage, setLoadingImage] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const refForm = useRef();
  const hiddenRef = useRef(null);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    userInfo && setBirthDay(convertFullDate(userInfo?.birthDay));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDataSubmit = () => {
    setErrorMessage({});

    const dataSubmit = {};
    const errorMsg = {};

    const name = refForm.current["name"].value;
    const email = refForm.current["email"].value;
    const phone = refForm.current["phone"].value;
    const identityCard = refForm.current["identityCard"].value;
    const address = refForm.current["address"].value;

    dataSubmit["email"] = email;
    dataSubmit["ICN"] = identityCard;
    dataSubmit["address"] = address;

    // Checking Name
    if (!name.trim().length) {
      errorMsg["name"] = "Không bỏ trống trường này";
    }

    if (name.length > 30) {
      errorMsg["name"] = "Tên không vượt quá 30 ký tự";
      refForm.current["name"].focus();
    } else {
      dataSubmit["name"] = name;
    }

    // Check birthday
    if (birthDay < new Date(1900, 0, 1)) {
      errorMsg["birthDay"] = "Ngày không hợp lệ";
    } else if (birthDay > new Date()) {
      errorMsg["birthDay"] = "Ngày không hợp lệ";
    } else {
      dataSubmit["birthDay"] = timeToUnix(birthDay);
    }

    // Checking Phone
    if (phone.trim().length) {
      if (!phoneValidate(phone)) {
        errorMsg["phone"] = "Số điện thoại không hợp lệ";
        refForm.current["phone"].focus();
      }
    } else {
      errorMsg["phone"] = "Số điện thoại không được bỏ trớng";
    }

    dataSubmit["phone"] = phone;

    console.log({ errorMsg });

    setErrorMessage(errorMsg);

    if (Object.keys(errorMsg).length === 0) {
      console.log({ dataSubmit });
      dispatch(updateUserAction(id, dataSubmit));
    }
  };

  const handleChangeImage = (e) => {
    setErrors("");
    setLoadingImage(true);

    const file = e.target.files[0];

    if (!file) {
      setLoadingImage(false);
      return;
    }

    if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      setLoadingImage(false);
      return setErrors("Chỉ hỗ trợ file hình ảnh");
    }

    if (file.size / 1024 / 1024 < 1) {
      const formData = new FormData();

      if (file) {
        formData.append("avatar", file);

        dispatch(updateAvatarAction(formData, setLoadingImage));
      }
    } else {
      setLoadingImage(false);

      setErrors("Chỉ hỗ trợ file ảnh tối đa 3MB");
    }
  };

  const handleDeleteImage = (path) => {
    setLoadingImage(true);
    const filename = path.replace(/^.*[\\/]/, "");

    dispatch(deleteAvatarAction(filename, setLoadingImage));
  };

  const handleChangeDate = (value) => {
    setBirthDay(value);
  };

  return (
    <>
      {userInfo && (
        <div className="profileBox">
          <form ref={refForm}>
            <div className="profileMainInfo">
              <div className="row">
                <div
                  className="col-12 col-md-6"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="profileMedia">
                    {!loadingImage ? (
                      <>
                        {userInfo.avatar !== "" ? (
                          <div className="wrapperUpload">
                            <img
                              src={userInfo.avatar}
                              alt="icon-has-uploaded"
                              className="avatarHasUpload"
                            ></img>

                            <div
                              className="buttonDeleteImage"
                              onClick={() => {
                                handleDeleteImage(userInfo.avatar);
                              }}
                            >
                              <i className="fas fa-trash"></i>
                            </div>
                          </div>
                        ) : (
                          <label className="labelAvatar">
                            <input
                              type="file"
                              id="avatarundefined"
                              name="avatar"
                              ref={hiddenRef}
                              onChange={handleChangeImage}
                            />
                            {
                              <img
                                src="https://kt.city/static/icon-upload.png"
                                alt="icon-upload"
                              ></img>
                            }
                          </label>
                        )}
                      </>
                    ) : (
                      <div className="loader image"></div>
                    )}

                    {!!errors.length && <p className="text-danger">{errors}</p>}
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <TextInput
                    placeHolder="Nguyễn Văn A"
                    type="text"
                    name="name"
                    typeInput="text"
                    defaultValue={userInfo.name}
                    error={errorMessage.name}
                  />
                  <TextInput
                    placeHolder="JohnDoe@gmail.com"
                    type="email"
                    name="email"
                    defaultValue={userInfo.email}
                    typeInput="text"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="profileOther">
              <h5>Các thông tin khác</h5>
              <div className="row">
                <div className="col-12 col-lg-6 mt-4">
                  <TextInput
                    label="Số điện thoại"
                    placeHolder="09XXXXXXXX"
                    type="phone"
                    name="phone"
                    typeInput="text"
                    defaultValue={userInfo.phone}
                    error={errorMessage.phone}
                  />
                </div>

                <div className="col-12 col-lg-6 mt-4">
                  <TextInput
                    label="CMND/CCCD"
                    placeHolder="Điền CMND/CCCD của bạn"
                    type="text"
                    name="identityCard"
                    defaultValue={userInfo.ICN}
                    typeInput="text"
                  />
                </div>

                <div className="col-12 col-lg-6 mt-4">
                  <TextInput
                    label="Địa chỉ giao hàng COD"
                    placeHolder="Địa chỉ COD"
                    type="text"
                    name="address"
                    defaultValue={userInfo.address}
                    typeInput="text"
                  />
                </div>

                <div className="col-12 col-lg-6 date-picker">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Ngày sinh"
                      onChange={handleChangeDate}
                      value={birthDay}
                      error={errorMessage.birthDay}
                      helperText={errorMessage.birthDay}
                      format="dd-MM-yyyy"
                      views={["year", "month", "day"]}
                      openTo="year"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          error={errorMessage.birthDay}
                          helperText={errorMessage.birthDay}
                          style={{
                            width: "100%",
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>

                <div className="col-12 col-lg-6 mt-4">
                  <LPEButton
                    handleOnClick={handleDataSubmit}
                    name="Lưu lại"
                    fullWidth
                    sizeButton="large"
                    loading={loading}
                  />

                  {error && <p className="text-danger mt-3">{error}</p>}
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default AccountInfo;
