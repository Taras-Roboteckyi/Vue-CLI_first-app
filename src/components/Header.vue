<template>
    <header class="header">
        <Container>
            <router-link to="/"><!-- //Перенаправляє на головну сторінку -->
                <Logo />
            </router-link>

        </Container>
    </header>
</template>

<script>
import Container from './shared/Container.vue';
import Logo from './Logo.vue'

export default {
    name: 'HeaderApp',
    components: { Container, Logo }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: $secondary-color;
    padding: 16px 0;
}
</style>