<template>
  <div>
    <section class="style">
      <p class="title">基本信息</p>
      <div class="section">
        <div class="box">
          <img class="photo" src="../assets/fcg.jpg" alt />
        </div>
        <div class="box1">
          <h1>符陈根</h1>
          <ul>
            <li>
              <div class="front">应聘职位：</div>
              <div class="last">web前端开发</div>
            </li>
            <li>
              <div class="front">学历：</div>
              <div class="last">大专(软件技术专业)</div>
            </li>
            <li>
              <div class="front">年龄：</div>
              <div class="last">22</div>
            </li>
            <li>
              <div class="front">工作经验：</div>
              <div class="last">一年</div>
            </li>
            <li>
              <div class="front">手机</div>
              <div class="last">18020326135</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div class="style">
      <p class="title">个人技能</p>
      <ul>
        <li>熟练使用HTML，CSS，JavaScript，熟悉w3c标准，语义化标签和浏览器兼容技术</li>
        <li>熟悉响应式布局，弹性布局，ES6盒模型进行前端布局</li>
        <li>熟练使用Vue全家桶开发项目，使用element-ui、antd等ui组件库</li>
        <li>熟练使用MySQL数据库</li>
        <li>工作中能够使用git，webpack来完成项目</li>
        <li>熟悉微信小程序开发流程</li>
      </ul>
    </div>
    <footer class="style">
      <p class="title">能力值</p>
      <div id="myChart"></div>
    </footer>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "with",
  data() {
    return {
      indicator: [],
      value: []
    };
  },
  created() {},
  mounted() {
    this.indicator = this.$store.state.indicator;
    var value = "";
    this.indicator.forEach(function(e) {
      value += e.value + ",";
    });
    value = value.substring(0, value.length - 1);
    this.value = value.split(",");
    console.log(this.value);
    this.show();
  },
  methods: {
    show() {
      let myChart = echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        tooltip: {},
        legend: {
          data: ["掌握程度"]
        },
        radar: {
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: this.indicator
        },
        series: [
          {
            name: "技能点",
            type: "radar",
            data: [
              {
                value: this.value,
                name: "技能掌握程度"
              }
            ]
          }
        ]
      });
    }
  },
  watch: {},
  created() {}
};
</script>

<style>
a {
  color: white;
  text-decoration: none;
}
.style {
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
  box-shadow: darkgrey 10px 10px 30px 5px;
  padding: 50px;
}
.section {
  display: flex;
}
.box {
  padding-right: 30px;
  width: 50%;
  text-align: right;
}
.box1 {
  padding-left: 30px;
  width: 50%;
}
.photo {
  height: 210px;
  width: 150px;
}
.box1 > ul {
  list-style: none;
  padding: 0;
}
ul > li {
  margin-top: 5px;
}
.front {
  display: inline-block;
  width: 120px;
  font-weight: bold;
}
.last {
  display: inline-block;
  color: #bfbfbf;
}
.title {
  font-size: 20px;
  font-weight: bold;
  color: #0b70bd;
}
#myChart {
  height: 500px;
  margin: 0 auto;
}
</style>

