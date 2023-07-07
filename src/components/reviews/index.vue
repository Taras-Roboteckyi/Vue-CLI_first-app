<template>
    <section class="reviews">
        <ReviewsItem v-for="review in reviews" :key="review.author" :review="review" />
    </section>
</template>

<script>
import ReviewsItem from './reviews-item' //Знаходить index.vue і його імпортує///

export default {
    name: 'ReviewsComponent',
    components: { ReviewsItem },
    props: {
        reviews: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped></style>