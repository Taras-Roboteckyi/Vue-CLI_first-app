import Vue from "vue";
import App from "./App.vue";
import "./assets/scss/index.scss";
import router from "./router";

import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter); //Реєструєм роутінг в нашому додатку///

new Vue({
  render: (h) => h(App),
  router, //Підключаєм роутер до нашого додатку///
}).$mount("#app");
