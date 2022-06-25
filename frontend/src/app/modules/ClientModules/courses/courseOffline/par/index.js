import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import "./styles/styles.scss";
import { par, pp } from "../../assets/images/chuong-trinh-huan-luyen/offline";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function PAR() {
  useSiteTitle("PAR_program");

  const imgStudent = [
    par.par01,
    par.par02,
    par.par03,
    par.par04,
    par.par05,
    par.par06,
  ];

  return (
    <div className="container-fluid par">
      <div className="row flex-alignitem">
        <img src={par.par07} alt={par.par07} className="img-fluid w-100" />
        <div className="col-md-6 offset-md-3 mt-3">
          <iframe
            height="400"
            src="https://www.youtube.com/embed/3v0612UxNxU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="container">
        <div className="row mt-3 flex-alignitem">
          <div className="col-md-6 order-last ">
            <h3 className="text-center">
              BẠN ĐANG LO LẮNG VÌ CON ĐANG GẶP CÁC VẤN ĐỀ NAN GIẢI:
            </h3>

            <ul>
              <li>Con em mình nghiện ngập (game, thuốc lá,..)</li>
              <li>Con có thành tích học tập kém</li>
              <li>Con có những vấn đề sức khỏe</li>
            </ul>
          </div>
          <div className="col-md-6 boxShadow">
            <img src={par.par08} alt={par.par08} />
          </div>
        </div>

        <div className="row mt-4 ">
          <div className="col-md-10 offset-md-1">
            <h3 className="text-center">
              BẠN ĐANG MONG MUỐN TÌM RA CÁCH NHANH CHÓNG ĐỂ CON TRỞ THÀNH CON
              NGOAN - TRÒ GIỎI - CÔNG DÂN XUẤT SẮC, GIẢI QUYẾT CÁC VẤN ĐỀ:
            </h3>
            <ul>
              <li>Con trẻ không đam mê học tập, làm việc</li>
              <li>Con trẻ chưa tìm ra được những định hướng cho tương lai</li>
              <li>Con em không chia sẻ tâm tư, tình cảm với mình</li>
              <li>Con mình có những thay đổi tính cách khác thường</li>
            </ul>
          </div>
        </div>

        <div className="row mt-3 ">
          <div className="col-md-8 offset-md-2">
            <h3 className="text-center">
              BẠN ĐANG MUỐN KÍCH HOẠT VÀ PHÁT HUY TÀI NĂNG CỦA CON, VÌ:
            </h3>
            <img src={par.par09} alt={par.par09} />
            <ul>
              <li>Con có trí nhớ kém</li>
              <li>Con chưa được sáng tạo</li>
              <li>
                Khả năng giao tiếp và xử lý tình huống xã hội của con còn kém
              </li>
              <li>Con mình không hề có mục tiêu</li>
            </ul>
          </div>
        </div>

        <div className="row mt-3">
          <h3 className="headerLinear">
            LPE XIN GIỚI THIỆU GIẢI PHÁP - CHƯƠNG TRÌNH
            <br /> "NGHỆ THUẬT TRUYỀN CẢM HỨNG & NUÔI DẠY CON XUẤT CHÚNG"
          </h3>
          <div className="col-md-8 offset-md-2 mt-3 ">
            <Swiper
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              pagination={{ clickable: true }}
            >
              {imgStudent.map((item, index) => {
                return (
                  <SwiperSlide className="item-swiper" key={index}>
                    <img src={item} alt={item} className="img-fluid" />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="boxLinear mt-5">
              <h3>QUÝ PHỤ HUYNH NHẬN ĐƯỢC GÌ KHI THAM GIA CHƯƠNG TRÌNH?</h3>
              <ul>
                <li>
                  Nhận Thức về tác động của sự phát triển/tiến hóa đến tinh thần
                  của con người, đặc biệt là con cái của bạn.
                </li>
                <li>
                  Nhận Thức về tác động của sự phát triển/tiến hóa đến tinh thần
                  của con người, đặc biệt là con cái của bạn.
                </li>
                <li>
                  Hiểu về những giai đoạn Phát Triển Tâm Lý của một con người.
                </li>
                <li>
                  Hiểu được Đặc Tính riêng biệt của Con Trai và Con Gái trong
                  những giai đoạn phát triển của các cháu.
                </li>
                <li>
                  Cách tái thiết lập những lõi lọc nhận thức để chúng ta nhìn
                  con cái của mình như những con người hoàn toàn mới.
                </li>
                <li>
                  Làm sạch những dấu ấn về trải nghiệm xấu trong quá khứ - Xóa
                  Sạch Cảm Xúc Tiêu Cực.
                </li>
                <li>
                  Hòa giải tất cả những vấn đề mối quan hệ xấu với con cái - quy
                  trình lớn
                </li>
                <li>
                  Có được những hành vi mới và mang tính truyền động lực cho
                  những trải nghiệm về "Nghệ Thuật Làm Cha Mẹ - Nuôi Dưỡng Và
                  Truyền Cảm Hứng Cho Con Cái".
                </li>
                <li>Làm chủ "NGHỆ THUẬT GIAO TIẾP" với Tâm Lý của con.</li>
                <li>Nắm vứng Kỹ Thuật Chữa Lành.</li>
                <li>Chữa lành bất hòa trong gia đình giữa cha mẹ và con cái</li>
              </ul>
            </div>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSecIyJSa010UdzhH5sY_QpaFvLQhKR8EdBrnXg3qnuwUNAPRg/viewform">
              <img
                src={pp.pp31}
                alt="img"
                className="mt-3 col-md-4 offset-md-4 col-sm-6 offset-sm-3 pb-3"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PAR;
