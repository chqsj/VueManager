import Vue from "vue";
import App from "./App.vue";

// 导入路由组件
import router from "./router.js";

// 导入饿了么UI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 全局注册面包屑组件  在饿了么ui的下面导  不然会被饿了么的样式覆盖了
import myBread from './components/myBread.vue'
Vue.component('my-bread',myBread)

// 导入公共样式
import "./assets/base.css";

Vue.config.productionTip = false;

// 引入自己封装的axios插件  使用use方法
import myaxios from './myAxios.js'
Vue.use(myaxios)


new Vue({
  render: h => h(App),
  router
}).$mount("#app");
