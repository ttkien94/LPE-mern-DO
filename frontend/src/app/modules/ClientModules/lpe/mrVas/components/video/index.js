import React from "react";
import "./styles/styles.scss";

function VasVideo({ imgSrc, height, videoId, onHandleOpenVideo }) {
  const handleOpenVideo = (id) => {
    onHandleOpenVideo && onHandleOpenVideo(id);
  };

  return (
    <div className="wrapperContainer">
      <img
        src={imgSrc}
        alt={imgSrc}
        className="img-fluid"
        style={{
          height: height,
          width: "100%",
        }}
      />

      <div
        className="buttonVideo"
        onClick={() => {
          handleOpenVideo(videoId);
        }}
      >
        <i className="fas fa-play"></i>
      </div>
    </div>
  );
}

export default VasVideo;
