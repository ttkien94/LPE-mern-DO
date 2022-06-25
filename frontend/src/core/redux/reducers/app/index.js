import {
  APP_LOADING,
  APP_LOADING_FAILED,
  APP_LOADING_SUCCESS,
} from "core/redux/constant/appConstant";

const initialState = {
  loading: false,
  message: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADING: {
      return { ...state, loading: true };
    }

    case APP_LOADING_SUCCESS: {
      return { ...state, loading: false };
    }

    case APP_LOADING_FAILED: {
      return { ...state, loading: false, message: action.payload };
    }
    default:
      return { ...state };
  }
};
