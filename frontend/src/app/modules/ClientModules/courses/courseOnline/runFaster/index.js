import React, { useEffect, useState } from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// component
import Stepper from "./component/stepper";
import Card from "./component/card";
import CardPrice from "./component/cardPrice";
import Comment from "./component/comment";
import Loading from "./component/loading";

import "./styles/styles.scss";

const videoArray = [
  {
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/htv7.png",
    newLink: "https://www.youtube.com/watch?v=k3wBrDLatPM",
    className: "item-logo-htv",
  },
  {
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/vtv3.png",
    newLink: "https://www.youtube.com/watch?v=gZHehgPfmVI",
    className: "item-logo-vtv",
  },
  {
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/htv7.png",
    newLink: "https://www.youtube.com/watch?v=kgOXAuWkryM",
    className: "item-logo-htv",
  },
  {
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/phuNu.png",
    newLink:
      "https://www.phunuonline.com.vn/la-ha-giang-thanh-tim-chan-gia-tri-de-co-cuoc-doi-y-nghia-a58767.html",
    className: "item-logo-phunu",
  },
  {
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/tienPhong.png",
    newLink:
      "https://tienphong.vn/ra-mat-chuong-trinh-dao-tao-lap-trinh-ngon-ngu-neuron-post697893.tpo",
    className: "item-logo-tienphong",
  },
  {
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/doanhNhan.png",
    newLink:
      "https://doanhnhansaigon.vn/tro-chuyen-voi-doanh-nhan/ceo-leading-performance-la-ha-giang-thanh-moi-nguoi-la-mot-manh-ghep-hoan-hao-va-khac-biet-1087633.html",
    className: "item-logo-doanhnhan",
  },
  {
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/danTri.png",
    newLink:
      "https://dantri.com.vn/giao-duc-huong-nghiep/gap-go-chuyen-gia-dao-tao-cao-cap-lap-trinh-ngon-ngu-tu-duy-1377948663.htm?gidzl=TVO87H9ZkrXxu0qS5dspLdxZ31GFT-y3CU8AHLugwrPYvWyJ2NEv1M_eMaPITEK4FU03535VhOTo66AvNW",
    className: "item-logo-doanhnhan",
  },
];

const stepperDay1 = [
  {
    id: 1,
    title: "Become aware of the Storm you are in",
    content:
      "Trở nên nhận thức về thứ được gọi là “Cơn bão” – mà chúng ta đang phải sống trong đó.",
  },
  {
    id: 2,
    title: "What will happen if you do not Take Action Now",
    content: "Điều gì sẽ xảy ra nếu bạn không bắt đầu hành động ngay bây giờ.",
  },
  {
    id: 3,
    title: "How to Eject yourself from the Storm",
    content: "Làm thế nào để đưa bản thân thoát ra khỏi Cơn bão.",
  },
  {
    id: 4,
    title: "What does it really mean to Run Faster",
    content: "Ý nghĩa thật sự của “Run Faster”",
  },
  {
    id: 5,
    title: "How to take Specific Actions to Become More",
    content:
      "Làm thế nào để thực hiện những hành động cụ thể và gặt hái được nhiều thành tựu hơn.",
  },
];

const stepperDay2 = [
  {
    id: 6,
    title: "How to Produce More & Faster",
    content: "Làm thế nào để tăng năng suất, sản xuất nhiều & nhanh hơn nữa.",
  },
  {
    id: 7,
    title: "How to Engage the Unconscious Mind & Field Mind to Get More",
    content:
      "Làm thế nào để kết nối Vô Thức & Trường Năng Lượng để đạt được nhiều hơn.",
  },
  {
    id: 8,
    title: "How to Create Specific Mind Processes to Get Exactly What you Want",
    content:
      "Làm thế nào để tạo nên những Quy Trình Tâm Trí cụ thể để có được chính xác những điều bạn muốn.",
  },
  {
    id: 9,
    title: "How to Stay Motivated & Keep Going till you are Successful",
    content:
      "Làm thế nào để luôn duy trì động lực & tiếp tục phát triển cho đến khi bạn đạt được thành công?",
  },
  {
    id: 10,
    title: "How to Create & Innovate ways to Keep Growing",
    content:
      "Kiến tạo & đổi mới nhiều cách thức khác nhau để tiếp tục phát triển",
  },
];

