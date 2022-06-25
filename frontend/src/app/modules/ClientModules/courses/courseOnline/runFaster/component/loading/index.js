import React, { useEffect } from "react";
import loading from "./styles/loading.gif";

import "./styles/styles.scss";

function Loading() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="loading container">
      <img src={loading} alt={loading} />
    </div>
  );
}

export default Loading;
