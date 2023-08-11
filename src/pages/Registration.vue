<template>
    <main class="registration">
        <AuthSection>
            <!-- Так як є slot в authSection, тоді можна вставляти всредину компоненти -->
        </AuthSection>

    </main>
</template>

<script>
import AuthSection from "../components/auth/AuthSection.vue";

export default {
    name: 'RegistrationPage',
    components: { AuthSection }
}
</script>

<style lang="scss" scoped></style>