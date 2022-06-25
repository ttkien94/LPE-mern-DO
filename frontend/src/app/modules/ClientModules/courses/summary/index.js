import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import { Link } from "react-router-dom";
import LPEBanner from "app/components/banner";

import OnlineCourse from "assets/images/onl-course.webp";
import OfflineCourse from "assets/images/off-course.webp";
import MediaCourse from "assets/images/media-course.webp";
import banner from "assets/images/source/banner/chuong-trinh-dao-tao.jpg";

import "./styles/styles.scss";

const categoryList = [
  {
    id: 1,
    name: "Online",
    title: "Khóa học trực tuyến",
    img: OnlineCourse,
    colorBg: "#ffe979",
    colorBtn: "#d7b921",
    link: "/chuong-trinh-huan-luyen/online",
  },
  {
    id: 2,
    name: "Offline",
    title: "Khóa học trực tiếp",
    img: OfflineCourse,
    colorBg: "#b7f598",
    colorBtn: "#6bc63e",
    link: "/chuong-trinh-huan-luyen/offline",
  },
  {
    id: 3,
    name: "Sắp ra mắt",
    title: "Khóa học media",
    img: MediaCourse,
    colorBg: "#7ed5f0",
    colorBtn: "#2fa5ca",
    link: "/chuong-trinh-huan-luyen/media",
  },
];

function Courses() {
  useSiteTitle("training_program");

  return (
    <div className="summaryCate pb-5">
      <LPEBanner
        bannerImg={banner}
        headText="Chương trình huấn luyện"
        subText="LPE cung cấp rất nhiều chương trình huấn luyện phù hợp với tất cả mọi lứa tuổi, ngành nghề khác nhau."
      />

      <div className="container">
        <h1 className="heading">Hôm nay bạn muốn học những gì?</h1>

        <div className="row">
          {categoryList.map((y, index) => {
            return (
              <div
                className="mb-3 mb-lg-0 col-12 col-md-6 col-lg-4 cardCategory"
                key={index}
              >
                <div
                  className="cardCategory_inner"
                  style={{
                    background: `${y.colorBg}`,
                  }}
                >
                  <p className="cardCategory_inner-text">{y.name}</p>

                  <h3 className="cardCategory_inner-title">{y.title}</h3>

                  <img
                    className="cardCategory_inner-img img-fluid d-flex"
                    src={y.img}
                    alt={y.img}
                  />

                  <Link
                    to={y.link}
                    className="cardCategory_inner-btn"
                    style={{
                      backgroundColor: `${y.colorBtn}`,
                    }}
                  >
                    Đi tới
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Courses;
