<template>
  <div class="p-10"></div>
  <div class="canvas text-5xl text-center font-semibold text-header p-10">
    Chess View
  </div>
  <Canvas></Canvas>
  <Sidebar></Sidebar>
</template>

<script>
import Canvas from "../components/Canvas.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Chess",
  components: {
    Sidebar,
    Canvas,
  },
};
</script>

<style scoped>
</style>
