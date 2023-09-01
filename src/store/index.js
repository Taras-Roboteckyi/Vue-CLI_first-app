import Vuex from "vuex";
import Vue from "vue";

import { loginUser, registerUser } from "@/services/auth_service";

Vue.use(Vuex); //Реєструєм хранилище Vuex//

const initialState = {
  user: null,
  token: "",
};

/* Створюєм store */
const store = new Vuex.Store({
  state: { ...initialState },
  /* Створюєм мутації (редюсери в React) */
  mutations: {
    setUserData(state, userData /* userData - це payload */) {
      console.log(userData);
      state.user = userData;
    },
    setToken(state, token /* token - це payload */) {
      state.token = token;
    },
  },
  actions: {
    /* action використовуються при асинхронних запитах, а мутації не можуть бути асинхронні */
    /* action допомагають робити асинхронні запити в нашому store і в цих запитах визивати мутації, а мутації в свою чергу будуть змінювати state */
    /* Любий action першим параметром приймає context, де зберігаються силки і муташини нашого store, а другий параметр це payload*/
    async login({ commit }, payload) {
      const { data } = await loginUser(
        payload
      ); /* робим await так як loginUser у нас promise */
      const { user, token } = data;

      commit("setUserData", user);
      commit("setToken", token);
    },

    async registration({ commit }, payload) {
      const { data } = await registerUser(
        payload
      ); /* робим await так як registerUser у нас promise */
      const { user, token } = data;

      commit("setUserData", user);
      commit("setToken", token);
    },
  },
});

export default store;
