/** @format */

import axios from "axios";

const instance = axios.create({
  baseURL: "http://103.157.218.115/RedirectURL/hs/RedirectURL/V1",  
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    console.log(err);
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  function (response) {
    // làm mới token
    return response;
  },
  function (err) {
    return Promise.reject(err);
  }
);
export default instance;
