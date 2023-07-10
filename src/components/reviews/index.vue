<template>
    <section class="reviews">
        <div class="reviews__heading">
            <h2 class="reviews__title">Overall rating</h2>
            <div class="reviews__rating">
                <span>{{ amountOfReviews }} reviews</span>
                <Rating :rating="totalRating" />
            </div>
        </div>
        <ReviewsItem v-for="review in reviews" :key="review.author" :review="review" />
        <button class="reviews__show-more">Read more...</button>
    </section>
</template>

<script>
import ReviewsItem from './reviews-item' //Знаходить index.vue і його імпортує///
import Rating from "../StarRating.vue"

export default {
    name: 'ReviewsComponent',
    components: { ReviewsItem, Rating },
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    computed: {
        totalRating() {
            const total = this.reviews.reduce((acc, review) => acc + review.rating, 0)
            return total / this.reviews.length
        },
        amountOfReviews() {
            return this.reviews.length
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.reviews {
    margin-top: 20px;
    background: $card-bg;
    padding: 0 2px;

    &__heading {
        padding: 20px 20px 10px;
    }

    &__title {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    &__rating {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__show-more {
        background: none;
        border: none;
        cursor: pointer;
        width: 100%;
        padding: 12px;
        font-family: inherit;
        font-size: 16px;
    }
}
</style>