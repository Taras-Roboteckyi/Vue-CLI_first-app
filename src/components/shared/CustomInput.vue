<template>
    <div class="wrapper-input">
        <input v-on="listeners" v-bind="$attrs" class="custom-input"
            :class="!isValid && 'custom-input--error'"><!-- //Можливість байндити клас і
        достукатися до нього...КРУТО!!!             v-bind="$attrs" - відповідає за всі атрибути які будуть передаватися компоненту-->
        <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
    </div>
</template>

<script>
export default {
    name: 'CustomInput',
    data() {
        return {
            isValid: true,
            error: ''
        }
    },
    inject: {
        form: {
            default: null
        }
    },/* Міняєм масив ключів на обєкт  щоб пофіксити помилку в консолі. Тепер в інпуті буде доступна силка на компонент форми. */
    inheritAttrs: false,/* Заберає привязку від батьківського елемента, так як vue всі атрибути привязує до батьківського елемента */
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
        value() {
            this.validate()
            /* console.log(value) */ //В консолі відобрається  значення при ввденні в інпуті !Круто!!!
        }
    },
    mounted() {
        /* Зробим просту перевірку чи є форма */
        if (!this.form) return

        this.form.registerInput(this)/* Реєструєм інпут в середині форми */
    },
    beforeDestroy() {
        /* Памятаєм про утечку памяті тому робим  beforeDestroy*/
        /* Зробим просту перевірку чи є форма */
        if (!this.form) return

        this.form.unRegisterInput(this)/* Реєструєм інпут в середині форми */
    },
    methods: {
        validate() {
            this.isValid = this.rules.every((rule) => {
                const { hasPassed, message } = rule(this.value);

                if (!hasPassed) {
                    this.error = message || this.errorMessage;
                }

                return hasPassed;
            });

            return this.isValid;
        },
        reset() {
            this.$emit('input', '')
        }/* Метод буде емітити подію інпут з пустим значенням */
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.wrapper-input {
    position: relative;
}

.custom-input {
    min-height: 40px;

    width: 100%;
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