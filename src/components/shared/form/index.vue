<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
export default {
    name: 'FormComponent',
    /* provide викор. для передачі даних батькові а потім інжектить в кожний інпут і можна маніпулювати з методами цього компонента */
    provide() {
        return { form: this }
    },
    data() {
        return {
            inputs: []
        }
    },
    methods: {
        registerInput(input) { this.inputs.push(input) },/* Додавлєм інтпут */
        unRegisterInput(input) { this.inputs.filter(item => item !== input) }/* Видаляєм непотрібний інтпут */
    }
}
</script>

<style lang="scss" scoped></style>