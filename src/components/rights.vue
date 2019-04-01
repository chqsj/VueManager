<template>
  <div class="user-container">
    <!-- 面包屑 使用面包屑组件-->
    <my-bread sectitle="权限管理" threetitle="角色列表"></my-bread>

    <!-- 表格  使用自定义列模板 -->
    <el-table class="my-table" :data="rightsList" border style="width: 100%">
      <!-- type="index"  设置这个可以让每一行的按顺序排列 -->
      <el-table-column label="#" width="50" type="index"></el-table-column>
      <el-table-column label="权限名称" width="200"></el-table-column>
      <el-table-column label="路径" width="200"></el-table-column>
      <el-table-column label="层级" width="200"></el-table-column>

     
    </el-table>
    
  </div>
</template>

<script>
export default {
  name: "rights",
  data() {
    return {
      rightsList: [{}, {}]
    };
  },

  // 使用钩子函数在页面加载之前获取数据
  created() {}
};
</script>

<style lang='scss'>
.user-container {
  height: 100%;

}
</style>
