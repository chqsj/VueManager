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
        <el-input placeholder="请输入内容" v-model="userData.query" class="input-with-select">
          <!-- 绑定搜索用户列表事件 -->
          <el-button slot="append" icon="el-icon-search" @click="queryUserList"></el-button>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button class="my-btn" type="success" @click="addUser" plain>添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格  使用自定义列模板 -->
    <el-table class="my-table" :data="userList" border style="width: 100%">
      <!-- type="index"  设置这个可以让每一行的按顺序排列 -->
      <el-table-column label="#" width="50" type="index"></el-table-column>
      <el-table-column prop="username" label="姓名" width="160"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="300"></el-table-column>
      <el-table-column prop="mobile" label="电话" width="300"></el-table-column>
      <el-table-column label="用户状态" width="80">
        <!--  template自定义模板   通过scope.row.mg_state 可以绑定当前的用户状态 -->
        <template slot-scope="scope">
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250">
        <!-- scope是一个名字  可以通过scope.index获取索引 索引从0开始   通过scope.row获取这一行的数据 -->
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
            plain
            @click="handleEdit(scope.$index, scope.row)"
          ></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" plain></el-button>
          <el-button type="warning" icon="el-icon-check" size="mini" plain></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      class="my-pagination"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="userData.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      total: 0, //总条数
      userData: {
        // 用户对象数据
        query: "",
        pagenum: 1,
        pagesize: 10
      },
      // 用户数组
      userList: []
    };
  },
  methods: {
    // 编辑按钮的方法
    handleEdit(index, row) {
      console.log(index);
      console.log(row);
    },
    // 添加用户的方法
    addUser() {},

    // 查询用户列表的方法
    async queryUserList() {
      // 发送请求 获取数据  把用户对象作为参数传递过去
      // 注意 这里要把token传递给服务器 服务器才会确认token正确以后返回数据
      let res = await this.$axios.get("users", {
        params: this.userData,
        // 将touken放在headers中传递
        headers: {
          Authorization: window.sessionStorage.getItem("token")
        }
      });
      console.log(res);
      if (res.data.meta.status === 200) {
        // 成功请求数据
        // 将获取的数据保存到用户数组  然后进行渲染
        this.userList = res.data.data.users;
        this.total = res.data.data.total;
      } else {
        this.$message.error("数据获取失败");
      }
    }
  },
  // 使用钩子函数在页面加载之前获取数据
  created() {
    //  调用查询用户列表的方法
    this.queryUserList();
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
