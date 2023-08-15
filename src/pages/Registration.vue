<template>
    <main class="registration">
        <AuthSection>
            <RegistrationForm /><!-- Так як є slot в authSection, тоді можна вставляти всредину компоненти -->
        </AuthSection>

    </main>
</template>

<script>
import AuthSection from "../components/auth/AuthSection.vue";
import RegistrationForm from "../components/auth/registration"

export default {
    name: 'RegistrationPage',
    components: { AuthSection, RegistrationForm }
}
</script>

<style lang="scss" scoped></style>