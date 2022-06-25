import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

import "swiper/components/pagination/pagination.min.css";
import "./styles/styles.scss";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Timeline() {
  const refPagination = useRef();

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const ref = refPagination.current;

      let year = ref
        .querySelectorAll(".swiper-slide")
        [index].getAttribute("data-year");

      return '<span class="' + className + '">' + year + "</span>";
    },
  };

  return (
    <div className="wrapper-timeline my-5">
      <div className="timeline">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className="swiper-container"
          direction={"vertical"}
          pagination={pagination}
          navigation={true}
          speed={1500}
          ref={refPagination}
          allowTouchMove={false}
          noSwiping
        >
          <SwiperSlide
            style={{
              backgroundImage: "url(https://unsplash.it/1920/500?image=13)",
            }}
            className="swiper-slide"
            data-year="2003"
          >
            <div className="swiper-slide-content">
              <span className="timeline-year">2003</span>

              {/* <h4 className="timeline-title">Our nice super title</h4> */}
              <p className="timeline-text">
                Mr. Vas rời khỏi vị trí Sĩ quan quân đội Singapore, bắt đầu sự
                nghiệp trở thành Diễn Giả NLP của mình
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide"
            style={{
              backgroundImage: "url(https://unsplash.it/1920/500?image=14)",
            }}
            data-year="2004"
          >
            <div className="swiper-slide-content">
              <span className="timeline-year">2004</span>

              {/* <h4 className="timeline-title">Our nice super title</h4> */}
              <p className="timeline-text">
                Mr. Vas bắt đầu hành trình huấn luyện - đào tạo của mình. Tại
                nhiều quốc gia ở Châu Á, Mr. Vas tạo nên Leading Performance
                Group, nơi đưa ra giải pháp cho mọi vấn đề của con người.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide"
            style={{
              backgroundImage: "url(https://unsplash.it/1920/500?image=15)",
            }}
            data-year="2019"
          >
            <div className="swiper-slide-content">
              <span className="timeline-year">2019</span>

              {/* <h4 className="timeline-title">Our nice super title</h4> */}
              <p className="timeline-text">
                Life University ngày một phát triển với nhiều hơn nữa những
                chương trình đào tạo tuyệt vời. Phù hợp với nhiều nhu cầu, nhiều
                đối tượng khác nhau. Chương trình Tìm Lại Lẽ Sống & Khát Vọng
                Thành Công (Lần thứ 35) đón nhận hơn 3000 người Việt Nam tham
                dự.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide"
            style={{
              backgroundImage: "url(https://unsplash.it/1920/500?image=15)",
            }}
            data-year="2020"
          >
            <div className="swiper-slide-content">
              <span className="timeline-year">2020</span>

              {/* <h4 className="timeline-title">Our nice super title</h4> */}
              <p className="timeline-text">
                LPE đã lần thứ 5 dẫn dắt một số lượng rất lớn học viên cùng
                chinh phục Nóc nhà Đông Dương - Đỉnh Fansipan. Năm thứ 5 học
                viên Đại học Cuộc Đời được chấp chứng nhận Tốt nghiệp Combo10
                với nhiều chứng chỉ NLP chuyên ngành khác.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide"
            style={{
              backgroundImage: "url(https://unsplash.it/1920/500?image=15)",
            }}
            data-year="2021"
          >
            <div className="swiper-slide-content">
              <span className="timeline-year">2021</span>

              {/* <h4 className="timeline-title">Our nice super title</h4> */}
              <p className="timeline-text">
                Bước vào giai đoạn Covid, LPE tiếp tục cho ra mắt chuỗi chương
                trình online, nhằm giải quyết kịp thời các vấn đề của con người
                ở giai đoạn hiện tại. Dù tình thế khó khăn như thế nào, LPE vẫn
                không bao giờ trì hoãn các kế hoạch hoạt động và phát triển.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide"
            style={{
              backgroundImage: "url(https://unsplash.it/1920/500?image=15)",
            }}
            data-year="2022"
          >
            <div className="swiper-slide-content">
              <span className="timeline-year">2022</span>

              {/* <h4 className="timeline-title">Our nice super title</h4> */}
              <p className="timeline-text">
                LPE cho ra đời một chuỗi chương trình hoàn toàn mới, phù hợp với
                những ai mong muốn trở thành Diễn Giả NLP và là đối tác chính
                thức của LPE: ITTC.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Timeline;
