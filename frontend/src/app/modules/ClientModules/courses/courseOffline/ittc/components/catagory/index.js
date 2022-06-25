import React from "react";
import ITTC01 from "../../assets/ITTC_1.jpg";
import ITTC02 from "../../assets/ITTC_2.jpg";
import ITTC03 from "../../assets/ITTC_3.jpg";
import ITTC04 from "../../assets/ITTC_4.jpg";
import ITTC05 from "../../assets/ITTC_5.jpg";

function Catagory() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-4 ">
          <img src={ITTC01} alt={ITTC01} className="img-fluid" />
        </div>

        <div className="col-12 col-md-6 py-3">
          <img src={ITTC02} alt={ITTC02} className="img-fluid" />
        </div>

        <div className="col-12 col-md-6 py-3">
          <img src={ITTC03} alt={ITTC03} className="img-fluid" />
        </div>

        <div className="col-12 col-md-6 py-3">
          <img src={ITTC04} alt={ITTC04} className="img-fluid" />
        </div>

        <div className="col-12 col-md-6 py-3">
          <img src={ITTC05} alt={ITTC05} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Catagory;
