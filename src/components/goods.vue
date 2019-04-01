<template>
  <div class="user-container">
    <!-- 面包屑 使用面包屑组件-->
    <my-bread sectitle="商品管理" threetitle="商品列表"></my-bread>

    <!-- 输入框 按钮 -->
    <el-row class="my-input">
      <el-col :span="6">
        <!-- @keyup.enter.native  为组件绑定原生事件  需要用到修饰符 .native -->
        <el-input placeholder="请输入内容" class="input-with-select">
          <!-- 绑定搜索用户列表事件 -->
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button class="my-btn" type="success" plain>添加商品</el-button>
      </el-col>
    </el-row>
    <!-- 表格  使用自定义列模板 -->
    <el-table class="my-table" :data="goodsList" border style="width: 100%">
      <!-- type="index"  设置这个可以让每一行的按顺序排列 -->
      <el-table-column label="#" width="50" type="index"></el-table-column>
      <el-table-column label="商品名称" width="160"></el-table-column>
      <el-table-column label="商品价格(元)" width="300"></el-table-column>
      <el-table-column label="商品重量" width="300"></el-table-column>
      <el-table-column label="创建时间" width="300"></el-table-column>

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
  name: "users",
  data() {
    return {
      goodsList: [{}, {}]
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
