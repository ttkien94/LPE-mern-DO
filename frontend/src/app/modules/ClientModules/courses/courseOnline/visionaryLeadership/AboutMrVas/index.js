import React from "react";
import Vas from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/aboutMrVas01.png";

import "./styles/styles.scss";

function AboutMrVas() {
  return (
    <div className="aboutMrVas">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12 col-lg-6 area-pd contentLeft">
            <h2>Về MR.Vas</h2>

            <p className="mt-3">
              Mr. Vas đã có gần 30 năm dẫn dắt quân đội tại Singapore & hơn 17
              năm nghiên cứu, làm việc về lĩnh vực NLP, cùng các ngành khoa học
              Tâm Trí khác. Ông đã huấn luyện, đào tạo, mang đến sự phát triển
              vượt bậc cho hàng trăm ngàn người ở khắp Châu Á.
            </p>
            <p className="mt-3">
              Với kinh nghiệm đào tạo dày dặn, Mr. Vas đã & đang không ngừng
              nghiên cứu, nâng cấp & kiến tạo nên các chương trình mới. Nhằm
              mang đến giải pháp tối ưu nhất cho tất cả mọi người, giúp họ vượt
              qua được giai đoạn khủng hoảng.
            </p>
            <p className="mt-3">
              Khi Covid hoành hành, Mr. Vas nhận thức được rằng tất cả doanh
              nghiệp đang gặp phải vô vàn vấn đề. Họ không thể dậm chân tại chỗ
              & chờ đợi đại dịch trôi qua. Cần phải làm điều gì đó để mọi người
              có thể vực dậy mạnh mẽ hơn & tiếp tục hướng về “tầm nhìn cao cả”
              phía trước.
            </p>
            <p className="mt-3">
              Mr. Vas sẽ là Người đồng hành - dẫn dắt để tất cả chúng ta cùng
              nhau hiểu ra vấn đề mà việc kinh doanh của mình đang gặp phải,
              đồng thời phát triển vượt bậc bất kể ở giai đoạn khó khăn nào.
            </p>
          </div>

          <div className="col-12 col-lg-6 img-vas">
            <img src={Vas} alt={Vas} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMrVas;
