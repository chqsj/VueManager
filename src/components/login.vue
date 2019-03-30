<template>
  <div class="login">
    <div class="box">
      <el-form label-position="top" label-width="80px">
        <h2>用户登录</h2>
        <el-form-item label="用户名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="my-btn" type="primary" >登录</el-button>
          
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style lang='scss'>
// 580 435
    .login{
        height: 100%;
        background-color: #324152;
        display: flex;
        justify-content: center;
        align-items: center;
        .box{
            width: 580px;
            height: 435px;
            background-color: white;
            border-radius: 10px;
            padding: 40px;
            box-sizing: border-box;
            .my-btn{
              width: 100%;
            }
        }
    }

</style>
