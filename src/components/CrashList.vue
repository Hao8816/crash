<template>
  <h1>{{crashList}}</h1>
</template>

<script>
export default {
  name: 'crash-list',
  data () {
    return {
      crashList: [{name: '测试1', time: '2018-01-01', type: 'bug'}]
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
