import React from "react";
import LPEBanner from "app/components/banner";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Navigation } from "swiper";
import CourseItemOffline from "./components/courseItem";
import useSiteTitle from "core/hooks/useSiteTitle";

// import media file
import khoa01 from "assets/images/source/offline/khoa01.jpg";
import khoa02 from "assets/images/source/offline/khoa02.jpg";
import khoa03 from "assets/images/source/offline/khoa03.jpg";
import khoa04 from "assets/images/source/offline/khoa04.jpg";
import khoa05 from "assets/images/source/offline/khoa05.jpg";
import khoa06 from "assets/images/source/offline/khoa06.jpg";
import khoa07 from "assets/images/source/offline/khoa07.jpg";
import khoa08 from "assets/images/source/offline/khoa08.jpg";
import khoa09 from "assets/images/source/offline/khoa09.jpg";
import khoa10 from "assets/images/source/offline/khoa10.jpg";
import Combo from "assets/images/source/offline/Combo.jpg";

import LTC from "assets/images/source/offline/LTC.jpg";
import OAC from "assets/images/source/offline/OAC.jpg";
import PAR from "assets/images/source/offline/PAR.jpg";

import banner from "assets/images/source/banner/khoa-hoc-offline-banner.jpg";

import "./styles/styles.scss";

// install Swiper modules
SwiperCore.use([Scrollbar, Navigation]);

