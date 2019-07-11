<template>
  <!-- Sidebar Navigation-->
  <nav id="sidebar">
    <!-- Sidebar Header-->
      <div class="sidebar-header d-flex align-items-center">
        <div class="avatar"><img
            src="../assets/logo.png"
            alt="..."
            class="img-fluid rounded-circle"
          ></div>
        <div class="title">
          <h1 class="h5">WEATHER REPORTER</h1> <!-- 更改为姓名 -->
          <p>Web Designer</p>
        </div>
      </div>
      <span class="heading">Main Function</span>
      <ul class="list-unstyled">
        <!-- <li is="Home"></li> -->
        <Home>
        </Home>
        <!-- <li is="QuickAccess"></li> -->
        <QuickAccess @Linechart='Linechart'>
        </QuickAccess>
        
      </ul>
  </nav>
</template>

<script>
import bus from'../assets/eventBus.js'
export default {
  name: "SideBar",
  data(){
    return{
      judgedata1:"123"
    }
  },
  methods:{
    Linechart:function(judgedata1){
      this.judgedata1=judgedata1;
      bus.$emit("LineChart",judgedata1);
    }
  }
};
</script>

<style>

</style>