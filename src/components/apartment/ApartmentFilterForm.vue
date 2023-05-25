<template>
    <form>
        <CustomSelect />
        <CustomInput />
    </form>
</template>

<script>
import CustomInput from '../shared/CustomInput.vue';
import CustomSelect from '../shared/CustomSelect.vue';

export default {
    components: { CustomSelect, CustomInput }

}
</script>

<style lang="scss" scoped></style>