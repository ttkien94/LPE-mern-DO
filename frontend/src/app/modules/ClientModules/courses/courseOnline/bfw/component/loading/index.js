import React from "react";
import loading from "./styles/flower-loading.gif";

import "./styles/styles.scss";

function Loading() {
  return (
    <div className="loading container">
      <img src={loading} alt={loading} />
    </div>
  );
}

export default Loading;
