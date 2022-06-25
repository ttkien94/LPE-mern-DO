import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollTopButton from "app/components/scrollToTop";

import { LEFT_MENU, RIGHT_MENU } from "app/const/Footer";

import "./styles/styles.scss";

function LPEFooter() {
  const { t } = useTranslation("common");

  return (
    <div>
      <footer className="wrapperFooter">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <h4 className="heading">{t("lpe_company")}</h4>

              <p>
                <i className="fas fa-location-arrow mr-1"></i>
                490 Phạm Thái Bường, Khu Mỹ Toàn I, P. Tân Phong, Quận 7, TP.
                HCM.
              </p>
              <p>
                <i className="fas fa-clock mr-1"></i>
                {t("lpe_company_timeworking")}
              </p>
              <p>
                <i className="fas fa-phone-alt mr-1"></i>028 7303 9996 - 1900
                636 034
              </p>

              <h2 className="heading2">{t("connect_us")}</h2>

              <a
                href="https://www.facebook.com/lpe.vn.lifeuni"
                className="text-white"
              >
                <i className="fab fa-facebook-f mr-3"></i>
              </a>

              <a
                href="https://www.youtube.com/channel/UCY5TknGSpHSak7FOjJ5Mrng"
                className="text-white"
              >
                <i className="fab fa-youtube mr-3"></i>
              </a>
            </div>

            <div className="col-12 col-md-6 col-lg-5 mt-3 mt-lg-0">
              <div className="row">
                <div className="col-12">
                  <ul
                    className="wrapperMenu"
                    style={{
                      listStyle: "none",
                    }}
                  >
                    {LEFT_MENU.map((item, index) => {
                      return (
                        <li className="itemMenu" key={index}>
                          <Link to={item.path}>{t(item.name)}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="col-6">
                  <ul
                    className="wrapperMenu"
                    style={{
                      listStyle: "none",
                    }}
                  >
                    {RIGHT_MENU.map((item, index) => {
                      return (
                        <li className="itemMenu" key={index}>
                          <Link to={item.path}>{t(item.name)}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3 mt-lg-0">
              <h4 className="heading">{t("media")}</h4>
              <p>
                Vui lòng liên hệ với LPE team theo số điện thoại trên, gửi email
                theo địa chỉ Email: studentcare@lpe.vn.
              </p>
              <h4
                className="heading"
                style={{
                  marginTop: "30px",
                }}
              >
                {t("customer_support")}
              </h4>
              <p>
                Đối với các thắc mắc về Dịch vụ Khách hàng, bạn có thể TRÒ
                CHUYỆN TRỰC TIẾP bằng cách hoàn thành biểu mẫu bên dưới. Chúng
                tôi cố gắng trả lời tất cả các câu hỏi trong vòng 2 ngày làm
                việc.
              </p>
            </div>
          </div>
        </div>

        <footer className="wrapperInfo">
          <div className="container">
            <div
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="col-12">
                <i
                  className="far fa-copyright"
                  style={{
                    marginRight: "10px",
                  }}
                ></i>

                <span>2021 LPE Company, No copyright</span>
              </div>
            </div>
          </div>
        </footer>
      </footer>

      <ScrollTopButton />
    </div>
  );
}

export default LPEFooter;
