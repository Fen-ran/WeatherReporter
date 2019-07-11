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
              <div class="number dashtext-1">{{ Todayweather[0] }}</div>
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
              <div class="number dashtext-2">{{ Todayweather[1] }}</div>
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
              <div class="number dashtext-3">{{ Todayweather[3] }}°C</div>
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
              <div class="number dashtext-4">{{ Todayweather[4] }}°C</div>
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
export default {
    name: 'LocalInfo',
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
