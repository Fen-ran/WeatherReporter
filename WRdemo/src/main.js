// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import NaviBar from './NaviBar/NaviBar'
import SearchBar from './NaviBar/SearchBar'
import NaviHeader from './NaviBar/NaviHeader'
import Home from './SideBar/Home'

import SideBar from './SideBar/SideBar'
import QuickAccess from './SideBar/QuickAccess/QuickAccess'
import CircleDiagramHideButton from './SideBar/QuickAccess/CircleDiagramHideButton'
import CircleDiagramLoadButton from './SideBar/QuickAccess/CircleDiagramLoadButton'
import LineDiagramHideButton from './SideBar/QuickAccess/LineDiagramHideButton'
import LineDiagramLoadButton from './SideBar/QuickAccess/LineDiagramLoadButton'
import ListDiagramHideButton from './SideBar/QuickAccess/ListDiagramHideButton'
import ListDiagramLoadButton from './SideBar/QuickAccess/ListDiagramLoadButton'
import MainPage from './MainPage/MainPage'
import PageHeader from './MainPage/PageHeader'
import LocalInfo from './MainPage/LocalInfo'
import CircleDiagram from './MainPage/Components/CircleDiagram'
import LineDiagram from './MainPage/Components/LineDiagram'
import ListDiagram from './MainPage/Components/ListDiagram'
import DemoInfo from './MainPage/DemoInfo'


import './API/API'
import Axios from 'axios'
import router from './router'
// import '../WebResource/WebModel/vendor/bootstrap/css/bootstrap.min.css'
// import '../WebResource/WebModel/vendor/font-awesome/css/font-awesome.min.css'
// import '../WebResource/WebModel/css/font.css'
// import '../WebResource/WebModel/css/style.default.css'
// import '../WebResource/WebModel/css/custom.css'

Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = '/api'
// Axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false

/* eslint-disable no-new */

// App
new Vue({
  el: '#app',
  router,
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
