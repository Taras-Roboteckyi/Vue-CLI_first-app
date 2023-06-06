<template>
    <header class="header">
        <Container>

        </Container>
    </header>
</template>

<script>
import Container from './shared/Container.vue';

export default {
    name: 'HeaderApp',
    components: { Container }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

.header {
    background: $secondary-color;
    padding: 16px 0;
}
</style>