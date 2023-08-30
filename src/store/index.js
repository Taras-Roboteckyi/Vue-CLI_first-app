import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex); //Реєструєм хранилище Vuex//

const initialState = {
  user: null,
  token: "",
};

/* Створюєм store */
const store = new Vuex.Store({
  state: { ...initialState },
  mutations: {
    setUserData(state, userData /* userData - це payload */) {
      console.log(userData);
      state.user = userData;
    },
    setToken(state, token /* token - це payload */) {
      state.token = token;
    },
  },
});

export default store;
