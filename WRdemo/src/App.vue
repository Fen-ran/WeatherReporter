<template>
  <div id="app">
    <NaviBar>
    </NaviBar>
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
export default {
  name: "App"
};
</script>

<style>
@import "//fonts.googleapis.com/css?family=Muli:300,400,700";
#app {
  color: aliceblue;
}
</style>
