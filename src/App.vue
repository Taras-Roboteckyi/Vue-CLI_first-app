<template>
  <div id="app">

    <Container>
      <ApartmentFilterForm class="apartments-filter" @submit="filter" />
    </Container>
    <p v-if="!filteredApartments.length">Nothing found</p>
    <!-- //Дивиться якщо довжина не менше 0 тоді гасить компонент// -->

    <ApartmentsList v-else :items="filteredApartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem :key="apartment.id" :descr="apartment.descr" :rating="apartment.rating" :price="apartment.price"
          :imgSrc="apartment.imgUrl" @click.native="handleItemClick" />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>




import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";
import ApartmentsItem from "./components/apartment/ApartmentsItem.vue"
import ApartmentFilterForm from "./components/apartment/ApartmentFilterForm.vue";
import Container from "./components/shared/Container.vue";


export default {

  name: "App",
  components: { ApartmentsList, ApartmentsItem, ApartmentFilterForm, Container },
  data() {
    return {
      apartments, text: '', filters: {
        city: '', price: 0
      }
    }
  },
  computed: {
    filteredApartments() {
      return this.filterByPrice(this.filterByCityName(this.apartments))
    }
  },
  methods: {


    filter({ city, price }) {
      this.filters.city = city
      this.filters.price = price
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments  //Перевірка чи є пустий рядок, якщо є то повертаєм apartments

      return apartments.filter(apartment => {
        return apartment.location.city === this.filters.city
      })
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments  //Перевірка чи є пустий рядок, якщо є то повертаєм apartments

      return apartments.filter(apartment => {
        return apartment.price >= this.filters.price
      })
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



.apartments-filter {
  margin-bottom: 40px;
}
</style>
