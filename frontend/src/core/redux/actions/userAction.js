import axios from "axios";

import {
  ADMIN_UPDATE,
  API_ENDPOINT,
  REMOVE_AVATAR,
  UPLOAD_AVATAR,
  USERS,
} from "app/const/Api";

import {
  ADD_USER,
  FETCH_ALL_USER_FAILED,
  FETCH_ALL_USER_REQUESTING,
  FETCH_ALL_USER_SUCCESS,
  GET_IP_LOCAL,
  UPDATE_USER_IN_LIST,
} from "../constant/userConstant";

import { showToast } from "core/utils/toastUtil";
import { KEY_TOKEN } from "app/const/App";

import { DELETE_AVATAR, UPDATE_AVATAR } from "../constant/authConstant";
import axiosClient from "app/const/Instance";

export const getIpLocalAction = () => {
  return (dispatch) => {
    try {
      axios({
        url: "https://api.ipify.org",
        method: "get",
      })
        .then((res) => {
          dispatch({
            type: GET_IP_LOCAL,
            ip: res.data,
          });
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

export const updateAvatarAction = (formData, setLoadingImage) => {
  const token = localStorage.getItem(KEY_TOKEN);

  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + UPLOAD_AVATAR,
        method: "POST",
        data: formData,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          setLoadingImage(false);

          dispatch({
            type: UPDATE_AVATAR,
            payload: res.data.data,
          });

          showToast("success", "Cập nhật hình ảnh thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          setLoadingImage(false);

          showToast("error", "Không thể cập nhật hình ảnh", {
            timeout: 5000,
          });
        });
    } catch (error) {
      setLoadingImage(false);

      showToast("error", "Không thể cập nhật hình ảnh", {
        timeout: 5000,
      });
    }
  };
};

export const deleteAvatarAction = (filename, setLoadingImage) => {
  const token = localStorage.getItem(KEY_TOKEN);

  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + REMOVE_AVATAR,
        method: "POST",
        data: {
          filename,
        },
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          dispatch({
            type: DELETE_AVATAR,
            avatar: res.data,
          });

          setLoadingImage(false);
          showToast("success", "Xóa thành công!", {
            timeout: 5000,
          });
        })
        .catch((err) => console.log(err.response.data));
    } catch (error) {
      setLoadingImage(false);

      showToast("error", "Xóa thất bại!", {
        timeout: 5000,
      });
      console.log("error", error);
    }
  };
};

export const adminUpdateUserAction = (id, dataUpdate, setIsLoading) => {
  const token = localStorage.getItem(KEY_TOKEN);

  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + ADMIN_UPDATE + `${id}`,
        method: "PUT",
        data: dataUpdate,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          // On Redux
          dispatch({
            type: UPDATE_USER_IN_LIST,
            userUpdate: dataUpdate,
            id,
          });

          setIsLoading(false);

          showToast("success", "Cập nhật thông tin thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);

      showToast("error", "Cập nhật thông tin thất bại", {
        timeout: 5000,
      });
    }
  };
};

export const addUserAction = (userInfo, setIsLoading) => {
  const token = localStorage.getItem(KEY_TOKEN);

  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + USERS,
        method: "POST",
        data: userInfo,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          dispatch({
            type: ADD_USER,
            user: res.data,
          });

          setIsLoading(false);

          showToast("success", "Thêm thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          console.error(err.response.data);

          showToast("error", "Thêm thất bại (Email đã tồn tại)", {
            timeout: 5000,
          });
          setIsLoading(false);
        });
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);

      showToast("error", "Thêm thất bại", {
        timeout: 5000,
      });
    }
  };
};

export const getUsersAction = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_ALL_USER_REQUESTING,
    });

    try {
      axiosClient.get(USERS).then((response) => {
        dispatch({
          type: FETCH_ALL_USER_SUCCESS,
          payload: response,
        });
      });
    } catch (error) {
      dispatch({
        type: FETCH_ALL_USER_FAILED,
        payload: error,
      });
    }
  };
};
