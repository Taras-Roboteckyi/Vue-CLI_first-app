<template>
    <main class="apartment-page">
        <Container>
            <div v-if="apartment" class="apartment-page__content">
                <ApartmentMainInfo :apartment="apartment" />
                <div class="apartment-page__additional-info">
                    <!-- //Передаєм apartment обовязково щоб передати дані з computed в props -->
                    <ApartmentsOwner class="apartment-page__owner" :owner="apartment.owner" />
                    <Reviews :reviews="reviewsList" />
                </div>

            </div>
        </Container>

    </main>
</template>

<script>
import Container from '../components/shared/Container'

import ApartmentMainInfo from "../components/apartment/ApartmentMainInfo.vue"
import ApartmentsOwner from "../components/apartment/ApartmentsOwner.vue"
import Reviews from '../components/reviews'
import ReviewsData from "../components/reviews/reviews.json"
import { getApartmentsById } from '@/services/apartments_service';

export default {
    name: 'ApartmentPage',
    components: { Container, ApartmentMainInfo, ApartmentsOwner, Reviews },
    data() {
        return {
            apartment: null
        }
    },
    computed: {
        reviewsList() {
            return ReviewsData
        },
        /* apartment() {
            return apartments.find(apartment => apartment.id === this.$route.params.id)//Шукаєм необхідний id серед апартаментів і підставляєм його//
        } */
    },

    //////////////////////Хук для запитів на бек/////////////////////
    async created() {
        try {
            const { id } = this.$route.params
            const { data } = await getApartmentsById(id) //Шукаєм необхідний id серед апартаментів і підставляєм його//
            this.apartment = data
        } catch (error) {
            console.error(error)
        }
    },
    ///Додаєм хук mounted///
    /*  mounted() {
         console.log(this.$route.params.id),//Так можна достукатися до параметрів роута -name,id,query і т.д, а також їх передати///
             console.log(this.$route.query.name)
     } */
    ///Хук mounted монтується в app при запуску компонента///
    mounted() { console.log(this.apartment) } //Перевіряєм що саме прийшло з апартментів
}
</script>

<style lang="scss" scoped>
.apartment-page {
    padding-bottom: 55px;

    &__content {
        display: flex;
        align-items: flex-start;
    }

    /* &__owner {
        min-width: 350px;
        margin-left: 30px;
    } */

    &__additional-info {
        margin-left: 30px;
        max-width: 350px;
        flex-grow: 0;
        flex-shrink: 1;
    }

}
</style>