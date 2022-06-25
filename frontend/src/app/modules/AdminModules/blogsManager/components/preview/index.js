import React from "react";

function PreviewBlog({ render }) {
  return (
    <>
      <p>Xem trước</p>
      <div className="lpe-blog-detail">
        <div
          className="content-container"
          dangerouslySetInnerHTML={{ __html: render }}
        />
      </div>
    </>
  );
}

export default PreviewBlog;