const comment = [
  {
    id: 1,
    name: "Chị Nguyễn Minh Nghi",
    desc: "Nhân viên văn phòng",
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/nunvvp.jpg",

    comment:
      "Các lớp học Online của LPE rất tuyệt vời, tôi được tương tác đặt câu hỏi ngay với Chuyên gia, giải quyết luôn vấn đề của mình, chứ lớp Offline thì không có cơ hội được hỏi. Tôi đã thay đổi bản thân hoàn toàn từ những lớp của thầy Vas và cô Thanh.",
  },
  {
    id: 2,
    name: "Anh Huỳnh Viết Minh",
    desc: "IT leader",
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/nam1.PNG",
    comment:
      "Nếu không có thầy chắc giờ này tôi vẫn đang làm nhân viên quèn và ngồi trách móc, than thở về cuộc đời. Thầy cho tôi thứ tôi không thể tìm ra được đó chính là mục tiêu sống của mình & động lực lớn lao để thực hiện nó.",
  },
  {
    id: 3,
    name: "Chị Dương Ánh Lan Vy",
    desc: "HR manager",
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/nuhr.jpg",

    comment:
      "Tôi làm lại cuộc đời từ lớp học Online của thầy, tôi ở nước ngoài nên chỉ được học Online nhưng kết quả vượt ngoài mong đợi. Tôi đã không còn khổ đau, tiêu cực như trước và cuộc sống bây giờ vô cùng bình an, hạnh phúc. Vì tôi đã nhận ra được giá trị của mình.",
  },
];

const courseFee = [
  {
    id: 1,
    name: "Vé gốc",
    disabled: true,
    price: 3000000,
  },
  {
    id: 2,
    name: "Vé hỗ trợ mùa covid",
    disabled: true,
    price: 1500000,
  },
  {
    id: 3,
    name: "Vé cho Early Bird",
    disabled: false,
    outOfDate: "Số lượng giới hạn chỉ 20 suất",
    price: 1200000,
  },
];

const itemIcon = [
  {
    id: 1,
    desc: "Thấu hiểu được cơn bão của thực tại",
    src: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/storm.png",
  },
  {
    id: 2,
    desc: "Vượt qua khủng hoảng trong đại dịch",
    src: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/virus.png",
  },
  {
    id: 3,
    desc: "Đặt được các mục tiêu phát triển bản thân",
    src: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/checklist.png",
  },
  {
    id: 4,
    desc: "Đạt được nhiều thành tựu từ nền tảng tâm trí mạnh mẽ",
    src: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/trophy.png",
  },
];

SwiperCore.use([Autoplay, Pagination, Navigation]);

