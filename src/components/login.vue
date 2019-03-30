<template>
  <div class="login">
    <div class="box">
      <!-- 动态为登录表单绑定 model 和reles属性 -->
      <el-form label-position="top" label-width="80px" :model="loginForm" :rules='rules'>
        <h2>用户登录</h2>
        <!-- 使用prop关联username -->
        <el-form-item label="用户名" prop='username'>
          <!-- 绑定表单的username数据 -->
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop='password'>
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="my-btn" type="primary">登录</el-button>
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
          { min: 4, max: 16, message: "用户名长度在 4 到 16 个字符之间", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 16, message: "密码长度在 6 到 16 个字符之间", trigger: "blur" }
        ]
      }
    };
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
      width: 100%;
    }
  }
}
</style>
