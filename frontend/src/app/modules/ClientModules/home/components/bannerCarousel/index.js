import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import ModalVideo from "react-modal-video";

import { getIdVideo } from "core/utils/videoLinkUtil";

// import media file
import lpe from "assets/images/lpe.jpg";
import vas from "assets/images/vas.jpg";
import lhgt from "assets/images/lhgt.jpg";
import rossi from "assets/images/rossi.jpg";
import Video from "assets/video-demo.mp4";
import vasThumbnail from "assets/images/source/thumbnail-vas.jpg";
import gtThumbnail from "assets/images/source/thumbnail-gt.jpg";
import rossiThumbnail from "assets/images/source/thumbnail-rossi.jpg";

import "swiper/components/pagination/pagination.min.css";

import "./styles/styles.scss";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const topUpSrc = [
  {
    imgSrc: lpe,
    bigText: "Về LPE",
    desc: "intro_lpe",
    linkVideo: "https://www.youtube.com/watch?v=ed3F3lkJCyg",
    linkInfo: "/",
    video: Video,
  },

  {
    imgSrc: vas,
    bigText: "Về Mr. Vas",
    desc: "intro_vas",
    linkVideo: "https://www.youtube.com/watch?v=DZGkncRVn44",
    linkInfo: "/lpe/mr-vas",
    imgVideo: vasThumbnail,
  },
  {
    imgSrc: lhgt,
    bigText: "Về Ms. La Hạ Giang Thanh",
    desc: "intro_gt",
    linkVideo: "https://www.youtube.com/watch?v=fAkvJPXMfjU",
    linkInfo: "/lpe/ms-la-ha-giang-thanh",
    imgVideo: gtThumbnail,
  },
  {
    imgSrc: rossi,
    bigText: "Về Mr.Rossi",
    desc: "intro_rossi",
    linkVideo: "https://www.youtube.com/watch?v=4N5WAMJuo6U",
    linkInfo: "",
    imgVideo: rossiThumbnail,
  },
];

function BannerCarousel() {
  const { t } = useTranslation("common");
  const [video, setVideo] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  const handleOpenVideo = (link) => {
    setVideo(getIdVideo(link));
    setIsVisible(!isVisible);
  };

  return (
    <div className="container-fluid px-0">
      <Swiper
        slidesPerView={1}
        className="swiper-container"
        // autoplay={{
        //   delay: 10000,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
      >
        {topUpSrc.map((v, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="row">
                <div className="col-12 col-lg-5 pr-0">
                  <div className="banner-item_innerText h-100">
                    {v.video && (
                      <video
                        width="100%"
                        height="100%"
                        muted
                        loop
                        autoPlay
                        playsInline
                      >
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}

                    {v.imgVideo && (
                      <img
                        src={v.imgVideo}
                        alt={v.imgVideo}
                        className="img-fluid"
                      />
                    )}
                    {!!v.linkInfo.length && (
                      <div
                        className="btnPlay-video"
                        onClick={() => {
                          handleOpenVideo(v.linkVideo);
                        }}
                      >
                        <i className="fas fa-play"></i>
                      </div>
                    )}

                    {!!v.linkInfo.length && (
                      <Link to={v.linkInfo} className="btnDetail">
                        <span>{t("read_more")}</span>

                        <svg width="13px" height="10px" viewBox="0 0 12 10">
                          <path d="M1,5 L11,5"></path>
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="col-12 col-lg-7 pl-sm-3 pl-lg-0">
                  <div className="banner-item_picture">
                    <img src={v.imgSrc} alt={v.imgSrc} className="img-fluid" />

                    <div className="wrapper-innerText">
                      <p>{t(v.desc)}</p>
                    </div>

                    <Link to={v.linkInfo} className="btnDetailSmall">
                      Xem thêm
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isVisible}
        videoId={video}
        onClose={() => setIsVisible(false)}
      />
    </div>
  );
}

export default BannerCarousel;
