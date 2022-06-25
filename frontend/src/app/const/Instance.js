import axios from "axios";
import { API_ENDPOINT } from "./Api";
import { KEY_TOKEN } from "./App";

const axiosClient = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.defaults.headers.common["token"] = localStorage.getItem(KEY_TOKEN);

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Only get data response for all reponse of axios
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
