<template>
    <article class="apartment-main-info">
        <div class="apartment-main-info__heading">
            <h1 class="apartment-main-info__title">{{ apartment.title }}</h1>
            <StarRating :rating="apartment.rating" />
        </div>
        <img :src="apartment.imgUrl" alt="" class="apartment-main-info__photo">
        <p class="apartment-main-info__description">{{ apartment.descr }}</p>
        <div class="apartment-main-info__btn">
            <Button @click="handleApartmentsBooking" :loading="isLoading">Book a room</Button>
        </div>

    </article>
</template>

<script>
import StarRating from '../StarRating.vue'
import Button from '../shared/Button.vue'
import { bookApartment } from "../../services/order_service"

export default {
    name: 'ApartmentMainInfo',
    components: { StarRating, Button },
    props: {
        apartment: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isLoading: false
        }
    },
    methods: {
        async handleApartmentsBooking() {
            const body = {
                apartmentId: this.$route.params.id,
                date: Date.now()
            }
            try {
                this.isLoading = true
                await bookApartment(body)

                this.$notify({
                    type: 'success',
                    title: 'Order added',

                })

            } catch (error) {
                this.$notify({
                    type: 'error',
                    title: 'An error occurred',
                    text: error.message
                })
            } finally {
                this.isLoading = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.apartment-main-info {
    &__heading {
        display: flex;
    }

    &__title {
        font-size: 20px;
        font-weight: 700;
        text-transform: capitalize;
        margin-bottom: 20px;
        margin-right: 20px;
    }

    &__photo {
        max-width: 100%;
    }

    &__description {
        line-height: 1.3;
        margin-top: 30px;
    }

    &__btn {
        margin-top: 20px;
        text-align: center;
    }
}
</style>