function RunFaster() {
  useSiteTitle("run_faster");

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const url_string = window.location.href;
  const url = new URL(url_string);
  const utm_source = url.searchParams.get("utm_source");

  useEffect(() => {
    const handleLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => {
      clearTimeout(handleLoading);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="run-faster">
          <div className="container-fluid" style={{ padding: 0 }}>
            <Swiper
              slidesPerView={1}
              className="swiper-container"
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
            >
              <SwiperSlide>
                <div>
                  <img
                    src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/cover1.png"
                    alt="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/cover1.png"
                    className="carousel-img"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img
                    src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/cloud1.jpg"
                    alt="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/cloud1.jpg"
                    className="carousel-img"
                  />
                  <div className="dark-layout"></div>
                  <div className="carousel-text">
                    <h1>
                      <span className="text-1">BREAK THE</span> STORM
                    </h1>
                    <p>Vượt qua bão tố</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img
                    src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/sand.jpg"
                    alt="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/sand.jpg"
                    className="carousel-img"
                  />
                  <div className="carousel-text shadow-text">
                    <h1 className="text-1">RUN FASTER</h1>
                    <p>Chạy nhanh hơn</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* logo */}
          <div className="title-logo">
            <p className="title">Truyền thông nói về chúng tôi</p>
          </div>

          <Swiper
            slidesPerView={1}
            className="swiper-container"
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {videoArray.map((item, index) => {
              return (
                <SwiperSlide>
                  <div className="intro-clip_logo" key={index}>
                    <a
                      href={item.newLink}
                      alt={item.newLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={item.img}
                        alt={item.img}
                        className={`img-fluid ${item.className}`}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Carousel */}
          <div className="container video-container">
            <div className="row  fadeInUp">
              <div className="col-md-12 col-lg-6 text-content">
                <h2>“CƠN BÃO NÀO RỒI CŨNG SẼ QUA ĐI”?!</h2>
                <p>
                  Không ai có thể dự đoán được khi nào cả thế giới sẽ quay trở
                  lại bình thường như trước. Vậy điều chúng ta nên làm lúc này
                  là chờ đợi, cầu nguyện, hay tôi phải làm gì đây vì nếu nó diễn
                  biến tệ hơn thì tôi sẽ tiếp tục thất bại? Việc chờ đợi có vẻ
                  như khá thoải mái và an nhàn, nhưng chờ đợi có nghĩa là hoàn
                  toàn thụ động trước những tác nhân có thể ảnh hưởng đến cuộc
                  đời tương lai của mình.
                </p>
                <div className="row pl-3">
                  <a href="#hocPhi">
                    <button className="button-register">Đăng ký</button>
                  </a>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 video-content">
                <img
                  src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/bgVideo.jpg"
                  alt="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/bgVideo.jpg"
                  className="img-fluid"
                />
                <div
                  className="button-play"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  <i className="fas fa-play"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Stepper */}
          <div className="bg-item">
            <div className="container py-5">
              <div className="row stepper">
                <div className="col-12  bounceIn">
                  <h1 className="text-center text-heading">
                    Đã đến lúc phải chạy
                  </h1>
                </div>

                <div className="col-md-6 text-center dp-big  bounceInLeft">
                  <Card name="info" />
                  <Card name="register" />
                </div>

                <div className="col-12 col-md-12 col-lg-6   bounceInRight">
                  <Swiper
                    slidesPerView={1}
                    className="swiper-container"
                    loop={true}
                  >
                    <SwiperSlide>
                      <div className="row center-content wrapper-step">
                        <div className="col-sm-12 text-center block-day">
                          <h1 className="day-css">Ngày 1</h1>
                        </div>
                        {stepperDay1.map((item, index) => {
                          return (
                            <Stepper
                              numberStep={item.id}
                              key={index}
                              title={item.title}
                              content={item.content}
                            />
                          );
                        })}
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="row center-content wrapper-step">
                        <div className="col-sm-12 text-center block-day">
                          <h1 className="day-css">Ngày 2</h1>
                        </div>
                        {stepperDay2.map((item, index) => {
                          return (
                            <Stepper
                              numberStep={item.id}
                              key={index}
                              title={item.title}
                              content={item.content}
                            />
                          );
                        })}
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="col-12 col-md-8 text-center dp-small">
                  <Card name="info" />
                  <Card name="register" />
                </div>
              </div>
            </div>
          </div>
          {/* 4 item */}
          <div className="container mb-5">
            <h1 className="text-center text-uppercase py-5 heading_fee  ">
              Khóa học này giúp bạn
            </h1>
            <div className="row">
              {itemIcon.map((item, index) => {
                return (
                  <div className="col-6 col-md-3 wrapperIcon " key={index}>
                    <img src={item.src} alt={item.src} className="img-fluid" />
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Người dẫn đầu vượt bão */}
          <div className="bg-nguoiVuotBao">
            <div className="container py-5">
              <h1 className="heading_person ">Người dẫn dắt vượt bão</h1>
              <div className="col-12">
                <img
                  src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/mrVas.png"
                  alt="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/mrVas.png"
                  className="img-vas_big"
                />
              </div>
              <div className="row container-vas">
                <div className="col-12 col-md-8">
                  <p>
                    Mr. Vas đã có gần 30 năm dẫn dắt quân đội tại Singapore &
                    hơn 17 năm nghiên cứu, làm việc về lĩnh vực NLP, cùng các
                    ngành khoa học Tâm Trí khác. Ông đã huấn luyện, đào tạo,
                    mang đến sự phát triển vượt bậc cho hàng trăm ngàn người ở
                    khắp Châu Á.
                  </p>
                  <p>
                    Với tầm nhìn “mang đến cuộc sống bình an & hạnh phúc cho
                    nhân loại”, Mr. Vas đã & đang không ngừng nghiên cứu, phát
                    triển các chương trình dạy của mình. Khi Covid hoành hành,
                    Mr. Vas nhận thức được rằng tất cả chúng ta không thể dậm
                    chân tại chỗ & chờ đợi nó trôi qua. Cần phải làm điều gì đó
                    để mọi người có thể vực dậy mạnh mẽ hơn & tiếp tục “chạy
                    nhanh hơn” về phía trước.
                  </p>
                  <p>
                    Mr. Vas sẽ là Người đồng hành - dẫn dắt để tất cả chúng ta
                    cùng nhau vượt qua cơn bão mang tên Covid-19. Nhưng chỉ khi
                    bạn thật sự mong muốn “vượt bão” & sẵn sàng chấp nhận thách
                    thức.
                  </p>
                </div>
                <div className="col-md-4"></div>
                <img
                  src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/mrVas.png"
                  alt="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/mrVas.png"
                  className="img-vas"
                />
              </div>
            </div>
          </div>

          {/* Học phí */}
          <div className="price" id="hocPhi">
            <div className="bg-adding"></div>
            <div className="container">
              <h1 className="text-center text-uppercase text-heading">
                Học phí
              </h1>

              <div className="row">
                {courseFee.map((item, index) => {
                  return (
                    <div
                      className="wrapper-card col-12 col-md-12 col-lg-4"
                      key={index}
                    >
                      <CardPrice item={item} utm_source={utm_source} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* cảm nhận */}
          <section className="review">
            <div className="container">
              <h1 className="text-center text-uppercase py-5 heading_fee">
                Cảm nhận của học viên
              </h1>
            </div>
            <div className="container">
              <div className="row carousel-review">
                {comment.map((item, index) => {
                  return <Comment data={item} key={index} />;
                })}
              </div>
            </div>
          </section>

          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            autoplay
            videoId="MvafPA1HJIw"
            onClose={() => {
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </>
  );
}

export default RunFaster;
