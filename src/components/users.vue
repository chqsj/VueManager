<template>
  <div class="user-container">
    <!-- 面包屑 -->
    <el-breadcrumb class="my-bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 输入框 按钮 -->
    <el-row class="my-input">
      <el-col :span="6">
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button class="my-btn" type="success" plain>添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table class="my-table" :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="#" width="30"></el-table-column>
      <el-table-column prop="name" label="姓名" width="160"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="300"></el-table-column>
      <el-table-column prop="phone" label="电话" width="300"></el-table-column>
      <el-table-column label="用户状态" width="80">
        <el-switch v-model="tableData.value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-table-column>
      <el-table-column label="操作" width="250">
        <el-button type="primary" plain>
          <i class="el-icon-edit"></i>
        </el-button>
        <el-button type="danger" plain>
          <i class="el-icon-delete"></i>
        </el-button>
        <el-button type="warning" plain>
          <i class="el-icon-check"></i>
        </el-button>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      class="my-pagination"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: "admin",
          email: "adsfad@qq.com",
          phone: "123456456",
          value1: true
        },
        {
          id: 2,
          name: "admin",
          email: "adsfad@qq.com",
          phone: "123456456",
          value1: false
        },
        {
          id: 3,
          name: "admin",
          email: "adsfad@qq.com",
          phone: "123456456",
          value1: false
        },
        {
          id: 4,
          name: "admin",
          email: "adsfad@qq.com",
          phone: "123456456",
          value1: false
        }
      ]
    };
  }
};
</script>

<style lang='scss'>
.user-container {
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
