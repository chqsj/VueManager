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
          <el-button type="success">退出</el-button>
        </el-col>
      </el-row>
    </el-header>
    <!-- 首页底部 -->
    <el-container class="my-container">
      <!-- 侧边栏 -->
      <el-aside class="my-aside" width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo" router="">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/users">
              <i class="el-icon-menu"></i>
              用户列表
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              用户列表
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              用户列表
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              用户列表
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据报表</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              用户列表
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
  name: "index"
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
