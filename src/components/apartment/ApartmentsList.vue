<template>
    <div class="apartments-list">
        <ApartmentsItem v-for="{ id, descr, rating, imgUrl, price } in items" :key="id" :descr="descr" :rating="rating"
            :price="price" :imgSrc="imgUrl" />
    </div>
</template>

<script>
import ApartmentsItem from './ApartmentsItem.vue';

export default {
    name: "AparttmentList",
    components: { ApartmentsItem },
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
.apartments-list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;

    &__item {
        margin-bottom: 30px;
    }
}
</style>