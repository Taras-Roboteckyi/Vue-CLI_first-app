<template>
    <form class="form">
        <CustomSelect :items="['apple', 'kiwi', 'banana']" class="form-select" />
        <CustomInput />
        <SubmitButton class="form-submit">Selection of housing</SubmitButton>
    </form>
</template>

<script>
import CustomInput from '../shared/CustomInput.vue';
import CustomSelect from '../shared/CustomSelect.vue';
import SubmitButton from '../shared/Button.vue'

export default {
    components: { CustomSelect, CustomInput, SubmitButton }

}
</script>

<style lang="scss" scoped>
.form {
    display: flex;

    &-select {
        margin-right: 30px;
    }

    &-submit {
        margin-left: auto;
    }
}
</style>