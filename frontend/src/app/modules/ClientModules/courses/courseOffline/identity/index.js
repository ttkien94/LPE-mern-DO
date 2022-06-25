import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import "./styles/styles.scss";

import identity01 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity//tim-lai-nhan-dang-dich-thuc-lpe-banner.jpg";
import identity02 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-gia-tri.png";
import identity03 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-hinh-1.jpg";
import identity04 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-hinh-2.jpg";
import identity05 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-trai-nghiem.png";
import identity06 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-day-1.png";
import identity07 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-hinh-3.jpg";
import identity08 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-day-2.png";
import identity09 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-hinh-4.jpg";
import identity10 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-day-3.png";
import identity11 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-hinh-5.jpg";

import identitybackground01 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/9-bg-02.jpg";
import identitybackground02 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/9-bg-03.jpg";

function IDENTITY() {
  useSiteTitle("identity_program");

  return (
    <div className="identity container-fluid">
      <div className="row">
        <img src={identity01} alt={identity01} className="img-fluid w-100" />
      </div>

      <div
        className="row page1 pt-3"
        style={{
          background: `url(${identitybackground01})`,
        }}
      >
        <div className="col-6 offset-3">
          <img src={identity02} alt={identity02} />
        </div>
        <div className="col-md-8 offset-md-2">
          <div className="row flex-alignitem mt-4 text-justify">
            <div className="col-md-6 order-last">
              <ul>
                <li>
                  Nhận Thức về khái niệm Nhân Dạng và cách nó tác động đến Cơ
                  Thể và Tâm Trí chúng ta
                </li>
                <li>
                  Nhận Thức về Sự Tiến Hóa của con người từ một số quan điểm/góc
                  nhìn và cách chúng ta thực sự Kiến Tạo Số Phận của mình từ góc
                  nhìn Tâm Linh
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={identity03} alt={identity03} />
            </div>
          </div>
          <div className="row flex-alignitem mt-3 text-justify pb-3">
            <div className="col-md-6 ">
              <ul>
                <li>
                  Nhận thức về Vật Lý/Cơ Học Lượng Tử và cách sử dụng nó để Kiến
                  Tạo Thành Công Cực Đại
                </li>
                <li>
                  Hiểu về Nhiều Quy Luật Thu Hút Nguồn Lực Khác Nhau Trong Cuộc
                  Đời và cách sử dụng các quy luật này để Thành Công Cực Đại
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={identity04} alt={identity04} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="row page2 pt-4"
        style={{
          background: `url(${identitybackground02})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="col-6 offset-3">
          <img src={identity05} alt={identity05} />
        </div>
        <img
          src={identity06}
          alt={identity06}
          className="col-md-4 col-sm-5 mt-3"
        />
        <div className="col-md-8 offset-md-2 mt-3">
          <img src={identity07} alt={identity07} />
          <ul className="mt-3">
            <li>
              Cách Kiến Tạo Nhân Dạng và cộng hưởng với những đóng góp trọng đại
              trong cuộc đời này
            </li>
            <li>
              Vận Hành các vấn đề Toàn Diện bằng Liệu Trình Personal History
              Therapy (Tiểu Sử Cá Nhân)
            </li>
          </ul>
        </div>

        <img src={identity08} alt="img" className="col-md-4 col-sm-5 mt-3" />

        <div className="col-md-8 offset-md-2 mt-3">
          <img src={identity09} alt={identity09} />
          <ul className="mt-3">
            <li>Tiếp cận đời sống tâm linh trên phương diện khoa học</li>
            <li>
              Thảo Luận, Đúc Kết về cách Vận Hành Nhân Dạng và Tâm Linh trên
              hành trình mà ở đó bạn Đạt Được Thành Công theo như Bảng Kế Hoạch
              Thành Công của bạn
            </li>
            <li>Thấm Nhuần Vật Lý Lượng Tử và Cách áp dụng vào cuộc sống</li>
          </ul>
        </div>

        <img
          src={identity10}
          alt={identity10}
          className="col-md-4 col-sm-5 mt-3"
        />

        <div className="col-md-8 offset-md-2 mt-3">
          <img src={identity11} alt={identity11} />
          <ul className="mt-3">
            <li>
              Chuẩn Bị Cuối Cùng về Thể Chất và Tinh Thân cho hành trình Chinh
              Phục Fansipan, Sapa, Việt Nam.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IDENTITY;
