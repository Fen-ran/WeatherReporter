<template>
  <div class="search-panel">
    <div class="search-inner d-flex align-items-center justify-content-center">
      <div class="close-btn">Close <i class="fa fa-close"></i></div>
      <form id="searchForm">
        <div class="form-group">
          <input
            v-model.trim="chosenCity"
            placeholder="What are you searching for..."
          >
          <button
            type="submit"
            class="submit"
            v-on:click="getWeatherData()"
          >Search</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script></script>
<script>
export default {
  name: "SearchBar",
  data() {
    return {
      apiKey: "a8d83d029e8eb8dbe22fdf75647b01f9",
      chosenCity: "",
      dtype: "json"
    };
  },
  methods: {
    getWeatherData() {
      console.log("测试开始");
      jQuery.support.cors = true;
      var self = this;
      $.ajax({
        url: "http://v.juhe.cn/weather/index",
        type: "get",
        data: {
          cityname: this.chosenCity,
          dtype: "json",
          key: this.apiKey
        },
        dataType: "jsonp",
        success: function(info) {
          // list = info;
          var arr = info['result']
          arr['city'] = self.chosenCity

          console.log(info);

          self.$store.commit('newWeatherData', arr)
        },
        error: function(error, Msgerror) {
          console.log(Msgerror);
        }
      });
    },
    mounted: function() {
      console.log('渲染开始')
      self.getWeatherData()
    }
  },
  components: {}
};
</script>

<style>
</style>
