<template>
    <header class="header">
        <Container>
            <div class="header__content">
                <router-link to="/"><!-- //Перенаправляє на головну сторінку -->
                    <Logo />
                </router-link>
                <AccountActions v-if="isLoggedIn" />

                <AuthActions v-else />

            </div>

        </Container>
    </header>
</template>

<script>
import Container from '../shared/Container.vue';
import Logo from '../Logo.vue'
import AuthActions from './AuthActions.vue';
import AccountActions from './AccountActions.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'HeaderApp',
    components: { Container, Logo, AuthActions, AccountActions },
    computed: {
        ...mapGetters('auth', ['isLoggedIn'])
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: $secondary-color;
    padding: 16px 0;
    z-index: 100;

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>