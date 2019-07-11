<template>
  <div class="page-content">
    <PageHeader>
    </PageHeader>


    <LocalInfo>
    </LocalInfo>

    <LineDiagram>
    </LineDiagram>

    <CircleDiagram>
    </CircleDiagram>

    <ListDiagram>
    </ListDiagram>

    <DemoInfo>
    </DemoInfo>
  </div>
</template>

<script>
import PageHeader from './PageHeader'
import LocalInfo from './LocalInfo'
import LineDiagram from './Components/LineDiagram'
import CircleDiagram from './Components/CircleDiagram'
import ListDiagram from './Components/ListDiagram'
import DemoInfo from './DemoInfo'

export default {
  name: "MainPage",
  data() {
    return {};
  },
  methods: {},
  components: {
    PageHeader,
    LocalInfo,
    LineDiagram,
    CircleDiagram,
    ListDiagram,
    DemoInfo
  }
};
</script>

<style>
</style>
