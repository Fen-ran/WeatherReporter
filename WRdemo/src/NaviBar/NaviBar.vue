<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg">
      <SearchBar></SearchBar>
      <NaviHeader></NaviHeader>
    </nav>
  </header>
</template>

<script>
import NaviHeader from "./NaviHeader";
import SearchBar from "./SearchBar";

export default {
  name: "NaviBar",
  components: {
    SearchBar,
    NaviHeader
  }
};
</script>

<style>
</style>
