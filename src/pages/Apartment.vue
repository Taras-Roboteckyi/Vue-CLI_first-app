<template>
    <div>
        <Container>
            <h1>Apartment Page</h1>
        </Container>

    </div>
</template>

<script>
import Container from '../components/shared/Container'

export default {
    name: 'ApartmentPage',
    components: { Container },
    ///Додаєм хук mounted///
    mounted() {
        console.log(this.$route.params.id),//Так можна достукатися до параметрів роута -name,id і т.д, а також їх передати///
            console.log(this.$route.query.name)
    }
}
</script>

<style lang="scss" scoped></style>