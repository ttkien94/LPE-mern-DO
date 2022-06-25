import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import graduate01 from "../../assets/images/chuong-trinh-huan-luyen/offline/graduate/chinh-phuc-tam-tri-va-co-the-lpe-banner.png";
import graduate02 from "../../assets/images/chuong-trinh-huan-luyen/offline/graduate/chinh-phuc-tam-tri-va-co-the-lpe-hinh-hoc-vien-01.png";
import graduate03 from "../../assets/images/chuong-trinh-huan-luyen/offline/graduate/chinh-phuc-tam-tri-va-co-the-lpe-hinh-hoc-vien-02.png";
import graduate04 from "../../assets/images/chuong-trinh-huan-luyen/offline/graduate/chinh-phuc-tam-tri-va-co-the-lpe-hinh-hoc-vien-03.png";

import "./styles/styles.scss";

function GRADUATE() {
  useSiteTitle("graduate_program");
  return (
    <div className="graduate text-center container-fluid">
      <div>
        <div className="row">
          <img src={graduate01} alt={graduate01} className="img-fluid w-100" />
          <div className="col-md-6 offset-md-3 mt-3">
            <iframe
              height="315"
              src="https://www.youtube.com/embed/iZNITdzCapQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2 className="background mt-3 p-2">GIÁ TRỊ</h2>
            <ul>
              <li>
                Tốt Nghiệp Trường Đời và sẵn sàng cho một cơ thể toàn diện để có
                thể vượt qua mọi thử thách cả về Tâm Trí lẫn Thể Chất vô cùng
                khó khăn một cách dễ dàng
              </li>
              <li>
                Xen lại và Vận Hành phong cách sống của người đã tốt nghiệp
                Trường Đời - Cho Bản Thân, Gia Đình, Đất Nước và Nhân Loại
              </li>
              <li>
                Chắt lọc Tầm Nhìn Cá Nhân, Mục Đích Sống, Khát Vọng & Mục Tiêu
                tạo những Cống Hiến Trọng Đại & Ý Nghĩa cuộc đời
              </li>
              <li>
                Trở thành Bậc Thầy Tư Vấn Trị Liệu - Truyền Động Lực với khóa
                học NLP
              </li>
            </ul>
          </div>
          <div className="col-md-8 offset-md-2">
            <img src={graduate02} alt={graduate02} />
          </div>
          <h2 className="background mt-3 p-2 col-md-6 offset-md-3  ">
            TRẢI NGHIỆM
          </h2>
        </div>
        <div className="row mt-3">
          <div className="col-4 background2">
            <h3>NGÀY 1,2,3</h3>
          </div>
          <div className="col-md-8 offset-md-2 mt-3">
            <img src={graduate03} alt={graduate03} />
            <p className="mt-3">
              Áp dụng mọi thứ bạn đã học trong hành trình Chinh Phục Ngọn Núi
              Fansipan cao nhất Đông Dương (Lộ trình khó nhất).
            </p>
          </div>
          <div className="col-md-6 background2 mt-3">
            <h3>NGÀY 4,5,6: GIÁ TRỊ CỐT LÕI</h3>
          </div>
          <div className="col-md-8 offset-md-2 mt-3">
            <img src={graduate04} alt={graduate04} />
            <p className="mt-3">
              Tư vấn và đúc kết tất cả các trải nghiệm và bài học đã trải qua.
              Liên hệ đến các Nguồn Lực để đạt được Thành Công Cực Đại
            </p>
            <p>
              Đúc Kết về Thông Điệp Meta trong khóa 1-3 và Thuyết Trình Nhóm
            </p>
            <p>
              Đúc Kết về Thông Điệp Meta trong khóa 4-6 và Thuyết Trình Nhóm
            </p>
            <p>
              Đúc Kết về Thông Điệp Meta trong khóa 7-9 và Thuyết Trình Nhóm
            </p>
            <p>
              Tích Hợp toàn bộ Hành Trình của Đại Học Cuộc Đời qua việc sử dụng
              Mô Hình SOAR (Phòng Tập Thiên Nhiên)
            </p>
            <p>
              Tổng Hợp Cấu Trúc của Trải Nghiệm Con Người bằng việc Thuyết Trình
              Nhóm
            </p>
            <p>
              Lế Tốt Nghiệp - Tốt Nghiệp Cuộc Đời và trở thành NLP Master Coach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GRADUATE;
