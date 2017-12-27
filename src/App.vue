<template>
  <div id="app">
    <v-header></v-header>
    <v-nav></v-nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #EDEEF0;
    width: 100%;
    height: 100%;
  }
  input {
    outline: none;
  }
</style>
