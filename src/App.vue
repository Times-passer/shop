<template>
  <!-- <nav>
    <router-link to="/">layOut</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<style>
/* body {
  background: rgb(246, 242, 136) url(./assets/logo.png) no-repeat bottom center;
} */

body,
html {
  margin: 0;
}

#app {
  /* 如果某些元素占不满再用这些
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* 白色内容区域 */
.page_content {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 20px;
  background: #fff;
  margin-top: 30px;
}

/* 
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
