import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LPELightBox } from "app/components/lightBox";
import ModalVideo from "react-modal-video";

import { getIdVideo } from "core/utils/videoLinkUtil";
import useSiteTitle from "core/hooks/useSiteTitle";

// import media file
import category01 from "assets/images/source/lahagiangthanh/category01.jpg";
import category02 from "assets/images/source/lahagiangthanh/category02.jpg";
import category03 from "assets/images/source/lahagiangthanh/category03.jpg";
import category04 from "assets/images/source/lahagiangthanh/category04.jpg";
import category05 from "assets/images/source/lahagiangthanh/category05.jpg";
import category06 from "assets/images/source/lahagiangthanh/category06.jpg";

import bangCap1 from "assets/images/source/lahagiangthanh/bang-cap1.jpg";
import bangCap2 from "assets/images/source/lahagiangthanh/bang-cap2.jpg";
import bangCap3 from "assets/images/source/lahagiangthanh/bang-cap3.jpg";
import bangCap4 from "assets/images/source/lahagiangthanh/bang-cap4.jpg";
import bangCap5 from "assets/images/source/lahagiangthanh/bang-cap5.jpg";
import bangCap6 from "assets/images/source/lahagiangthanh/bang-cap6.jpg";
import bangCap7 from "assets/images/source/lahagiangthanh/bang-cap7.jpg";
import bangCap8 from "assets/images/source/lahagiangthanh/bang-cap8.jpg";

import gtPorfolio from "assets/images/source/lahagiangthanh/gt-background.png";
import gtAvatar from "assets/images/source/lahagiangthanh/gt-avatar.jpg";
import gtBottom from "assets/images/source/lahagiangthanh/banner-bottom.jpg";

import "./styles/styles.scss";

