<template>
  <DefaultHeader />
  <router-view />
</template>

<script>
  import DefaultHeader from './components/Header.vue'

  export default {
    name: 'App',
    components: {
              DefaultHeader
          },
  }
  </script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

</style>
