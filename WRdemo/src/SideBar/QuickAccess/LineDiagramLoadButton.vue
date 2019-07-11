<template>
  <div id="LineDiagramLoadButton" @Linechart>
      <li><a href="#AnchFuture">Future Weather</a></li>
      <p>{{judgedata1}}</p>
  </div>
</template>

<script>
export default {
  name: 'LineDiagramLoadButton',
  data(){
    return{
      judgedata1:false
    }
  },
  methods:{
    Linechart:function(){
      this.judgedata1=!this.judgedata1
      this.$emit("Linechart",judgedata1);
      console.log(this.judgedata1)
    }
  }
}
</script>

<style>
</style>