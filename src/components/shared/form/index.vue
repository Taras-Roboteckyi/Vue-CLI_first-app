<template>
    <form v-on="$listeners" class="form"><!-- Передаєм нашій формі усі eventListneru -->
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
        unRegisterInput(input) { this.inputs.filter(item => item !== input) },/* Видаляєм непотрібний інтпут */
        validate() {
            return this.inputs.every(input => input.validate())
        },/* Метод буде проходити по всіх інпутах і буде визивати метод validate */
        reset() {
            return this.inputs.forEach(input => input.reset())
        }/*  Проходимся по кожному інпуту і говорим обнулитися */
    }
}
</script>

<style lang="scss" scoped></style>