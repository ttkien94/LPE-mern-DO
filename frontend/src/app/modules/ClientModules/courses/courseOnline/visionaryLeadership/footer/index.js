import React from "react";
import { Fade } from "react-reveal";

import "./styles/styles.scss";

function Footer() {
  return (
    <footer>
      <h2 className="title">Tìm kiếm chúng tôi bằng cách nào?</h2>
      <Fade bottom>
        <h3 className="name">Công Ty TNHH Giáo Dục Leading Performance</h3>
      </Fade>

      <Fade bottom>
        <div className="f-line">
          <p className="mb-3">
            <span className="title-item">
              <i className="fas fa-map-marker-alt"></i> Địa chỉ: 
            </span>
             490 Phạm Thái Bường, Khu Mỹ Toàn I, P. Tân Phong, Quận 7, TP. HCM.
          </p>
        </div>
      </Fade>

      <Fade bottom>
        <div className="f-line">
          <p className="mb-3">
            <span className="title-item">
              
              <i className="far fa-clock"></i> Giờ làm việc:
            </span>
             Sáng: 7h00 - 11h30 | Chiều: 12h45 - 16h15
          </p>
        </div>
      </Fade>

      <Fade bottom>
        <div className="f-line mr-0">
          <p className="f-line_phone mb-3">
            <span className="title-item">
              <i className="fas fa-phone-alt"></i>Thông tin liên lạc:
            </span>
             028 7303 9996 - 1900 636 034
          </p>
        </div>
      </Fade>
    </footer>
  );
}

export default Footer;
