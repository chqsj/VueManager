<template>
  <div class="user-container">
    <!-- 面包屑 使用面包屑组件-->
    <my-bread sectitle="订单管理" threetitle="订单列表"></my-bread>

    <!-- 表格  使用自定义列模板 -->
    <el-table class="my-table" :data="orderList" border style="width: 100%">
      <!-- type="index"  设置这个可以让每一行的按顺序排列 -->
      <el-table-column label="#" width="50" type="index"></el-table-column>
      <el-table-column label="订单编号" width="160"></el-table-column>
      <el-table-column label="订单价格(元)" width="100"></el-table-column>
      <el-table-column label="是否付款" width="100">
        <template slot-scope="scope">
          <el-button type="danger"  size="mini" plain>未付款</el-button>
        </template>
      </el-table-column>
      <el-table-column label="是否发货" width="300"></el-table-column>
      <el-table-column label="下单时间" width="300"></el-table-column>

      <el-table-column label="操作" width="250">
        <!-- scope是一个名字  可以通过scope.index获取索引 索引从0开始   通过scope.row获取这一行的数据 -->
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" plain></el-button>
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
  name: "orders",
  data() {
    return {
      orderList: [{}, {}]
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
