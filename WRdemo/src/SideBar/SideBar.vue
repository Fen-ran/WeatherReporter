<template>
  <div id="SideBar">
      <div class="sidebar-header d-flex align-items-center">
          <div class="avatar"><img src="./static/img/image-1.png" alt="..." class="img-fluid rounded-circle"></div>
          <div class="title">
            <h1 class="h5">封帆 郑登元</h1>  <!-- 更改为姓名 -->
            <p>Web Designer</p>
          </div>
      </div>
      <span class="heading">Main Function</span>
      <ul class="list-unstyled">
          <Home>
          </Home>
          <Quick-Access>
          </Quick-Access>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style lang='stylus' scoped>
</style>