import React, { useState, useRef } from "react";

import Icon01 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/icon01.png";
import Icon02 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/icon02.png";
import Icon03 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/icon03.png";
import Icon04 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/icon04.png";
import Icon05 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/icon05.png";
import Icon06 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/icon06.png";

import "./styles/styles.scss";

const problemBusiness = [
  {
    id: 1,
    icon: Icon01,
    title: "Hết đam mê với ngành nghề kinh doanh của mình",
    desc: "Sau một thời gian làm việc & đạt được những thành tựu nhất định, hầu hết các doanh nghiệp sẽ rơi vào giai đoạn “hoang mang” không biết mình nên làm điều gì tiếp theo. Có thể bạn đang mất đi động lực vốn có ban đầu, hoặc đã dần hết đam mê với việc kinh doanh đó.",
  },
  {
    id: 2,
    icon: Icon02,
    title: "Mệt mỏi vì chạy theo gánh nặng tài chính",
    desc: "Bạn đã bỏ rất nhiều sự cống hiến, mất đi thời gian & công sức nhưng kết quả đạt lại không như mong đợi. Những gì bạn nhận lại được không xứng đáng với thứ bạn đã bỏ ra. Bạn băn khoăn liệu đây có phải là ngành nghề thật sự đưa bạn trở thành người thành công?!",
  },
  {
    id: 3,
    icon: Icon03,
    title: "Tầm nhìn chưa đủ rộng",
    desc: "Bạn có kỹ năng chuyên môn tốt, nhưng không biết mình nên đi về hướng nào tiếp theo trong tương lai? Bạn lại thường bâng khuâng trước những sự lựa chọn khác nhau để mở rộng doanh nghiệp. Nếu bạn không thể xác định được rõ đường đi nước bước tiếp theo, có nghĩa bạn đang chưa có tầm nhìn đủ lớn cho mình.",
  },
  {
    id: 4,
    icon: Icon04,
    title: "Không kiểm soát tốt về mặt Tâm lý bản thân",
    desc: "Mỗi khi gặp phải vấn đề khó khăn, trắc trở, bạn sẽ khó có thể bình tình để giải quyết, hoặc chỉ đổ lỗi cho người khác. Đôi khi, bạn cảm thấy áp lực đè nặng đến mức bản thân dường như không thể thoát ra khỏi những suy nghĩ tiêu cực.",
  },
  {
    id: 5,
    icon: Icon05,
    title: "Không biết cách xây dựng Tâm lý vững mạnh cho đội nhóm",
    desc: "Khi công ty gặp khó khăn, nhân viên của bạn lần lượt rời bỏ bạn đi. Điều đó có thể ảnh hưởng đến việc đưa ra quyết định của các nhà lãnh đạo, đặc biệt là ở giai đoạn khủng hoảng. Làm thế nào để xây dựng sự đồng lòng vượt khó cho cả một đội nhóm?",
  },
  {
    id: 6,
    icon: Icon06,
    title: "Không thể áp dụng thực tế",
    desc: "Bạn đã trau dồi cho mình rất nhiều kỹ năng lãnh đạo, tham gia các lớp học phát triển bản thân; nhưng khi đi vào tình huống thực tế, bạn thấy bối rối, không biết cần phải sử dụng kiến thức nào thì sẽ đạt được hiệu quả cao.",
  },
];

function Problem() {
  const [onToggle, setOnToggle] = useState(false);
  const [height, setHeight] = useState("0px");
  const refHeight = useRef(null);

  const handleToggle = () => {
    setOnToggle(!onToggle);

    if (refHeight.current !== null) {
      setHeight(onToggle ? "0px" : `${refHeight.current.scrollHeight}px`);
    }
  };

  return (
    <div className="problemBusiness">
      <div className="content01">
        <div className="container wrapper-content">
          <div className="row">
            <div className="col-12 col-md-9 text-heading">
              <h2>vấn đề & nỗi lòng của những nhà kinh doanh hiện tại</h2>
            </div>

            <div className="col-12 col-md-3 class-button">
              <button
                type="button"
                className="btn-default"
                onClick={handleToggle}
              >
                {!onToggle ? "Xem thêm" : "Thu gọn"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="content02"
        ref={refHeight}
        style={{
          maxHeight: `${height}`,
        }}
      >
        <div className="container padding-body">
          <div className="row">
            {problemBusiness.map((ele, index) => {
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-4 wrapper-detail"
                  key={index}
                >
                  <div className="icon">
                    <img
                      src={ele.icon}
                      className="img-responsive"
                      alt={ele.icon}
                    />
                  </div>
                  <div className="description">
                    <h3>{ele.title}</h3>
                    <p>{ele.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Problem;
