<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <ButtonClick @click="increment">Click me</ButtonClick>
    <ButtonClick outlined>Not Click</ButtonClick>
    <DirectivesTest />
    <StarRating :rating="4.5" />

    <Container>
      <ApartmentFilterForm class="apartments-filter" />
    </Container>

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

import ButtonClick from "./components/shared/Button.vue";
import DirectivesTest from "./components/DirectivesTest.vue";
import StarRating from "./components/StarRating.vue";
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";
import ApartmentsItem from "./components/apartment/ApartmentsItem.vue"
import ApartmentFilterForm from "./components/apartment/ApartmentFilterForm.vue";
import Container from "./components/shared/Container.vue";


export default {

  name: "App",
  components: { ButtonClick, DirectivesTest, StarRating, ApartmentsList, ApartmentsItem, ApartmentFilterForm, Container },
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

<style  lang="scss" scoped>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
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

.apartments-filter {
  margin-bottom: 40px;
}
</style>
