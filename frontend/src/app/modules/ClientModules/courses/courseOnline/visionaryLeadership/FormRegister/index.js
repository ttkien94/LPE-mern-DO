import React, { useRef } from "react";
import axios from "axios";
import "./styles/styles.scss";

function FormDangKy() {
  const refForm = useRef(null);

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
      url: "https://sheet.best/api/sheets/0f3ea429-7675-4466-afce-ea157771a56b",
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
    <form
      action="https://app.getresponse.com/add_subscriber.html"
      acceptCharset="utf-8"
      method="post"
      className="borderForm"
      ref={refForm}
    >
      <div className="form-item">
        <label>Họ và Tên *</label>
        <input
          type="text"
          name="name"
          pattern="/^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g"
          minLength="4"
          required
          placeholder="VD: Nguyễn Thị A"
        />
      </div>

      <div className="form-item">
        <label>Địa chỉ email *</label>
        <input
          type="email"
          name="email"
          required
          placeholder="VD: nguyenthia@gmail.com"
        />
      </div>

      <div className="form-item">
        <label>Số điện thoại * </label>
        <input
          name="custom_dt"
          type="tel"
          pattern="[0]{1}[0-9]{9}"
          placeholder="VD: 0933333333"
          required
        />
      </div>

      <div className="form-item">
        <label>Công việc hiện tại * </label>
        <input
          name="custom_job"
          type="text"
          placeholder="Nhập công việc của bạn"
          required
        />
      </div>

      <div className="form-item">
        <label>Ngày sinh * </label>
        <input
          name="custom_bod"
          type="date"
          placeholder="VD: 10/11/1993"
          required
        />
      </div>

      {/* <div className="form-item">
        <label>Vấn đề gặp phải * </label>
        <select name="custom_desire">
          <option value="Cảm thấy bản thân thiệt thòi vì không có ngoại hình xinh đẹp như người phụ nữ khác">
            Cảm thấy bản thân thiệt thòi vì không có ngoại hình xinh đẹp như
            người phụ nữ khác.
          </option>
          <option value="Phải gồng mình thay đổi bản thân để đạt được chuẩn đẹp">
            Phải gồng mình thay đổi bản thân để đạt được “chuẩn đẹp”.
          </option>
          <option value="Mang trên vai những vai trò trách nhiệm, không có thời gian chăm sóc chính mình">
            Mang trên vai những vai trò trách nhiệm, không có thời gian chăm sóc
            chính mình.
          </option>
          <option value="Cảm thấy việc làm đẹp là quá xa xỉ, mất thời gian, không cần thiết">
            Cảm thấy việc làm đẹp là quá xa xỉ, mất thời gian, không cần thiết.
          </option>
          <option value="Không dám chi tiền cho vẻ bề ngoài, vì sợ sẽ bị đánh giá">
            Không dám chi tiền cho vẻ bề ngoài, vì sợ sẽ bị đánh giá?!
          </option>
          <option value="Lý tưởng hoá vẻ đẹp người phụ nữ">
            “Lý tưởng hoá” vẻ đẹp người phụ nữ?
          </option>
          <option value="Chạy theo chuẩn mực cái đẹp do xã hội tạo ra.">
            Chạy theo chuẩn mực cái đẹp do xã hội tạo ra.
          </option>
          <option value="Đã từng biến đổi vẻ bề ngoài rất nhiều lần nhưng vẫn không cảm thấy đủ đầy hay hài lòng">
            Đã từng “biến đổi” vẻ bề ngoài rất nhiều lần nhưng vẫn không cảm
            thấy đủ đầy hay hài lòng?.
          </option>
        </select>
      </div> */}

      <input type="hidden" name="campaign_token" value="5rrHG" />
      <input
        type="hidden"
        name="thankyou_url"
        value="https://lpe.vn/thank-you-beauty-from-within/"
      />
      <input type="hidden" name="start_day" value="0" />

      <div className="wrapper-button">
        <button
          type="submit"
          defaultValue="Subscribe"
          onClick={() => {
            getDataSubmit();
          }}
        >
          Xác nhận
        </button>
      </div>
    </form>
  );
}

export default FormDangKy;