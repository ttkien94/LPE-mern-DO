import React from "react";

import "./styles/styles.scss";

function Comment({ data }) {
  return (
    <div className="col-12 col-md-12 col-lg-4 comment-container">
      <div className="comment-container_ava">
        <img src={data.img} alt="ava" />
        <p className="comment-name">{data.name}</p>
        <p className="comment-desc">{data.desc}</p>
      </div>

      <p className="comment-content">{data.comment}</p>
    </div>
  );
}

export default Comment;
