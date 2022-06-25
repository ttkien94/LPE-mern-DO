import React from "react";

import "./styles/styles.scss";

function LPEBanner({ bannerImg, headText, subText, subText2 }) {
  return (
    <section
      className="bgHeading banner"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="overlay-banner"></div>

      <div className="intro-text">
        <h4>{headText}</h4>

        <p>{subText}</p>
        <p>{subText2}</p>
      </div>
    </section>
  );
}

export default LPEBanner;
