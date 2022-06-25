import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import "../styles.scss";

function Education() {
  useSiteTitle("education");

  return (
    <div className="container corporate">
      <div className="row mb-5">
        <iframe
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/mutebJrwiuM"
          title="YouTube video player"
          frameBorder="0"
          allowFullscreen
          className="corporate__iframe"
        ></iframe>
      </div>

      <div className="row">
        <div className="col-12">
          <h1 className="corporate__heading corporate__heading--education">
            Đào Tạo - Giáo Dục Thế Hệ Trẻ
          </h1>
        </div>

        <div className="col-12">
          <h4 className="corporate__description">
            Khi còn nhỏ, chúng ta tiếp thu kiến thức và phát triển tư duy dễ
            dàng hơn rất nhiều. Sẽ thế nào nếu như mọi trẻ em đều trả lời được
            câu hỏi "Sau này lớn lên em muốn trở thành ai?
          </h4>
        </div>

        <div className="col-12">
          <ul>
            <li>
              Trẻ em cần trải nghiệm trong những môi trường khác nhau, để hình
              thành tính tự lập ngay từ khi còn nhỏ.
            </li>
            <li>
              Không chỉ là đến trường, các em cần phải hiểu rõ mình đi học để
              làm gì, vì sao việc học lại vô cùng cần thiết đối với cuộc đời mỗi
              người.
            </li>
            <li>
              Rất nhiều nghiên cứu chỉ ra rằng, trẻ em được rèn luyện và định
              hướng phù hợp từ nhỏ sẽ phát triển tương lai tốt đẹp hơn.
            </li>
            <li>
              Nếu các em sớm ý thức được về tương lai, các em sẽ hạn chế những
              thói quen tiêu cực khi bước vào giai đoạn vị thành niên.
            </li>
            <li>
              Huấn luyện con trẻ để các em tự sửa đổi bản thân và tự biết tạo
              động lực để vượt qua khó khăn.
            </li>
            <li>
              Thống nhất Mô hình Tâm trí cho cả các em, bố mẹ & giáo viên để dễ
              dàng định hướng đào tạo con trẻ.
            </li>
          </ul>
        </div>

        <div className="col-12">
          <h4 className="corporate__description">
            Hãy tạo cơ hội để các em được phát triển toàn diện, để các em biết
            mình sẽ trở thành ai trong tương lai. Giúp các em phát triển toàn
            diện về cả thể chất lẫn tâm trí.
          </h4>
        </div>

        <a
          className="corporate__btn corporate__btn--education"
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

export default Education;
