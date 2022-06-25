import React from "react";
import bird2 from "assets/images/source/vision/bird02.png";

function InterlacedContent() {
  return (
    <div className="mb-5">
      <h2 className="vision-title pt-4">
        Hiểu về <span className="vision-title-color">LPE</span>
      </h2>

      <div className="row">
        <div className="col-12 col-lg-8">
          <p className="textTitle">Tầm Nhìn</p>

          <p className="textDetail mt-1">
            Toàn thể nhân loại đã được tốt nghiệp Đại Học Cuộc Đời và họ đang
            sống mỗi khoảnh khắc trong mừng vui và phước lành
          </p>

          <p className="textTitle mt-3">Sứ mệnh</p>

          <p className="textDetail mt-1">
            Giúp cho tất cả mọi người luôn có tư duy tích cực, nhìn thấy cơ hội
            tươi sáng trong cuộc đời mình, để hướng đến những giá trị tốt đẹp
            tuyệt vời ở tương lai.
          </p>
        </div>

        <div className="col-12 col-lg-4 wrapper-bird-img mt-3">
          <img className="img-fluid" src={bird2} alt={bird2} />
        </div>
      </div>
    </div>
  );
}

export default InterlacedContent;
