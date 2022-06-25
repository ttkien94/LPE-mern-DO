import {
  FETCH_ALL_BLOG_REQUESTING,
  FETCH_ALL_BLOG_SUCCESS,
  FETCH_ALL_BLOG_FAILED,
  GET_BLOG,
  POST_BLOG,
  REMOVE_BLOG,
  UPDATE_BLOG,
  FIND_BLOG,
  // GET_BLOG_TOPICID,
} from "core/redux/constant/blogConstant";

const initialState = {
  blogList: null,
  blog: null,
  // blogListTopicId: [],
  imagesContent: [],
  requesting: false,
  success: false,
  message: null,
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOG:
      state.blogList = action.data;
      return { ...state };

    case FIND_BLOG:
      return {
        ...state,
        blog: action.payload,
      };

    case POST_BLOG:
      const newList = [...state.blogList];

      newList.push(action.payload);

      state.blogsList = newList;
      return { ...state };

    // case GET_BLOG_TOPICID:
    //   state.blogListTopicId = action.data;
    //   return { ...state };

    case REMOVE_BLOG:
      return {
        ...state,
        blogList: state.blogList.filter((blog) => blog._id !== action.payload),
      };

    case UPDATE_BLOG:
      const newBlogs = state.blogList.map((blog) =>
        blog._id === action.payload._id ? action.payload : blog
      );
      const blog = action.payload;
      console.log("New BLog", blog);
      return {
        ...state,
        blog: action.payload,
        blogList: newBlogs,
      };
    case FETCH_ALL_BLOG_REQUESTING: {
      return { ...state, requesting: true };
    }
    case FETCH_ALL_BLOG_SUCCESS: {
      return { ...state };
    }
    case FETCH_ALL_BLOG_FAILED: {
      return { ...state };
    }

    default:
      return { ...state };
  }
};
