// import { Link } from "react-router-dom";
import "./styles/styles.scss";

// const memberGift = [
//   {
//     img: "https://kt.city/static/gmb-tshirt.png",
//     content: "Áo thun miễn phí",
//   },
//   {
//     img: "https://kt.city/static/gmb-tshirt.png",
//     content: "Coupon 50%",
//   },
//   {
//     img: "https://kt.city/static/gmb-tshirt.png",
//     content: "Video mới nhất",
//   },
//   {
//     img: "https://kt.city/static/gmb-tshirt.png",
//     content: "Huy hiệu VIP",
//   },
//   {
//     img: "https://kt.city/static/gmb-tshirt.png",
//     content: "Ưu tiên hỗ trợ",
//   },
//   {
//     img: "https://kt.city/static/gmb-tshirt.png",
//     content: "Vé offline miễn phí",
//   },
// ];

function MemberVip() {
  // Checking user is a VIP USER

  return (
    <>
      <div className="isMemberVipBox">
        <div className="row">
          {/* <div className="col-12 col-lg-3 text-left text-lg-center">
            <img
              src="https://kt.city/static/gmb-not-you.png"
              alt="https://kt.city/static/gmb-not-you.png"
              className="isMemberVipBoxImg"
            />
          </div> */}

          {/* <div className="col-12 col-lg-9">
            <p className="isMemberVipBoxText">
              Bạn chưa phải thành viên
              <span className="ml-1 text-warning">VIP</span>. Bấm nút dưới đây
              để tìm hiểu nhiều hơn về chương trình này.
            </p>
          </div> */}
          <p>Đang phát triển</p>
        </div>

        {/* <div
          className="row text-center"
          style={{
            justifyContent: "center",
          }}
        >
          <Link to="/nang-cap" className="moreInfoBtn">
            Tìm hiểu thêm
          </Link>
        </div>
      </div>

      <div className="row mt-3">
        {memberGift.map((item, index) => {
          return (
            <div className="col-6 col-lg-4 mt-4" key={index}>
              <div className="giftBox">
                <img src={item.img} alt={item.img} className="img-fluid" />

                <div className="overlay">
                  <i className="fas fa-lock"></i>
                </div>
              </div>

              <div className="giftBoxContent">
                <p>{item.content}</p>
              </div>
            </div>
          );
        })} */}
      </div>
    </>
  );
}

export default MemberVip;
