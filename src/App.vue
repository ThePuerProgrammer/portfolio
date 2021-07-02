<template>
  <div class="flex p-5">
    <img
      src="/src/assets/logo.png"
      class="flex-2 text-2xl text-blue-50 w-10 h-10"
    />
    <div class="flex-1"></div>
    <div id="nav" class="flex-2 space-x-4 text-blue-50">
      <!-- <div class="inline-block text-white text-lg">|</div> -->
      <router-link to="/" class="inline-block">Home</router-link>
      <div class="inline-block text-white text-lg">|</div>
      <router-link to="/blog" class="inline-block">Blog</router-link>
      <div class="inline-block text-white text-lg">|</div>
      <router-link to="/projects" class="inline-block">Projects</router-link>
      <div class="inline-block text-white text-lg">|</div>
      <router-link to="/contact" class="inline-block">Contact</router-link>
      <!-- <div class="inline-block text-white text-lg">|</div> -->
    </div>
  </div>
  <router-view />
  <!-- <footer>Copyright tpp 2021</footer> -->
</template>

<style>
#nav a {
  padding: 0 5px 0 5px;
  font-size: 18px;
  font-weight: 500;
}

#nav a.router-link-exact-active {
  color: #7488df;
  text-decoration: underline;
}
</style>
