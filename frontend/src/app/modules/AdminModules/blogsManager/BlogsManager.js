import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LPELoading from "app/components/loading";
import { Button, CardActions } from "@mui/material";
import BlogItem from "./components/item";
import {
  getBlogList,
  getBlogListSpotlight,
  getBlogListStatus,
} from "core/redux/actions/blogAction";
function BlogsManager() {
  // state
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [filterBlog, setFilterBlog] = useState();
  // selector
  const { blogList } = useSelector((state) => state.blog);
  useEffect(() => {
    console.log("blogList:", blogList);
  }, [blogList]);
  // Loading Data
  useEffect(() => {
    dispatch(getBlogList());
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <LPELoading />
      ) : (
        <>
          <div className="row ">
            <div className="col-12 blog-filter">
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => {
                    dispatch(getBlogList());
                  }}
                >
                  Bài Viết Đang Hiển Thị
                </Button>

                <Button
                  size="small"
                  variant="contained"
                  onClick={() => {
                    dispatch(getBlogListSpotlight());
                  }}
                >
                  Bài Viết Đã Ghim
                </Button>

                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  onClick={() => {
                    dispatch(getBlogListStatus());
                  }}
                >
                  Bài Viết Ẩn
                </Button>
              </CardActions>
            </div>
          </div>
          {blogList && (
            <div className="row mt-5">
              {blogList?.map((item, index) => {
                return (
                  <>
                    <div className="col-3 mt-5" key={index}>
                      <BlogItem item={item} />
                    </div>
                  </>
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default BlogsManager;
