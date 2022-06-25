import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import { leadership } from "../../assets/images/chuong-trinh-huan-luyen/offline";

import background01 from "../../assets/images/chuong-trinh-huan-luyen/offline/leadership/8-bg-02.jpg";
import background02 from "../../assets/images/chuong-trinh-huan-luyen/offline/leadership/8-bg-03.jpg";

import "./styles/styles.scss";

function LEADERSHIP() {
  useSiteTitle("COA_program");
  return (
    <div className="leadership container-fluid">
      <div className="row">
        <img src={leadership.leadership01} alt={leadership.leadership01} />
      </div>

      <div
        className="row page1 pt-3"
        style={{
          background: `url(${background01}) 100% 100%`,
        }}
      >
        <div className="col-6 offset-3">
          <img src={leadership.leadership02} alt={leadership.leadership02} />
        </div>
        <div className="col-md-8 offset-md-2">
          <div className="row flex-alignitem mt-4 text-justify">
            <div className="col-md-6 order-last">
              <ul>
                <li>
                  Nhận Thức về Hành Trình Anh Hùng và Vạch ra một Hành Trình Anh
                  Hùng Đầy Quyền Năng cho bạn trong tương lai
                </li>
                <li>
                  Thuần Thục về quy trình Mô Hình Hóa Những Bậc Xuất Chúng nhằm
                  Kích Hoạt Thiên Tài Sáng Tạo trong bạn bất cứ khi nào
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                src={leadership.leadership03}
                alt={leadership.leadership03}
              />
            </div>
          </div>
          <div className="row flex-alignitem mt-3 text-justify pb-3">
            <div className="col-md-6 ">
              <ul>
                <li>
                  Nhận Thức về Bản Chất của Hành Vi Con Người theo hành trình
                  Tiến Hóa
                </li>
                <li>
                  Khái Niệm về Nghệ Thuật Lãnh Đạo theo một quan điểm/góc nhìn
                  Toàn Diện và Có Hệ Thống
                </li>
                <li>
                  Các Khái Niệm và Quy Trình về Nghệ Thuật Lãnh Đạo Nền Tảng và
                  có Tầm Nhìn xa
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                src={leadership.leadership04}
                alt={leadership.leadership04}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="row page2 pt-4"
        style={{
          background: `url(${background02}) 100% 100%`,
        }}
      >
        <div className="col-6 offset-3">
          <img src={leadership.leadership05} alt={leadership.leadership05} />
        </div>
        <img
          src={leadership.leadership06}
          alt={leadership.leadership06}
          className="col-md-4 col-sm-5 mt-3"
        />
        <div className="col-md-8 offset-md-2 mt-3">
          <img src={leadership.leadership07} alt={leadership.leadership07} />
          <ul className="mt-3">
            <li>
              Làm Chủ Ma Thuật Kỹ Năng Giao Tiếp Cấp Cao (ACS) với ngành khoa
              học NLP
            </li>
            <li>
              Làm Chủ cách sử dụng Kỹ Năng Giao Tiếp Cấp Cao (ACS) trong việc Xử
              Lý Vấn Đề & Tư Vấn Trị Liệu - Truyền Động Lực
            </li>
            <li>
              Thuần Thục Mô Hình Disney về Việc Ra Quyết Định và Tư Duy Sáng Tạo
              dành cho Cá nhân và Tổ Chức
            </li>
          </ul>
        </div>

        <img
          src={leadership.leadership08}
          alt={leadership.leadership08}
          className="col-md-4 col-sm-5 mt-3"
        />

        <div className="col-md-8 offset-md-2 mt-3">
          <img src={leadership.leadership09} alt={leadership.leadership09} />
          <ul className="mt-3">
            <li>
              Khởi Đầu Hành Trình của bạn về việc Thuần Thục Mô Thức Ngôn Ngữ
              Thay Đổi Niềm Tin - Sleight of Mouth (SOM) - MA THUẬT NGÔN TỪ
            </li>
          </ul>
        </div>

        <img
          src={leadership.leadership10}
          alt={leadership.leadership10}
          className="col-md-4 col-sm-5 mt-3"
        />

        <div className="col-md-8 offset-md-2 mt-3">
          <img src={leadership.leadership11} alt={leadership.leadership11} />
          <ul className="mt-3">
            <li>
              Học về Quy Trình Thống Nhất Các Cấp Bậc Tư Duy và Sử Dụng nó cho
              việc Tích Hợp và Thống Nhất tất cả những điều đã được trải nghiệm
              từ khóa 1 đến 8.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LEADERSHIP;
