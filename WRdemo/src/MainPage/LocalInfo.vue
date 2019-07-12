<template>
  <section class="no-padding-top no-padding-bottom">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="statistic-block block">
            <div class="progress-details d-flex align-items-end justify-content-between">
              <div class="title">
                <div class="icon"><i class="icon-user-1"></i></div><strong>target city</strong>
              </div>
              <!--TODO 传递参数『cityName』-->
              <div class="number dashtext-1">{{ city }}</div>
            </div>
            <div class="progress progress-template">
              <div
                role="progressbar"
                style="width: 80%"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                class="progress-bar progress-bar-template dashbg-1"
              ></div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="statistic-block block">
            <div class="progress-details d-flex align-items-end justify-content-between">
              <div class="title">
                <div class="icon"><i class="icon-contract"></i></div><strong>Weather</strong>
              </div>
              <!--TODO 传递参数『weather』-->
              <div class="number dashtext-2">{{ weather }}</div>
            </div>
            <div class="progress progress-template">
              <div
                role="progressbar"
                style="width: 70%"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                class="progress-bar progress-bar-template dashbg-2"
              ></div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="statistic-block block">
            <div class="progress-details d-flex align-items-end justify-content-between">
              <div class="title">
                <div class="icon"><i class="icon-paper-and-pencil"></i></div><strong>Max Temp</strong>
              </div>
              <!--TODO 传递参数『maxTemp』-->
              <div class="number dashtext-3">{{ maxtemp }}</div>
            </div>
            <div class="progress progress-template">
              <div
                role="progressbar"
                style="width: 85%"
                aria-valuenow="55"
                aria-valuemin="0"
                aria-valuemax="100"
                class="progress-bar progress-bar-template dashbg-3"
              ></div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="statistic-block block">
            <div class="progress-details d-flex align-items-end justify-content-between">
              <div class="title">
                <div class="icon"><i class="icon-writing-whiteboard"></i></div><strong>Min Temp</strong>
              </div>
              <!--TODO 传递参数『minTemp』-->
              <div class="number dashtext-4">{{ mintemp }}</div>
            </div>
            <div class="progress progress-template">
              <!--TODO 传递参数『minTemp/50 * 100』给 width-->
              <div
                role="progressbar"
                style="width: 35%"
                aria-valuenow="35"
                aria-valuemin="0"
                aria-valuemax="100"
                class="progress-bar progress-bar-template dashbg-4"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from '../../store/index'
export default {
    name: 'LocalInfo',
  data() {
    return {
      city: store.state.WeatherData.city,
      weather: store.state.WeatherData.today.weather,
      maxtemp: store.state.WeatherData.today.temperature.split('~')[1],
      mintemp: store.state.WeatherData.today.temperature.split('~')[0]
    }
  },
  methods: {

  },
  components: {

  },
  computed:{
    listenWeather() {
      return this.$store.state.WeatherData
    }
  },
  watch: {
    listenWeather(val) {
      this.city = store.state.WeatherData.city,
      this.weather = store.state.WeatherData.today.weather,
      this.maxtemp = store.state.WeatherData.today.temperature.split('~')[1],
      this.mintemp = store.state.WeatherData.today.temperature.split('~')[0]
    }
  }
}
</script>

<style>
</style>
