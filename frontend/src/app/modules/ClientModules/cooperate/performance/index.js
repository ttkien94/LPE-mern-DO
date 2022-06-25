import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import "../styles.scss";

function Performance() {
  useSiteTitle("performance");

  return (
    <div className="container corporate">
      <div className="row mb-5">
        <iframe
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/Dw-lQZfYjO0"
          title="YouTube video player"
          frameBorder="0"
          allowFullscreen
          className="corporate__iframe"
        ></iframe>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 className="corporate__heading corporate__heading--performance">
            Tối Ưu Thành Tích
          </h1>
        </div>

        <div className="col-12">
          <h4 className="corporate__description">
            Chúng tôi có những phương thức đào tạo đặc biệt để bạn nâng cao khả
            năng, tối ưu thành tích của mình trong bất kỳ ngành nghề nào!
          </h4>
        </div>

        <div className="col-12">
          <ul>
            <li>
              Tìm hiểu & khai thác được những thế mạnh tuyệt vời tiềm ẩn bên
              trong mỗi người.
            </li>
            <li>
              Tìm hiểu nguyên nhân đang ngăn cản bản thân, khiến bạn mãi dậm
              chân tại chỗ hoặc không đạt được mục tiêu.
            </li>
            <li>
              Thúc đẩy thể hiện & nâng cao khả năng riêng của bạn, kể cả trong
              ngành Thể thao, Âm nhạc, Nghiên cứu,...
            </li>
            <li>
              Sử dụng Mô hình Đào Tạo Kỹ Năng Tinh Thần (Mental Skills Training
              Model) để nâng cao năng lực vượt bậc từ vị trí hiện tại.
            </li>
            <li>
              Thay đổi tư duy về nhiều khía cạnh tích cực/ tiêu cực trong việc
              phát triển bản thân.
            </li>
            <li>
              Bạn sẽ đúc kết được cho mình những giải pháp cụ thể, dễ dàng tiếp
              thu và ứng dụng cho công việc về sau.
            </li>
            <li>
              Không chỉ riêng một cá nhân mà là thúc đẩy cả đội nhóm hành động
              hiệu quả. Đặc biệt là tạo doanh số đầu vào cho doanh nghiệp.
            </li>
            <li>
              Xây dựng nội động lực, loại bỏ những ngoại động lực có thể không
              cần thiết.
            </li>
          </ul>
        </div>

        <div className="col-12">
          <h4 className="corporate__description">
            Với hơn 30 năm kinh nghiệm hoạt động Quân đội tại Singapore cùng 17
            năm làm việc ngành NLP cùng con người, Mr. Vas sẽ là người dẫn dắt
            tốt nhất giúp bạn "tối ưu thành tích" của bản thân và đội nhóm.
          </h4>
        </div>

        <a
          className="corporate__btn corporate__btn--performance"
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

export default Performance;
