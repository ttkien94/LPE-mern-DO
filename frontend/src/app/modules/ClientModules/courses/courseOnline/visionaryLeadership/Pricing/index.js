import React from "react";
// media import
import Price01 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/price-01.png";
import Price02 from "../../../assets/images/chuong-trinh-huan-luyen/online/visionary-leadership/price-02.png";

import "./styles/styles.scss";

function Princing() {
  const imgPrice = [Price01, Price02];

  return (
    <div className="pricing py-5">
      <div className="container">
        <div className="row wrapper-card">
          {imgPrice.map((img, index) => {
            return (
              <div className="col-12 col-md-6 card-item" key={index}>
                <div className="card-shadow">
                  <img src={img} className="img-fluid img" alt={img} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Princing;
