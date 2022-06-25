import React, { useRef, useState } from "react";
import ModalVideo from "react-modal-video";
import Title from "../../home/components/title";
import { LPELightBox } from "app/components/lightBox";
// import { Fade } from "react-reveal";

// import VasVideo from "./components/video";
import Timeline from "./components/timeline";
import useSiteTitle from "core/hooks/useSiteTitle";

// import media file
import bang01 from "assets/images/source/mrvas/bang-1.jpg";
import bang02 from "assets/images/source/mrvas/bang-2.jpg";
import bang03 from "assets/images/source/mrvas/bang-3.jpg";
import bang04 from "assets/images/source/mrvas/bang-4.jpg";
import bang05 from "assets/images/source/mrvas/bang-5.jpg";
import bang06 from "assets/images/source/mrvas/bang-6.jpg";
import bang07 from "assets/images/source/mrvas/bang-7.jpg";
import bang08 from "assets/images/source/mrvas/bang-8.jpg";
import bang09 from "assets/images/source/mrvas/bang-9.jpg";
import bang10 from "assets/images/source/mrvas/bang-10.jpg";

import catelogy01 from "assets/images/source//mrvas/catelogy01.jpg";
import catelogy02 from "assets/images/source//mrvas/catelogy02.jpg";
import catelogy03 from "assets/images/source//mrvas/catelogy03.jpg";
import catelogy04 from "assets/images/source//mrvas/catelogy04.jpg";
import catelogy05 from "assets/images/source//mrvas/catelogy05.jpg";
import catelogy06 from "assets/images/source//mrvas/catelogy06.jpg";

import vasBanner from "assets/images/source/mrvas/banner-vas.jpg";
import vasFooter from "assets/images/source/mrvas/banner-bottom-vas.jpg";

import mrvasPorfolio from "assets/images/source/mrvas/mrvas-porfolio.jpg";

import "./styles/styles.scss";

