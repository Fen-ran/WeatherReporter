<template>
  <div id="app">
    <NaviBar></NaviBar>
    <div class="d-flex align-items-stretch">
      <SideBar>
      </SideBar>
      <MainPage>
      </MainPage>
    </div>
    <router-view />
  </div>
</template>

<script>
import NaviBar from './NaviBar/NaviBar'
import SideBar from './SideBar/SideBar'
import MainPage from './MainPage/MainPage'

export default {
  name: "App",
  components: {
    NaviBar,
    SideBar,
    MainPage,
  }
};
</script>

<style>
@import "//fonts.googleapis.com/css?family=Muli:300,400,700";
</style>
