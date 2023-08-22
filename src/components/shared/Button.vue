<template>
  <button v-on="$listeners" v-bind:type="type" :disabled="loading" :class="{
    btn: true, 'btn--outlined': outlined //Застосували пропс для класу
  }">
    <CircleLoader v-if="loading" width="40" height="40" />
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
    loading: { type: Boolean, default: false }
  },
  computed: {
    contentStyles() {
      return {
        'btn__computed--hidden': this.loading /* додаєм клас hidden якщо loading = true */
      }
    }

  }
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

  &__content {
    &--hidden {
      opacity: 0;
    }
  }

}
</style>