function MsLaHaGiangThanh() {
  useSiteTitle("lahagiangthanh");

  const [isActiveTab, setIsActiveTab] = useState("aboutMe");
  const certificationRef = useRef();
  const [video, setVideo] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleOpenVideo = (link) => {
    setVideo(getIdVideo(link));
    setIsVisible(!isVisible);
  };

  const menuContentAboutMe = [
    {
      id: "aboutMe",
      title: "Đôi nét về Ms. Giang Thanh",
      desc: "Ms. Giang Thanh là nhà Đồng sáng lập & Giám đốc điều hành của Leading Performance Education (LPE). Hiện cô cũng là Nhà đào tạo chính trong chuỗi Life University và những chương trình riêng của mình.",
      desc2:
        "Cách đây gần 10 năm, cô là người đã tiên phong mang NLP về với Việt Nam. Cô luôn mang trong mình khao khát lớn lao trong việc nâng cấp, phát triển con người Việt Nam, cô đặt niềm tin vào người Việt Nam, hiểu rằng người Việt Nam cũng hoàn toàn có khả năng kiến tạo nên những giá trị tân tiến.",
      desc3:
        "Trong quá trình điều hành công ty Giáo dục Leading Performance, cô đã cung cấp các sản phẩm giáo dục trong ngành khoa học tâm trí cho hàng ngàn cá nhân, doanh nghiệp, tổ chức,... là cầu nối giúp họ tìm ra giải pháp cho vấn đề của mình. Với các hoạt động của mình, cô đã mang đến làn sóng phát triển tư duy lan toả một cách mạnh mẽ tại Việt Nam..",
    },

    {
      id: "career",
      title: "Con đường sự nghiệp",
      desc: "Ms. Giang Thanh được cấp chứng nhận & được hậu thuẫn bởi những Chuyên gia đầu ngành NLP tại Hoa Kỳ. Cô đã đạt được nhiều thành tựu trong sự nghiệp, với danh hiệu là NLP Master Trainer, Advanced Generative Trance Coach, Time Line Therapist, Hypnotherapist,... Cùng với tài năng lãnh đạo, cô đã dẫn dắt Leading Performance Education phát triển vượt bậc và tạo dựng nên được một chỗ đứng vững chắc trong ngành suốt gần 10 năm qua.",
      desc2:
        'Là người Việt Nam, Ms. Giang Thanh hiểu rõ về những vấn đề "bên trong" và "bên ngoài" mà hầu hết mọi người đang phải gánh chịu. Các chương trình của cô luôn được trải dài ở nhiều đối tượng khác nhau, đặc biệt là ở thanh thiếu niên và phụ nữ. Vì cô hiểu rằng, hầu hết vấn đề của con người đã được hình thành từ khi chúng ta mới chỉ là một đứa trẻ. Sẽ thật tuyệt nếu như mọi trẻ em đều được lớn lên trong môi trường tích cực với những định hướng phù hợp nhất.',
      desc3:
        "Các chương trình đào tạo đặc biệt này sẽ góp phần giúp cho mỗi người tìm lại đúng với con người tài năng đích thực bên trong mình, để sống một cuộc đời bình an và viên mãn về sau.",
    },
  ];

  const contentHead = [
    { text: "aboutMe", content: "Về tôi" },
    { text: "career", content: "Sự nghiệp" },
    { text: "achievement", content: "Thành tựu" },
  ];

  const catelogyImg = [
    {
      id: 1,
      imgSrc: category01,
      heading: "Huấn Luyện Coaching Chuyên sâu",
      href: "",
    },
    {
      id: 2,
      imgSrc: category05,

      heading: "Trại Huấn Luyện Lãnh Đạo",
      href: "/chuong-trinh-huan-luyen/offline/trai-huan-luyen-lanh-dao",
    },
    {
      id: 3,
      imgSrc: category03,
      heading: "Khám Phá Thiên Tài Trong Bạn",
      href: "",
    },
    {
      id: 4,
      imgSrc: category04,
      heading: "Tư Vấn Trị Liệu",
      href: "",
    },
    {
      id: 5,
      imgSrc: category06,
      heading: "Đẹp Từ Bên Trong",
      href: "/chuong-trinh-huan-luyen/online/beauty-from-within",
    },
    {
      id: 6,
      imgSrc: category02,
      heading: "Tìm Lại Lẽ Sống & Khát Vọng Thành Công",
      href: "/chuong-trinh-huan-luyen/offline/tim-lai-le-song-va-khat-vong-thanh-cong",
    },
  ];

  const certificateList = [
    bangCap1,
    bangCap2,
    bangCap3,
    bangCap4,
    bangCap5,
    bangCap6,
    bangCap7,
    bangCap8,
  ];

  const openTab = (tabName) => {
    setIsActiveTab(tabName);
  };

  const handleOpenLightBox = (index) => {
    certificationRef.current.handleOpen(index);
  };

  const TabHeader = (contentHead) => {
    return (
      <div className="tab">
        {contentHead.map((tab) => {
          return (
            <button
              key={tab.text}
              className={`tablinks ${isActiveTab === tab.text && "active"}`}
              onClick={() => {
                openTab(tab.text);
              }}
            >
              {tab.content}
            </button>
          );
        })}
      </div>
    );
  };

  const GTTitle = (smallText, bigText) => {
    return (
      <div className="mainTitle">
        <p className="topText">
          {smallText}
          <span></span>
        </p>

        <h2>{bigText}</h2>
      </div>
    );
  };

  return (
    <>
      <div className="gt-page">
        {/* Background Porfolio */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div className="gtText">
            <div className="gtIntroduce">
              <p>NLP Master Trainer & Advanced Generative Trance Coach</p>
              <h1>La Hạ Giang Thanh</h1>

              <span
                className="buttonSeeMore"
                onClick={() => {
                  handleOpenVideo(
                    "https://www.youtube.com/watch?v=fAkvJPXMfjU"
                  );
                }}
              >
                Tìm hiểu thêm
              </span>
            </div>
          </div>

          <div className="gtBackGround">
            <img src={gtPorfolio} alt={gtPorfolio} className="gtBgImg" />
          </div>
        </div>

        {/* See More */}
        <div className="container" style={{ padding: "30px 0" }} id="infomore">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {/* Hình ảnh Coach */}
            <div
              className="col-12 col-lg-6 px-0"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={gtAvatar} alt="imgCoach" className="imgGt" />
            </div>

            {/* Menu tab */}
            <div className="col-12 col-lg-6 py-5 px-2">
              {TabHeader(contentHead)}

              {menuContentAboutMe.map((info) => {
                return (
                  <div
                    id={info.id}
                    key={info.id}
                    className={`tabcontent ${
                      isActiveTab === info.id && "d-block"
                    }`}
                  >
                    <h3>{info.title}</h3>

                    <p>{info.desc}</p>

                    <hr />

                    <p>{info.desc2}</p>

                    <hr />

                    <p>{info.desc3}</p>
                  </div>
                );
              })}

              <div
                id="achievement"
                className={`tabcontent ${
                  isActiveTab === "achievement" && "d-block"
                }`}
              >
                <h3>Thành tựu</h3>

                <p>
                  - La Hạ Giang Thanh đã từng hợp tác huấn luyện và cố vấn cho
                  các tổ chức:
                </p>

                <p>- Trung tâm Khuyết tật và Phát triển DRD.</p>
                <p>- Tập đoàn KTG (Khải Toàn Group).</p>
                <p>- Tập đoàn World Star và Kênh truyền hình HOMEtv.</p>
                <p>
                  - Công ty Cổ phần Đào tạo và Phát triển Spa Việt Nam - Ngọc
                  Anh Spa.
                </p>
                <p>- Công ty Cổ phần Công nghệ Song Thành - VoiceCloud</p>
                <p>- Công ty TNHH Phụng Hoàng - @Astore - Công nghệ di dộng.</p>
                <p>- Cơ Sở Bảo Trợ Xã Hội Thảo Đàn.</p>
                <p>- Trung tâm Xã hội Bình Hưng.</p>
                <p>
                  - Tập thể đại diện giáo viên các cấp tỉnh Bà Rịa - Vũng Tàu.
                </p>
                <p>Và còn nhiều đơn vị khác..</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hình ảnh các khóa học đã giảng dạy */}
        <section className="container py-5">
          {GTTitle("Một số hình ảnh", "Các chương trình đào tạo")}

          <div className="gt-wrapperImg">
            {catelogyImg.map((catelogy) => {
              return (
                <div className={`gt-gridItem${catelogy.id}`} key={catelogy.id}>
                  <img src={catelogy.imgSrc} alt={catelogy.imgSrc} />

                  <div className="overlay"></div>

                  <Link to={catelogy.href}>
                    <div className="shortInfo">
                      <h4>{catelogy.heading}</h4>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bằng cấp */}
        <section className="container py-5">
          {GTTitle("Hình ảnh", "Bằng cấp & Chứng nhận")}

          <div className="row mt-5">
            {certificateList.map((certify, index) => {
              return (
                <div
                  className="col-12 col-md-3 my-3"
                  key={index}
                  onClick={() => {
                    handleOpenLightBox(index);
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img src={certify} alt={certify} className="img-fluid" />
                </div>
              );
            })}
          </div>
        </section>

        {/* Quotes */}
        <section>
          <div
            className="bgQuotes"
            style={{
              background: `url(${gtBottom})`,
              backgroundAttachment: "fixed",
            }}
          >
            <div className="mainQuotes">
              <p>
                "Mỗi chúng ta là một mảnh ghép độc đáo và quan trọng trong kiệt
                tác vũ trụ."
              </p>

              <h3>La Hạ Giang Thanh</h3>
            </div>
          </div>
        </section>

        <LPELightBox ref={certificationRef} listImage={certificateList} />

        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isVisible}
          videoId={video}
          onClose={() => setIsVisible(false)}
        />
      </div>
    </>
  );
}

export default MsLaHaGiangThanh;
