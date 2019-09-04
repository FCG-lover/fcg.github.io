<template>
  <div>
    <header class="style">
      <p class="title">工作经历</p>
      <div>
        南京金鹊信息科技有限公司
        <div class="date">
          <i class="el-icon-date"></i>
          2018.7-2019.7
        </div>
      </div>
      <h4>工作内容：</h4>
      <ul>
        <li>根据UI切割好的设计图开发前端界面</li>
        <li>负责使用CSS、JS，vue，jQuery等技术实现前端布局以及交互效果,</li>
        <li>定期向项目经理汇报工作情况</li>
        <li>负责项目bug维护以及后期维护</li>
      </ul>
    </header>
    <section class="style">
      <p class="title">项目列表</p>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="项目名称" width="180"></el-table-column>
        <el-table-column prop="date" label="项目周期" width="180"></el-table-column>
        <el-table-column prop="describe" label="项目描述"></el-table-column>
      </el-table>
    </section>
  </div>
</template>
<script>
export default {
  name: 'work',
  data() {
    return {
      tableData: []
    };
  },
  created() {
      this.tableData = this.$store.state.work
  },
};
</script>
<style >
.date {
  float: right;
}
</style>