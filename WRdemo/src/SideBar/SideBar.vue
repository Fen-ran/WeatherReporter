<template>
  <!-- Sidebar Navigation-->
  <nav id="sidebar">
    <!-- Sidebar Header-->
      <div class="sidebar-header d-flex align-items-center">
        <div class="avatar"><img
            src="../assets/logo.png"
            alt="..."
            class="img-fluid rounded-circle"
          ></div>
        <div class="title">
          <h1 class="h5">WEATHER REPORTER</h1> <!-- 更改为姓名 -->
          <p>Web Designer</p>
        </div>
      </div>
      <span class="heading">Main Function</span>
      <ul class="list-unstyled">
        <!-- <li is="Home"></li> -->
        <Home>
        </Home>
        <!-- <li is="QuickAccess"></li> -->
        <QuickAccess>
        </QuickAccess>
      </ul>
  </nav>
</template>

<script>
import Home from './Home'
import QuickAccess from './QuickAccess/QuickAccess'

export default {
  name: "SideBar",
  data: {
    
  },
  components: {
    Home,
    QuickAccess
  }

};
</script>

<style>

</style>