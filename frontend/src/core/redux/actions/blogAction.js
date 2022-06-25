import axios from "axios";
import {
  API_ENDPOINT,
  BLOG_CREATE,
  BLOG_DELETE,
  BLOG_UPDATE,
  BLOG,
  BLOG_ID,
  BLOG_TOPICID,
  BLOG_SPOTLIGHT,
  BLOG_STATUS,
} from "app/const/Api";
import { KEY_TOKEN } from "app/const/App";
import { showToast } from "core/utils/toastUtil";
import {
  GET_BLOG,
  FIND_BLOG,
  POST_BLOG,
  REMOVE_BLOG,
  GET_BLOG_TOPICID,
  UPDATE_BLOG,
} from "../constant/blogConstant";

// Get All Blog
export const getBlogList = () => {
  // setIsLoading(true);
  // const limit = 20;
  // const offset = page === 0 ? limit : (page - 1) * limit;
  console.log("run function GetBlogList");
  const token = localStorage.getItem(KEY_TOKEN);
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + BLOG,
        method: "GET",
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          dispatch({
            type: GET_BLOG,
            data: res.data.data,
          });
        })
        .catch((error) => console.log("error: ", error));
    } catch (error) {
      console.log("error", error);
    }
  };
};

// update Blog spotlight
export const getBlogId = (blog_id) => {
  console.log("blog_id: ", blog_id, "run getBlogId");
  const token = localStorage.getItem(KEY_TOKEN);
  return async (dispatch) => {
    try {
      await axios
        .get(`${API_ENDPOINT}${BLOG_ID}?blog_id=${blog_id}`)
        .then((res) => {
          console.log("data-resquest:", res.data);
          dispatch({
            type: FIND_BLOG,
            payload: res.data.data,
          });
        })
        .catch((error) => {
          console.log("res: ", error);
        });
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

// Get All Blog with spotlight == true
export const getBlogListSpotlight = () => {
  // setIsLoading(true);
  // const limit = 20;
  // const offset = page === 0 ? limit : (page - 1) * limit;
  const token = localStorage.getItem(KEY_TOKEN);
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + BLOG_SPOTLIGHT,
        method: "GET",
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          console.log(res.data.data);
          dispatch({
            type: GET_BLOG,
            data: res.data.data,
          });
        })
        .catch((error) => console.log("error: ", error));
    } catch (error) {
      console.log("error", error);
    }
  };
};
// Get All Blog with status == false
export const getBlogListStatus = () => {
  // setIsLoading(true);
  // const limit = 20;
  // const offset = page === 0 ? limit : (page - 1) * limit;
  const token = localStorage.getItem(KEY_TOKEN);
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + BLOG_STATUS,
        method: "GET",
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          console.log("blogAction - Data response: ", res.data.data);
          dispatch({
            type: GET_BLOG,
            data: res.data.data,
          });
        })
        .catch((error) => console.log("error: ", error));
    } catch (error) {
      console.log("error", error);
    }
  };
};

// Get Blog order by topic Id
export const getBlogListByTopic = (topic_Id) => {
  console.log("topic_Id: ", topic_Id);

  return async (dispatch) => {
    try {
      await axios(`${API_ENDPOINT}${BLOG_TOPICID}?topic_Id=${topic_Id}`)
        .then((res) => {
          console.log("data:", res);
          dispatch({
            type: GET_BLOG_TOPICID,
            data: res.data.data,
          });
        })
        .catch((error) => console.log("res: ", error));
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

// update Blog spotlight
export const updateBlogSpotLight = (blog_id, spotlight) => {
  console.log("blog_id: ", blog_id);
  console.log("spotlight: ", spotlight);
  const token = localStorage.getItem(KEY_TOKEN);
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + BLOG_SPOTLIGHT,
        method: "PUT",
        headers: {
          token: `${token}`,
        },
        data: { blog_id, spotlight },
      })
        .then((res) => {
          console.log("data:", res);
          dispatch({
            type: UPDATE_BLOG,
            payload: res.data.data,
          });
        })
        .catch((error) => console.log("res: ", error));
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

// update Blog status
export const updateBlogStatus = (blog_id, blogStatus) => {
  console.log("blog_id: ", blog_id);
  console.log("spotlight: ", blogStatus);
  const token = localStorage.getItem(KEY_TOKEN);
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + BLOG_STATUS,
        method: "PUT",
        headers: {
          token: `${token}`,
        },
        data: { blog_id, blogStatus },
      })
        .then((res) => {
          console.log("data:", res);
          dispatch({
            type: UPDATE_BLOG,
            payload: res.data.data,
          });
        })
        .catch((error) => console.log("res: ", error));
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

//update Blog
export const updateBlogAction = (formData, setIsLoading) => {
  const token = localStorage.getItem(KEY_TOKEN);

  console.log("data:");
  // check  key - value in form Data
  for (var [key, value] of formData.entries()) {
    console.log(key, value);
  }
  console.log("function updateBlogAction run");

  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + BLOG_UPDATE,
        method: "put",
        data: formData,
        headers: {
          token: `${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
        // await axios
        //   .put(API_ENDPOINT + BLOG_UPDATE, formData, {
        //     headers: { "content-type": "application/x-www-form-urlencoded" },
        //   })
        .then((res) => {
          dispatch({
            type: UPDATE_BLOG,
            payload: res.data.data,
          });

          setIsLoading(false);

          showToast("success", "Update bài viết thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);

      showToast("error", "Upload bài viết thất bại", {
        timeout: 5000,
      });
    }
  };
};

// Add Blog
export const postBlogAction = (data, setIsLoading) => {
  const token = localStorage.getItem(KEY_TOKEN);

  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + BLOG_CREATE,
        method: "POST",
        data: data,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          // dispatch({
          //   type: POST_BLOG,
          //   payload: data,
          // });

          setIsLoading(false);

          showToast("success", "Upload bài viết thành công", {
            timeout: 5000,
          });
          setTimeout(function () {
            window.location.href = "/admin/quan-ly-bai-viet";
          }, 1500);
        })
        .catch((err) => {
          console.error(err.message);
        });
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);

      showToast("error", "Upload bài viết thất bại", {
        timeout: 5000,
      });
    }
  };
};

// Delete Blog
export const deleteBlogAction = (blog) => {
  const token = localStorage.getItem(KEY_TOKEN);
  console.log("blog-content will remove:", blog);
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + BLOG_DELETE,
        method: "delete",
        data: { blog },
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          console.log("id data removed: ", res.data.data);
          dispatch({
            type: REMOVE_BLOG,
            payload: res.data.data,
          });
          showToast("success", "Xóa bài viết thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    } catch (error) {
      console.log("error", error);

      showToast("error", "Upload bài viết thất bại", {
        timeout: 5000,
      });
    }
  };
};
