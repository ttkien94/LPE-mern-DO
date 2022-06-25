import { GET_TOPIC } from "core/redux/constant/topicConstant";

const initialState = {
  topicList: [],
};

export const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPIC:
      state.topicList = action.data;
      return { ...state };

    default:
      return { ...state };
  }
};
