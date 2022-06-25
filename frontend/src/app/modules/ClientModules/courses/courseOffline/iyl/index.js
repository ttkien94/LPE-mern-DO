import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import { iyl } from "../../assets/images/chuong-trinh-huan-luyen/offline";

import "./styles/styles.scss";

function IYL() {
  useSiteTitle("lightup_your_life");

  return (
    <div className="iyl container-fluid">
      <div className="row">
        <img src={iyl.iyl01} alt={iyl.iyl01} className="img-fluid w-100" />
      </div>

      <div>
        <div className="row flex-alignitem">
          <div className="col-md-6">
            <img src={iyl.iyl02} alt={iyl.iyl02} />
          </div>
          <div className="col-md-6">
            <img src={iyl.iyl03} alt={iyl.iyl03} className="col-6 offset-3" />
          </div>
        </div>

        <div className="row flex-alignitem pb-3">
          <div className="col-md-6 offset-md-3">
            <img src={iyl.iyl04} alt={iyl.iyl04} className="mx-auto" />
          </div>
          <div className="col-md-8 offset-md-2">
            <img src={iyl.iyl05} alt={iyl.iyl05} className="mx-auto" />
            <p>
              Đứa trẻ 7 tuổi ngây thơ, mơ trở thành nhà du hành vũ trụ bay lên
              các vì sao. Cậu bé 12 tuổi tò mò, mơ trở thành nhà khoa học sáng
              tạo những thứ phi thường. Thiếu niên 17 nhiều đam mê, mơ trở thành
              ca sĩ, diễn viên, cầu thủ nổi tiếng. Thanh niên 22 tuổi đầy hoài
              bão, mơ trở thành doanh nhân, bác sĩ, kỹ sư giàu có thành đạt…
            </p>
            <img src={iyl.iyl06} alt={iyl.iyl06} className="mx-auto" />
            <p>
              Bạn đã từng có một một giấc mơ vậy không? Và bây giờ, khi ở tuổi
              25, 35 thậm chí 45, giấc mơ ấy đã thành hiện thực chưa, hay vẫn
              còn ấp ủ? Hay bạn từ bỏ nó rồi?
            </p>
          </div>
        </div>
      </div>

      <div className="container pageBreak ">
        <div className="row  mt-4 ">
          <div className="col-md-10 offset-md-1">
            <div className="row flex-alignitem">
              <div className="col-md-6">
                <img src={iyl.iyl07} alt={iyl.iyl07} />
                <p>
                  <img
                    src={iyl.iyl08}
                    alt={iyl.iyl08}
                    className="d-inline-block mr-2"
                  />
                  Không thực sự nghiêm túc với giấc mơ của mình
                </p>
                <p>
                  <img
                    src={iyl.iyl09}
                    alt={iyl.iyl09}
                    className="d-inline-block mr-2"
                  />
                  Để mặc "dòng đời xô đẩy", đẩy đâu đi đó đến già
                </p>
                <p>
                  <img
                    src={iyl.iyl10}
                    alt={iyl.iyl10}
                    className="d-inline-block mr-2"
                  />
                  Lo không đủ khả năng nên luôn trì hoãn, chờ đợi
                </p>
                <p>
                  <img
                    src={iyl.iyl11}
                    alt={iyl.iyl11}
                    className="d-inline-block mr-2"
                  />
                  Thiếu động lực để cố gắng, để bứt phá giới hạn
                </p>
                <p>
                  <img
                    src={iyl.iyl12}
                    alt={iyl.iyl12}
                    className="d-inline-block mr-2"
                  />
                  Không có kế hoạch, không có tầm nhìn tương lai
                </p>
                <p className="quote mt-3">
                  Và tất cả mọi vấn đề trên đều bắt nguồn từ
                  <br />
                  <strong className="fear">NỖI SỢ HÃI:</strong> sợ thất bại, sợ
                  làm sai, sợ khó khăn, sợ dư luận bàn tán…
                </p>
              </div>

              <div className="col-md-6">
                <img
                  src={iyl.iyl13}
                  alt={iyl.iyl13}
                  className="col-10 offset-1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3 ">
          <div className="col-md-8 offset-md-2">
            <img src={iyl.iyl14} alt={iyl.iyl14} className="col-10 offset-1" />
            <p>
              Nỗi sợ hãi là kẻ thù lớn nhất của thành công. Để chạm đến thành
              công, liệu bạn có dám đập tan mọi nỗi sợ hãi, mọi khó khăn, chướng
              ngại? Thử thách bước đi trên than hồng trong chương trình sẽ tiếp
              thêm sự dũng cảm, giúp bạn vượt qua được giới hạn bản thân.
            </p>

            <iframe
              height="315"
              src="https://www.youtube.com/embed/GNbR1E-IEmk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="col-10 offset-1 mt-3"
            ></iframe>

            <img src={iyl.iyl15} alt={iyl.iyl15} className="col-10 offset-1" />
          </div>
        </div>

        <div className="row flex-alignitem">
          <div className="col-md-10 offset-md-1">
            <div className="row flex-alignitem">
              <div className="col-md-6 changePositive">
                <p>
                  <img
                    src={iyl.iyl16}
                    alt={iyl.iyl16}
                    className="d-inline-block mr-2"
                  />
                  Tìm ra con người bạn phải trở thành và SỨ MỆNH của bạn
                </p>
                <p>
                  <img
                    src={iyl.iyl16}
                    alt={iyl.iyl16}
                    className="d-inline-block mr-2"
                  />
                  Tạo MỤC TIÊU và TẦM NHÌN đầy SỨC MẠNH cho bản thân
                </p>
                <p>
                  <img
                    src={iyl.iyl16}
                    alt={iyl.iyl16}
                    className="d-inline-block mr-2"
                  />
                  Đập tan mọi NỖI SỢ HÃI và SỰ TIÊU CỰC đang giữ chân bạn
                </p>
                <p>
                  <img
                    src={iyl.iyl16}
                    alt={iyl.iyl16}
                    className="d-inline-block mr-2"
                  />
                  Tiếp ĐỘNG LỰC thôi thúc bạn làm việc với 100% năng lượng
                </p>
                <p>
                  <img
                    src={iyl.iyl16}
                    alt={iyl.iyl16}
                    className="d-inline-block mr-2"
                  />
                  Vượt qua GIỚI HẠN của bản thân, kiến tạo kiệt tác cuộc đời
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src={iyl.iyl17}
                  alt={iyl.iyl17}
                  // className="col-10 offset-1"
                />
              </div>
              <p className="changePositiveQuote">
                Đặc biệt, sau chương trình bạn sẽ hiểu cách tư vấn trị liệu tâm
                lí - tư duy cho những người xung quanh, từ đó tạo động lực và
                truyền cảm hứng tích cực đến họ.
              </p>
            </div>
          </div>
        </div>

        <div className="row ">
          <img src={iyl.iyl18} alt={iyl.iyl18} className="col-10 offset-1" />
          <div className="col-md-10 offset-md-1">
            <div className="row flex-alignitem text-center">
              <div className="col-md-6 mb-3">
                <h3>TỪ 15 TUỔI TRỞ LÊN</h3>
                <img src={iyl.iyl19} alt={iyl.iyl19} />
                <p>
                  Chương trình được xây dựng dành riêng cho những học viên đang
                  trong độ tuổi từ 15 trở lên.
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <h3>GHÉT CUỘC ĐỜI TẦM THƯỜNG</h3>
                <img src={iyl.iyl20} alt={iyl.iyl20} />
                <p>
                  Muốn tìm lại và thực hiện những giấc mơ vĩ đại của cuộc đời
                  mình để sống thực sự ý nghĩa.
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <h3>NỖI SỢ ĐANG GIỮ CHÂN</h3>
                <img src={iyl.iyl21} alt={iyl.iyl21} />
                <p>
                  Muốn vượt qua giới hạn, vượt qua nổi sợ hãi để mạnh mẽ thẳng
                  tiến đến mục tiêu cuộc đời.
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <h3>THIẾU MỤC TIÊU CUỘC ĐỜI</h3>
                <img src={iyl.iyl22} alt={iyl.iyl22} />
                <p>
                  Muốn vượt qua giới hạn, vượt qua nổi sợ hãi để mạnh mẽ thẳng
                  tiến đến mục tiêu cuộc đời.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IYL;