function CourseOffline() {
  useSiteTitle("offline_page");

  const ICTA = [
    {
      id: 1,
      name: "ICPC & IMCPC",
      title: "chương trình đào tạo tư vấn trị liệu NLP đạt chuẩn quốc tế",
      bgCourse: khoa01,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/dao-tao-tu-van-tri-lieu-nlp-dat-chuan-quoc-te",
    },
    {
      id: 2,
      name: "ITTC",
      title: "người kế thừa đại học cuộc đời",
      bgCourse: khoa02,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/nguoi-thua-ke-dai-hoc-cuoc-doi",
    },
  ];

  const combo6 = [
    {
      id: 1,
      name: "khóa 1",
      title: "tìm lại lẽ sống và khát vọng thành công",
      bgCourse: khoa01,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/tim-lai-le-song-va-khat-vong-thanh-cong",
    },
    {
      id: 2,
      name: "khóa 2",
      title: "nghệ thuật sống hạnh phúc và hòa hợp",
      bgCourse: khoa02,
      textColor: "#333",
      link: "/chuong-trinh-huan-luyen/offline/nghe-thuat-song-hanh-phuc-va-hoa-hop",
    },
    {
      id: 3,
      name: "khóa 3",
      title: "thắp sáng cuộc đời bạn",
      bgCourse: khoa03,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/thap-sang-cuoc-doi-ban",
    },
    {
      id: 4,
      name: "khóa 4",
      title: "sức khỏe toàn diện",
      bgCourse: khoa04,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/suc-khoe-toan-dien",
    },
    {
      id: 5,
      name: "khóa 5",
      title: "tư duy xuất chúng",
      bgCourse: khoa05,
      link: "/chuong-trinh-huan-luyen/offline/tu-duy-xuat-chung",
    },
    {
      id: 6,
      name: "khóa 6",
      title:
        "ứng dụng lập trình ngôn gnữ tư duy vào cuộc sống - tư vấn trị liệu",
      bgCourse: khoa06,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/ung-dung-lap-trinh-ngon-ngu-tu-duy-vao-cuoc-song-tu-van-tri-lieu",
    },
  ];

  const combo10 = [
    {
      id: 11,
      name: "Combo 6",
      title: "Các khóa Combo 6",
      bgCourse: Combo,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline",
    },
    {
      id: 7,
      name: "khóa 7",
      title:
        "niềm tin và giá trị đầy nội lực của những con người tân tiến nhất - niềm tin và giá trị của những con người xuất chúng",
      bgCourse: khoa07,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/niem-tin-va-gia-tri-day-noi-luc-cua-nhung-con-nguoi-tan-tien-nhat",
    },
    {
      id: 8,
      name: "khóa 8",
      title: "nghệ thuật lãnh đão xuất chúng và nghệ thuật giao tiếp cấp cao",
      bgCourse: khoa08,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/nghe-thuat-lanh-dao-xuat-chung-va-nghe-thuat-giao-tiep-cap-cao",
    },
    {
      id: 9,
      name: "khóa 9",
      title:
        "TÌM LẠI NHÂN DẠNG ĐÍCH THỰC CỦA BẠN VÀ SỬ DỤNG KHOA HỌC TÂM THỨC ĐỂ ĐẠT ĐƯỢC THÀNH CÔNG CỰC ĐẠI - KIẾN TẠO ĐỜI SỐNG TÂM LINH",
      bgCourse: khoa09,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/tim-lai-nhan-dang-dich-thuc-kien-tao-doi-song-tam-linh",
    },
    {
      id: 10,
      name: "khóa 10",
      title:
        "CHINH PHỤC TÂM TRÍ & CƠ THỂ CỦA BẢN THÂN VÀ LÀM CHỦ CUỘC ĐỜI CỦA MỘT MASTER NLP - BẬC THẦY CUỘC ĐỜI",
      bgCourse: khoa10,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/chinh-phuc-tam-tri-co-the-cua-ban-than-va-lam-chu-cuoc-doi",
    },
  ];

  const otherCourse = [
    {
      id: 1,
      name: "Trại huấn luyện lãnh đạo",
      title: "Trại huấn luyện lãnh đạo",
      bgCourse: LTC,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/trai-huan-luyen-lanh-dao",
    },
    {
      id: 2,
      name: "Trại thiếu niên xuất chúng",
      title: "Trại thiếu niên xuất chúng",
      bgCourse: OAC,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/trai-thieu-nien-xuat-chung",
    },
    {
      id: 3,
      name: "Nghệ thuật truyền cảm hứng & nuôi dạy con xuất chúng",
      title: "Nghệ thuật truyền cảm hứng & nuôi dạy con xuất chúng",
      bgCourse: PAR,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/nghe-thuat-truyen-cam-hung-nuoi-day-con-xuat-chung",
    },
  ];

  return (
    <div className="courseOffline-page">
      <LPEBanner
        bannerImg={banner}
        headText="Khóa học Offline"
        subText="LPE có các khóa học trực tiếp nhằm cung cấp trải nghiệm học tốt nhất cho học viên."
      />

      <div className="container">
        <div className="heading">
          <h3 className="heading-text">
            INTERNATIONAL COACHING and TRAINING ALLIANCE
          </h3>
          <h5 className="heading-text pt-0">
            HIỆP HỘI HUẤN LUYỆN VÀ ĐÀO TẠO QUỐC TẾ
          </h5>
          <p className="heading-desc">
            Phù hợp với anh/chị có định hướng theo đuổi sự nghiệp coaching, diễn
            giả NLP, người truyền cảm hứng... Ngoài ra, khóa học cũng đồng thời
            giúp anh/chị xây dựng thêm kỹ năng coach cho chính bản thân để từ đó
            làm chủ các vấn đề trong cuộc sống.
          </p>
        </div>

        <Swiper
          scrollbar={{
            hide: true,
          }}
          className="mySwiper my-3"
          breakpoints={{
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={true}
        >
          {ICTA.map((y) => {
            return (
              <SwiperSlide key={y.id}>
                <CourseItemOffline
                  name={y.name}
                  title={y.title}
                  bgCourse={y.bgCourse}
                  textColor={y.textColor}
                  link={y.link}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="container">
        <div className="heading">
          <h3 className="heading-text">
            LIFE UNI - ĐẠI HỌC CUỘC ĐỜI - COMBO 6
          </h3>
          <p className="heading-desc">
            Combo 6 thuộc chuỗi Đại Học Cuộc Đời sẽ giúp cho bạn hiểu cảm xúc
            bên trong của chính mình, từ đó lý giải được các vấn đề xung quanh
            đang tác động trực tiếp để rồi tìm ra hướng giải quyết chúng.
          </p>
        </div>

        <Swiper
          scrollbar={{
            hide: true,
          }}
          className="mySwiper my-3"
          breakpoints={{
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={true}
        >
          {combo6.map((y) => {
            return (
              <SwiperSlide key={y.id}>
                <CourseItemOffline
                  name={y.name}
                  title={y.title}
                  bgCourse={y.bgCourse}
                  textColor={y.textColor}
                  link={y.link}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="container">
        <div className="heading">
          <h3 className="heading-text">
            LIFE UNI - ĐẠI HỌC CUỘC ĐỜI - COMBO 10
          </h3>
          <p className="heading-desc">
            Combo 10 thuộc chuỗi Đại Học Cuộc Đời, có chứa các khóa nằm trong
            Combo 6. Không dừng lại về các vấn đề bản thân, giờ đây với chuỗi
            combo 10, bạn sẽ có cái nhìn toàn diện hơn về cách mà vũ trụ vận
            hành. Kết thúc khóa học bằng 1 chuyến hành trình chinh phục đỉnh núi
            cao nhất Đông Nam Á - Fansipan, bạn sẽ xây dựng được cho bản thân Dự
            án cuộc đời nhằm cống hiến xã hội, mang trên mình tầm vóc lớn lao
            hơn.
          </p>
        </div>

        <Swiper
          scrollbar={{
            hide: true,
          }}
          className="mySwiper my-3"
          breakpoints={{
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={true}
        >
          {combo10.map((y) => {
            return (
              <SwiperSlide key={y.id}>
                <CourseItemOffline
                  name={y.name}
                  title={y.title}
                  bgCourse={y.bgCourse}
                  textColor={y.textColor}
                  link={y.link}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="container">
        <div className="heading">
          <h3 className="heading-text">Các khóa Offline khác</h3>
          <p className="heading-desc">
            Bao gồm nhiều khóa lẻ, dành cho nhiều độ tuổi khác nhau và đạt được
            những thành tựu khác nhau.
          </p>
        </div>

        <Swiper
          scrollbar={{
            hide: true,
          }}
          className="other-course my-3"
          breakpoints={{
            // 640: {
            //   slidesPerView: 2,
            //   spaceBetween: 20,
            // },
            // 768: {
            //   slidesPerView: 4,
            //   spaceBetween: 40,
            // },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={true}
        >
          {otherCourse.map((y) => {
            return (
              <SwiperSlide key={y.id}>
                <CourseItemOffline
                  name={y.name}
                  title={y.title}
                  bgCourse={y.bgCourse}
                  textColor={y.textColor}
                  link={y.link}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default CourseOffline;
