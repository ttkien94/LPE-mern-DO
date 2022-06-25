import React from "react";

import CarouselImage from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/slider-01.jpg";

import "./styles/styles.scss";

function Carousel() {
  return (
    <div className="wrapper-slider">
      <div className="carousel-inner">
        <div className="item active">
          <img
            src={CarouselImage}
            alt={CarouselImage}
            className="img-fluid"
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
