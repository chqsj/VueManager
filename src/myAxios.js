// 统一设置axios
import axios from "axios";

// 导出自己封装的axios插件 如果是对象 需要install方法
export default {
  install(Vue) {
    // console.log("自己封装的axios插件");
    // console.log(Vue);

    // // 设置基地址
    axios.defaults.baseURL = "http://localhost:8888/api/private/v1/";
    Vue.prototype.$axios = axios;

    // 设置axios拦截器
    // 请求拦截器,请求之前统一设置一些内容 比如token之类的
    axios.interceptors.request.use(
      function(config) {
        // 在请求之前统一加上token
        config.headers.Authorization = window.sessionStorage.getItem("token");
        return config;
      },
      function(error) {
        return Promise.reject(error);
      }
    );
    // 响应拦截器  统一处理响应  比如弹框
    axios.interceptors.response.use(
      function(response) {
        // 这里不能使用this  要使用 Vue.prototype  因为这是饿了么ui设定的  所以饿了么ui要放在上面  不是vue实例的
        // 响应之前进行弹框   根据不同的状态码进行不同的响应
        if ([200, 201, 204].indexOf(response.data.meta.status) != -1) {
          Vue.prototype.$message.success(response.data.meta.msg);
        } else {
          Vue.prototype.$message.warning(response.data.meta.msg);
        }

        return response;
      },
      function(error) {
        return Promise.reject(error);
      }
    );
  }
};
