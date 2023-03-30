<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <BtnClick>Click me</BtnClick>
    <TitleFirst></TitleFirst>
  </div>
</template>

<script>
import BtnClick from "./components/Button";
import TitleFirst from "./components/TitleFirst.vue";

export default {
  name: "App",
  components: {
    BtnClick,
    TitleFirst,
  },
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
