<template>
  <div :id="$style.app">
    <h1>{{ title }}</h1>
    <ButtonClick @click="increment">Click me</ButtonClick>
    <ButtonClick outlined>Not Click</ButtonClick>
    <DirectivesTest />
    <StarRating :rating="4.5" />
  </div>
</template>

<script>

import ButtonClick from "./components/Button.vue";
import DirectivesTest from "./components/DirectivesTest.vue";
import StarRating from "./components/StarRating.vue";

export default {

  name: "App",
  components: { ButtonClick, DirectivesTest, StarRating },
  data() {
    return { amountOfClicks: 0 }
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`
    }
  },
  methods: {
    increment() {
      this.amountOfClicks += 1
    }
  }
};
</script>

<style module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
