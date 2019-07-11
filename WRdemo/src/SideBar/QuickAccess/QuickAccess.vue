<template>
  <li><a
      href="#exampledropdownDropdown"
      aria-expanded="false"
      data-toggle="collapse"
    > <i class="icon-windows"></i>Quick-Access</a>
    <ul
      id="exampledropdownDropdown"
      class="collapse list-unstyled "
    >
      <li is="CircleDiagramLoadButton"></li>
      <li is="LineDiagramLoadButton"></li>
      <li is="ListDiagramLoadButton"></li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "QuickAccess"
};
</script>

<style>
</style>