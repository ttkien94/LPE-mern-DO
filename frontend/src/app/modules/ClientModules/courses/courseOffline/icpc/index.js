import React, { useState } from "react";
import Modal from "./components/modal";

import banner from "./assets/banner-icpc.jpg";
import certification from "./assets/bang-chung-nhan-nlp.png";
import privilege01 from "./assets/privilege01.png";
import privilege03 from "./assets/privilege03.png";
import quote2 from "./assets/quote2-icpc.jpg";

import "./styles/styles.scss";

const data_apply = [
  "Hiểu ra căn nguyên mọi vấn đề, lý giải cho cách hành xử của con người ở mọi khía cạnh.",
  "Nhận thức và xử lý những lỗ hỏng cảm xúc đã cản trở con người bạn ",
  'Chữa lành những căn bệnh đến từ "thân" và "tâm", từ đơn giản đến phức tạp.',
  "Biết được cách làm chủ mọi cuộc giao tiếp, làm chủ trạng thái cơ thể & duy trì năng lượng tích cực. ",
  'Tìm lại đáp án cho câu hỏi "Tôi là ai" và "Tôi sống để làm gì".',
  "Làm chủ Cơ thể & Tâm trí từ những quy trình NLP các cấp bậc. ",
  "Trở thành Nhà Tư Vấn Trị Liệu chuyên sâu, có khả năng giúp đỡ cho người xung quanh.",
  "Khám phá Nhân dạng và Lẽ Sống với cấp độ cao hơn.",
];

const Environment =
  "Môi trường (Làm việc/Gia đình/Mối quan hệ): Chính là nơi bạn gặp phải vấn đề và không thể hiện bản thân hay hạnh phúc ở đó.";
const Behavior =
  "Hành vi: Bạn cần phải linh hoạt để có thể làm chủ trong mọi vấn đề, mọi trường hợp xảy đến.";
const Capabilities =
  "Năng lực: Trạng thái bên trong, những cảm xúc tích cực/ tiêu cực, sự tự tin đưa ra những quyết định của bạn.";
const BeliefAndValues =
  "Niềm tin & Giá trị: Thứ bạn không thể nhìn thấy. Nhưng lại tạo nên những quyết định, ảnh hưởng 99% đến hành động và kết quả.";
const IdentityAndLifePurpose =
  "Nhân dạng & Lẽ sống: Khi chúng ta biết mình là ai, hiểu rõ về bản chất con người và vai trò của bạn trong thế giới này. ";
const SpiritualAndVision =
  "Tâm linh & Tầm nhìn: Vận hành những nguồn lực nhiệm màu bạn chưa từng biết đến trong vũ trụ này. Nhìn thấy được tiềm năng cuộc sống vĩ đại của chính mình và của con người.";

