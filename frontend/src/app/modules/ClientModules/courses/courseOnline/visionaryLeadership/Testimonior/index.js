import React from "react";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Ava01 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/ava1.jpg";
import Ava02 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/ava2.jpg";
import Ava03 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/ava3.jpg";
import bg from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/imageTesmo.jpg";

import "./styles/styles.scss";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Testimonior() {
  const persons = [
    {
      name: "Anh Thái Tuấn",
      ava: Ava01,
      comment:
        "Tôi vô cùng biết ơn thầy Vas và cô Giang Thanh, như là hai người soi sáng cho tôi vượt qua giai đoạn kinh khủng nhất của cuộc đời. Nếu không có thầy và cô, bây giờ không biết tôi đang sống khổ sở ở chỗ nào.",
    },
    {
      name: "Chị Anh Chi",
      ava: Ava02,
      comment:
        "Công ty của tôi từng bị phá sản. Tôi mất hết động lực sống. Tôi đổ lỗi cho mọi thứ. Nhưng sau đó may mắn gặp thầy, bây giờ tôi đã tạo dựng doanh nghiệp mới và kinh doanh vẫn phát triển dù có biến cố xảy ra. Tôi vô cùng biết ơn thầy!",
    },
    {
      name: "Anh Hữu Phương",
      ava: Ava03,
      comment:
        "2 năm qua đến nay mọi thứ đều thay đổi, từ mối quan hệ, đến sức khoẻ, đặc biệt là việc kinh doanh của mình. Tôi nhận ra trước giờ lúc nào mình cũng cứ chăm châm vào tiền mà không biết xây dựng mục tiêu, tầm nhìn dài hạn. Bây giờ tiền đến với tôi còn gấp nhiều lần hơn trước mà tôi vẫn rất khoẻ mạnh, hạnh phúc.",
    },
  ];

  return (
    <div
      className="bg-testimonior"
      style={{
        background: `url(${bg})`,
      }}
    >
      <div className="opacity-bg "></div>
      <div className="container">
        <div className="row">
          <div className="col-12 wrapper-container">
            <h1>Đánh giá học viên</h1>
          </div>
          <div className="col-12">
            <Swiper
              slidesPerView={1}
              className="swiper-container"
              // autoplay={{
              //   delay: 1000,
              //   disableOnInteraction: true,
              // }}
              loop={true}
              navigation={true}
              pagination={{
                dynamicBullets: true,
              }}
            >
              {persons.map((per, index) => {
                return (
                  <SwiperSlide>
                    <div className="row my-5 slide-item" key={index}>
                      <div className="col-12 col-md-8 text-center">
                        <img src={per.ava} alt={per.ava} className="ava-item" />
                        <h2>{per.name}</h2>
                        <p className="mb-4">{per.comment}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonior;
