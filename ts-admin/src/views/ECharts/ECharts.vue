<template>
  <div class="container">
    <div class="echart-header">
      <h1>数据可视化-ECharts</h1>
      <div class="showTime">{{ new Date() }}</div>
    </div>
    <div class="echart-content">
      <div class="left-content">
        <div class="bar panel">
          <h2>柱形图-就业行业</h2>
          <div class="left-bar"></div>
          <div class="panel-foot"></div>
        </div>
        <div class="line panel">
          <h2>
            折线图-人员变化 <a href="javacript:;">2020</a
            ><a href="javascript:;">2021</a>
          </h2>
          <div class="left-line"></div>
          <div class="panel-foot"></div>
        </div>
        <div class="pie panel">
          <h2>饼形图-年龄分布</h2>
          <div class="left-pie"></div>
          <div class="panel-foot"></div>
        </div>
      </div>

      <div class="center-content">
        <div class="show-date">
          <div class="show-num">
            <span>135811</span>
            <span>115534</span>
          </div>
          <div class="show-desc">
            <span>前端需求人数</span>
            <span>市场供应人数</span>
          </div>
        </div>
        <div class="show-map">
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
          <div class="chart-map"></div>
        </div>
      </div>

      <div class="right-content">
        <div class="bar panel">
          <h2>柱形图-就业行业</h2>
          <div class="right-bar"></div>
          <div class="panel-foot"></div>
        </div>
        <div class="line panel">
          <h2>折线图-播放量</h2>
          <div class="right-line"></div>
          <div class="panel-foot"></div>
        </div>
        <div class="pie panel">
          <h2>饼形图-地区分布</h2>
          <div class="right-pie"></div>
          <div class="panel-foot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import {
  drawMap,
  drawLeftBar,
  drawRighBar,
  drawLeftLine,
  drawRightLine,
  drawLeftPie,
  drawRightPie,
} from "./eCharts";
@Component
export default class ECharts extends Vue {
  //   get ShowTime(){
  //  let t:any
  //  setTimeout(()=>{
  //    let time=new Date()
  //      let y = time.getFullYear();
  //           let mt = time.getMonth() + 1;
  //           let day = time.getDate();
  //           let h = time.getHours(); //获取时
  //           let m = time.getMinutes(); //获取分
  //           let s = time.getSeconds(); //获取秒
  //           return `当前时间:${y}年${mt}月${day}日-${h}:${m}:${s}`
  //  },1000)

  //  return
  //   }
  mounted() {
    drawMap();
    drawLeftBar();
    drawRighBar();
    drawLeftLine();
    drawRightLine();
    drawLeftPie();
    drawRightPie();
  }
}
</script>

