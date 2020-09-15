<template>
  <div id="zc-home">
    <div class="zc-header">
      <div class="header-coment">
        <div class="logo">
          <a href="">
            <img
              src="//static.zcool.cn/git_z/z/common/images/svg/logo.svg"
              alt=""
            />
          </a>
        </div>

        <div class="nav-menu" v-if="!isShowSearch">
          <div href="">首页</div>
          <div
            href=""
            class="discover"
            @mousemove="showDiscover"
            @mouseout="currentIndex = 999"
          >
            发现
            <div class="discover-sub" v-show="currentIndex == 0">
              <ul>
                <li v-for="(item, index) in discover.submenu" :key="index">
                  {{ item }}
                  <span></span>
                </li>
              </ul>

              <div
                class="bottom-item"
                v-for="(item, index) in discover.subNav"
                :key="index"
              >
                {{ item }} &gt;
              </div>
            </div>
          </div>
          <div
            href=""
            v-for="(item, index) in menuData"
            :key="index"
            @mousemove="showSubmenu(index + 1)"
            @mouseout="currentIndex = 999"
          >
            {{ item.name }}
            <ul v-show="currentIndex === index + 1">
              <li v-for="(item1, index1) in item.submenu" :key="index1">
                {{ item1 }}
              </li>
            </ul>
          </div>
          <div class="sup-btn">
            <i class="el-icon-more"></i> <sup class="sup-red"></sup>
          </div>
        </div>

        <div class="search-input" v-else>
          <i class="el-icon-close" @click="isShowSearch = false"></i>
          <el-input class="input-box"></el-input>
          <i class="el-icon-search"></i>
        </div>

        <div class="opeartion-model">
          <a href="#" class="home-search" v-show="!isShowSearch"
            ><i class="el-icon-search" @click="isShowSearch = true"></i
          ></a>
          <a href="" class="home-upload"><i class="el-icon-upload"></i></a>
          <a href="" class="login" @click="$router.push('/login')">登陆</a>
          <i></i>
          <a href="" class="register">注册</a>
        </div>
      </div>
    </div>

    <div class="home-banner">
      <el-carousel trigger="click">
        <el-carousel-item v-for="(item, index) in bannerData" :key="index">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="guanggao">
      <div class="guanggao-item" v-for="(item, index) in ggData" :key="index">
        <img :src="item" alt="" />
      </div>
    </div>

    <div class="title-nav">
      <div class="title-content">
        <a href="">首页推荐</a>
        <a href="">最新发布</a>
      </div>
    </div>

    <div class="work-container">
      <div class="work-list-box">
        <div class="work-item" v-for="item in 15" :key="item">
          <img
            src="https://img.zcool.cn/community/015a535f50b2de11013f1a6412b788.jpg@260w_195h_1c_1e_1o_100sh.jpg"
            alt=""
          />
          <div class="card-info">
            <p class="card-title"><a href="">2020第五人格IVL项目总结</a></p>
            <p class="card-tags">网页-游戏/娱乐</p>
            <p class="card-desc">
              <span><i class="el-icon-view"></i>6654</span>
              <span><i class="el-icon-s-comment"></i> 99</span>
              <span><i class="el-icon-thumb"></i> 97</span>
            </p>
          </div>
          <div class="card-author">
            <a href="">
              <img
                src="https://img.zcool.cn/community/01784c5dd7541aa8012129e269a011.jpg@80w_80h_1c_1e_1o_100sh.jpg"
                alt=""
              />网易CFun设计中心</a
            >
            <span>17小时前</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import {
  navmenu,
  banner,
  guanggao
} from "../../assets/ZCoolData/NavMenu/navmenu";
@Component
export default class Home extends Vue {
  menuData: any[] = [];
  bannerData: string[] = [];
  ggData: string[] = [];
  currentIndex = 999;
  isShowSearch = false;
  discover = {
    name: "发现",
    submenu: [
      "平面",
      "工业/产品",
      "平面",
      "手工艺",
      "平面",
      "平面",
      "工业/产品",
      "平面",
      "手工艺",
      "平面"
    ],
    subNav: ["精选作品", "精选文章", "精选收藏"]
  };
  created() {
    this.menuData = navmenu;
    this.bannerData = banner;
    this.ggData = guanggao;
  }
  showDiscover() {
    this.currentIndex = 0;
  }

  showSubmenu(index) {
    if (index === this.currentIndex) {
      return;
    }
    this.currentIndex = index;
    console.log(index);
  }
}
</script>

