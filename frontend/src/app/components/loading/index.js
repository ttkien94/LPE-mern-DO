import React from "react";
import "./styles/styles.scss";

function LPELoading() {
  return (
    <div className="loading-container">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LPELoading;
