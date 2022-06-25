import React from "react";
import "./styles/styles.scss";

function Quotes() {
  return (
    <div className="ittc-quotes container">
      <div
        className="row text-center"
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-12">
          <p className="quote-inner">
            "Đã đến lúc Việt Nam cần có một thế hệ kế thừa những điều tôi đã tạo
            dựng nên ở Đại học Cuộc Đời. Là cánh tay nối dài của tôi để lan toả
            giá trị đi khắp Việt Nam."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