<style lang="scss" scope>
.panel {
  position: relative;
  height: 240px;
  background: url("../../assets/myEcharts/images/line(1).png")
    rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(25, 186, 139, 0.17);
  padding: 0 10px 15px;
  margin-bottom: 15px;
  padding: 10px;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
  }
  &::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
  }
  .panel-foot {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    &::before {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-left: 2px solid #02a6b5;
      border-bottom: 2px solid #02a6b5;
    }
    &::after {
      position: absolute;
      content: "";
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-right: 2px solid #02a6b5;
      border-bottom: 2px solid #02a6b5;
    }
  }
}
.container {
  // min-height: 800px;
  background: url("../../assets/myEcharts/images/bg.jpg") top center;
  .echart-header {
    height: 80px;
    background: url("../../assets/myEcharts/images/head_bg.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    margin-bottom: 0px;
    h1 {
      text-align: center;
      height: 100px;
      line-height: 80px;
      color: #fff;
      font-size: 24px;
    }
    .showTime {
      position: absolute;
      right: 20px;
      top: 0;
      font-size: 17px;
      color: rgba(255, 255, 255, 0.7);
      line-height: 80px;
    }
  }
  .echart-content {
    // min-height: 600px;
    min-width: 1024px;
    max-width: 1920px;
    display: flex;
    margin: 0 auto;
    padding: 8px 10px;
    .left-content {
      flex: 3;
      .bar {
        h2 {
          font-weight: 400;
          font-size: 17px;
          text-align: center;
          color: #fff;
        }
        .left-bar {
          width: 100%;
          height: 186px;
        }
      }
      .line {
        h2 {
          font-weight: 400;
          font-size: 17px;
          text-align: center;
          color: #fff;

          a {
            outline: none;
            color: #fff;
            margin: 0 10px;
          }
        }
        .left-line {
          width: 100%;
          height: 186px;
        }
      }
      .pie {
        h2 {
          font-weight: 400;
          font-size: 17px;
          text-align: center;
          color: #fff;
        }
        .left-pie {
          width: 100%;
          height: 186px;
        }
      }
    }
    .center-content {
      flex: 5;
      margin: 0 10px;
      overflow: hidden;
      background: url("../../assets/myEcharts/images/line(1).png")
        rgba(255, 255, 255, 0.05);
      .show-date {
        height: 118px;
        padding: 12px;
        background: rgba(101, 132, 226, 0.1);
        .show-num {
          position: relative;
          &::before {
            position: absolute;
            content: "";
            width: 30px;
            height: 10px;
            // background-color: pink;
            border-left: 2px solid #02a6b5;
            border-top: 2px solid #02a6b5;
          }
          &::after {
            position: absolute;
            content: "";
            right: 0;
            bottom: 0;
            width: 30px;
            height: 10px;
            border-right: 2px solid #02a6b5;
            border-bottom: 2px solid #02a6b5;
          }
          span {
            position: relative;
            display: inline-block;
            height: 61px;
            width: 50%;
            text-align: center;
            line-height: 61px;
            color: #ffeb7b;
            font-size: 50px;
            font-family: "electronicFont";
            &:nth-child(1) {
              &::after {
                position: absolute;
                content: "";
                width: 1px;
                height: 50%;
                right: 0;
                top: 25%;
                background: rgba(255, 255, 255, 0.2);
              }
            }
          }
        }
        .show-desc {
          padding-top: 8px;
          span {
            display: inline-block;
            height: 31px;
            width: 50%;
            text-align: center;
            line-height: 31px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 16px;
          }
        }
      }
      .show-map {
        height: 624px;
        position: relative;
        .map1 {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          height: 400px;
          background: url("../../assets/myEcharts/images/map.png");
          background-size: 100% 100%;
          opacity: 0.3;
        }
        .map2 {
          position: absolute;
          width: 501px;
          height: 501px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: url("../../assets/myEcharts/images/lbx.png");
          background-size: 100% 100%;
          opacity: 0.6;
          animation: rotate1 15s linear infinite;
        }
        .map3 {
          position: absolute;
          width: 436px;
          height: 436px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: url("../../assets/myEcharts/images/jt.png");
          background-size: 100% 100%;
          animation: rotate2 15s linear infinite;
        }
        .chart-map {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 624px;
        }
      }
    }
    .right-content {
      flex: 3;
      .bar {
        h2 {
          font-weight: 400;
          font-size: 17px;
          text-align: center;
          color: #fff;
        }
        .right-bar {
          width: 100%;
          height: 186px;
        }
      }
      .line {
        h2 {
          font-size: 17px;
          font-weight: 400;
          text-align: center;
          color: #fff;
        }
        .right-line {
          width: 100%;
          height: 186px;
        }
      }
      .pie {
        h2 {
          font-weight: 400;
          font-size: 17px;
          text-align: center;
          color: #fff;
        }
        .right-pie {
          width: 100%;
          height: 186px;
        }
      }
    }
  }
}

@font-face {
  font-family: electronicFont;
  src: url("../../assets/myEcharts/font/DS-DIGIT.TTF");
}
@keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes rotate2 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
</style>
