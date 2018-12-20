<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display:flex;
  flex-direction: column;
  color: #2c3e50;
}
html,body,#app{
  width:100%;
  height:100%;
  overflow: hidden;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
