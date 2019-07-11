<template>
  <section class="no-padding-bottom">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="line-cahrt block">
            <!--TODO 未来7天折线图-->
            <!--<canvas id="lineCahrt"></canvas>-->
            <canvas id="lineCahrt1"></canvas>
            <p>{{judgedata1}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bus from '../../assets/eventBus.js'
export default {
  name: "LineDiagram",
  data() {
    return {
      judgedata1:"123"
    };
  },
  methods: {

  },
  components: {},
  mounted(){
    bus.$on("Linechart",function(judgedata1){
      this.judgedata1=judgedata1
    })
  }
};
</script>

<style>
</style>
