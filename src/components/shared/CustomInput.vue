<template>
    <input v-on="listeners">
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

<style lang="scss" scoped></style>