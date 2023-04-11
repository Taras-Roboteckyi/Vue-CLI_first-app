<template>
  <button v-on="$listeners" v-bind:type="type" сlass="red-text btn--outlined">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonClick",
  props: { type: { type: String, default: "button" } },
};
</script>

<style scoped>
.red-text {
  display: inline-block;
  background: orange;
  border: none;
  cursor: pointer;
  min-width: 220px;
  padding: 12px;
  font-size: 16px;


}
</style>
