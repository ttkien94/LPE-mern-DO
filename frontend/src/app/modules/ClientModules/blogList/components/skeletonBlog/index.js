import React from "react";
import Skeleton from "react-loading-skeleton";

function LoadingSkeletionBlog({ ...restProps }) {
  return (
    <>
      <div className="col-12 col-md-6 px-1 mb-3 mb-md-0">
        <Skeleton width="100%" height={300} />
      </div>

      <div className="col-12 col-md-6 px-1 mb-3 mb-md-0">
        <Skeleton width="100%" height={300} />
      </div>

      {[0, 1, 2, 3].map((index) => {
        return (
          <div className="col-12 col-lg-3 mb-3 mb-md-0 mt-4" key={index}>
            <article className="lpe-blog small-item">
              <div className="right-content d-block">
                <Skeleton
                  width="100%"
                  height="100%"
                  className="lpe-blog-small__img"
                />
              </div>

              <div className="left-content">
                <p className="my-2">
                  <Skeleton width="100%" height={20} />
                </p>

                <h2 className="lpe-blog-small__title">
                  <Skeleton width="100%" height={100} />
                </h2>

                <div className="lpe-blog-small__author">
                  <div className="w-100">
                    <Skeleton width="100%" height={50} />
                  </div>

                  {/* <div className="lpe-blog-small__author-name">
                    <Skeleton width="100%" height={50} />
                    <Skeleton width="100%" height={50} />
                  </div> */}
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </>
  );
}

export default LoadingSkeletionBlog;
