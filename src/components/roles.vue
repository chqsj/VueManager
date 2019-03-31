<template>
  <div class="roles-container">
    <!-- 面包屑 -->
    <el-breadcrumb class="my-bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 添加角色按钮 -->
    <el-button>添加角色</el-button>
    <!-- 表格 -->
    <el-table class="my-table" :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="#" width="30"></el-table-column>
      <el-table-column prop="rolename" label="角色名称" width="420"></el-table-column>
      <el-table-column prop="roledesc" label="角色描述" width="420"></el-table-column>

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
  </div>
</template>

<script>
export default {
  name: "roles",
  data() {
    return {
      tableData: [
        {
          id: 1,
          rolename: "主管",
          roledesc: "技术负责人",
        },
        {
          id: 2,
           rolename: "主管",
          roledesc: "技术负责人",
        },
        {
          id: 3,
           rolename: "主管",
          roledesc: "技术负责人",
        },
        {
          id: 4,
          rolename: "主管",
          roledesc: "技术负责人",
        },
         {
          id: 5,
          rolename: "主管",
          roledesc: "技术负责人",
        }
      ]
    };
  }
};
</script>

<style lang='scss'>
.roles-container {
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
