import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function PostsManager() {
  // state
  const [isLoading, setIsLoading] = useState(true);

  // selector
  const { blogList } = useSelector((state) => state.blog);
  // Loading Data
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    console.log(blogList);
  }, [blogList]);

  return <div>4156ũ</div>;
}

export default PostsManager;
