<template>
  <div class="login">
    <div class="box">
      <!-- 动态为登录表单绑定 model 和reles属性 使用ref绑定loginForm-->
      <el-form
        label-position="top"
        label-width="80px"
        ref="loginForm"
        :model="loginForm"
        :rules="rules"
      >
        <h2>用户登录</h2>
        <!-- 使用prop关联username -->
        <el-form-item label="用户名" prop="username">
          <!-- 绑定表单的username数据 -->
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <!-- 为按钮注册提交和重置事件 -->
          <el-button class="my-btn" type="primary" @click="submit('loginForm')">登录</el-button>
          <el-button class="my-btn" type="success" @click="reset('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      // 表单数据
      loginForm: {
        username: "",
        password: ""
      },
      // 表单验证规则
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          {
            min: 4,
            max: 16,
            message: "用户名长度在 4 到 16 个字符之间",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "密码长度在 6 到 16 个字符之间",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // 表单提交功能
    submit(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let res = await this.$axios.post("login", this.loginForm);
          console.log(res);
          // 进行判断
          if (res.data.meta.status === 200) {
            // 登录成功  跳转到首页
            this.$message.success("登录成功");
            // 登录成功将token存到sessionStorage中
            window.sessionStorage.setItem('token',res.data.data.token)
            // 使用编程式导航跳到首页
            this.$router.push("/");
          } else if (res.data.meta.status === 400) {
            // 密码错误 登录失败  进行提示
            this.$message.error("密码错误");
          }
        } else {
          // 登录失败
          this.$message.error("登录失败");
          return false;
        }
      });
    },
    // 表单重置功能
    reset(formName) {
      this.$message.success("重置成功");
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang='scss'>
// 580 435
.login {
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 580px;
    height: 435px;
    background-color: white;
    border-radius: 10px;
    padding: 40px;
    box-sizing: border-box;
    .my-btn {
      width: 100px;
    }
  }
}
</style>
