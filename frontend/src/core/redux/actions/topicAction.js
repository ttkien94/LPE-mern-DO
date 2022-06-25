import axios from "axios";

import { API_ENDPOINT, TOPIC } from "app/const/Api";
import { GET_TOPIC } from "../constant/topicConstant";
import { KEY_TOKEN } from "app/const/App";

// Get Topic
export const getTopicList = () => {
  // setIsLoading(true);
  // const limit = 20;
  // const offset = page === 0 ? limit : (page - 1) * limit;
  const token = localStorage.getItem(KEY_TOKEN);
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + TOPIC,
        method: "GET",
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          dispatch({
            type: GET_TOPIC,
            data: res.data.data,
          });
        })
        .catch((error) => console.log("error: ", error));
    } catch (error) {
      console.log("error", error);
    }
  };
};
