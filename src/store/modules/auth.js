import Vuex from "vuex";
import Vue from "vue";

import { loginUser, registerUser, logout } from "../../services/auth_service";

Vue.use(Vuex); //Реєструєм хранилище Vuex//

const initialState = {
  user: null,
  token: "",
};

/* Створюєм store */
export default {
  namespaced: true,

  state: { ...initialState },

  getters: {
    isLoggedIn(state) {
      return Boolean(state.token);
    },
  },
  /* Створюєм мутації (редюсери в React) */
  mutations: {
    setUserData(state, userData /* userData - це payload */) {
      console.log(userData);
      state.user = userData;
    },
    setToken(state, token /* token - це payload */) {
      state.token = token;
    },
    clearUserData(state) {
      Object.assign(state, {
        ...initialState,
      }); /* Прикольно чистим state через   Object.assign. Ми перезаписали state і не втратили його реактивність*/
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

    async registerUser({ commit }, payload) {
      const { data } = await registerUser(
        payload
      ); /* робим await так як registerUser у нас promise */
      const { user, token } = data;

      commit("setUserData", user);
      commit("setToken", token);
    },
    async logout({ commit }) {
      await logout(); /* робим await так як loginUser у нас promise */

      commit("clearUserData"); /* Визиваєм мутацію очистки state */
    },
  },
};
