import React from "react";
import { Link } from "react-router-dom";

function LPESecondaryBlog({ data }) {
  return (
    <div className="col-12 col-lg-3 mb-3 mb-md-0 mt-4">
      <Link to={`/tram-doc-cam/${data.url}`} id="#navid">
        <article className="lpe-blog small-item">
          <div className="right-content">
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}/${data.cover}`}
              alt={`${process.env.REACT_APP_BACKEND_URL}/${data.cover}`}
              className="img-fluid w-100 lpe-blog-small__img"
            />
          </div>

          <div className="left-content">
            {/* <Link to={`${data.topicId._id}`}>
              <p className="text-uppercase lpe-blog-small__topic">
                {data.topicId.name}
              </p>
            </Link> */}
            <p className="text-uppercase lpe-blog-small__topic">
              {data.topicId.name}
            </p>

            <h2 className="lpe-blog-small__title">{data.title}</h2>

            {/* <div className="lpe-blog-small__author">
              <div className="lpe-blog-small__author-avatar">
                <img
                  src={data.author.avatar}
                  alt={data.author.avatar}
                  className="author-img"
                />
              </div>

              <div className="lpe-blog-small__author-name">
                <p className="text-uppercase author-name">{data.author.name}</p>
                <p className="time-ago">7 giờ trước</p>
              </div>
            </div> */}
          </div>
        </article>
      </Link>
    </div>
  );
}

export default LPESecondaryBlog;
