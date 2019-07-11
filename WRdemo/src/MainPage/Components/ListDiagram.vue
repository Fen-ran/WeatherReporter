<template>
  <section class="no-padding-bottom">
    <div
      class="container-fluid"
      id="AnchTodo"
    >
      <div class="row">
        <div class="col-lg-12">
          <div class="checklist-block block">
            <div class="title"><strong>To Do List</strong></div>
            <div class="checklist">
              <div class="item d-flex align-items-center">
                <input
                  type="checkbox"
                  id="input-1"
                  name="input-1"
                  class="checkbox-template"
                >
                <!--TODO 传递一些记事文本，包括穿衣指南-->
                <label for="input-1">阳光很重，注意防晒</label>
              </div>
              <div class="item d-flex align-items-center">
                <input
                  type="checkbox"
                  id="input-2"
                  name="input-2"
                  checked
                  class="checkbox-template"
                >
                <label for="input-2">适合洗车</label>
              </div>
              <div class="item d-flex align-items-center">
                <input
                  type="checkbox"
                  id="input-3"
                  name="input-3"
                  class="checkbox-template"
                >
                <label for="input-3">建议保护视力</label>
              </div>
              <div class="item d-flex align-items-center">
                <input
                  type="checkbox"
                  id="input-4"
                  name="input-4"
                  class="checkbox-template"
                >
                <label for="input-4">记得带钥匙出门。</label>
              </div>
              <div class="item d-flex align-items-center">
                <input
                  type="checkbox"
                  id="input-5"
                  name="input-5"
                  class="checkbox-template"
                >
                <label for="input-5">今天要做Python大作业展示，记得带电脑，啊还要带上脑子。</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ListDiagram",
  data() {
    wearSuggestion = []
    return {wearSuggestion};
  },
  methods: {},
  components: {}
};
</script>

<style>
</style>
