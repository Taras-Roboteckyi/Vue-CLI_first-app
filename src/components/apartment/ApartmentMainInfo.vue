<template>
    <article class="apartment-main-info">
        <h1 class="apartment-main-info__title">{{ apartment.title }}</h1>
        <img :src="apartment.imgUrl" alt="" class="apartment-main-info__photo">
        <p class="apartment-main-info__description">{{ apartment.descr }}</p>
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

<style lang="scss" scoped>
.apartment-main-info {
    &__title {
        font-size: 20px;
        font-weight: 700;
        text-transform: capitalize;
        margin-bottom: 20px;
    }

    &__photo {
        max-width: 100%;
    }

    &__description {
        line-height: 1.3;
        margin-top: 30px;
    }
}
</style>