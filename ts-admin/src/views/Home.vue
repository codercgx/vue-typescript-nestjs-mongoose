<template>
  <div class="main">
    <el-container style="height:100vh">
      <el-header height="75px">
        <div class="header-container">
          <div class="header-left">
            <img src="@/assets/logo.png" alt="" />
            <span>后台管理系统</span>
          </div>
          <div class="header-right">
            <el-dropdown :hide-on-click="false">
              <span class="el-dropdown-link" v-if="!isHaveToken">
                登陆/注册<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <span class="el-dropdown-link" v-else>
                {{ getUserName
                }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            style="height:100%"
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            router
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>博客管理</span>
              </template>
              <el-menu-item index="/blog/create">新建博客</el-menu-item>
              <el-menu-item index="/blog/list">博客列表</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>分类管理</span>
              </template>
              <el-menu-item index="/category/create">新建分类</el-menu-item>
              <el-menu-item index="/category/list">分类列表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="/goods/index">商品库</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main><router-view :key="$route.path"></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Home extends Vue {
  get isHaveToken() {
    return localStorage.token;
  }

  get getUserName() {
    return localStorage.username;
  }
}
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
}
.el-header {
  background-color: #999;
  line-height: 75px;
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-left {
      img {
        width: 60px;
        height: 60px;
        vertical-align: middle;
      }
    }
    .header-right {
      height: 40px;
      line-height: 40px;
      text-align: center;
      span {
        cursor: pointer;
        font-size: 16px;
        text-decoration: none;
        &:hover {
          color: blue;
        }
      }
    }
  }
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
