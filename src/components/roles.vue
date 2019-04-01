<template>
  <div class="user-container">
    <!-- 面包屑 使用面包屑组件-->
    <my-bread sectitle="权限管理" threetitle="角色列表"></my-bread>

    <!-- 输入框 按钮 -->
    <el-row class="my-input">
      <el-col :span="6">
        <el-button  plain>添加角色</el-button>
      </el-col>
    </el-row>
    <!-- 表格  使用自定义列模板 -->
    <el-table class="my-table" :data="rolesList" border style="width: 100%">
      <!-- type="index"  设置这个可以让每一行的按顺序排列 -->
      <el-table-column label="#" width="50" type="index"></el-table-column>
      <el-table-column label="角色名称" width="420"></el-table-column>
      <el-table-column label="角色描述" width="420"></el-table-column>

      <el-table-column label="操作" width="250">
        <!-- scope是一个名字  可以通过scope.index获取索引 索引从0开始   通过scope.row获取这一行的数据 -->
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" plain></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" plain></el-button>
          <el-button type="warning" icon="el-icon-check" size="mini" plain></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      class="my-pagination"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="0"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "roles",
  data() {
    return {
      rolesList: [{}, {}]
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
