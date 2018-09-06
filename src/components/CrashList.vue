<template>
  <div class="crash-wrapper">
    <div class="crash-fliter">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="crash-item" v-for="crash in crashList" :key="crash.name">
      <div slot="header" class="clearfix">
        <span>{{crash.name}}</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div class="text item">
        {{'列表内容 ' + crash.time}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'crash-list',
  data () {
    return {
      crashList: [
        {name: '测试1', time: '2018-01-01', type: 'bug'},
        {name: '测试2', time: '2018-01-02', type: 'bug'},
        {name: '测试3', time: '2018-01-04', type: 'bug'}
      ],
      formInline: {}
    }
  },
  methods: {
    onSubmit () {
      console.log('xxx')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
.text {
    font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.crash-item{
  padding: 15px 20px;
  background-color: #fff;
  border-bottom: 1px solid rgba(0,0,0,0.125)
}
</style>
