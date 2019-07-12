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
                    <canvas id="salesBarChart1"></canvas>
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
                    <canvas id="pieChartCustom1"></canvas>
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
import store from '../../../store/index'

export default {
    name: 'CircleDiagram',
  data() {
    return {
      changeTrend: 'Rising'
    }
  },
  mounted: {
    
  },
  methods: {
  },
  components: {

  },
  computed: {
    listenWeather() {
      return this.$store.state.WeatherData
    }
  },
  watch: {
    listenWeather(val){
      var maxtemp = []
      var restoreData = store.state.WeatherData.future.toString
  
      console.log(restoreData)

      drawDiagram();
    }
  }
};
$(document).ready(function() {
    // ------------------------------------------------------- //
    // Sales Bar Chart 1
    // ------------------------------------------------------ //

    var data = store.state.WeatherData
    
    console.log(data['future'])

    var BARCHART1 = $('#salesBarChart1');
    var barChartHome = new Chart(BARCHART1, {
        type: 'bar',
        options:
        {
            scales:
            {
                xAxes: [{
                    display: false,
                    barPercentage: 0.2
                }],
                yAxes: [{
                    display: false
                }],
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
            datasets: [
                {
                    label: "Data Set 1",
                    backgroundColor: [
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99'
                    ],
                    borderColor: [
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99'
                    ],
                    borderWidth: 0.2,
                    //TODO JSP填充数据 近7天的平均气温与第一天的差值，正负都要
                    data: [1, -5, 4, 6, -3, 2, 0, 3, -4, 2]
                }
            ]
        }
    });

     // ------------------------------------------------------- //
    // Pie Chart Custom 1
    // ------------------------------------------------------ //
    var PIECHARTEXMPLE    = $('#pieChartCustom1');
    var pieChartExample = new Chart(PIECHARTEXMPLE, {
        type: 'pie',
        options: {
            legend: {
                display: true,
                position: "left"
            }
        },
        data: {
            labels: [
                "Sunny",
                "Cloudy",
                "Rainy",
                "Snowy"
            ],
            datasets: [
                {
                    //TODO JSP填充晴雨表数据 全国统计天数即可，晴|%云%|%雨|%雪%
                    data: [300, 50, 100, 80],
                    borderWidth: 0,
                    backgroundColor: [
                        '#723ac3',
                        "#864DD9",
                        "#9762e6",
                        "#a678eb"
                    ],
                    hoverBackgroundColor: [
                        '#723ac3',
                        "#864DD9",
                        "#9762e6",
                        "#a678eb"
                    ]
                }]
            }
    });

    var pieChartExample = {
        responsive: true
    };

})


function drawDiagram(){
  // ------------------------------------------------------- //
    // Sales Bar Chart 1
    // ------------------------------------------------------ //
    var data = store.state.WeatherData
    
    console.log(data['future'])


    var BARCHART1 = $('#salesBarChart1');
    var barChartHome = new Chart(BARCHART1, {
        type: 'bar',
        options:
        {
            scales:
            {
                xAxes: [{
                    display: false,
                    barPercentage: 0.2
                }],
                yAxes: [{
                    display: false
                }],
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
            datasets: [
                {
                    label: "Data Set 1",
                    backgroundColor: [
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99'
                    ],
                    borderColor: [
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99'
                    ],
                    borderWidth: 0.2,
                    //TODO JSP填充数据 近7天的平均气温与第一天的差值，正负都要
                    data: [1, -5, 4, 6, -3, 2, 0, 3, -4, 2]
                }
            ]
        }
    });

     // ------------------------------------------------------- //
    // Pie Chart Custom 1
    // ------------------------------------------------------ //
    var PIECHARTEXMPLE    = $('#pieChartCustom1');
    var pieChartExample = new Chart(PIECHARTEXMPLE, {
        type: 'pie',
        options: {
            legend: {
                display: true,
                position: "left"
            }
        },
        data: {
            labels: [
                "Sunny",
                "Cloudy",
                "Rainy",
                "Snowy"
            ],
            datasets: [
                {
                    //TODO JSP填充晴雨表数据 全国统计天数即可，晴|%云%|%雨|%雪%
                    data: [300, 50, 100, 80],
                    borderWidth: 0,
                    backgroundColor: [
                        '#723ac3',
                        "#864DD9",
                        "#9762e6",
                        "#a678eb"
                    ],
                    hoverBackgroundColor: [
                        '#723ac3',
                        "#864DD9",
                        "#9762e6",
                        "#a678eb"
                    ]
                }]
            }
    });

    var pieChartExample = {
        responsive: true
    };
}

</script>

<style>

</style>
