<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss" >
@import url("./components/reset.css");
</style>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  #app {
    width: 100%;
    height: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}
</style>
