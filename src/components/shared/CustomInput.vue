<template>
    <div class="wrapper-input">
        <input v-on="listeners" class="custom-input">
        <span v-if="!isValid" class="custom-input__error">{{ errorMessage }}</span>
    </div>
</template>

<script>
export default {
    name: 'CustomInput',
    data() {
        return { isValid: true }
    },
    props: {
        value: {
            type: String,
            default: ''
        },
        errorMessage: {
            type: String,
            default: ''
        },
        rules: {
            type: Array,
            default: () => []   //Завжди дані силочного типу прописуєм через функцію
        }
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: event => this.$emit('input', event.target.value)
            }
        }
    },
    watch: {
        value(value) {
            this.validate(value)
            console.log(value) //В консолі відобрається  значення при ввденні в інпуті !Круто!!!
        }
    },
    methods: {
        validate(value) {
            this.isValid = this.rules.every(rule => rule(value))
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.custom-input {
    min-height: 40px;
    min-width: 220px;
    /* width: 100%; */
    border: 2px solid $main-color;
    font-size: 18px;
    outline: none;
    line-height: inherit;
    padding: 8px 15px;

    &::placeholder {
        color: inherit
    }

    &--error {
        border-color: red;
    }

    &__error {
        position: absolute;
        top: 100%;
        right: 0;
        width: 100%;
        font-size: 12px;
        color: red;
        line-height: 1.3;
    }
}
</style>