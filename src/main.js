import Vue from "vue";
import Notifications from "vue-notification";
import VueRouter from "vue-router";

import App from "./App.vue";
import "./assets/scss/index.scss";
import router from "./router";
import store from "../src/store";

Vue.config.productionTip = false;
Vue.use(VueRouter); //Реєструєм роутінг в нашому додатку///
Vue.use(Notifications); //Реєструєм лібу з нотифікашками//

new Vue({
  render: (h) => h(App),
  router, //Підключаєм роутер до нашого додатку///
  store, //Підключаєм store Vuex до нашого додатку///
}).$mount("#app");
