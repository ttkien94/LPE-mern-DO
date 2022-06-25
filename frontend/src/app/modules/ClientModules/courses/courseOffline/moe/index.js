import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import "./styles/styles.scss";
import { moe } from "../../assets/images/chuong-trinh-huan-luyen/offline";

function MOE() {
  useSiteTitle("mindset_program");

  return (
    <div className="moe container-fluid">
      <img src={moe.moe01} alt={moe.moe01} className="img-fluid w-100" />

      <div className="container">
        <div className="row flex-alignitem">
          <div className="col-md-6">
            <img src={moe.moe02} alt={moe.moe02} />
          </div>
          <div className="col-md-6 text-center ">
            <div className="reason">
              <p>Bạn có biết</p>
              <p>Sự khác biệt giữa người thành công & người thất bại ?</p>
              <p>Sự khác biệt giữa người lạc quan & bi quan ?</p>
              <p>Sự khác biệt giữa người giàu & người nghèo ?</p>
              <h3>ĐÂU LÀ LÝ DO CHỈ CÓ 0,7% NGƯỜI THÀNH CÔNG TRÊN THẾ GIỚI ?</h3>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <img src={moe.moe03} alt={moe.moe03} className="col-10 offset-1" />
          <div className="col-10 offset-1 thinkDiffirent mt-3">
            <div className="row flex-alignitem">
              <div className="col-md-3">
                <img src={moe.moe04} alt={moe.moe04} className="apple" />
              </div>
              <div className="col-md-9 text-justify">
                <p>
                  Đây là câu slogan nổi tiếng của hãng Apple. Để trở thành một
                  tượng đài vững chắc trong ngành công nghệ số như hiện nay,
                  những vị lãnh đạo tài ba cùng toàn thể đội ngũ Apple đã sáng
                  tạo không ngừng nghỉ và cho ra đời những sản phẩm ưu tú vượt
                  trội. Thương hiệu Apple – không phải sản phẩm làm nên danh
                  tiếng, mà chính là lối tư duy khác biệt của cố CEO Steve Jobs
                  đã tạo nên những giá trị tuyệt vời để lại cho muôn đời sau.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6 offset-md-3 col-sm-10 offset-sm-1 text-justify mindset">
            <p>
              Tư duy là quá trình tâm lý phản ánh những thuộc tính, bản chất của
              các mối liên hệ và quan hệ bên trong. Có tính quy luật của sự vật
              hiện tượng mà trước đó ta chưa từng biết.
            </p>
            <p>
              Những ám cảnh đã trải nghiệm trong quá khứ ảnh hưởng đến toàn bộ
              quyết định thực hiện điều gì đó ở thời điểm hiện tại của mỗi
              người.
            </p>
            <h3>
              LÀM THẾ NÀO ĐỂ THIẾT LẬP CÁC TƯ DUY KHÁC BIỆT ĐỂ CÓ THỂ SUY NGHĨ
              NHƯ CÁC BẬC VĨ NHÂN XUẤT CHÚNG?
            </h3>
          </div>
        </div>

        <div className="row  mt-3">
          <div className="col-10 offset-1 color text-justify">
            <h4>
              Chương trình TƯ DUY XUẤT CHÚNG (Mindset of Excellences - MOE) sẽ
              giúp bạn THIẾT LẬP và HÀNH XỬ 23 Tư Duy của những người thành công
              xuất chúng trên thế giới này NGAY TẠI CHƯƠNG TRÌNH.
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <iframe
              height="315"
              src="https://www.youtube.com/embed/_AGpCqhS9u0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="color text-center">
              GIÁ TRỊ nhận được từ chương trình <br /> TƯ DUY XUẤT CHÚNG <br />
              (Mind set of Excellences - MOE)
            </p>
            <div className="row">
              <div className="col-8 offset-2">
                <p className="value  mt-3">
                  Hiểu được cách hình thành tư duy và chúng tác động đến ta như
                  thế nào.
                </p>
                <img src={moe.moe05} alt={moe.moe05} className="mx-auto" />
                <p className="value">
                  Học cách bắt nguồn/khơi nguồn tư duy trong NLP.
                </p>
                <img src={moe.moe05} alt={moe.moe05} className="mx-auto" />
                <p className="value">
                  Cách nắm bắt được các tư duy của bản thân.
                </p>
                <img src={moe.moe05} alt={moe.moe05} className="mx-auto" />
                <p className="value">
                  Thảo luận và áp dụng các tư duy này trong từng khía cạnh của
                  cuộc sống.
                </p>
                <img src={moe.moe05} alt={moe.moe05} className="mx-auto" />
                <p className="value">
                  Hành động ra bên ngoài và kích neo các hành vi tương thích phù
                  hợp.
                </p>
                <img src={moe.moe05} alt={moe.moe05} className="mx-auto" />
                <p className="value">
                  Áp dụng tất cả các tư duy đã học nhằm nâng cao các thành tựu,
                  tầm nhìn và mục tiêu.
                </p>
                <img src={moe.moe05} alt={moe.moe05} className="mx-auto" />
                <p className="value">
                  Hợp nhất tất cả các tư duy lại với nhau trong hệ thần kinh của
                  bạn để sử dụng chúng một cách nhuần nhuyễn.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3 pb-3">
          <img src={moe.moe06} alt={moe.moe06} className="col-8 offset-2" />
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScTOD67cmeSZY5vcHEPfSCPwuW1344QLSvj7fWCpoQvWHeuGg/viewform"
            className="register mt-3"
          >
            Đăng ký ngay
          </a>
        </div>
      </div>
    </div>
  );
}

export default MOE;
