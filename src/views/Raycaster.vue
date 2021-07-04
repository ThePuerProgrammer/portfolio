<template>
  <div class="p-10" />
  <div class="raycaster text-5xl text-center font-semibold text-header p-10">
    Ray-Caster View
  </div>
  <Canvas />
  <Sidebar />
</template>

<script>
import Canvas from "../components/Canvas.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Raycaster",
  components: {
    Sidebar,
    Canvas,
  },
};
</script>

<style scoped>
</style>