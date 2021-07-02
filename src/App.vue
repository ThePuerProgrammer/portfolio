<template>
  <div class="p-2"></div>
  <div id="head" class="flex p-1 bg-header bg-opacity-20">
    <img id="logo" src="/src/assets/logo.png" class="flex-2 h-20" />
    <div id="brand" class="flex-2 text-secondary">JesseRankins</div>
    <div class="flex-1"></div>
    <div id="nav" class="flex-2 space-x-4 text-secondary">
      <router-link to="/" class="inline-block">Home</router-link>
      <div class="inline-block text-white text-lg">|</div>
      <router-link to="/blog" class="inline-block">Blog</router-link>
      <div class="inline-block text-white text-lg">|</div>
      <div id="drop-menu" class="inline">
        <div class="dropdown inline-block relative">
          <div id="menu-projects" style="font-size: 18px">
            <span class="">Projects</span>
          </div>
          <ul class="dropdown-menu absolute hidden py-2 px-0">
            <div id="dropdown-block" class="bg-header rounded">
              <li class="my-1">
                <router-link to="/chess" class="block">Chess</router-link>
              </li>
              <li class="my-1">
                <router-link to="/raycaster" class="block"
                  >Ray-Caster</router-link
                >
              </li>
              <li class="my-1">
                <router-link to="/visualizer" class="block"
                  >A* Visualizer</router-link
                >
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div class="inline-block text-white text-lg">|</div>
      <router-link to="/contact" class="inline-block">Contact</router-link>
    </div>
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");

#head {
  box-shadow: 0 3px 8px 0 #111111;
}

#nav {
  text-shadow: 2px 2px 5px #000000;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 2px;
  margin: auto;
  padding-right: 20px;
}

#logo {
  margin-left: 20px;
}

#brand {
  text-shadow: 2px 2px 5px #332940;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 4px;
  padding-left: 20px;
  margin: auto;
  font-size: 30px;
}

#nav a {
  padding: 0 5px;
  font-size: 18px;
  font-weight: 500;
}

#dropdown-block {
  /* background-color: #111111; */
  width: 170px;
  text-align: left;
}

#dropdown-block a:hover {
  background-color: #332940;
  text-align: left;
}

#dropdown-block a:active {
  background-color: #03dac6;
  text-align: left;
}

#menu-projects:hover {
  color: #03dac6;
}

#nav a.router-link-exact-active {
  color: #03dac6;
  text-decoration: underline;
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
