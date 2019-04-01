<template>
  <div class="user-container">
    <!-- 面包屑 使用面包屑组件-->
    <my-bread sectitle="商品管理" threetitle="商品分类"></my-bread>

    <!-- 按钮 -->
    <el-row class="my-input">

      <el-col :span="4">
        <el-button class="my-btn" type="success" plain>添加分类</el-button>
      </el-col>
    </el-row>
    <!-- 表格  使用自定义列模板 -->
    <el-table class="my-table" :data="cateList" border style="width: 100%">
      <!-- type="index"  设置这个可以让每一行的按顺序排列 -->
      <el-table-column label="分类名称" width="160"></el-table-column>
      <el-table-column label="级别" width="300"></el-table-column>
      <el-table-column label="是否有效" width="300"></el-table-column>

      <el-table-column label="操作" width="250">
        <!-- scope是一个名字  可以通过scope.index获取索引 索引从0开始   通过scope.row获取这一行的数据 -->
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" plain></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" plain></el-button>
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
  name: "categories",
  data() {
    return {
      cateList: [{}, {}]
    };
  }
};
</script>

<style lang='scss'>
.user-container {
  height: 100%;
  .my-input {
    .my-btn {
      margin-left: 10px;
    }
  }
}
</style>
