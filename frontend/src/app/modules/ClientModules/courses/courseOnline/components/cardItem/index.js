import React from "react";
import { Link } from "react-router-dom";

import "./styles/styles.scss";

function CardItemOnline({ ...props }) {
  return (
    <div className="wrapper_cardItem mt-5">
      <div className="cardItem">
        <div className="cardItem-img">
          <img src={props.img} alt="img-block" className="img-fluid" />

          <div className="overlay"></div>
        </div>
        <div className="cardItem-text">
          <h4 className="cardItem-text_heading">{props.name}</h4>

          {/* <p className="cardItem-text_desc">{props.desc}</p> */}

          <Link to={props.link} className="cardItem-text_link">
            Chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardItemOnline;
