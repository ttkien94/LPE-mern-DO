import React from "react";

import "./styles/styles.scss";

function TestimonialCard({ hero, name, job, ava }) {
  return (
    <div className="tes-card col-12 col-md-6 col-lg-4 mb-5">
      <div className="tes-border">
        <h3 className="tes-name">
          {name}
          <p className="tes-job">{job}</p>
        </h3>

        <p className="tes-hero">{hero}</p>
        <img className="img-fluid img-ava" src={ava} alt={ava} />
      </div>
    </div>
  );
}

export default TestimonialCard;
