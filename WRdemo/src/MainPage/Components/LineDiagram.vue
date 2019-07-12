<template>
  <section class="no-padding-bottom">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="line-cahrt block">
            <!--TODO 未来7天折线图-->
            <!--<canvas id="lineCahrt"></canvas>-->
            <canvas id="lineCahrt"></canvas>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LineDiagram",
  data() {
    return {
      WeatherData: newWeatherData
    };
  },
  computed: {
    newWeatherData() {
      return this.$store.state.WeatherData
    } 
  },
  methods: {
    drawLineChart() {
      
      
      console.log('画图')
    }

    
  },
  watch: {
    WeatherData(val) {
      this.drawLineChart()
    }
  },
  components: {}
};

$(document).ready(function () {
  // ------------------------------------------------------- //
    // Line Chart
    // ------------------------------------------------------ //
    var legendState = true;
    if ($(window).outerWidth() < 576) {
        legendState = false;
    }


    WeatherData['today']['temperature'].split(c)

    var LINECHART = $('#lineCahrt');
    var myLineChart = new Chart(LINECHART, {
        type: 'line',
        options: {
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        max: 50,
                        min: -10
                    },
                    display: true,
                    gridLines: {
                        display: false
                    }
                }]
            },
            legend: {
                display: legendState
            }
        },
        data: {
            //TODO JSP传递 选择未来七天的日期传递进7个变量
            labels: [ "1", "2", "3", "4", "5", "6", "7"],
            datasets: [
                {
                    label: "最高气温",
                    fill: true,
                    lineTension: 0.2,
                    backgroundColor: "transparent",
                    borderColor: '#864DD9',
                    pointBorderColor: '#864DD9',
                    pointHoverBackgroundColor: '#864DD9',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 2,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 5,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    //TODO JSP传递每天的最高气温
                    data: [30, 10, 30, 10, 30, 40, 33],
                    spanGaps: false
                },
                {
                    label: "最低气温",
                    fill: true,
                    lineTension: 0.2,
                    backgroundColor: "transparent",
                    borderColor: "#EF8C99",
                    pointBorderColor: '#EF8C99',
                    pointHoverBackgroundColor: "#EF8C99",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 2,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 5,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    //TODO JSP传递每天的最低气温
                    data: [25, 17, 28, 25, 33, 27, 30],
                    spanGaps: false
                }
            ]
        }
    });
})




</script>

<style>
</style>
