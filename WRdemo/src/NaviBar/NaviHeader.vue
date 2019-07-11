<template>
  <div class="container-fluid d-flex align-items-center justify-content-between">
    <div class="navbar-header">
      <!-- Navbar Header--><a
        href="index.html"
        class="navbar-brand"
      >
        <div class="brand-text brand-big visible text-uppercase"><strong class="text-primary">Weather</strong><strong>Researcher</strong></div>
        <div class="brand-text brand-sm"><strong class="text-primary">W</strong><strong>R</strong></div>
      </a>
      <!-- Sidebar Toggle Btn-->
      <button class="sidebar-toggle"><i class="fa fa-long-arrow-left"></i></button>
    </div>
    <!--TODO 搜索栏传递搜索信息-->
    <div class="right-menu list-inline no-margin-bottom">
      <div class="list-inline-item"><a
          href="#"
          class="search-open nav-link"
        ><i class="icon-magnifying-glass-browser"></i></a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NaviHeader",
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style>
</style>
