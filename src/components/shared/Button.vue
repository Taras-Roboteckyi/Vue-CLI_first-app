<template>
  <button v-on="$listeners" v-bind:type="type" :disabled="loading" :class="{
    btn: true, 'btn--outlined': outlined //Застосували пропс для класу
  }">
    <CircleLoader v-if="loading" width="38" height="38" class="btn__loader" />
    <span class="btn__content" :class="contentStyles">
      <slot></slot>
    </span>

  </button>
</template>

<script>
import CircleLoader from "../loaders/Circle"

export default {
  name: "ButtonClick",
  components: { CircleLoader },
  props: {
    type: { type: String, default: "button" },
    outlined: { type: Boolean, default: false },
    loading: { type: Boolean, default: true }
  },
  computed: {
    contentStyles() {
      return {
        'btn__content--hidden': this.loading /* додаєм клас hidden якщо loading = true */
      }
    }

  }
};
</script>

<style  lang="scss" scoped>
.btn {
  position: relative;
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

  &__content {
    &--hidden {
      opacity: 0;
    }
  }

  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /*Розташовує позицінований елемент по центру  */
    height: 100%;
  }

}
</style>
