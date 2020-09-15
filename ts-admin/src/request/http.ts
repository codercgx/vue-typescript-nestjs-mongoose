import axiox from "axios";
import Vue from "vue";
import router from "../router/index";

const http = axiox.create({
  baseURL: "http://localhost:3000"
});

http.interceptors.request.use(
  config => {
    if (localStorage.token) {
      config.headers.Authorization = "Bearer " + localStorage.token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    if (error.response.data.message) {
      Vue.prototype.$message({
        type: "error",
        message: error.response.data.message
      });
    }

    if (error.response.status === 401) {
      router.push("/login");
    }
  }
);

export default http;
