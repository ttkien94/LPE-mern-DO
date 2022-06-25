import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import { Link } from "react-router-dom";

import coa01 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-banner.jpg";
import coa02 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-can-phai-tham-gia.png";
import coa03 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-doan-1.jpg";
import coa04 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-1.png";
import coa05 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-11.png";
import coa06 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-12.png";
import coa07 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-13.png";
import coa08 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-2.png";
import coa09 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-21.png";
import coa10 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-22.png";
import coa11 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-23.png";
import coa12 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-3.png";
import coa13 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-31.png";
import coa14 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-32.png";
import coa15 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-4.png";
import coa16 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-41.png";
import coa17 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-5.png";
import coa18 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-51.png";
import coa19 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-doan-2.jpg";
import coa20 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-doan-3.jpg";

import "./styles/styles.scss";

function COA() {
  useSiteTitle("counseling_program");

  return (
    <div className="coa container-fluid">
      <div className="row">
        <img src={coa01} alt={coa01} className="img-fluid w-100" />

        <div className="col-md-6 offset-md-3 mt-3">
          <iframe
            height="315"
            src="https://www.youtube.com/embed/WqCPJ_1z-1c"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 borderTop"></div>

        <div className="col-md-6 mt-3">
          <p>Trở thành bậc thầy chữa lành chuyên sâu,</p>

          <p className="text-right">
            tận vào gốc rễ và duy trì hiệu quả lâu dài
          </p>
        </div>

        <div className="col-md-3 borderBottom "></div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8 offset-md-2">
          <img src={coa02} alt={coa02} />

          <div className="row flex-alignitem mt-3 text-justify">
            <div className="col-md-6 ">
              <p>
                Trải nghiệm 5 ngày chuyên sâu và Tốt Nghiệp với tư cách là một
                NHÀ THỰC HÀNH NLP CĂN BẢN, thành thục về Thôi Miên Trị Liệu và
                Dòng Thời Gian Trị Liệu với chứng chỉ đẳng cấp quốc tế (chứng
                nhận bởi Đại Học NLP Hoa Kỳ - Ủy Ban Thôi Miên Trị Liệu Hoa Kỳ -
                Hội Đồng Các Chuyên Gia Thôi Miên Thực Nghiệm Hoa Kỳ) bởi bậc
                thầy đào tạo NLP hàng đầu Châu Á - Chuyên gia Mr. Vasanth
                Gopalan.
              </p>
            </div>

            <div className="col-md-6">
              <img src={coa03} alt={coa03} />
            </div>
          </div>

          <div className="row flex-alignitem mt-4 text-justify">
            <div className="col-md-6 order-last">
              <ul>
                <li>
                  Vận dụng và giải quyết tận gốc , chuyển hóa chữa lành các vấn
                  đề về 8 khía cạnh của cuộc sống ngay trong khóa học với những
                  quy trình NLP nền tảng & chuyên sâu, thôi miên và Liệu Pháp
                  Dòng Thời Gian.
                </li>

                <li>
                  Củng cố và hệ thống lại 6 QUY TRÌNH CHỮA LÀNH từ khoá 1 “TÌM
                  LẠI LẼ SỐNG & KHÁT VỌNG THÀNH CÔNG” đến khóa 5(*)
                </li>

                <li>
                  LÀM CHỦ KỸ THUẬT THÔI MIÊN CHỮA LÀNHLÀM CHỦ KỸ THUẬT THÔI MIÊN
                  CHỮA LÀNH
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <img src={coa19} alt={coa19} />
            </div>
          </div>

          <div className="row flex-alignitem mt-3 text-justify">
            <div className="col-md-6 ">
              <ul>
                <li>KHÁM PHÁ LIỆU PHÁP DÒNG THỜI GIAN</li>

                <li>Kiến tạo và thiết lập hành vi mới</li>

                <li>Thực tập Kỹ Thuật Tư Vấn Trị Liệu</li>

                <li>
                  Loại trừ tận gốc 5 LOẠI CẢM XÚC TIÊU CỰC NGHIÊM TRỌNG NHẤT mà
                  con người gặp phải
                </li>

                <li>Gieo hạt TƯƠNG LAI</li>
              </ul>
            </div>

            <div className="col-md-6">
              <img src={coa20} alt={coa20} />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4 text-center">
        <div className="col-md-8 offset-md-2 mt-3">
          <div className="row">
            <img src={coa04} alt={coa04} className="col-md-10 offset-md-1" />

            <div className="col-4">
              <img src={coa05} alt={coa05} />

              <p>
                Tổng hợp kho kiến thức NLP đã được học từ 5 cấp độ đầu (khóa 1
                đến 5)*
              </p>
            </div>
            <div className="col-4">
              <img src={coa06} alt={coa06} />
              <p>Cấu Trúc Quy Trình</p>
            </div>

            <div className="col-4">
              <img src={coa07} alt={coa07} />
              <p>Vấn Đề và " Chủ Đích Tích Cực" của Vấn Đề</p>
            </div>
          </div>

          <div className="row mt-3">
            <img src={coa08} alt={coa08} className="col-md-10 offset-md-1" />

            <div className="col-4">
              <img src={coa09} alt={coa09} />
              <p>Mô Hình Chuẩn Đoán và Kỹ Thuật Đặt Câu Hỏi</p>
            </div>

            <div className="col-4">
              <img src={coa10} alt={coa10} />
              <p className="text-center">Quy trình tạo "NEO"</p>
            </div>

            <div className="col-4">
              <img src={coa11} alt={coa11} />
              <p>Quy trình đánh đổ "NEO"</p>
            </div>
          </div>

          <div className="row mt-3">
            <img src={coa12} alt={coa12} className="col-md-10 offset-md-1" />

            <div className="col-4 offset-2">
              <img src={coa13} alt={coa13} />

              <p>Quy Trình PP</p>
            </div>
            <div className="col-4">
              <img src={coa14} alt={coa14} />

              <p className="text-center">Quy trình NBG</p>
            </div>
          </div>

          <div className="row mt-3 flex-alignitem">
            <img src={coa15} alt={coa15} className="col-md-10 offset-md-1" />
            <div className="col-4 offset-1">
              <img src={coa16} alt={coa16} />
            </div>

            <div className="col-5">
              <p className="text-center">
                Thực hiện Chữa lành bằng quy tắc Dòng Thời Gian Căn Bản
              </p>
            </div>
          </div>

          <div className="row mt-3 flex-alignitem">
            <img src={coa17} alt={coa17} className="col-md-10 offset-md-1" />
            <div className="col-md-4 offset-md-0 col-sm-4 offset-sm-4  col-xs-4 offset-xs-4">
              <img src={coa18} alt={coa18} />
            </div>
            <div className="col-md-8">
              <p>
                TỐT NGHIỆP CHỨNG CHỈ - NLP PRACTITIONER
                <br /> (Chứng nhận ABNLP & NLP University)
              </p>
              <p>
                TỐT NGHIỆP CHỨNG CHỈ - HYPNOTHERAPIST
                <br /> (Chứng nhận ABH)
              </p>
              <p>
                TỐT NGHIỆP CHỨNG CHỈ - TIMELINE THERAPIST <br /> (Chứng nhận bởi
                Timeline Therapy Association)
              </p>
            </div>
          </div>
          <div className="mt-3">
            <h3>KHÓA 1 ĐẾN KHÓA 5 BAO GỒM:</h3>
            <Link to="/chuong-trinh-huan-luyen/offline/tim-lai-le-song-va-khat-vong-thanh-cong">
              Tìm Lại Lẽ Sống Và Khát Vọng Thành Công
            </Link>
            <Link to="/chuong-trinh-huan-luyen/offline/nghe-thuat-song-hanh-phuc-va-hoa-hop">
              Nghệ Thuật Sống Hạnh Phúc Và Hòa Hợp
            </Link>
            <Link to="/chuong-trinh-huan-luyen/offline/thap-sang-cuoc-doi-ban">
              Thắp Sáng Cuộc Đời Bạn
            </Link>
            <Link to="/chuong-trinh-huan-luyen/offline/suc-khoe-toan-dien">
              Sức Khỏe Hoàn hảo
            </Link>
            <Link to="/chuong-trinh-huan-luyen/offline/tu-duy-xuat-chung">
              Tư Duy Xuất Chúng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default COA;
