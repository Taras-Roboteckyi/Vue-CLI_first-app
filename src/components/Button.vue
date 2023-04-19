<template>
  <button v-on="$listeners" v-bind:type="type" class="btn btn--outlined">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonClick",
  props: { type: { type: String, default: "button" } },
};
</script>

<style  lang="scss" scoped>
.btn {
  display: inline-block;
  font-size: 18px;
  background: #f44336;
  color: #fff;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;

  &--outlined {
    background-color: blue;
  }


}
</style>
