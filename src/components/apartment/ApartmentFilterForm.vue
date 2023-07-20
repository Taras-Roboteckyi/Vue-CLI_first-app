<template>
    <form class="form" @submit.prevent="handleSubmit">
        <CustomSelect :items="cities" v-model="city" class="form__select" />
        <CustomInput v-model="price" type="number" placeholder="Price from" error-message="Мust not be empty"
            :rules="[(val) => !!val]" />
        <SubmitButton class="form__submit" type="submit">Selection of housing</SubmitButton>
    </form>
</template>

<script>
import CustomInput from '../shared/CustomInput.vue';
import CustomSelect from '../shared/CustomSelect.vue';
import SubmitButton from '../shared/Button.vue'

export default {
    components: { CustomSelect, CustomInput, SubmitButton },
    data() {
        return {
            price: '',
            city: ''
        }
    },
    computed: {
        cities() {
            return [{ value: '', label: 'City', selected: true }, "Kyiv", "Odesa", "Poltava", "Kharkiv", "Dnipro", "Lviv", "Kherson", "Mariupol",]

        }
    },
    methods: {
        handleSubmit() {
            this.$emit('submit', { city: this.city, price: this.price, })
        }
    }

}
</script>

<style lang="scss" scoped>
.form {
    display: flex;

    &__select {
        margin-right: 30px;
    }

    &__submit {
        margin-left: auto;
    }
}
</style>