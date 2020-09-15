<template>
  <div>
    <el-form
      :rules="loginRules"
      ref="loginForm"
      :model="loginForm"
      label-width="60px"
      class="loginFormComent"
    >
      <el-form-item label="账号" prop="username">
        <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名/手机号"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" @click="login()"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Login extends Vue {
  loginForm = {
    username: "",
    password: ""
  };
  loginRules = {
    username: [
      { required: true, message: "请输入用户名", trigger: "blur" },
      { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
    ],
    password: [
      { required: true, message: "请输入密码", trigger: "blur" },
      { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
    ]
  };
  async login() {
    const { data } = await this.$http.post("auth/login", this.loginForm);
    console.log(data);
    if (!data.token) {
      this.$message.error(data.message);
      this.loginForm = {
        username: "",
        password: ""
      };
      return;
    }
    // const token = JSON.stringify(data.token);
    const token = data.token;
    localStorage.setItem("token", token);
    // const username = JSON.stringify(data.user.username);
    const username = data.user.username;
    localStorage.setItem("username", username);
    console.log(localStorage.getItem("token"));
    console.log(localStorage.getItem("username"));

    this.$message.success(`欢迎您!${data.user.username}`);
    this.loginForm = {
      username: "",
      password: ""
    };
    this.$router.push("/home");
  }
}
</script>

<style lang="scss" scope>
.loginFormComent {
  .el-button {
    display: block;
    width: 200px;
    margin: 0 auto;
  }
}
</style>
