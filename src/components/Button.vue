<template>
  <button v-bind:type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonClick",
  props: { type: { type: String, default: "button" } },
};
</script>

<style lang="scss" scoped></style>
