<template>
  <div id="app">
    <NaviBar>
    </NaviBar>
    <div class="d-flex align-items-stretch">

      <SideBar>
      </SideBar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "//fonts.googleapis.com/css?family=Muli:300,400,700";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
