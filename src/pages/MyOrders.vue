<template>
    <main class="my-orders-page">
        <SectionWithHeaderSpacer>
            <Container>
                <section class="my-orders-page__content">
                    <MainTitle>Orders</MainTitle>
                </section>
            </Container>
        </SectionWithHeaderSpacer>
    </main>
</template>

<script>
import Container from '../components/shared/Container'
import SectionWithHeaderSpacer from '@/components/shared/SectionWithHeaderSpacer.vue'
import MainTitle from '@/components/shared/MainTitle.vue';

export default {
    name: 'MyOrdersPage',
    components: { Container, SectionWithHeaderSpacer, MainTitle }
}
</script>

<style lang="scss" scoped>
.my-orders-page {
    &__content {
        max-width: 730px;
        margin: 0 auto;
    }
}
</style>