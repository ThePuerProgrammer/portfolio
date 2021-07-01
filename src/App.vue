<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/blog">Blog</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px 10px;
  text-align: right;
}

#nav a {
  padding: 0 10px 0 10px;
  font-size: 18px;
  font-weight: 500;
  color: #3f6a7581;
}

#nav a.router-link-exact-active {
  color: #74d8df;
}
</style>
