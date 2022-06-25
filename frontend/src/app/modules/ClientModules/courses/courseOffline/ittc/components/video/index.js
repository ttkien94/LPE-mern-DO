import React from "react";
import ModalVideo from "react-modal-video";
import thumbnail from "../../assets/thumbnail.jpg";

import "./styles/styles.scss";

function Video() {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="ittc-video">
      <div className="video-bg">
        <div className="container">
          <div
            className="row"
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-12">
              <img src={thumbnail} alt={thumbnail} className="img-fluid" />
            </div>
          </div>
        </div>
        <button
          className="video-btn-play"
          onClick={() => {
            setOpen(true);
          }}
        >
          <i class="fal fa-play"></i>
        </button>

        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="JSrgvkcsv6E"
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
}

export default Video;
