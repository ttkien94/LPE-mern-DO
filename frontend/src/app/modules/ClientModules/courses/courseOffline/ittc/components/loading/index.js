import React from "react";
import LoadingCube from "../../assets/loader-cube.gif";

function LoadingITTC() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <img src={LoadingCube} alt={LoadingCube} />
    </div>
  );
}

export default LoadingITTC;