function MrVas() {
  useSiteTitle("mr_vas");
  const [videoId, setvideoId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const categoryRef = useRef();
  const certificationRef = useRef();

  // const videoVas = [
  //   {
  //     id: 0,
  //     imgSrc: "https://lpe.vn/storage/gioi-thieu/mr-vas/mrvas-6.jpg",
  //     videoId: "n6Pnzi6r9NU",
  //   },
  //   {
  //     id: 1,
  //     imgSrc: "https://lpe.vn/storage/gioi-thieu/mr-vas/mrvas-6.jpg",
  //     videoId: "u9vQcTYyQE4",
  //   },
  //   {
  //     id: 2,
  //     imgSrc: "https://lpe.vn/storage/gioi-thieu/mr-vas/mrvas-6.jpg",
  //     videoId: "n6Pnzi6r9NU",
  //   },
  // ];

  const handleOpenVideo = (id) => {
    setvideoId(id);
    setIsOpen(!isOpen);
  };

  const handleOpenLightBox = (index) => {
    certificationRef.current.handleOpen(index);
  };

  const handleOpenCategory = (index) => {
    categoryRef.current.handleOpen(index);
  };

  const AboutMrVas = () => {
    return (
      <>
        <h3 className="introName">Mr. Vas - Coach Vas - Vasanth Gopalan</h3>

        <p className="introTestDesc mb-3">
          - Mr. Vas là Nhà sáng lập và kiến tạo nên Leading Performance Group.
          Ông đã dành gần 30 năm hoạt động quân đội, 20 năm nghiên cứu-thực hành
          NLP, tất cả đều là để phục vụ con người, giúp cho mọi người được sống
          một cuộc đời hạnh phúc trọn vẹn.
        </p>

        <p className="introTestDesc mb-3">
          - Sau khi kết thúc khoảng thời gian hoạt động tại quân đội, Mr. Vas
          nhận ra được sự nghiệp của mình sẽ bắt đầu từ đây. Ông vận dụng những
          trải nghiệm của mình trong suốt 30 năm huấn luyện sĩ quan, đồng thời
          dành công sức & thời gian để tìm tòi, nghiên cứu về các ngành Khoa học
          Tâm Trí khác nhau. Để tự kiến tạo nên chuỗi Đại học Cuộc Đời - Nơi mỗi
          người có thể tìm lại được giá trị đích thực của bản thân mình, học
          cách vận dụng các nguồn lực và phát triển nó một cách tuyệt vời nhất
          cho sự nghiệp - mối quan hệ - sức khoẻ của mình.
        </p>

        <p className="introTestDesc ">
          - Đây là cốt lõi của những gì Vas mang đến cho khách hàng của mình.
          Lập Trình Ngôn Ngữ Tư Duy (NLP) là chất xúc tác đã tạo nên sự thay đổi
          đáng kể về định hướng trong mọi khía cạnh của cuộc đời Vas. Ông đã
          sáng lập nên Leading Performance Group và đã phát triển nó thành một
          công ty đào tạo thành công suốt hơn 12 năm hoạt động tại Singapore,
          Malaysia, Indonesia, Việt Nam,... nơi mà thông qua đó ông thực hiện
          Tầm Nhìn của mình.
        </p>
      </>
    );
  };

  const certificationList = [
    bang01,
    bang02,
    bang03,
    bang04,
    bang05,
    bang06,
    bang07,
    bang08,
    bang09,
    bang10,
  ];

  const catelogyImg = [
    catelogy02,
    catelogy03,
    catelogy04,
    catelogy01,
    catelogy05,
    catelogy06,
  ];

  return (
    <>
      <div
        className="bannerVas"
        style={{
          backgroundImage: `url("${vasBanner}")`,
        }}
      >
        <div className="overlay"></div>

        <div className="bannerText">
          <h1>COACH VAS</h1>

          <div
            className="buttonPlay"
            onClick={() => {
              handleOpenVideo("DZGkncRVn44");
            }}
          >
            <i className="fal fa-play"></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-lg-6"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className="introText">
              <AboutMrVas />
            </div>
          </div>

          <div
            className="col-12 col-lg-6 mt-4 mt-lg-0"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={mrvasPorfolio}
              alt={mrvasPorfolio}
              className="img-fluid"
              style={{
                height: "500px",
              }}
            />
          </div>
        </div>
      </div>

      <Timeline />

      <div className="container mt-5">
        <Title title="CÁC CHỨNG NHẬN NLP" textAlign="center" />

        <div className="row mt-4 d-flex justify-content-center">
          {certificationList.map((src, index) => {
            return (
              <div
                className="col-6 col-md-6 col-lg-3 mb-3"
                key={index}
                onClick={() => {
                  handleOpenLightBox(index);
                }}
                style={{
                  cursor: "pointer",
                }}
              >
                <img src={src} alt={src} className="img-fluid" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mt-5">
        <Title title="CÁC VIDEO GIỚI THIỆU THẦY VAS" textAlign="center" />

        <div className="row my-4">
          {/* {videoVas?.map((item) => {
            return (
              <div className="col-12 col-md-6 col-lg-4 mb-3" key={item.id}>
                <VasVideo
                  imgSrc={item.imgSrc}
                  onHandleOpenVideo={handleOpenVideo}
                  videoId={item.videoId}
                />
              </div>
            );
          })} */}
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <iframe
              width="100%"
              height="340"
              src="https://www.youtube.com/embed/MTm9ckSaygs?list=PL_Semeu_FryBUpE-h6GCgwY8rj3qBQMBN"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <iframe
              width="100%"
              height="340"
              src="https://www.youtube.com/embed/Let3SiiSl-0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <iframe
              width="100%"
              height="340"
              src="https://www.youtube.com/embed/bYu-cTghDxY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <Title title="HÌNH ẢNH" textAlign="center" />

        <div className="wrapperImg">
          {catelogyImg.map((catelogy, index) => {
            return (
              <div
                className={`gridItem${index + 1}`}
                key={index}
                onClick={() => {
                  handleOpenCategory(index);
                }}
              >
                <img src={catelogy} alt={catelogy} />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="bannerBottomVas"
        style={{
          backgroundImage: `url(${vasFooter})`,
        }}
      >
        <div className="overlay"></div>

        <div className="bannerBottomText">
          <p>
            "Một ngày nào đó, toàn thể nhân loại đã được tốt nghiệp Đại Học Cuộc
            Đời. Họ đang sống mỗi khoảnh khắc trong mừng vui và phước lành".
          </p>

          <h3>VASANTH GOPALAN</h3>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => handleOpenVideo(!isOpen)}
      />

      <LPELightBox ref={certificationRef} listImage={certificationList} />

      <LPELightBox ref={categoryRef} listImage={catelogyImg} />

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => handleOpenVideo()}
      />
    </>
  );
}

export default MrVas;
