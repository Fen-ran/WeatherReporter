<template>
<section class="margin-bottom-sm">
      <div
        class="container-fluid"
        id="AnchFuture"
      >
        <div class="row d-flex align-items-stretch">
          <div class="col-lg-6">
            <div class="stats-with-chart-1 block">
              <div class="title"> <strong class="d-block">气温变化趋势</strong><span class="d-block">未来7天的平均变化</span></div>
              <div class="row d-flex align-items-end justify-content-between">
                <div class="col-5">
                  <!--TODO 传递参数『变化趋势』（正数多->上升）JSP传递：每天的平均气温与第一天的差值-->
                  <div class="text"><strong class="d-block dashtext-3">{{ changeTrend }}</strong><span class="d-block">June 2019</span><small class="d-block">18th</small></div>
                </div>
                <div class="col-7">
                  <div class="bar-chart chart">
                    <canvas id="salesBarChart1_1"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="stats-with-chart-1 block">
              <div class="title"> <strong class="d-block">全国晴雨表</strong><span class="d-block">以市为单位</span></div>
              <div class="row d-flex align-items-end justify-content-between">
                <div class="col-4">
                  <div class="text"><strong class="d-block dashtext-1">Total:457</strong><span class="d-block">June 2019</span><small class="d-block">18th</small></div>
                </div>
                <div class="col-8">
                  <div class="bar-chart chart">
                    <!--TODO JSP参数 晴雨表相关-->
                    <canvas id="pieChartCustom1_1"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: 'CircleDiagram',
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style>

</style>
