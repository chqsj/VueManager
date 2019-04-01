<template>
  <div class="user-container">
    <!-- 面包屑 使用面包屑组件-->
    <my-bread sectitle="用户管理" threetitle="用户列表"></my-bread>

    <!-- 输入框 按钮 -->
    <el-row class="my-input">
      <el-col :span="6">
        <!-- @keyup.enter.native  为组件绑定原生事件  需要用到修饰符 .native -->
        <el-input
          placeholder="请输入内容"
          @keyup.enter.native="queryUserList"
          v-model="userData.query"
          class="input-with-select"
        >
          <!-- 绑定搜索用户列表事件 -->
          <el-button slot="append" icon="el-icon-search" @click="queryUserList"></el-button>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button class="my-btn" type="success" @click="addFormVisible = true" plain>添加用户</el-button>
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
          <!-- 开关按钮自带change事件 可以获取本身的状态值  为了方便直接把这一行的数据都传过去 -->
          <el-switch
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            @change="stateChange(scope.row)"
            inactive-color="#ff4949"
          ></el-switch>
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
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="delOne(scope.row)"
            size="mini"
            plain
          ></el-button>
          <el-button
            type="warning"
            @click="showRole(scope.row)"
            icon="el-icon-check"
            size="mini"
            plain
          ></el-button>
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
      @size-change="sizeChange"
      @current-change="currentChange"
    ></el-pagination>

    <!-- 新增用户表单  要进行表单验证 -->
    <el-dialog title="添加用户" :visible.sync="addFormVisible">
      <el-form :model="addForm" :rules="addRules" ref="addForm">
        <el-form-item label="用户名" prop="username" label-width="100px">
          <el-input v-model="addForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" label-width="100px">
          <el-input v-model="addForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="100px">
          <el-input v-model="addForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="100px">
          <el-input v-model="addForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitAdd('addForm')">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 编辑用户表单  不需要进行表单验证 -->
    <el-dialog title="编辑用户" :visible.sync="editFormVisible">
      <el-form :model="editForm" :rules="addRules" ref="editForm">
        <el-form-item label="用户名" prop="username" label-width="100px">
          <el-input v-model="editForm.username" disabled autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="100px">
          <el-input v-model="editForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="100px">
          <el-input v-model="editForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitEdit('editForm')">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 分配角色弹框 -->
    <el-dialog title="分配角色" :visible.sync="roleFormVisible">
      <el-form ref="roleForm">
        <el-form-item label="当前用户" label-width="100px">{{editUser.username}}</el-form-item>
        <el-form-item label="请选择角色">
          <!-- 下拉框的v-model  绑定的是编辑用户的角色名 默认显示哪一个下拉框 -->
          <!--   v-model="editUser.role_name"  设置默认被选中 -->
          <el-select v-model="editUser.role_name" placeholder="请选择">
            <el-option
              v-for="item in roleList"
              :key="item.id"
              :label="item.roleName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="roleFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitRole('roleForm')">确 定</el-button>
      </div>
    </el-dialog>
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
      userList: [],
      // 是否显示新增用户表单
      addFormVisible: false,
      // 添加用户表单数据
      addForm: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      },
      // 编辑用户表单数据
      editForm: {
        username: "小东东",
        email: "45456456465@qq.com",
        mobile: "32115645645"
      },
      // 是否显示编辑表单对话框
      editFormVisible: false,
      // 新增表单验证
      addRules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          {
            min: 3,
            max: 16,
            message: "用户名长度在 3 到 16 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "密码长度在 6 到 16 个字符",
            trigger: "blur"
          }
        ]
      },
      // 是否显示角色弹框
      roleFormVisible: false,
      // 用户角色列表
      roleList: [],
      // 当前正在编辑的用户
      editUser: {}
    };
  },
  methods: {
    // 编辑按钮的方法
    async handleEdit(index, row) {
      // 点击编辑按钮根据id发送请求获取数据 显示在编辑框 并且显示编辑表单对话框

      // console.log(index);
      // console.log(row);
      let res = await this.$axios.get(`users/${row.id}`);
      // console.log(res);
      // 将根据id查询到的用户信息渲染到编辑表单中
      this.editForm = res.data.data;
      if (res.data.meta.status === 200) {
        this.editFormVisible = true;
      }
    },
    // 查询用户列表的方法
    async queryUserList() {
      // 发送请求 获取数据  把用户对象作为参数传递过去
      // 注意 这里要把token传递给服务器 服务器才会确认token正确以后返回数据
      let res = await this.$axios.get("users", {
        params: this.userData
        // 将touken放在headers中传递
        // headers: {
        //   Authorization: window.sessionStorage.getItem("token")
        // }
      });
      // console.log(res);
      if (res.data.meta.status === 200) {
        // 成功请求数据
        // 将获取的数据保存到用户数组  然后进行渲染
        this.userList = res.data.data.users;
        this.total = res.data.data.total;
      } else {
        this.$message.error("数据获取失败");
      }
    },
    // 修改用户状态
    stateChange(row) {
      // 接口调用  请求路径：users/:uId/state/:type
      // console.log(row);
      this.$axios.put(`users/${row.id}/state/${row.mg_state}`);
    },
    // 新增用户
    submitAdd(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // 进入这里表示能够新增
          // 调用接口  然后新增成功关闭新增表单的对话框
          let res = await this.$axios.post("users", this.addForm);
          // console.log(res);
          if (res.data.meta.status === 201) {
            // 新增成功  调用查询方法
            this.queryUserList();
          }
          this.addFormVisible = false;
        } else {
          this.$message.error("亲,请正确填写信息哦");
          return false;
        }
      });
    },
    //编辑用户
    async submitEdit(formName) {
      //  编辑用户可以不用进行表单验证,直接发送请求 保存数据
      // 这里之所以可以使用editForm.id  因为在点击编辑按钮的时候 我们把用户数据整个传给了editForm 包含id
      let res = await this.$axios.put(`users/${this.editForm.id}`, {
        email: this.editForm.email,
        mobile: this.editForm.mobile
      });
      // 判断返回的响应码  如果是200  表示编辑成功 调用查询方法 并且关闭编辑对话框
      if (res.data.meta.status === 200) {
        this.queryUserList();
      }
      this.editFormVisible = false;
    },
    // 删除用户
    async delOne(row) {
      // 根据id删除用户  已经使用scope.row  里面包含了用户的id
      // 提示用户 是否真的要删除
      this.$confirm("亲 你真的要删除该用户吗, 是否继续?", "提示", {
        confirmButtonText: "狠心删除",
        cancelButtonText: "好心拒绝",
        type: "warning"
      })
        .then(async () => {
          // 确定删除  调用删除单个用户的接口
          let res = await this.$axios.delete(`users/${row.id}`);
          // console.log(res);
          // 如果删除成功 返回的状态码为200  就调用查询方法
          if (res.data.meta.status === 200) {
            this.queryUserList();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "你真好!!!!"
          });
        });
    },
    // 显示角色弹框
    async showRole(row) {
      // 显示弹框
      this.roleFormVisible = true;
      // 保存当前用户名
      // console.log(row);
      this.editUser = row;
      // 获取角色列表 保存到弹出框中
      let res = await this.$axios.get("roles");
      this.roleList = res.data.data;
      // console.log(res);
    },
    // 分配角色方法
    async submitRole(formName) {
      // 获取用户id
      // 获取角色id   角色id就是role_name 每次选择的时候会变动
      let res = await this.$axios.put(`users/${this.editUser.id}/role`, {
        rid: this.editUser.role_name
      });
      // 判断 如果分配成功 就关闭对话框并且调用查询方法
      if (res.data.meta.status === 200) {
        this.roleFormVisible = false;
        this.queryUserList();
      }
    },
    // 页码改变
    currentChange(current) {
      // console.log(current);
      this.userData.pagenum = current;
      this.queryUserList();
    },
    // 页容量改变
    sizeChange(size) {
      // console.log(size);
      this.userData.pagesize = size;
      this.queryUserList();
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
  .my-input {
    .my-btn {
      margin-left: 10px;
    }
  }
}
</style>
