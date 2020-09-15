<template>
  <div>
    <el-form
      :rules="registerRules"
      ref="registerRef"
      :model="registerForm"
      label-width="80px"
      class="registerForm"
    >
      <el-form-item label="账号" prop="username">
        <el-input
          v-model="registerForm.username"
          placeholder="请输入用户名/手机号"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="registerForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="cpassword">
        <el-input
          type="password"
          v-model="registerForm.cpassword"
          placeholder="请再次确认密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" @click="register"
          >注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Register extends Vue {
  registerForm = {
    username: "",
    password: "",
    cpassword: ""
  };
  registerRules = {
    username: [
      { required: true, message: "请输入用户名", trigger: "blur" },
      { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
    ],
    password: [
      { required: true, message: "请输入密码", trigger: "blur" },
      { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
    ],
    cpassword: [
      { required: true, message: "请输入密码", trigger: "blur" },
      { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
    ]
  };
  async register() {
    const { data } = await this.$http.post("auth/register", this.registerForm);
    console.log(data);
    if (data.status) {
      this.$message.error(data.message);
      return;
    }
    this.$message.success(data.meaasge);
    this.registerForm = {
      username: "",
      password: "",
      cpassword: ""
    };
    // this.currentIndex = 0;
  }
}
</script>

<style lang="scss" scope>
.registerForm {
  .el-button {
    display: block;
    width: 200px;
    margin: 0 auto;
  }
}
</style>
