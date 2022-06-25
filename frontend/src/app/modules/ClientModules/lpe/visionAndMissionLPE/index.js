import LPEBanner from "app/components/banner";
import useSiteTitle from "core/hooks/useSiteTitle";

import InterlacedContent from "./components/blockContentInterlaced";

// import media file
import banner from "assets/images/source/banner/tam-nhin-su-menh.jpg";
import bird1 from "assets/images/source/vision/bird01.png";
import bird3 from "assets/images/source/vision/bird03.png";

import "./styles/styles.scss";

function VisionPage() {
  useSiteTitle("vison_page");

  return (
    <div className="vision-page">
      <div>
        <LPEBanner
          bannerImg={banner}
          headText="Leading Performance Education"
          subText="Making Champions - Creating Legacies"
          subText2="Kiến Tạo Nhà Vô Địch - Để Lại Di Sản Đời Sau"
        />

        <div className="container">
          <h1 className="heading">Tầm nhìn, Sứ mệnh và Giá trị cốt lõi</h1>

          <div className="row">
            <div className="col-12 col-lg-6 mb-5">
              <h2 className="vision-title">
                <span className="vision-title-color">LPE</span> tự truyện
              </h2>

              <p className="textDetail">
                Chính thức gia nhập vào Việt Nam từ trước năm 2015, LPE phát huy
                thế mạnh trong việc hiểu rõ những vấn đề, mong muốn của người
                Việt Nam, đồng thời hiểu được những hoàn cảnh mà mỗi chúng ta
                đang phải đối diện, dù ta dường như không hề chọn lựa điều đó.
              </p>
              <p className="textDetail">
                Ở đây, LPE không chỉ là một lớp dạy học phát triển bản thân
                thông thường, chúng tôi hoạt động hơn 7 năm qua với mong muốn
                giúp cho mỗi người trên mảnh đất này đều được sống một cuộc đời
                hạnh phúc trọn vẹn, với những giá trị tốt đẹp mà mỗi người xứng
                đáng được nhận. Đó là lý do chúng tôi đã và đang cống hiến hết
                mình đến ngày hôm nay.
              </p>
            </div>
            <div className="col-12 col-lg-6 mb-3 wrapper-bird-img">
              <img className="img-fluid bird-img" src={bird3} alt={bird3} />
            </div>

            <div className="col-12 col-lg-6 mb-3">
              <h2 className="vision-title">
                "KHÔNG CHỈ LÀ MỘT NƠI
                <p className="vision-title-color">DẠY PHÁT TRIỂN BẢN THÂN"</p>
              </h2>

              <p className="textDetail">
                Hơn 7 năm qua, với sự dẫn dắt của 3 người lãnh đạo Mr. Vas, Ms.
                Giang Thanh, Mr. Rossi, LPE đã chạm đến hơn 400.000 khách hàng,
                tổ chức hàng trăm chương trình quy mô lớn, đồng hành cùng hàng
                ngàn người trên hành trình chuyển hoá của họ.
              </p>

              <p className="textDetail">
                Thứ LPE mang đến cho bạn, không chỉ là sự đồng cảm, thấu hiểu,
                chia sẻ về vấn đề bạn đang có, mà đó còn là những con đường mới,
                là tia hi vọng tươi sáng cho tương lai tốt đẹp của bạn.
              </p>
            </div>

            <div className="col-12 col-lg-6 mb-3 wrapper-bird-img">
              <img className="img-fluid bird-img" src={bird1} alt={bird1} />
            </div>
          </div>

          <InterlacedContent />
        </div>
      </div>
    </div>
  );
}

export default VisionPage;
