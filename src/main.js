import Vue from "vue";
import App from "./App.vue";

// 导入公共样式
import './assets/base.css'

Vue.config.productionTip = false;

// 统一设置axios
// import axios from 'axios'
// Vue.prototype.$axios = axios
// // 设置基地址
// axios.defaults.baseURL = 'http://111.230.232.110:8899'

// 导入路由组件
import router from "./router.js";

// 导入饿了么UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


new Vue({
  render: h => h(App),
  router
}).$mount("#app");
