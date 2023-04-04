<template>
  <div id="app">
    <!--  <img alt="Vue logo" src="./assets/logo.png" /> -->
    <ButtonClick>Click me</ButtonClick>
  </div>
</template>

<script>
import ButtonClick from "./components/Button.vue";
export default {
  name: "App",
  components: { ButtonClick },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
