import React from "react";

import "./styles/styles.scss";

function Footer() {
  return (
    <div className="ittc-footer py-5">
      <div className="container text-center">
        <p className="ittc-footer-text">Đăng ký nhận thông tin</p>

        <a
          href="https://www.facebook.com/lpe.vn.lifeuni"
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary py-3 px-5 mt-3"
        >
          Nhận tư vấn
        </a>
      </div>
    </div>
  );
}

export default Footer;
