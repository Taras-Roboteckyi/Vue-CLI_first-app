<template>
    <input v-on="listeners" class="custom-input">
</template>

<script>
export default {
    name: 'CustomInput',
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: event => this.$emit('input', event.target.value)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.custom-input {
    min-height: 40px;
    border: 2px solid #ff662d;
    font-size: 18px;
    outline: none;
    line-height: inherit;
    padding: 8px 15px;
}
</style>