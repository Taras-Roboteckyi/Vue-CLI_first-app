import Vuex from "vuex";
import Vue from "vue";

import authModule from "./modules/auth";

Vue.use(Vuex); //Реєструєм хранилище Vuex//

/* Створюєм store */
const store = new Vuex.Store({
  /* Створюєм модулі для стора для чистішого коду */
  modules: {
    auth: authModule,
  },
});

export default store;
