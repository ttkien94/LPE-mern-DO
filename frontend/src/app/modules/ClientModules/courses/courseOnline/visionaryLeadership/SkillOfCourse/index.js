import React from "react";

import Icon01 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/skillOfCourse01.png";
import Icon02 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/skillOfCourse02.png";
import Icon03 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/skillOfCourse03.png";
import Icon04 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/skillOfCourse04.png";
import Icon05 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/skillOfCourse05.png";
import Icon06 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/skillOfCourse06.png";

import "./styles/styles.scss";

const skillOfCourse = [
  {
    id: 1,
    icon: Icon01,
    title: "",
    desc: "Lập lại chiến lược, mục tiêu dài hạn, bắt đầu với Tầm nhìn & Kế hoạch hấp dẫn",
    url: "",
  },
  {
    id: 2,
    icon: Icon02,
    title: "",
    desc: "Nâng cao tinh thần lãnh đạo của bạn để truyền cảm hứng",
    url: "",
  },
  {
    id: 3,
    icon: Icon03,
    title: "",
    desc: "Trẻ hóa Động lực Nội tại của các thành viên trong Nhóm của bạn",
    url: "",
  },
  {
    id: 4,
    icon: Icon04,
    title: "",
    desc: "Tạo ra một nền văn hóa với kỷ luật tiêu chuẩn quân đội",
    url: "",
  },
  {
    id: 5,
    icon: Icon05,
    title: "",
    desc: "Tập trung, linh hoạt & hoàn toàn bị ám ảnh về việc đạt được mục tiêu",
    url: "",
  },
  {
    id: 6,
    icon: Icon06,
    title: "",
    desc: "Học về tâm lý học trong kinh doanh",
    url: "",
  },
];

function SkillOfCourse() {
  return (
    <div className="skillOfCourse py-5">
      <div className="container">
        <h2 className="mb-5">Kỹ Năng Từ Khóa Học</h2>
        <div className="row">
          {skillOfCourse.map((ele, index) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="details my-4">
                  <div className="icon">
                    <img src={ele.icon} className="img-fluid" alt={ele.icon} />
                  </div>

                  <div className="description">
                    <h3>{ele.title}</h3>
                    <p>{ele.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkillOfCourse;
