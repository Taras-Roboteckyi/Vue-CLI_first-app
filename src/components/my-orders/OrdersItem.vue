<template>
    <div class="orders-item">
        <img :src="order.imgUrl" alt="photo of the apartment" class="orders-item__photo">
        <div class="orders-item__details">
            <div class="orders-item__text">
                <h2 class="orders-item__title">{{ order.title }}</h2>
                <p class="orders-item__location">{{ order.location.city }}</p>
            </div>
            <div class="orders-item__cost">
                <span class="orders-item__prise">{{ order.prise }}UAH</span>
                pay per night
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrdersItem',
    props: {
        order: {
            type: Object,
            required: true
        }

    },
}
</script>

<style lang="scss" scoped></style>