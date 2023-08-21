<template>
  <button v-on="$listeners" v-bind:type="type" :class="{
    btn: true, 'btn--outlined': outlined //Застосували пропс для класу
  }">
    <CircleLoader width="40" height="40" />
    <slot></slot>
  </button>
</template>

<script>
import CircleLoader from "../loaders/Circle"

export default {
  name: "ButtonClick",
  components: { CircleLoader },
  props: {
    type: { type: String, default: "button" },
    outlined: { type: Boolean, default: false }
  },
};
</script>

<style  lang="scss" scoped>
.btn {
  display: inline-block;
  font-size: 18px;
  background: #FF662D;
  color: #fff;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;

  &--outlined {
    background: blue;
    margin-left: 10px;
  }


}
</style>
