import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import useSiteTitle from "core/hooks/useSiteTitle";
// component
// import FormDangKy from "./component/formDangKy";
import Loading from "./component/loading";

import Hinh01 from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/1.png";
import Hinh02 from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/2.png";
import Hinh03 from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/3.png";
import Hinh04 from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/4.png";
import Hinh05 from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/5.png";
import Hinh06 from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/6.png";
import Hinh07 from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/7.png";
import Hinh08 from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/8.png";

import Card01 from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/card1.png";
import Card02 from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/card2.png";
import Card03 from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/card3.png";
import Card04 from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/card4.png";
import Card05 from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/card5.png";
import Card06 from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/card6.png";

import Background from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/bg.jpg";
import ThuNgo from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/thuNgo.gif";

import Khoa01 from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/khoa1.png";
import Khoa02 from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/khoa2.png";

import Bio from "../../assets/images/chuong-trinh-huan-luyen/online/bfw/bio.png";

import "./styles/styles.scss";

const program = [
  {
    id: 1,
    level: "Level 1: BEAUTY FROM WITHIN - ĐẸP TỪ BÊN TRONG",
    description:
      "Phụ nữ luôn mang trên vai những gánh nặng khác nhau trong cuộc sống. Điều này đôi khi vô tình ngăn cản chúng ta yêu thương hoặc nhìn nhận bản thân đúng cách. Hoặc chúng ta đã bận “sống chuẩn mực”, bận “sống cho người khác” suốt thời gian qua. Nhưng, một lúc bất chợt nhìn vào gương, thật lòng bạn thấy gì trong gương?",
    video: "https://www.youtube.com/embed/va0sSA9UG-8",
  },
  {
    id: 2,
    level: "Level 2: LOVE AND BELOVED - YÊU VÀ ĐƯỢC YÊU",
    description:
      "Chúng ta không thể mong cầu tình yêu thương từ người khác nếu bản thân chưa hiểu, chưa biết cách thực hành tình yêu chân thành với chính mình. Bất kỳ ai cũng xứng đáng ở bên cạnh một người dành cho mình tình yêu trọn vẹn, bất kỳ ai cũng có quyền xinh đẹp, được yêu & viên mãn.",
    video: "https://www.youtube.com/embed/AUKyFY9Yhbg",
  },
];

const flipCardCourse1 = [
  {
    id: 1,
    hinhAnh: Card01,
    front:
      "Tái định nghĩa về “Chuẩn đẹp”. Học cách để trở nên Tự tin. Vì tự tin là thần thái & là giao diện tuyệt vời nhất.",
    back: "Học được cách nhìn tích cực về vẻ đẹp riêng biệt của chính mình. Nhìn thấy được nét đẹp độc đáo của bản thân & người thân xung quanh. Tìm hiểu cách thức để đẹp từ cả “bên trong” lẫn “bên ngoài”. Hiểu được giá trị chân thật để bản thân luôn tự tin khi là chính mình. ",
  },
  {
    id: 2,
    hinhAnh: Card02,
    front:
      "Học cách để thiết lập & giữ vững nguồn năng lượng dồi dào. Trở nên kiên cường bất biến trước mọi vấn đề trong cuộc sống.",
    back: "Rất nhiều người phụ nữ chúng ta hằng ngày đều bị chi phối bởi cảm xúc, đặc biệt là cảm xúc tiêu cực. Khi có quá nhiều thứ tiêu cực diễn ra trong cơ thể bạn, bạn sẽ không thể giữ cho mình nguồn năng lượng tích cực đủ đầy. Và vẻ đẹp của bạn cũng sẽ xuất phát từ nguồn năng lượng bên trong cũng như “giao diện” bên ngoài của bạn.",
  },
  {
    id: 3,
    hinhAnh: Card03,
    front:
      "Đẹp từ “bên trong” lẫn “bên ngoài” có nghĩa là bạn cần chú ý đến những nguồn thức ăn được nạp vào cơ thể (Bên trong) và cách làm đẹp cho cơ thể, khuôn mặt của mình (Bên ngoài)",
    back: "Học cách chăm sóc cho cả cơ thể. Tìm hiểu bí quyết ăn uống hiệu quả, nạp chất dinh dưỡng hợp lý và giúp cơ thể hấp thụ đầy đủ, đào thải độc tố. Học & thực hành nghệ thuật trang điểm tôn lên vẻ đẹp cả nhân với phong cách ăn mặc phù hợp để mỗi quý cô trở nên xinh đẹp theo cách riêng.",
  },
];

