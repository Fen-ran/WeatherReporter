<template>
  <li><a
      href="#exampledropdownDropdown"
      aria-expanded="false"
      data-toggle="collapse"
    > <i class="icon-windows"></i>Quick-Access</a>
    <ul
      id="exampledropdownDropdown"
      class="collapse list-unstyled "
    >
      <li is="CircleDiagramLoadButton" @Linecgart='Linechart'></li>
      <li is="LineDiagramLoadButton"></li>
      <li is="ListDiagramLoadButton"></li>
      <p>Father:{{judgedata1}}</p>
    </ul>
  </li>
</template>

<script>
export default {
  name: "QuickAccess",
  data(){
    return{
      judgedata1:"456"
    }
  },
  methods:{
    Linechart:function(judgedata1){
      this.judgedata1=judgedata1;
      console.log(judgedata1)
      this.$emit("LineChart",judgedata1);
    }
  }
};
</script>

<style>
</style>