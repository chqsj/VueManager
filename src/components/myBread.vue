<template>
  <!-- 面包屑组件抽取 -->
  <el-breadcrumb class="my-bread" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{sectitle}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{threetitle}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  // 使用props定义 从外界传入数据
  props: ["sectitle", "threetitle"]
};
</script>

<style lang='scss'>
.my-bread {
  height: 40px;
  line-height: 40px;
  background-color: #d3dce6;
  padding-left: 10px;
}
</style>
