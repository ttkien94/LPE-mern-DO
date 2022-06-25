/**
 * Author: Mạnh Đạt
 * Action: App Action can auto fetch userInfo by Token localStorage
 */
import axios from "axios";

import { KEY_TOKEN } from "app/const/App";
import { API_ENDPOINT, CODE_SUCCESS, GET_USER_WITH_TOKEN } from "app/const/Api";

import { LOGIN_SUCCESS } from "../constant/authConstant";

import {
  APP_LOADING,
  APP_LOADING_FAILED,
  APP_LOADING_SUCCESS,
} from "core/redux/constant/appConstant";

const fetchUserData = new Promise((resolve, reject) => {
  const accessToken = localStorage.getItem(KEY_TOKEN);
  const isLogin = Boolean(accessToken);

  if (isLogin) {
    axios({
      url: API_ENDPOINT + GET_USER_WITH_TOKEN,
      method: "POST",
      data: {
        token: accessToken,
      },
    })
      .then((response) => {
        if (response.status === CODE_SUCCESS) {
          resolve(response.data.data);
        }
      })
      .catch((error) => {
        reject("error", error);
      });
  }
});

export const appAction = () => {
  return async (dispatch) => {
    dispatch({
      type: APP_LOADING,
    });

    Promise.all([fetchUserData])
      .then((response) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response[0], // return info user
        });

        dispatch({
          type: APP_LOADING_SUCCESS,
        });
      })
      .catch((error) => {
        dispatch({
          type: APP_LOADING_FAILED,
          payload: error,
        });

        console.log("error", error);
      });
  };
};
