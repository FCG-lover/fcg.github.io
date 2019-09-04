<template>
  <div>
    <div class="style">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="项目名称" width="180"></el-table-column>
        <el-table-column prop="date" label="项目周期" width="180"></el-table-column>
        <el-table-column prop="describe" label="项目描述"></el-table-column>
      </el-table>
      <div id="myChart"></div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "show",
  data() {
    return {
      tableData: [],
      indicator: [],
      value: [],
      interval:''
    };
  },
  created() {
    this.tableData = [this.$store.state.work[0]];
    this.indicator = this.$store.state.indicator;
  },
  mounted() {
    this.show();
    this.interval = setInterval(this.show, 10000);
  },
  methods: {
    // math() {
    //   this.tableData = [
    //     this.$store.state.work[
    //       Math.floor(Math.random() * this.$store.state.work.length)
    //     ]
    //   ];
    // },
    show() {
      for (var i = 0; i < 10; i++) {
        var a = [
          this.$store.state.work[
            Math.floor(Math.random() * this.$store.state.work.length)
          ]
        ];
        if (this.tableData != a) {
          this.tableData = a;
        }
      }
      let myChart = echarts.init(document.getElementById("myChart"));
      var arr = [];
      var a = this.indicator.length;
      for (var i = 0; i < 5; i++) {
        var num = Math.floor(Math.random() * a);
        var data = this.indicator[num];
        if (arr.indexOf(data) == -1) {
          arr.push(data);
        }
      }
      console.log(arr);
      var value = "";
      arr.forEach(function(e) {
        value += e.value + ",";
      });
      value = value.substring(0, value.length - 1);
      this.value = value.split(",");
      console.log(this.value);
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
          indicator: arr
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
        beforeDestroy() {
            //清除定时器
            clearInterval(this.interval);
            console.log("beforeDestroy");
        }
};
</script>
<style>
</style>