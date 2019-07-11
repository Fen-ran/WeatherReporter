// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import NaviBar from './NaviBar/NaviBar'
import SearchBar from './NaviBar/SearchBar'
import NaviHeader from './NaviBar/Arrow'



import API from './API'
import router from './router'
import '../WebResource/WebModel/vendor/bootstrap/css/bootstrap.min.css'
import '../WebResource/WebModel/vendor/font-awesome/css/font-awesome.min.css'
import '../WebResource/WebModel/css/font.css'
import '../WebResource/WebModel/css/style.default.css'
import '../WebResource/WebModel/css/custom.css'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: 'NaviBar',
  components: { NaviBar },
  template: '<NaviBar/>'
})

new Vue({
  el: 'SearchBar',
  components: { SearchBar },
  template: '<SearchBar/>'
})

new Vue({
  el: 'NaviHeader',
  components: { NaviHeader },
  template: '<NaviHeader/>'
})