import axios from "axios";
import { Message } from "element-ui";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import getUserTempld from "@utils/getUserTempld";
const userTempId = getUserTempld();
const instance = axios.create({
  baseURL: "/api", //公共的基础路径
});
instance.interceptors.request.use((config) => {
  NProgress.start();
  config.headers.userTempId = userTempId;
  return config;
});
instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    if (response.data.code === 200) {
      return response.data.data;
    }
    const { message } = response.data;
    Message.error(message);
    return Promise.reject(message);
  },
  (error) => {
    NProgress.done();
    const message = error.message || "网络错误";
    Message.error(message);
    return Promise.reject(message);
  }
);
export default instance;
