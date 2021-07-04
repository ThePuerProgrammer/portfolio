<template>
  <div class="p-10" />
  <div class="home">
    <HomeBody />
    <Card />
  </div>
</template>

<script>
import HomeBody from "/src/components/HomeBody.vue";
import Card from "/src/components/Card.vue";

export default {
  name: "Home",
  components: {
    HomeBody,
    Card,
  },
};
</script>

<style scoped>
</style>