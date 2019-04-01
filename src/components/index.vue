<template>
  <!-- 首页整体容器 -->
  <el-container class="index-container">
    <!-- 头部 -->
    <el-header class="my-header">
      <el-row>
        <el-col :span="4">
          <img src="../assets/logo.png" alt>
        </el-col>
        <el-col :span="19">
          <h1>黑马后台管理系统</h1>
        </el-col>
        <el-col :span="1">
          <el-button type="success" @click="logout">退出</el-button>
        </el-col>
      </el-row>
    </el-header>
    <!-- 首页底部 -->
    <el-container class="my-container">
      <!-- 侧边栏 -->
      <el-aside class="my-aside" width="200px">
        <el-menu default-active="users" class="el-menu-vertical-demo" router unique-opened>
          
          <el-submenu :index="item.id+''" v-for="item in menuList">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.authName}}</span>
            </template>

            <el-menu-item :index="it.path" v-for="it in item.children">
              <i class="el-icon-menu"></i>
              {{it.authName}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主体区域 -->
      <el-main class="my-main">
        <!-- 嵌套路由出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      menuList: []
    };
  },
  methods: {
    logout() {
      // 登出方法  跳转到登录页
      // 清除缓存
      window.sessionStorage.removeItem("token");
      this.$router.push("/login");
    }
  },
  // 判断用户登录状态 不需要获取组件中的数据 在最开始判断缓存中是否有数据
  beforeCreate() {
    if (window.sessionStorage.getItem("token")) {
      // 存在  登录过
    } else {
      // 没有登录过
      this.$message.error("请先登录");
      this.$router.push("/login");
    }
  },
  // 钩子函数
  async created() {
    // 获取左侧菜单
    let res = await this.$axios.get("menus");
    console.log(res);
    this.menuList = res.data.data;
  }
};
</script>

<style lang='scss'>
.index-container {
  // 首页容器盒子
  height: 100%;
  // 让容器盒子弹性布局 垂直方向
  display: flex;
  flex-direction: column;
  .my-header {
    //   头部样式
    height: 60px;
    background-color: #b3c0d1;
    line-height: 60px;
    h1 {
      margin: 0;
      padding: 0;
      text-align: center;
      color: #fff;
    }
  }
  .my-container {
    //   底部样式
    flex: 1;
    .my-aside {
      background-color: #fff;
      a {
        text-decoration: none;
      }
    }
    .my-main {
      background-color: #e9eef3;
      // 取出上边间距
      padding-top: 0;
    }
  }
}
</style>
