import Vuex from "vuex";
import Vue from "vue";

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

export default store;