const flipCardCourse2 = [
  {
    id: 4,
    hinhAnh: Card04,
    front:
      "Tham gia những trải nghiệm để đánh thức tình yêu thương đong đầy, vô điều kiện dành cho chính bản thân mình.",
    back: "Nhìn vào gương bạn thấy gì? Có phải bạn đang phán xét bản thân bằng những khuyết điểm của chính mình? Khi bạn dành cho bản thân một tình yêu thương chân thành & vô điều kiện, bạn sẽ nhận được tình yêu đó từ một người phù hợp, đầy giá trị.",
  },
  {
    id: 5,
    hinhAnh: Card05,
    front:
      "Học cách xây dựng hình mẫu của người bạn đời. Cách để cư xử đúng & duy trì ngọn lửa hôn nhân Xoá bỏ niềm tin tiêu cực về tình yêu.",
    back: "Bạn không biết cách xây dựng mối quan hệ “dài hơi”, hay bạn vẫn đang loay hoay tìm kiếm cho mình người bạn đời phù hợp? Khi đã nâng cấp mình trở thành một cá thể độc đáo, đủ đầy, người bạn đời phù hợp nhất sẽ xuất hiện. Tìm hiểu & áp dụng những bí quyết để thu hút người bạn đời. Hiểu được rằng, mỗi người cần phải là một cá thể độc đáo riêng biệt để thu hút đối phương.",
  },
  {
    id: 6,
    hinhAnh: Card06,
    front:
      "Trải nghiệm những qui trình đặc biệt để xây dựng ngọn lửa yêu thương.",
    back: "Kích hoạt nguồn năng lượng nữ giới ở bên trong. Kích hoạt thiên chức, quyền năng của người phụ nữ. Bí quyết toả sáng với vẻ đẹp tự nhiên. Hoàn toàn yêu thương chính mình, nhìn thế giới với đôi mắt của tình yêu thương & sự bình an.",
  },
];

const picture = [
  Hinh01,
  Hinh02,
  Hinh03,
  Hinh04,
  Hinh05,
  Hinh06,
  Hinh07,
  Hinh08,
];

