import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Loading from "../component/loading";

import "./styles/styles.scss";

function RegisterPage() {
  const [isLoading, setIsLoading] = useState(true);
  const refForm = useRef(null);

  useEffect(() => {
    const handleLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => {
      clearTimeout(handleLoading);
    };
  }, []);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    return phone.match(regex);
  };

  const handleForm = (data) => {
    axios({
      method: "post",
      url: "https://sheet.best/api/sheets/a5d532ed-85e2-449d-a1e1-2c909555dabd",
      data: data,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getDataSubmit = () => {
    const dataSubmit = {};
    const custom_register = new Date().toLocaleString();
    const name = refForm.current["name"].value;
    const email = refForm.current["email"].value;
    const custom_dt = refForm.current["custom_dt"].value;
    const custom_bod = refForm.current["custom_bod"].value;
    const custom_job = refForm.current["custom_job"].value;
    // Loop for get dataSubmit
    for (let index = 0; index < refForm.current.length; index++) {
      const { name, value } = refForm.current[index];
      if (!value.length || value === "") {
        refForm.current[index].focus();
      } else {
        switch (name) {
          // bypass value
          case "campaign_token":
            break;
          case "thankyou_url":
            break;
          case "start_day":
            break;
          default:
            dataSubmit[name] = value;
            break;
        }
      }
    }
    dataSubmit["custom_register"] = custom_register;
    // get param url
    const url_string = window.location.href;
    const url = new URL(url_string);
    const utm_source = url.searchParams.get("utm_source");
    dataSubmit["custom_utm_source"] = utm_source;
    // catching error when submit form
    if (
      !name ||
      !email ||
      !custom_dt ||
      !custom_bod ||
      !custom_job ||
      !validateEmail(email) ||
      !validatePhone(custom_dt)
    ) {
      // if value is false action is return;
      return;
    } else {
      handleForm(dataSubmit);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="bg-color"></div>
          <div className="form-container">
            <h1 className="text-center heading-form">
              Thông tin đăng ký khóa học
            </h1>
            <p className="desc-text">
              Bạn điền thông tin đăng ký khóa học Run Faster tại đây
            </p>
            <p className="desc-text">
              LPE sẽ liên hệ với bạn trong thời gian sớm nhất
            </p>

            <form
              action="https://app.getresponse.com/add_subscriber.html"
              acceptCharset="utf-8"
              method="post"
              ref={refForm}
            >
              {/* Tên */}
              <div className="input-container">
                <label>Họ và tên</label>
                <input
                  type="text"
                  name="name"
                  pattern="/^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g"
                  minLength="4"
                  required
                  placeholder="VD: Nguyễn Văn A"
                />
              </div>
              {/* Trường email (bắt buộc) */}
              <div className="input-container">
                <label>Địa chỉ Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="VD: nguyenvana@gmail.com"
                />
              </div>
              <div className="input-container">
                <label>Số điện thoại:</label>
                <input
                  name="custom_dt"
                  type="tel"
                  pattern="[0]{1}[0-9]{9}"
                  placeholder="VD: 0933333333"
                  required
                />
                <p>Nhập đủ 10 chữ số điện thoại</p>
              </div>
              <div className="input-container">
                <label>Ngày sinh</label>
                <input
                  name="custom_bod"
                  type="date"
                  placeholder="VD: 10/11/1993"
                  required
                />

                <p>Định dạng: dd/MM/YYYY</p>
              </div>

              <div className="input-container">
                <label>Công việc hiện tại:</label>
                <input
                  name="custom_job"
                  type="text"
                  placeholder="Nhập công việc của bạn"
                  required
                />
              </div>

              {/* Mã thông báo danh bạ */}
              {/* Nhận mã thông báo tại: https://app.getresponse.com/campaign_list.html https://app.getresponse.com/campaign_list.html */}
              <input type="hidden" name="campaign_token" defaultValue="5PxLu" />
              {/* Trang cảm ơn (tùy chọn) */}
              <input
                type="hidden"
                name="thankyou_url"
                defaultValue="https://lpe.vn/thank-you"
              />
              {/* Forward form data to your page (optional) */}
              <input type="hidden" name="forward_data" value="get" />
              {/* Thêm người đăng ký vào chuỗi theo dõi với ngày được xác định (tùy chọn) */}
              <input type="hidden" name="start_day" defaultValue={0} />
              {/* Nút Người đăng ký */}
              <button
                type="submit"
                defaultValue="Subscribe"
                onClick={() => {
                  getDataSubmit();
                }}
              >
                Xác nhận
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default RegisterPage;
