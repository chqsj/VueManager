// 导入vue
import Vue from "vue";
// 路由相关
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 导入组件
import login from "./components/login.vue";
import index from "./components/index.vue";

// 导入首页的嵌套路由
import users from "./components/users.vue"; //用户列表组件
import roles from "./components/roles.vue"; //角色列表组件
import rights from "./components/rights.vue"; //权限列表组件
import goods from "./components/goods.vue"; //商品列表组件
import params from "./components/params.vue"; //分类参数组件
import categories from "./components/categories.vue"; //商品分类组件
import orders from "./components/orders.vue"; //订单列表组件
import reports from "./components/reports.vue"; //数据报表组件

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
    component: index,
    children: [
      // 路由重定向  访问首页的时候 默认显示用户列表
      {
        path: "",
        redirect: "users"
      },
      {
        path: "users",
        component: users
      },
      {
        path: "roles",
        component: roles
      },
      {
        path: "rights",
        component: rights
      },
      {
        path: "goods",
        component: goods
      },
      {
        path: "params",
        component: params
      },
      {
        path: "categories",
        component: categories
      },
      {
        path: "orders",
        component: orders
      },
      {
        path: "reports",
        component: reports
      }
    ]
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

// 注册全局前置守卫(导航守卫)
/* 
  to 去的 路由信息
  from 来的路由信息
  next 继续向后执行  跟express的中间件类似
*/
router.beforeEach((to, from, next) => {
  if(to.path==='/login'){
      // 如果请求的路径是登录页 就放行去登录

    next()
  }else{
      // 如果请求的路径不是登录页 就判断是否有token  没有就打回登录页
    if(window.sessionStorage.getItem('token')){
      next()
    }else{
      // 提示
      Vue.prototype.$message.error('哥们,发现你没有登录,请去登录')
      next('/login')
    }
  } 
})


// 暴露路由
export default router;
