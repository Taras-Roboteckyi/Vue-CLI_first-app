<template>
  <div id="app">
    <Notifications />
    <div class="content">
      <AppHeader />
      <router-view></router-view><!-- //Додаєм роутер до нашого App// -->

    </div>
    <AppFooter />
  </div>
</template>

<script>

import AppHeader from "./components/header"
import AppFooter from "./components/Footer.vue"
import Notifications from "./components/notifications";
/* import { mapGetters } from "vuex"; */

export default {

  name: "App",
  components: { AppHeader, AppFooter, Notifications },
  /*  computed: {
     ...mapGetters('auth', ['isLoggedIn']) ////Так застосовуються гетери з state
   },
   mounted() {
     console.log(this.isLoggedIn)///Тепер можна достукатися до гетера isLoggedIn
   } */

}


</script>

<style  lang="scss" scoped>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh; //Прибиває футер до низу//
}

.content {
  flex-grow: 1;

}
</style>
