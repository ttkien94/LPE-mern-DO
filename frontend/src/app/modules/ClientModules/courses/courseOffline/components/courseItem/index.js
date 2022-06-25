import React from "react";
import { Link } from "react-router-dom";

import "./styles/styles.scss";

function CourseItemOffline({ ...props }) {
  return (
    <Link className="wrapper-courseItem-offline" to={props.link || ""}>
      <div
        className="wrapper-courseItem-offline_bg"
        style={{
          background: `url(${props.bgCourse})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="wrapper-courseItem-offline_name">
          <p
            style={{
              color: `${props.textColor}`,
              fontWeight: "bold",
              textShadow: "3px 4px 7px rgba(0,0,0,0.2)",
            }}
          >
            {props.title}
          </p>
        </div>
      </div>

      <h3 className="text-center my-3 text-capitalize">{props.name}</h3>
    </Link>
  );
}

export default CourseItemOffline;
