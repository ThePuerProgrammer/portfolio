<template>
  <div class="p-10" />
  <div class="visualizer text-5xl text-center font-semibold text-header p-10">
    A* Visualizer View
  </div>
  <Canvas />
  <Sidebar />
</template>

<script>
import Canvas from "../components/Canvas.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Visualizer",
  components: {
    Canvas,
    Sidebar,
  },
};
</script>
