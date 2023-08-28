import Vue from "vue";
import App from "./App.vue";
import "./assets/scss/index.scss";
import router from "./router";
import Notifications from "vue-notification";

import VueRouter from "vue-router";
import Vuex from "vuex";

Vue.config.productionTip = false;
Vue.use(VueRouter); //Реєструєм роутінг в нашому додатку///
Vue.use(Notifications); //Реєструєм лібу з нотифікашками//
Vue.use(Vuex); //Реєструєм хранилище Vuex//

/* Створюєм store */
const store = new Vuex.Store({
  state: {
    userName: "John",
  },
  mutations: {
    changName(state, newName /* newName - це payload */) {
      state.userName = newName;
    },
  },
});

new Vue({
  render: (h) => h(App),
  router, //Підключаєм роутер до нашого додатку///
  store, //Підключаєм store Vuex до нашого додатку///
}).$mount("#app");
