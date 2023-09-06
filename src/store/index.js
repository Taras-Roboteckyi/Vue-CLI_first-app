import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate";

import authModule from "./modules/auth";

Vue.use(Vuex); //Реєструєм хранилище Vuex//

/* Свтворєм persister state */
const dataState = createPersistedState({
  paths: [
    "auth.token",
  ] /* persister дивиться якщо є такий auth.token в локалсториджі, тоді потім робить все сам.....мутує і т.д. КРУТО   */,
});

/* Створюєм store */
const store = new Vuex.Store({
  /* Створюєм модулі для стора для чистішого коду */
  modules: {
    auth: authModule,
  },
  plugins: [dataState],
});

export default store;