function ICPC() {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(false);
  const [ICPC, setICPC] = useState({
    Opacity: 1,
    zIndex: 1,
    changeOpacity: "changeOpacity",
  });
  const [IMCPC, setIMCPC] = useState({
    Opacity: 0.2,
    zIndex: 0,
    changeOpacity: "",
  });

  const showModal = (value) => {
    setShow(true);
    setContent(value);
  };

  const hideModal = () => {
    setShow(false);
  };
  const changeStyleICPC = () => {
    setICPC({ Opacity: 1, zIndex: 1, changeOpacity: "changeOpacity" });
    setIMCPC({ Opacity: 0.2, zIndex: 0, changeOpacity: "" });
  };
  const changeStyleIMCPC = () => {
    setICPC({ Opacity: 0.2, zIndex: 0, changeOpacity: "" });
    setIMCPC({ Opacity: 1, zIndex: 1, changeOpacity: "changeOpacity" });
  };

  return (
    <div className="ICPC">
      <img src={banner} className="img-fluid " alt={banner} />
      <div className="container">
        <div className="row mt-5">
          <h2 className="quote">
            Áp dụng NLP vào việc chữa lành tận sâu những vấn đề tưởng chừng như
            không thể giải quyết được và xây dựng sự nghiệp cống hiến vĩ đại cho
            cuộc đời.
          </h2>
        </div>
        <div className="row tab-menu">
          <div className="col-6">
            <button onClick={changeStyleICPC}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <h2>ICPC</h2>
            </button>
          </div>
          <div className="col-6">
            <button onClick={changeStyleIMCPC}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <h2>IMCPC</h2>
            </button>
          </div>
        </div>
        <div className="triangle-level">
          <div
            className={`triangle1 ${ICPC.changeOpacity}`}
            style={{ opacity: ICPC.Opacity, zIndex: ICPC.zIndex }}
          >
            <div className="triangle-background-1 ">
              <p>
                Environment
                <button
                  onClick={() => {
                    showModal(Environment);
                  }}
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </p>
            </div>
            <div className="triangle-background-2">
              <p>
                Behavior
                <button
                  onClick={() => {
                    showModal(Behavior);
                  }}
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </p>
            </div>
            <div className="triangle-background-3">
              <p>
                Capabilities
                <button
                  onClick={() => {
                    showModal(Capabilities);
                  }}
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </p>
            </div>
            <div className="triangle-background-4">
              <p>
                Belief & Values
                <button
                  onClick={() => {
                    showModal(BeliefAndValues);
                  }}
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </p>
            </div>
            <div className="triangle-background-5">
              <p>
                Identity & Life Purpose
                <button
                  onClick={() => {
                    showModal(IdentityAndLifePurpose);
                  }}
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </p>
            </div>
            <div className="triangle-background-6">
              <p>
                Spiritual <br /> & Vision
                <button
                  onClick={() => {
                    showModal(SpiritualAndVision);
                  }}
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </p>
            </div>
          </div>
          <div
            className={`triangle2 ${IMCPC.changeOpacity}`}
            style={{ opacity: IMCPC.Opacity, zIndex: IMCPC.zIndex }}
          >
            <div className="triangle-background-1">
              <p>
                Spiritual & Vision
                <button
                  onClick={() => {
                    showModal(SpiritualAndVision);
                  }}
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </p>
            </div>
            <div className="triangle-background-2">
              <p>
                Identity & Life Purpose
                <button
                  onClick={() => {
                    showModal(IdentityAndLifePurpose);
                  }}
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </p>
            </div>
            <div className="triangle-background-3">
              <p>
                Belief & Values
                <button
                  onClick={() => {
                    showModal(BeliefAndValues);
                  }}
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </p>
            </div>
            <div className="triangle-background-4">
              <p>
                Capabilities
                <button
                  onClick={() => {
                    showModal(Capabilities);
                  }}
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </p>
            </div>
            <div className="triangle-background-5">
              <p>
                Behavior
                <button
                  onClick={() => {
                    showModal(Behavior);
                  }}
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </p>
            </div>
            <div className="triangle-background-6">
              <p>
                Environment
                <button
                  onClick={() => {
                    showModal(Environment);
                  }}
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className={show ? "modal display-block" : "modal display-none"}>
          <Modal
            handleClose={hideModal}
            content={content}
            onClickOutside={() => {
              setShow(false);
            }}
          ></Modal>
        </div>
        <div className="row quote2 mt-5">
          <img src={quote2} className="img-fluid" alt={quote2} />
        </div>
        <div className="row apply mt-5 justify-content-center align-items-center ">
          <h2 className="quote">ỨNG DỤNG THỰC TIỄN SAU CHƯƠNG TRÌNH </h2>
          {data_apply.map((value, index) => {
            return (
              <div className="col-lg-4 col-md-6 mt-3" key={index}>
                <div className="apply-card">
                  <div className="apply-content">
                    <p>{value}</p>
                  </div>
                  <div className="number-icon-area d-flex justify-content-between flex-warp">
                    <div className="icon"></div>
                    <h1>0{index + 1}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row privilege mt-5 pt-3">
          <h2 className="quote">ĐẶC QUYỀN TỪ CHƯƠNG TRÌNH</h2>
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <img src={privilege01} className="img-fluid" alt={privilege01} />
            <p>Bộ quy trình NLP dành riêng cho việc Coaching Online</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img
              src={certification}
              className="img-fluid"
              alt={certification}
            />
            <p>Bằng chứng nhận NLP đẳng cấp quốc tế</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img src={privilege03} className="img-fluid" alt={privilege03} />
            <p>
              Trở thành Nhà Tư Vấn Trị Liệu giải quyết vấn đề cho khách hàng,
              cho mọi người.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ICPC;
