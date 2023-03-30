import Vue from "vue";

const Button = Vue.component("BtnClick", {
  render(createElement) {
    return createElement("button", this.$slots.default);
  },
});

export default Button;