function BeautyFromWomen() {
  useSiteTitle("beauty_from_within");
  const [onLoading, setOnLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleLoading = setTimeout(() => {
      setOnLoading(false);
    }, 3000);
    return () => {
      clearTimeout(handleLoading);
    };
  }, []);
  const handleOpenVideo = () => {
    setIsOpen(true);
  };

  return (
    <>
      {onLoading ? (
        <Loading />
      ) : (
        <div className="bfw">
          {/* background  */}
          <div className="bg-course">
            <img src={Background} alt={Background} className="img-fluid" />
          </div>

          {/* Thư ngỏ */}
          <div className="container letter my-5">
            <div className="row">
              <div
                className="col-12 col-lg-6 img-gif_big wow fadeInLeft"
                data-wow-delay=".25s"
              >
                <img src={ThuNgo} alt={ThuNgo} className="img-fluid" />
              </div>
              <div
                className="col-12 col-lg-6  letter-text wow fadeInRight"
                data-wow-delay=".25s"
              >
                <div className="mb-2">
                  <p className="letter-title">Chào quý cô</p>
                </div>
                <p className="text-bolder">
                  Là Giang Thanh đây & thật tuyệt vời khi bạn đang đọc những
                  dòng này.
                </p>
                <p className="mb-2">
                  Giang Thanh là Nhà tư vấn trị liệu, Chuyên gia đào tạo & là
                  Diễn giả trong các lĩnh vực khác nhau như khoa học NLP, Time
                  Line Therapist, Hypnotherapist, Thiền định & Yoga.
                </p>
                <p className="mb-2">
                  Trong hơn 10 năm qua, Thanh đã có cơ hội được làm việc cùng
                  hàng ngàn chị em phụ nữ. Và Thanh nhận ra một điều đáng buồn
                  là, hầu hết phụ nữ chúng ta thường thiếu tự tin bởi chính bản
                  thân mình. Nhan sắc thường là điểm lớn nhất cản trở chị em phụ
                  nữ, khiến họ dần trở nên tự ti, sống khép mình hoặc suy nghĩ
                  tiêu cực.
                </p>
                <p className="mb-2">
                  Biểu hiện thường gặp nhất của phụ nữ chính là chúng ta không
                  hài lòng với cơ thể của mình & đôi khi hay ganh tị, tủi thân
                  vì không được hoàn mỹ như người khác.
                </p>
              </div>
              <div
                className="col-12 col-lg-6 img-gif_small wow fadeInLeft"
                data-wow-delay=".25s"
              >
                <img src={ThuNgo} alt={ThuNgo} className="img-fluid" />
              </div>
              <div
                className="col-12 mt-3 text-center wow fadeInLeft"
                data-wow-delay=".25s"
              >
                <p className="mb-2">
                  Nếu bạn đang nhìn thấy hình ảnh đó ở mình, có lẽ bạn đã không
                  thật sự yêu thương & nhìn thấy được giá trị ở chính mình trong
                  một thời gian dài.
                </p>
                <p className="mb-2">
                  Và bạn chính là lý do để Giang Thanh tiếp tục hành trình của
                  mình, giúp cho tất cả những người phụ nữ trở nên tự tin đẹp từ
                  bên trong ra ngoài & yêu thương chính mình thật đúng cách.
                </p>
              </div>
            </div>
          </div>

          {/* Giới thiệu chương trình */}
          <div className="container route my-5" id="gioiThieu">
            <h1
              className="text-center heading-writer margin-text wow fadeInUp"
              data-wow-delay=".25s"
            >
              Món quà giá trị Giang Thanh dành cho bạn!
            </h1>

            {program.map((ele, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-12">
                    <h3
                      className="text-level text-center wow fadeInUp"
                      style={{
                        color:
                          ele.level ===
                          "Level 1: BEAUTY FROM WITHIN - ĐẸP TỪ BÊN TRONG"
                            ? "#efbbcf"
                            : "#8675a9",
                      }}
                    >
                      {ele.level}
                    </h3>
                  </div>
                  <div className="col-12 col-md-6 my-3 route-text  wow fadeInLeft">
                    <p>{ele.description}</p>
                  </div>
                  <div className="col-12 col-md-6 my-3  wow fadeInRight">
                    <iframe
                      width="100%"
                      height="315"
                      src={ele.video}
                      title="YouTube video player"
                    ></iframe>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Background description */}
          <div className="bg-description my-5 ">
            <div className="container-fluid wow fadeInUp">
              <p>
                <span className="quote mr-1">
                  <i className="fal fa-quote-left "></i>
                </span>
                Con người không sai khi khao khát hạnh phúc. Chúng ta chỉ sai
                khi cất công đi tìm hạnh phúc ở bên ngoài mà thật sự nó lại ở
                bên trong chính mình.
                <span className="quote ml-1">
                  <i className="fal fa-quote-right"></i>
                </span>
              </p>
            </div>
            <div>
              <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g className="parallax">
                  <use
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={0}
                    fill="rgba(255,255,255,0.7"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={3}
                    fill="rgba(255,255,255,0.5)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={5}
                    fill="rgba(255,255,255,0.3)"
                  />
                  <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
                </g>
              </svg>
            </div>
          </div>

          {/* Card lật */}
          <div className="container">
            <h1
              className="text-center my-5 heading-title wow fadeInUp"
              data-wow-delay=".25s"
            >
              Giá trị chương trình
            </h1>
            <div className="row text-center">
              <div className="col-12">
                <p className="text-level wow fadeInUp ">Level 1</p>
                <img
                  src={Khoa01}
                  alt={Khoa01}
                  className="img-fluid img-khoa_1 wow fadeInUp "
                />
              </div>

              {flipCardCourse1.map((card, index) => {
                return (
                  <div
                    className="col-12 col-lg-4 wrapper-card wow fadeInLeft"
                    key={index}
                  >
                    <div className="center">
                      <div
                        className="front-face"
                        style={{
                          backgroundImage: `url(${card.hinhAnh})`,
                        }}
                      >
                        <div className="contents front">
                          <p>{card.front}</p>
                        </div>
                      </div>
                      <div className="back-face purple">
                        <div className="contents back">
                          <p>{card.back}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="col-12">
                <p className="text-level wow fadeInUp ">Level 2</p>

                <img
                  src={Khoa02}
                  alt={Khoa02}
                  className="img-fluid img-khoa_1 wow fadeInUp "
                />
              </div>

              {flipCardCourse2.map((card, index) => {
                return (
                  <div
                    className="col-12 col-lg-4 wrapper-card wow fadeInLeft"
                    key={index}
                  >
                    <div className="center">
                      <div
                        className="front-face "
                        style={{
                          backgroundImage: `url(${card.hinhAnh})`,
                        }}
                      >
                        <div className="contents front">
                          <p>{card.front}</p>
                        </div>
                      </div>
                      <div className="back-face">
                        <div className="contents back">
                          <p>{card.back}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bio */}
          <div className="container my-5" id="bio">
            <div className="row wrapper-bio">
              <div className="col-12 col-md-6 wow fadeInLeft picture-bio">
                <img src={Bio} alt={Bio} className="img-fluid" />

                <div className="play-video_bio">
                  <i
                    className="fas fa-play-circle"
                    onClick={() => {
                      handleOpenVideo();
                    }}
                  ></i>
                </div>
              </div>
              <div className="col-12 col-md-6 wow fadeInRight">
                <h2 className="text-center mb-3">Ms. La Hạ Giang Thanh</h2>
                <p className="mb-2">
                  Hơn 10 năm làm việc trong lĩnh vực đào tạo, cô Giang Thanh
                  luôn nhìn thấy được vấn đề tồn đọng níu chân những chị em phụ
                  nữ xung quanh mình, khiến họ khó lòng hạnh phúc trọn vẹn. Đó
                  là lý do cô quyết tâm xây dựng nên chương trình này.
                </p>
                <p className="mb-2">
                  Đối với cô Giang Thanh, mọi nỗ lực và cống hiến của cô là để
                  thực hiện sứ mệnh "Mỗi người trên thế giới này đều được sống
                  với giá trị chân thật của bản thân mình". Khi đó, bất kỳ ai
                  cũng có thể làm chủ cuộc đời mình & thật sự sống trong bình
                  an, hạnh phúc.
                </p>
                <p className="mb-2">
                  Các chương trình đào tạo của cô Giang Thanh mang một màu sắc
                  rất riêng, là liều thuốc cho tâm hồn của mỗi người. Không hẳn
                  là những thứ "đao to búa lớn" xa tầm với, các giá trị mà cô
                  Giang Thanh mang lại chính là sự khai sáng, giúp các khách
                  hàng giải quyết triệt để vấn đề của mình, mở ra con đường mới
                  đầy niềm tin và giàu động lực.
                </p>
              </div>
            </div>
          </div>

          {/* Học phí */}
          {/* <div className="container-fluid my-5" id="hocPhi">
            <h1 className="text-center heading-title wow fadeInUp mb-4">
              Khóa học
            </h1>

            <div>
              <p
                className="text-center mb-4 text-success"
                style={{
                  fontSize: "30px",
                }}
              >
                Giá mới cho chương trình cuối năm 2021 sẽ được công bố tại buổi
                học ngày 31/10
              </p>
            </div>

            <div className="wow fadeInLeft">
              <img
                src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/bfw/hocPhi.png"
                alt="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/bfw/hocPhi.png"
                className="img-fluid"
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <p
                href="https://lpeonline.vn/dang-ky-khoa-hoc-bfw"
                className="checkout-bfw-button"
              >
                Thanh toán khóa học ngay
              </p>
            </div>
          </div> */}

          {/* Form đăng ký */}
          {/* <div className="bg-dangKy">
            <div className="container-fluid py-5" id="dangKy">
              <h1 className="text-center heading-title wow fadeInUp">
                Đăng ký tư vấn khóa học
              </h1>
              <div className="row">
                <div className="col-12 wrapper-form wow zoomInLeft">
                  <FormDangKy />
                </div>
              </div>
            </div>
          </div> */}

          <div className="container">
            <p className="text-center text-thank wow fadeInUp">
              “Cảm ơn tất cả những quý cô suốt thời gian qua đã tin tưởng để
              đồng hành với Thanh. Nếu không có những quý cô thì sẽ không thể
              nào có Giang Thanh ngày hôm nay!”
            </p>
            <p className="text-center letter-title thank-you wow fadeInUp thank-text">
              THANK YOU
            </p>
          </div>

          {/* Ảnh */}
          <div className="container-fluid mb-5">
            <div className="row">
              {picture.map((pic, index) => {
                return (
                  <div className="col-12 col-md-3 mt-3" key={index}>
                    <img src={pic} alt={pic} className="img-fluid" />
                  </div>
                );
              })}
            </div>
          </div>

          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="fAkvJPXMfjU"
            onClose={() => setIsOpen(false)}
          />
        </div>
      )}
    </>
  );
}

export default BeautyFromWomen;
