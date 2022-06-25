import React, { Fragment, useEffect } from "react";
import LPESecondaryBlog from "../secondaryBlog";
import LPEPrimaryBlog from "../primaryBlog";
import "./styles/styles.scss";
import { getBlogListByTopic } from "core/redux/actions/blogAction";
import { useDispatch, useSelector } from "react-redux";

function ItemList({ data, topicList }) {
  // const { blogListTopicId } = useSelector((state) => state.blog);
  // const dispatch = useDispatch();
  // const GetBlogTopic = () => {
  //   topicList.map((topic, index) => {
  //     dispatch(getBlogListByTopic(topic._id));
  //   });
  // };

  useEffect(() => {
    // dispatch(getBlogListByTopic("621c789f3e214b0013593e50"));
    // GetBlogTopic();
  }, []);

  return (
    <>
      {data.map((blog, index) => {
        return (
          <Fragment key={index}>
            {blog.spotlight === true ? <LPEPrimaryBlog data={blog} /> : ""}
          </Fragment>
        );
      })}

      <div className="col-12 mt-5 blog-header-2 ">
        <h2> Bài Mới Nhất </h2>
        <p>Xem Tất Cả</p>
        <hr />
      </div>

      {data.slice(0, 4).map((blog, index) => {
        return (
          <>
            <Fragment key={index}>
              <LPESecondaryBlog data={blog} />
            </Fragment>
          </>
        );
      })}
      {topicList.map((topic, index) => {
        return (
          <>
            <div className="col-12 mt-5 blog-header-2 " key={index}>
              <h2>{topic.name} </h2>
              {/* <p>Xem Tất Cả</p> */}
              <div className="box">
                <div className="box-sm blue"></div>
                <div className="box-sm gray"></div>
                <div className="box-sm gray"></div>
              </div>
              {/* <hr /> */}
            </div>
            {data.map((blog, index) => {
              return (
                <>
                  <Fragment key={index}>
                    {topic._id === blog.topicId._id ? (
                      <LPESecondaryBlog data={blog} />
                    ) : (
                      ""
                    )}
                  </Fragment>
                </>
              );
            })}
          </>
        );
      })}

      {/* {topicList.map((topic, index) => {
        return (
          <Fragment key={index}>
            {topic.spotlight === true ? <LPEPrimaryBlog data={blog} /> : ""}
          </Fragment>
        );
      })} */}
    </>
  );
}

export default ItemList;
