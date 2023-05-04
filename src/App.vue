<template>
  <div :id="$style.app">
    <h1>{{ title }}</h1>
    <ButtonClick @click="increment">Click me</ButtonClick>
    <ButtonClick outlined>Not Click</ButtonClick>
    <DirectivesTest />
    <StarRating :rating="4.5" />
    <ApartmentsList :items="apartments" />
  </div>
</template>

<script>

import ButtonClick from "./components/Button.vue";
import DirectivesTest from "./components/DirectivesTest.vue";
import StarRating from "./components/StarRating.vue";
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";

export default {

  name: "App",
  components: { ButtonClick, DirectivesTest, StarRating, ApartmentsList },
  data() {
    return { apartments, amountOfClicks: 0 }
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
