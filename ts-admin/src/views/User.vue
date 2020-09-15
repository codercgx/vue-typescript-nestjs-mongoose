<template>
  <div class="login">
    <div class="mainContent">
      <el-card class="box-card">
        <span
          class="clickItem"
          :class="{ active: index === currentIndex }"
          v-for="(item, index) in itemList"
          :key="index"
          @click="currentIndex = index"
          >{{ item }}</span
        >
        <login v-if="currentIndex === 0"></login>
        <register v-else></register>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
@Component({
  components: {
    Login,
    Register
  }
})
export default class User extends Vue {
  itemList = ["登录", "注册"];
  currentIndex = 0;
}
</script>

<style lang="scss" scope>
.login {
  position: relative;
  background: url("../assets/bgp.jpg") no-repeat center;
  width: 100%;
  height: 728px;
  .mainContent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .box-card {
      width: 400px;
      .clickItem {
        box-sizing: border-box;
        color: orange;
        display: inline-block;
        width: 180px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #eee;
        margin-bottom: 20px;
        cursor: pointer;
      }
      .active {
        border-bottom: 2px solid orange;
        background-color: orange;
        color: #fff;
      }
    }
  }
}
</style>
