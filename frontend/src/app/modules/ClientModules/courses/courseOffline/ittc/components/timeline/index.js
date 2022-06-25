import React from "react";
import "./styles/styles.scss";

function TimeLine() {
  const timelineContent = [
    {
      title: "Học viên tốt nghiệp CB10/ IMCPC ",
      isComplete: false,
    },
    {
      title: "Được phỏng vấn trực tiếp bởi Mr. Vas",
      isComplete: false,
    },
    {
      title: "Bắt đầu hành trình - Di chuyển đến Đà Lạt",
      isComplete: false,
    },
    {
      title: "Tham gia chuỗi ITTC 14 ngày",
      isComplete: false,
    },
    {
      title: "Nhận bằng chứng nhận ITTC",
      isComplete: false,
    },
    {
      title: "Hỗ trợ 10 ngày xây dựng hệ thống",
      isComplete: false,
    },
  ];

  const handleComplete = (index) => {};

  return (
    <div className="ittc-timeline">
      <h2 className="timeline-title text-center px-2">
        HÀNH TRÌNH TRỞ THÀNH "NGƯỜI KẾ THỪA"
      </h2>

      <ul className="timeline vertical pt-5" id="timeline">
        {timelineContent.map((item, index) => {
          return (
            <li
              className={`li ${item.isComplete && "complete"}`}
              key={index}
              onClick={() => {
                handleComplete(index);
              }}
            >
              <div className="timestamp">
                <span className="desc">{item.title}</span>
                {/* <span className="date">
                  11/15/2014<span></span>
                </span> */}
              </div>
              <div className="status">{/* <h4> {index + 1} </h4> */}</div>
            </li>
          );
        })}
      </ul>

      <ul className="timeline horizontal pt-5">
        {timelineContent.map((item, index) => {
          return (
            <li
              className={`li ${item.isComplete && "complete"}`}
              key={index}
              onClick={() => {
                handleComplete(index);
              }}
            >
              <div className="timestamp">
                <span className="desc">{item.title}</span>
                {/* <span className="date">
                  11/15/2014<span></span>
                </span> */}
              </div>
              {/* <div className="status"><h4> {index + 1} </h4></div> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TimeLine;
