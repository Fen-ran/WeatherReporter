// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import NaviBar from './NaviBar/NaviBar'
import SearchBar from './NaviBar/SearchBar'
import NaviHeader from './NaviBar/Arrow'
import Home from './SideBar/Home'
import SideBar from './SideBar/SideBar'
import Quick-Access from './SideBar/Quick-Access/Quick-Access'
import Quick-Access from './SideBar/Quick-Access/CircleDiagramHideButton'
import Quick-Access from './SideBar/Quick-Access/CircleDiagramLoadButton'
import Quick-Access from './SideBar/Quick-Access/LineDiagramHideButton'
import Quick-Access from './SideBar/Quick-Access/LineDiagramLoadButton'
import Quick-Access from './SideBar/Quick-Access/ListDiagramHideButton'
import Quick-Access from './SideBar/Quick-Access/ ListDiagramLoadButton'




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

new Vue({
  el: 'SideBar',
  components: { SideBar },
  template: '<SideBar/>'
})

new Vue({
  el: 'Home',
  components: { Home },
  template: '<Home/>'
})

new Vue({
  el: 'Quick-Access',
  components: { Quick-Access },
  template: '<Quick-Access/>'
})

new Vue({
  el: 'CircleDiagramHideButton',
  components: { CircleDiagramHideButton },
  template: '<CircleDiagramHideButton/>'
})

new Vue({
  el: 'CircleDiagramLoadButton',
  components: { CircleDiagramLoadButton },
  template: '<CircleDiagramLoadButton/>'
})

new Vue({
  el: 'LineDiagramHideButton',
  components: { LineDiagramHideButton },
  template: '<LineDiagramHideButton/>'
})

new Vue({
  el: 'LineDiagramLoadButton',
  components: { LineDiagramLoadButton },
  template: '<LineDiagramLoadButton/>'
})

new Vue({
  el: 'ListDiagramHideButton',
  components: { ListDiagramHideButton },
  template: '<ListDiagramHideButton/>'
})

new Vue({
  el: 'ListDiagramLoadButton',
  components: { ListDiagramLoadButton },
  template: '<ListDiagramLoadButton/>'
})