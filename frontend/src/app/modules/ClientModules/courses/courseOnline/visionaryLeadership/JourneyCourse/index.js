import React from "react";

import Accordion from "app/components/accordion";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Journey01 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/journeyCourse01.jpeg";
import Journey02 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/journeyCourse02.jpeg";

import "./styles/styles.scss";

SwiperCore.use([Pagination]);

const dayOne = [
  {
    title: "1. To Create an Organisation that is Disaster Proof",
    description:
      "Một cái cây muốn cao lớn toả bóng mát thì cần phải có gốc rễ khoẻ mạnh. Gốc rễ vững chắc sẽ giúp cây không bị những tác động ngoại lực ảnh hướng tới. Tạo ra một Tổ chức có thể trụ vững trước mọi thảm họa.",
  },
  {
    title: "2. To guide SMEs who are struggling to 'Stay Afloat'",
    description:
      "Khi những biến cố xảy đến, những doanh nghiệp vừa & nhỏ luôn chật vật vì chịu ảnh hưởng trực tiếp lên doanh thu, nguồn nhân lực, nguồn cung ứng,… Hướng dẫn các chủ Doanh nghiệp vừa và nhỏ đang vật lộn cách để 'Tồn Tại'.",
  },
  {
    title:
      "3. To revive SMEs who have closed down or are on the verge of closing down - to 'Breath Again & keep going'",
    description:
      "Biến cố tác động mạnh mẽ khiến các doanh nghiệp vừa & nhỏ khiến họ buộc phải đưa ra quyết định tạm thời đóng cửa, nhưng tất cả sẽ là bài học cho sự khởi đầu mới. Vực dậy các chủ Doanh nghiệp vừa và nhỏ đã đóng cửa hoặc sắp đóng cửa – để 'Hồi sinh & Tiếp tục phát triển'",
  },
  {
    title: "4. To Create a Compelling Vision",
    description:
      "Hầu hết mọi người quyết định kinh doanh vì thích một ngành nghề nào đó, hoặc có khả năng trong lĩnh vực bất kỳ. Nhưng tại thời điểm này, bất kỳ công ty nào muốn đứng vững thì đều phải có cho mình một Tầm nhìn rộng lớn.",
  },
  {
    title: "5. To Create a Detailed Action Plan",
    description:
      "Tạo ra một Kế hoạch hành động chi tiết. Kế hoạch hành động chi tiết sẽ giữ bạn không lạc ra khỏi quỹ đạo ngay từ ban đầu của mình và bám sát mục tiêu hiệu quả hơn.",
  },
];

const dayTwo = [
  {
    title: "6. To Communicate and Share the Vision & Plan to get buy-in",
    description:
      "Không thể ép buộc nhân viên trung thành với sếp, cũng không thể hứa hẹn cam kết điều gì. Nhưng sẽ luôn có cách để họ đồng lòng cùng bạn vượt qua những giai đoạn khó khăn này. Học cách giao tiếp và chia sẻ Tầm nhìn & Kế hoạch để có được sự ủng hộ từ nhân viên.",
  },
  {
    title:
      "7. To Rejuvenate the Team and Motivate them to Perform at Peak, more than ever before - 'Breath life into a dead snake' and 'Give it Wings'",

    description:
      "Những binh lính ở quân đội chưa bao giờ ngừng việc tin tưởng người chỉ huy & hết mình chiến đấu cho tổ quốc của họ. Học cách áp dụng tinh thần kiên cường của quân đội vào đội nhóm của mình. Truyền sức sống và động lực để nhân viên thể hiện thành tích đỉnh cao hơn bao giờ hết – 'Thổi sức sống' cho những người đang cạn kiệt sinh lực và 'Chắp cánh' cho họ.",
  },
  {
    title:
      "8. To Create a High-Value Organisation with Military Quality Discipline",
    description:
      "Học cách áp dụng tính kỷ luật của quân đội vào đội nhóm của mình. Tạo ra một Tổ chức giá trị cao với kỷ luật tiêu chuẩn quân đội.",
  },
  {
    title:
      "9. To Create a Culture of Excellence - Focused & Flexible to Achieve the Targets Relentlessly",
    description:
      "Quân đội không chỉ giành chiến thắng bằng các chiến lược đỉnh cao & sức khoẻ bền bĩ, quân đội còn giành thắng lợi nhờ vào tinh thần bất khuất của họ. Học cách để tạo dựng văn hoá riêng của công ty/doanh nghiệp của bạn. Tạo ra một nền Văn hóa xuất sắc – Tập trung & linh hoạt để liên tục chinh phục mục tiêu.",
  },
  {
    title: "10. Engaging Creativity & Mind factor to Make it Easy and Fast",
    description:
      "Khi bạn đã có được tầm nhìn, bảng kế hoạch & những người đồng đội. Yếu tố sáng tạo sẽ giúp mọi thứ được thực hiện hiệu quả hơn, rút ngắn thời gian. Kết hợp sự sáng tạo và các yếu tố Tâm trí để khiến mọi thứ diễn ra một cách dễ dàng và nhanh chóng.",
  },
];

function JourneyCourse() {
  return (
    <div className="journeyCourse  area-pd">
      <div className="container area-pt">
        <h2>HÀNH TRÌNH XÂY DỰNG TẦM NHÌN LÃNH ĐẠO</h2>

        <Swiper
          slidesPerView={1}
          className="swiper-container"
          autoplay={{
            delay: 10000,
            disableOnInteraction: true,
          }}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
        >
          <SwiperSlide>
            <div className="row my-5">
              <div className="col-12 col-md-6">
                <img src={Journey01} alt={Journey01} className="img-fluid" />
              </div>
              <div className="col-12 col-md-6 mt-5 mt-md-0">
                {dayOne.map((item, index) => {
                  return (
                    <div className="mb-4">
                      <Accordion
                        title={item.title}
                        key={index}
                        description={item.description}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row my-5">
              <div className="col-12 col-md-6">
                <img src={Journey02} alt={Journey02} className="img-fluid" />
              </div>
              <div className="col-12 col-md-6 mt-5 mt-md-0">
                {dayTwo.map((item, index) => {
                  return (
                    <div className="mb-4">
                      <Accordion
                        title={item.title}
                        key={index}
                        description={item.description}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default JourneyCourse;
