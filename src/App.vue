<template>
  <div :id="$style.app">
    <h1>{{ title }}</h1>
    <ButtonClick @click="increment">Click me</ButtonClick>
    <ButtonClick outlined>Not Click</ButtonClick>
    <DirectivesTest />
    <StarRating :rating="4.5" />
    <h2>{{ text }}</h2>
    <CustomInput v-model="text" />
    <ApartmentsList :items="apartments">

      <template v-slot:title>New title</template>
      <template v-slot:apartment="{ apartment }">

        <ApartmentsItem :key="apartment.id" :descr="apartment.descr" :rating="apartment.rating" :price="apartment.price"
          :imgSrc="apartment.imgUrl" @click.native="handleItemClick" />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>

import ButtonClick from "./components/Button.vue";
import DirectivesTest from "./components/DirectivesTest.vue";
import StarRating from "./components/StarRating.vue";
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";
import ApartmentsItem from "./components/apartment/ApartmentsItem.vue"
import CustomInput from "./components/shared/CustomInput.vue";

export default {

  name: "App",
  components: { ButtonClick, DirectivesTest, StarRating, ApartmentsList, ApartmentsItem, CustomInput },
  data() {
    return { apartments, amountOfClicks: 0, text: '' }
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`
    }
  },
  methods: {
    increment() {
      this.amountOfClicks += 1
    },
    handleItemClick() {
      console.log("handle Click")
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

* {
  box-sizing: border-box;

  /* &::before,
  &::after {
    box-sizing: inherit;
  } */
}
</style>
