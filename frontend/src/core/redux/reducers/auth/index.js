import { KEY_TOKEN } from "app/const/App";

import {
  DELETE_AVATAR,
  LOGIN_FAILED,
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGOUT_ACCOUNT,
  UPDATE_AVATAR,
  UPDATE_USER_REQUESTING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
} from "core/redux/constant/authConstant";

const initialState = {
  loading: false,
  userInfo: {},
  error: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Đăng xuất
    case LOGOUT_ACCOUNT:
      localStorage.removeItem(KEY_TOKEN);

      state.userInfo = {};
      return { ...state };

    // cập nhật hình ảnh đại diện
    case UPDATE_AVATAR: {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          avatar: action.payload,
        },
      };
    }

    // xóa ảnh đại diện
    case DELETE_AVATAR: {
      // Clone object from initial state
      const result = { ...state.userInfo, avatar: "" };

      // remake userInfo
      state.userInfo = result;

      return { ...state };
    }

    case UPDATE_USER_REQUESTING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }

    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: "",
        userInfo: { ...state.userInfo, ...action.payload },
      };
    }

    case UPDATE_USER_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case LOGIN_REQUESTING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: "",
        userInfo: action.payload,
      };
    }

    case LOGIN_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return { ...state };
  }
};
