<template>
    <main>
        <Container>
            <h1>Apartment Page</h1>
        </Container>

    </main>
</template>

<script>
import Container from '../components/shared/Container'
import apartments from "../components/apartment/apartments";

export default {
    name: 'ApartmentPage',
    components: { Container },
    computed: {
        apartment() {
            return apartments.find(apartment => apartment.id === this.$route.params.id)//Шукаєм необхідний id серед апартаментів і підставляєм його//
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

<style lang="scss" scoped></style>