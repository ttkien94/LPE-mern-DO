import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import "../styles.scss";

function Corporation() {
  useSiteTitle("corporation");

  return (
    <div className="container corporate">
      <div className="row mb-5">
        <iframe
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/pUPzJMXv1WQ"
          title="YouTube video player"
          frameBorder="0"
          allowFullscreen
          className="corporate__iframe"
        ></iframe>
      </div>

      <div className="row">
        <div className="col-12">
          <h1 className="corporate__heading corporate__heading--corporation">
            Huấn luyện Doanh nghiệp
          </h1>
        </div>

        <div className="col-12">
          <h4 className="corporate__description">
            Bạn sẽ làm gì để dẫn dắt Doanh nghiệp vượt qua khủng hoảng đến từ
            bên trong và bên ngoài?
          </h4>
        </div>

        <div className="col-12">
          <ul>
            <li>
              Khi doanh nghiệp bước vào những giai đoạn khủng hoảng khác nhau,
              từ vấn đề bên ngoài thị trường, đến vấn đề bên trong doanh nghiệp,
              người chủ doanh nghiệp chính là người sẽ lèo lái con thuyền vượt
              qua mọi cơn bão.
            </li>
            <li>
              Có thể bạn đã từng đưa doanh nghiệp phát triển vượt bậc, nhưng ở
              mỗi giai đoạn khác nhau với mỗi vấn đề xảy đến khác nhau, bạn cũng
              cần phải thay đổi tư duy và nâng cấp chính mình.
            </li>
            <li>
              Bạn cần hiểu rõ những quy luật khiến cho hoạt động kinh doanh của
              mình bị thất bại hoặc "dậm chân tại chỗ"
            </li>
            <li>
              Bên cạnh các kiến thức chuyên ngành, bạn cũng cần nắm rõ cách thức
              để nắm bắt tâm lý của đối tác.
            </li>
            <li>
              Ngoài ra, bạn cần phải học cách huấn luyện đội nhóm của mình để cả
              doanh nghiệp cùng đồng lòng vượt qua mọi thách thức.
            </li>
          </ul>
        </div>

        <a
          className="corporate__btn corporate__btn--corporation"
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

export default Corporation;
