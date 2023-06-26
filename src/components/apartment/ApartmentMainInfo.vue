<template>
    <article class="apartment-main-info">
        <h1 class="apartment-main-info__item"></h1>
        <img src="" alt="" class="apartment-main-info_photo">
        <p class="apartment-main-info_description"></p>
    </article>
</template>

<script>
export default {
    name: 'ApartmentMainInfo',
    props: {
        apartment: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped></style>