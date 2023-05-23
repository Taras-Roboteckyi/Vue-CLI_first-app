<template>
    <select v-on="listeners"></select>
</template>

<script>
export default {
    name: 'CustomSelect',
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: event => this.$emit('input', event.target.value)
            }
        },
        formatedItems() {
            return this.items.map(item => {
                return typeof item === "object" ? item : {
                    value: item, label: item
                }
            })
        }

    }
}
</script>

<style lang="scss" scoped></style>