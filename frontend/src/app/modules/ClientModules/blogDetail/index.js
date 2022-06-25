import React, { memo, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosClient from "app/const/Instance";
import LPELoading from "app/components/loading";
import { API_ENDPOINT, BLOG } from "app/const/Api";
import { convertBlocksToHtml } from "core/utils/editorUtil";
import { convertFullDate } from "core/utils/dateUtil";
import { Avatar } from "@mui/material";

import "./styles/index.scss";

function BlogDetail() {
  let { url } = useParams();
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [blogInfo, setBlogInfo] = useState([]);

  const getBlogDetail = () => {
    setIsLoading(true);

    axiosClient
      .get(BLOG + url)
      .then((response) => {
        setIsLoading(false);
        const jsonConvert = JSON.parse(response.data.content);

        jsonConvert.map((item, index) => {
          return (
            <>
              {item.type === "image"
                ? (item.data.file.url =
                    process.env.REACT_APP_BACKEND_URL +
                    "/" +
                    item.data.file.url)
                : ""}
            </>
          );
        });
        const newContent = convertBlocksToHtml(jsonConvert);
        // console.log("newContent:", newContent);
        setContent(newContent);
        setBlogInfo(response.data);
      })
      .catch((error) => {
        setIsLoading(false);

        console.log(error);
      });
  };

  useEffect(() => {
    getBlogDetail();
    console.log("Content: ", content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Set title for website
  useEffect(() => {
    const prevTitle = document.title;
    console.log("prevTitle:", prevTitle);
    document.title = blogInfo?.title;
    console.log("document.title: ", document.title);
    return () => {
      document.title = prevTitle;
      console.log(1);
    };
  });

  return (
    <>
      {isLoading ? (
        <LPELoading />
      ) : (
        <>
          {blogInfo ? (
            <div className="lpe-blog-detail">
              <div className="author-container">
                <div className="category">
                  {blogInfo.topicId && (
                    <Link to={`${blogInfo.topicId._id}`}>
                      {blogInfo.topicId.name}
                    </Link>
                  )}
                </div>

                {/* Title */}
                <h1 className="blog-title">{blogInfo.title}</h1>

                <div className="author-info-block">
                  {blogInfo.author?.avatar ? (
                    <img
                      src={blogInfo.author.avatar}
                      alt={blogInfo.author.avatar}
                      className="img-fluid mr-2"
                    />
                  ) : (
                    <div className="mr-2">
                      <Avatar />
                    </div>
                  )}

                  <div className="author-info-block_name">
                    <p className="name">
                      {blogInfo.author && (
                        <strong>{blogInfo.author.name}</strong>
                      )}
                    </p>

                    <p className="created-at">
                      Cập nhật lần cuối vào &nbsp;
                      {convertFullDate(blogInfo.updatedAt, "DD-MM-yyyy")}
                    </p>
                  </div>
                </div>
              </div>

              {content && (
                <div
                  className="content-container"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              )}
            </div>
          ) : (
            <p>Empty</p>
          )}
        </>
      )}
    </>
  );
}

export default memo(BlogDetail);
