// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import './API/API'
import Axios from 'axios'
import router from './router'
import store from '../store/index'

Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = '/api'
// Axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false

/* eslint-disable no-new */

// App
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// // NaviBar
// new Vue({
//   el: 'NaviBar',
//   components: { NaviBar },
//   template: '<NaviBar/>'
// })

// // SearchBar
// new Vue({
//   el: 'SearchBar',
//   components: { SearchBar },
//   template: '<SearchBar/>'
// })

// // NaviHeader
// new Vue({
//   el: 'NaviHeader',
//   components: { NaviHeader },
//   template: '<NaviHeader/>'
// })

// // SideBar
// new Vue({
//   el: 'SideBar',
//   components: { SideBar },
//   template: '<SideBar/>'
// })

// // Home
// new Vue({
//   el: 'Home',
//   components: { Home },
//   template: '<Home/>'
// })

// // QuickAccess
// new Vue({
//   el: 'QuickAccess',
//   components: { QuickAccess },
//   template: '<QuickAccess/>'
// })

// // CircleDiagramHideButton
// new Vue({
//   el: 'CircleDiagramHideButton',
//   components: { CircleDiagramHideButton },
//   template: '<CircleDiagramHideButton/>'
// })

// // CircleDiagramLoadButton
// new Vue({
//   el: 'CircleDiagramLoadButton',
//   components: { CircleDiagramLoadButton },
//   template: '<CircleDiagramLoadButton/>'
// })

// // LineDiagramHideButton
// new Vue({
//   el: 'LineDiagramHideButton',
//   components: { LineDiagramHideButton },
//   template: '<LineDiagramHideButton/>'
// })

// // LineDiagramLoadButton
// new Vue({
//   el: 'LineDiagramLoadButton',
//   components: { LineDiagramLoadButton },
//   template: '<LineDiagramLoadButton/>'
// })

// // ListDiagramHideButton
// new Vue({
//   el: 'ListDiagramHideButton',
//   components: { ListDiagramHideButton },
//   template: '<ListDiagramHideButton/>'
// })

// // ListDiagramLoadButton
// new Vue({
//   el: 'ListDiagramLoadButton',
//   components: { ListDiagramLoadButton },
//   template: '<ListDiagramLoadButton/>'
// })

// // MainPage
// new Vue({
//   el: 'MainPage',
//   components: { MainPage },
//   template: '<MainPage/>'
// })

// // PageHeader
// new Vue({
//   el: 'PageHeader',
//   components: { PageHeader },
//   template: '<PageHeader/>'
// })

// // LocalInfo
// new Vue({
//   el: 'LocalInfo',
//   components: { LocalInfo },
//   template: '<LocalInfo/>'
// })

// // CircleDiagram
// new Vue({
//   el: 'CircleDiagram',
//   components: { CircleDiagram },
//   template: '<CircleDiagram/>'
// })

// // LineDiagram
// new Vue({
//   el: 'LineDiagram',
//   components: { LineDiagram },
//   template: '<LineDiagram/>'
// })

// // ListDiagram
// new Vue({
//   el: 'ListDiagram',
//   components: { ListDiagram },
//   template: '<ListDiagram/>'
// })

// // DemoInfo
// new Vue({
//   el: 'DemoInfo',
//   components: { DemoInfo },
//   template: '<DemoInfo/>'
// })
