<template>
  <div class="rights-container">
    <!-- 面包屑 -->
    <el-breadcrumb class="my-bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 表格 -->
    <el-table class="my-table" :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="#" width="30"></el-table-column>
      <el-table-column prop="rightsname" label="权限名称" width="200"></el-table-column>
      <el-table-column prop="rightspath" label="路径" width="200"></el-table-column>
      <el-table-column prop="grad" label="层级" width="200"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "rights",
  data() {
    return {
      tableData: [
        {
          id: 1,
          rightsname: "商品管理",
          rightspath: "goods",
          grad: "一级"
        },
        {
          id: 2,
          rightsname: "订单管理",
          rightspath: "orders",
          grad: "一级"
        },
        {
          id: 3,
          rightsname: "权限管理",
          rightspath: "rights",
          grad: "一级"
        },
        {
          id: 4,
          rightsname: "商品列表",
          rightspath: "goods",
          grad: "二级"
        },
        {
          id: 5,
          rightsname: "添加商品",
          rightspath: "goods",
          grad: "三级"
        }
      ]
    };
  }
};
</script>

<style lang='scss'>
.rights-container {
  height: 100%;
  .my-bread {
    height: 40px;
    line-height: 40px;
    background-color: #d3dce6;
    padding-left: 10px;
  }
  .my-input {
    .my-btn {
      margin-left: 10px;
    }
  }
  .my-table {
  }
  .my-pagination {
  }
}
</style>
