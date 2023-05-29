<template>
    <form class="form" @submit.prevent="handleSubmit">
        <CustomSelect :items="['apple', 'kiwi', 'banana']" class="form__select" />
        <CustomInput />
        <SubmitButton class="form__submit" type="submit">Selection of housing</SubmitButton>
    </form>
</template>

<script>
import CustomInput from '../shared/CustomInput.vue';
import CustomSelect from '../shared/CustomSelect.vue';
import SubmitButton from '../shared/Button.vue'

export default {
    components: { CustomSelect, CustomInput, SubmitButton },
    methods: {
        handleSubmit() {
            this.$emit('submit', 'submit from')
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