import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import "../styles.scss";

function Coach() {
  useSiteTitle("coach");

  return (
    <div className="container corporate">
      <div className="row mb-5">
        <iframe
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/MF06tH5TcCg"
          title="YouTube video player"
          frameBorder="0"
          allowFullscreen
          className="corporate__iframe"
        ></iframe>
      </div>

      <div className="row">
        <div className="col-12">
          <h1 className="corporate__heading corporate__heading--coach">
            Tư Vấn Trị Liệu Cá Nhân
          </h1>
        </div>

        <div className="col-12">
          <h4 className="corporate__description">
            Rất nhiều người đang sống một cuộc đời không hạnh phúc và không thể
            hiện được hết những khả năng của mình.
          </h4>
        </div>

        <div className="col-12">
          <ul>
            <li>Chữa lành những vấn đề mà bất kỳ ai có thể mặc phải.</li>
            <li>
              Tìm ra căn nguyên xảy đến những vấn đề hiện tại mà thậm chí bạn
              cũng không biết là mình đang gặp phải.
            </li>
            <li>
              Giúp bạn thoát ra khỏi những trạng thái cảm xúc, tư duy tiêu cực
              đã được hình từ khi sinh ra đến bây giờ.
            </li>
            <li>
              Đưa bạn từ vị trí hiện tại phát triển vượt bậc đến vị trí mong
              muốn của bạn trong tương lai.
            </li>
            <li>Có thể mang lại giải pháp cho mọi vấn đề bạn đang gặp phải.</li>
          </ul>
        </div>

        <div className="col-12">
          <h4 className="corporate__description">
            Áp dụng hình thức tư vấn trị liệu 1-1 để giải quyết triệt để những
            điều còn đang cản trở bạn tiến bước đến tương lai.
          </h4>
        </div>

        <a
          className="corporate__btn corporate__btn--coach"
          href="https://www.facebook.com/lpe.vn.lifeuni"
          target="_blank"
          rel="noreferrer"
        >
          Nhận tư vấn
        </a>
      </div>
    </div>
  );
}

export default Coach;
