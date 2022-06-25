import React from "react";
import "./styles/styles.scss";

function Stepper({ numberStep, title, content }) {
  return (
    <div className="stepper-container">
      <div className=" stepper-number">{numberStep}</div>
      <div className="stepper-card">
        <div className="stepper-card_arrow"></div>
        <h1 className="stepper-card_title">{title}</h1>
        <p className="stepper-card_description">{content}</p>
      </div>
    </div>
  );
}

export default Stepper;
