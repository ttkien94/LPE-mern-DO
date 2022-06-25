import React from "react";
import bgGif from "../../assets/bg-gif.gif";
import vas from "../../assets/vas.png";

import "./styles/styles.scss";

function BannerITTC() {
  return (
    <div
      className="ittc_banner"
      style={{
        background: `url(${bgGif})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="ittc_banner-img">
        <img src={vas} alt={vas} className="img-fluid w-50" />
      </div>

      <div className="ittc_banner-text">
        <div className="container">
          <div className="row ">
            <div className="col-6 col-md-12 col-lg-3">
              <p className="ittc_banner-text-title">ITTC</p>

              <p className="ittc_banner-text-en">
                <span>International</span>
              </p>

              <p className="ittc_banner-text-en">
                <span>Training</span>
              </p>

              <p className="ittc_banner-text-en">
                <span>Trainner</span>
              </p>

              <p className="ittc_banner-text-en">
                <span>Certificate</span>
              </p>
            </div>

            <div className="col-12 col-md-12 col-lg-9 ittc_banner-text-inner">
              <p className="ittc_banner-text-long">
                <span className="ittc_banner-text-big">N</span>gười Kế Thừa Đại
                học Cuộc Đời
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerITTC;
