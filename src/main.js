import Vue from "vue";
import App from "./App.vue";

// 导入公共样式
import './assets/base.css'

Vue.config.productionTip = false;

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
