import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import bav01 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-banner.jpg";
import bav02 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-gia-tri.png";
import bav03 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-hinh-hoc-vien-1.jpg";
import bav04 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-hinh-hoc-vien-2.jpg";
import bav05 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-trai-nghiem.png";
import bav06 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-ngay-1.png";
import bav07 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-hinh-hoc-vien-3.jpg";
import bav08 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-ngay-2.png";
import bav09 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-hinh-hoc-vien-4.jpg";
import bav10 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-ngay-3.png";
import bav11 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-hinh-hoc-vien-5.jpg";

import bavbackground01 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/7-bg-1.png";
import bavbackground02 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/7-bg-2.png";
import bavbackground03 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/7-bg-3.png";

import "./styles/styles.scss";

function BAV() {
  useSiteTitle("BAV_program");

  return (
    <div className="bav container-fluid">
      <div className="row">
        <img src={bav01} alt={bav01} />
      </div>
      <div
        className="row page1 pt-3"
        style={{
          background: `url(${bavbackground01})`,
        }}
      >
        <div className="col-6 offset-3">
          <img src={bav02} alt={bav02} />
        </div>
        <div className="col-md-8 offset-md-2">
          <div className="row flex-alignitem mt-4 text-justify">
            <div className="col-md-6 order-last">
              <ul>
                <li>
                  Phá vỡ tất cả những Niềm Tin Giới Hạn đang ngăn bạn đến với
                  Ước Mơ Lớn
                </li>
                <li>
                  Tái thiết lập Tầm Nhìn, Sứ Mệnh và Mục Tiêu của bạn để vươn
                  đến những Tầm Cao Vĩ Đại
                </li>
                <li>
                  Ôm trọn những Niềm Tin Đầy Sức Mạnh nhằm Thúc Đẩy bạn Đạt Được
                  Thành Công Cực Đại
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={bav03} alt={bav03} />
            </div>
          </div>
          <div className="row flex-alignitem mt-3 text-justify pb-3">
            <div className="col-md-6 ">
              <ul>
                <li>
                  Đánh giá lại Những Giá Trị Cốt Lõi đang kiềm hãm Sự Phát Triển
                  của bạn
                </li>
                <li>
                  Cài Đặt Các Giá Trị Cốt Lõi nhằm Truyền Động Lực giúp bạn vươn
                  đến Giao Đoạn Tiếp Theo của cuộc đời mình
                </li>
                <li>
                  Làm Chủ Liệu Pháp Trị Liệu sử dụng các quy trình xây dựng Hệ
                  Thống Niềm Tin
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={bav04} alt={bav04} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="row page2 pt-4"
        style={{
          background: `url(${bavbackground02})`,
        }}
      >
        <div className="col-6 offset-3">
          <img src={bav05} alt={bav05} />
        </div>
        <img src={bav06} alt={bav06} className="col-md-4 col-sm-5 mt-3" />
        <div className="col-md-8 offset-md-2 mt-3">
          <img src={bav07} alt={bav07} />
          <ul className="mt-3">
            <li>Nắm vững Cấu Trúc hình thành Niềm Tin</li>
            <li>
              Thấm nhuần các Quy Trình KIẾN TẠO và LOẠI BỎ Niềm Tin Giới Hạn
            </li>
          </ul>
        </div>
        <img src={bav08} alt={bav08} className="col-md-4 col-sm-5 mt-3" />
        <div className="col-md-8 offset-md-2 mt-3 ">
          <div className="row flex-alignitem mt-3 text-justify pb-3">
            <div className="col-md-6 ">
              <ul>
                <li>Thấu hiểu về Hệ Thống Giá Trị Clare Graves</li>
                <li>Tuần thục Quy Trình Cài Đặt Giá Trị Cốt Lõi NLP</li>
                <li>
                  Thuần thục Quy Trình Coaching - Tư Vấn Trị Liệu về Niềm Tin và
                  Giá Trị đầy quyền năng
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={bav09} alt={bav09} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="row page3 pt-4"
        style={{
          background: `url(${bavbackground03})`,
        }}
      >
        <img src={bav10} alt={bav10} className="col-md-4 col-sm-5 mt-3" />
        <div className="col-md-8 offset-md-2 mt-3">
          <img src={bav11} alt={bav11} />
          <ul className="mt-3">
            <li>Quy Trình Tái Đóng Khung</li>
            <li>
              Giá Trị "TOÀN DIỆN" Tích Hợp Niềm Tin và Giá Trị trong Mô Hình
              SCORE Đa Cấp Độ.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BAV;