<style lang="scss" scope>
#zc-home {
  .zc-header {
    height: 56px;
    background-color: hsl(53, 100%, 50%);
    .header-coment {
      width: 1380px;
      margin: 0 auto;
      height: 56px;
      line-height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        a {
          color: inherit;
          img {
            width: 120px;
            height: 20px;
            vertical-align: middle;
          }
        }
      }
      .nav-menu {
        > div {
          position: relative;
          ul {
            width: 132px;
            position: absolute;
            top: 56px;
            left: 0;
            list-style: none;
            padding: 0;
            margin: 0;
            z-index: 9;
            background-color: white;
            // padding-left: 20px;
            li {
              padding-left: 20px;
              color: #999;
              height: 36px;
              line-height: 36px;
              &:hover {
                background-color: orange;
              }
            }
          }
          display: inline-block;
          font-size: 14px;
          //   width: 28px;
          height: 56px;
          line-height: 56px;
          padding: 0 24px;
          font-weight: 600;
          color: inherit;
          cursor: pointer;
          &:hover {
            background-color: black;
            color: #ffe300;
          }
          &:last-child {
            padding: 0;
          }
        }
        .discover {
          position: relative;

          .discover-sub {
            position: absolute;
            top: 56;
            left: 0;
            width: 664px;
            height: 143px;
            background-color: white;
            border: 1px solid rgb(244, 244, 244);
            box-shadow: 2px 2px 5px rgb(244, 244, 244);
            // padding: 7px;
            box-sizing: border-box;
            z-index: 9;
            ul {
              height: 93px;
              width: 100%;
              // height: 93px;
              margin: 0 auto;
              padding: 10px 5px;
              // margin: 0;
              display: flex;
              align-items: center;
              // justify-content: space-between;
              flex-wrap: wrap;
              background-color: white;
              border-bottom: 1px solid #ddd;
              box-sizing: border-box;

              li {
                text-align: center;
                color: #666;
                display: inline-block;
                height: 28px;
                line-height: 28px;
                // width: 56px;
                padding: 0px 20px;
                margin: 8px 6px;
                cursor: pointer;
                // border-right: 1px solid #999;
                &:hover {
                  background-color: #ffe300;
                }
                span {
                  width: 1px;
                  height: 8px;
                  color: black;
                  background-color: black;
                }
              }
            }
            .bottom-item {
              margin-left: 20px;
              display: inline-block;
              padding-right: 0 15px;
              margin-right: 40px;
              color: #999;
              text-align: center;
              &:hover {
                cursor: pointer;
                color: #ffe300;
              }
            }
          }
        }

        .sup-btn {
          display: inline-block;
          width: 60px;
          height: 56px;
          line-height: 56px;
          cursor: pointer;
          text-align: center;
          &:hover {
            background-color: black;
            color: #ffe300;
          }
          i {
            display: inline-block;
            margin: auto 0;
            width: 16px;
            height: 56px;
            line-height: 56px;
            font-size: 24px;
          }
          .sup-red {
            display: inline-block;
            width: 8px;
            height: 8px;
            background-color: red;
            // border: red;
            border-radius: 50%;
            position: absolute;
            top: 18px;
            margin-left: 8px;
          }
        }
      }
      .opeartion-model {
        a {
          display: inline-block;
          width: 60px;
          height: 56px;
          line-height: 56px;
        }
        .home-search {
          color: black;
          text-align: center;
          &:hover {
            background-color: black;
            color: #ffe300;
          }
          i {
            font-size: 24px;
            // font-weight: 600;
          }
        }
        .home-upload {
          color: black;
          text-align: center;
          &:hover {
            background-color: black;
            color: #ffe300;
          }
          i {
            font-size: 24px;
            // font-weight: 600;
          }
        }
        .login {
          text-align: center;
          font-size: 14px;
        }
        .register {
          text-align: center;
          font-size: 14px;
        }
        > i {
          display: inline-block;
          width: 1px;
          height: 10px;
          background: #444;
        }
      }
    }
  }
  .home-banner {
    width: 1130px;
    height: 286px;
    margin: 20px auto;
    margin-bottom: 30px;
  }

  .guanggao {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 168px;
    width: 1130px;
    margin: 20px auto;
    padding-bottom: 30px;
    .guanggao-item {
      img {
        width: 210px;
        height: 168px;
        border-radius: 5px;
      }
    }
  }

  .title-nav {
    width: 1130px;
    height: 56px;
    margin: 0 auto;
    text-align: center;
    .title-content {
      // margin: 0 auto;
      height: 16px;

      a {
        margin-right: 60px;
        font-size: 16px;
        display: inline-block;
        width: 64px;
        height: 16px;
        line-height: 16px;
        padding: 19px 0;
        color: #999;

        &:hover {
          border-bottom: 2px solid #666;
          color: #666;
        }
      }
    }
  }

  .work-container {
    margin-top: 20px;
    padding-top: 20px;
    width: 100%;
    background-color: #eee;
    // text-align: center;
    .work-list-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 1150px;
      margin: 0 auto;
      .work-item {
        box-sizing: border-box;
        box-sizing: 1px 1px 5px rgb(246, 246, 246);
        background-color: white;
        margin-bottom: 20px;
        // flex: 1;
        img {
          border-radius: 5px;
          width: 210px;
          height: 158px;
        }
        .card-info {
          width: 178px;
          height: 75px;
          padding: 11px 16px 13px 16px;
          border-bottom: 1px solid #bbb;
          .card-title {
            font-size: 14px;
            // padding: 0;
            width: 178px;
            height: 20px;
            margin: 0;
          }
          .card-tags {
            font-size: 12px;
            color: #bbb;
            margin: 0;
          }
          .card-desc {
            font-size: 13px;
            color: #bbb;
            span {
              margin-right: 20px;
            }
            i {
              font-size: 14px;
            }
          }
        }
        .card-author {
          margin-top: 20px;
          font-size: 13px;
          padding: 0 16px 13px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 25px;
          line-height: 25px;
          a {
            display: inline-block;
            width: 120px;
            height: 25px;
            overflow: hidden;
            img {
              width: 24px;
              height: 24px;
              vertical-align: middle;
            }
          }
          span {
            display: inline-block;
            font-size: 12px;
            color: #bbb;
          }
        }
      }
    }
  }
}
a {
  text-decoration: none;
}
.search-input {
  box-sizing: border-box;
  width: 470px;
  height: 56px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  i {
    font-size: 24px;
    cursor: pointer;
  }
  .el-input__inner {
    background-color: #ffe300;
    // outline: none;
    border: none;
  }
}
</style>
