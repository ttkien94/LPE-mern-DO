import React from "react";

import "./styles/styles.scss";

function BenefitAfterCourse() {
  const countItem = [
    {
      id: 1,
      icon: <i className="fal fa-gavel"></i>,
      countUp: 7,
      text: "Năm thành lập LPE",
    },
    {
      id: 2,
      icon: <i className="fal fa-users"></i>,
      countUp: 400,
      text: "Người chạm đến",
    },
    {
      id: 3,
      icon: <i className="fal fa-users-class"></i>,
      countUp: 5000,
      text: "Học viên",
    },
    {
      id: 4,
      icon: <i className="fal fa-paper-plane"></i>,
      countUp: 350,
      text: "Khóa học",
    },
  ];
  return (
    <div className="container-fluid p-0">
      <div className="row container-benefit">
        <div className="col-12 col-lg-4 video-coach">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/zjVLmHDwxgE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="wrapper-benefit col-12 col-lg-8 ">
          <div className="row handleWidth">
            <div className="col-12 ">
              <p className="benefit_heading-small">
                bạn sẽ nhận được gì sau khóa học
              </p>
              <h1 className="benefit_heading-big">
                Đặc quyền sau chương trình
              </h1>
              <p className="mb-3 benefit_text">
                Bạn sẽ được theo dõi hàng tuần, bởi hai chuyên gia NLP hàng đầu
                – Mr.Vas & Ms. Giang Thanh về cách thức thực hiện, áp dụng kiến
                thức thực tế, lên kế hoạch, chỉnh sửa kịp thời ngay khi xuất
                hiện vấn đề tại doanh nghiệp.
              </p>
              <p className="mb-3 benefit_text">
                Hai chuyên gia sẽ chính là hai người cố vấn để lắng nghe, chia
                sẻ & tư vấn giải quyết bất kể vấn đề bạn gặp phải là gì. Là
                người thấu hiểu nỗi lòng mà chỉ những Nhà lãnh đạo mới có.
              </p>

              <div className="benefit_list row">
                {countItem.map((item, index) => {
                  return (
                    <div
                      className="benefit_item col-12 col-sm-6 col-md-3"
                      key={index}
                    >
                      <div className="benefit_item-top">
                        <div className="benefit_item-icon">{item.icon}</div>
                        <div className="benefit_item-text">
                          <p>{item.countUp}</p>
                        </div>
                      </div>
                      <div className="benefit_item-bottom">{item.text}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitAfterCourse;
