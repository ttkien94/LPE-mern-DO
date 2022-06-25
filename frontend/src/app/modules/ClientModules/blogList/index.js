import React, { useEffect, useState } from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import Skeleton from "react-loading-skeleton";
import LoadingSkeletionBlog from "./components/skeletonBlog";
import ItemList from "./components/itemList";
import { getBlogList } from "core/redux/actions/blogAction";
import { getTopicList } from "core/redux/actions/topicAction";
// import { API_ENDPOINT, BLOG } from "app/const/Api";
// import axios from "axios";

import "./styles/styles.scss";
import { useDispatch, useSelector } from "react-redux";

function BlogList() {
  useSiteTitle("blog_page");

  // state
  // const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // selector
  const { topicList } = useSelector((state) => state.topic);
  const { blogList } = useSelector((state) => state.blog);
  //function

  // const getBlogList = (page) => {
  //   setIsLoading(true);
  //   // const limit = 20;
  //   // const offset = page === 0 ? limit : (page - 1) * limit;

  //   axios({
  //     url: API_ENDPOINT + BLOG,
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       setIsLoading(false);
  //       setBlogList(response.data.data);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       console.log("error", error);
  //     });
  // };

  useEffect(() => {
    dispatch(getBlogList());
    dispatch(getTopicList());
    setIsLoading(false);
  }, []);

  return (
    <div className="lpe-blog-screen container-fluid container-lg py-5">
      <h1 className="blog-topic">
        {isLoading ? <Skeleton width={200} height={70} /> : "Trạm đọc & cảm"}
      </h1>

      <div className="row blog-list">
        {isLoading ? (
          <LoadingSkeletionBlog />
        ) : (
          <>
            <ItemList data={blogList} topicList={topicList} />
          </>
        )}
      </div>
    </div>
  );
}

export default BlogList;
