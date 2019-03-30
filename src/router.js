// 导入vue
import Vue from "vue";
// 路由相关
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 导入组件
import login from "./components/login.vue";
import index from "./components/index.vue";

// 路由规则
let routes = [
  // 登录页
  {
    path: "/login",
    component: login
  },
  // 首页
  {
    path: "/",
    component: index
  },
  {
    path: "/index",
    component: index
  }
];

// 实例化路由对象
let router = new VueRouter({
  routes
});

// 暴露路由
export default router;
