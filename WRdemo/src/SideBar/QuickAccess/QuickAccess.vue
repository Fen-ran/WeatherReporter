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
import CircleDiagramLoadButton from './CircleDiagramLoadButton'
import LineDiagramLoadButton from './LineDiagramLoadButton'
import ListDiagramLoadButton from './ListDiagramLoadButton'

export default {
  name: "QuickAccess",
  components: {
    LineDiagramLoadButton,
    CircleDiagramLoadButton,
    ListDiagramLoadButton
  }
};
</script>

<style>
</style>