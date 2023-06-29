<template>
    <section class="apartments-owner">
        <h2 class="apartments-owner__title">Іnformation about the owner</h2>
        <p class="apartments-owner__info">Name: {{ owner.name }} </p>
        <p class="apartments-owner__info">tel: {{ owner.phone }} </p>
        <p class="apartments-owner__info">email: {{ owner.email }} </p>
    </section>
</template>

<script>
export default {
    name: 'ApartmentsOwner',
    props: {
        owner: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped></style>