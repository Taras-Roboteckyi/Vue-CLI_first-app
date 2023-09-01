<template>
    <AuthContainer class="login">
        <MainTitle class="login__title">Login</MainTitle>
        <Form ref="form" class="login__form" @submit.prevent="handleSubmit">
            <CustomInput v-model="formData.email" autocomplete="email" placeholder="Email" name="email" :rules="emailRules"
                class="login__input" />
            <CustomInput v-model="formData.password" autocomplete="current-password" type="password" placeholder="Password"
                name="password" :rules="passwordRules" class="login__input" />
            <Button type="submit" class="login__btn" :loading="loading">Login</Button>
        </Form>
    </AuthContainer>
</template>

<script>
import Form from '../../shared/form'
import CustomInput from '../../shared/CustomInput.vue'
import Button from '../../shared/Button.vue'
import { emailValidation, passwordValidation, isRequired } from '@/utils/validationRules'
import AuthContainer from '../AuthContainer.vue'
import MainTitle from '../../shared/MainTitle.vue'


export default {
    name: 'LoginComponent',
    components: { Form, CustomInput, Button, AuthContainer, MainTitle },
    data() {
        return {
            loading: false,
            formData: {
                email: '',
                password: ''
            }
        }
    },
    computed: {
        rules() {
            return {
                emailValidation,
                passwordValidation,
                isRequired
            }
        },
        emailRules() {
            return [this.rules.isRequired, this.rules.emailValidation]
        },
        passwordRules() {
            return [this.rules.isRequired, /* this.rules.passwordValidation */] /* Забераєм валідацію пароля  на логін сторінці*/
        }
    },
    methods: {
        async handleSubmit() {
            const { form } = this.$refs
            const isFormValid = form.validate()/* так ми можем визивати методи з дочерного копонента в батьківському компоненті. По суті це вважається антипатерном, але для форми це дуже зручно, форма визве метод validate і перевіре кожне поле на валідацію. */


            if (isFormValid) {
                try {
                    this.loading = true
                    /* const { data } = await loginUser(this.formData) */ /* забираєм дані з GET запиту в auth.service */
                    /*  const { user, token } = data */

                    /* this.$store.commit('setUserData', user) */ /* передаєм в store дані через мутацію */
                    /*  this.$store.commit('setToken', token) */ /* передаєм в store дані через мутацію */
                    /* console.log("state", this.$store.state) */

                    await this.$store.dispatch('login', this.formData)/* так набагато простіше передавати через action запити */

                    this.$router.push({ name: 'homepage' }) /* при проходжені логіна редиректимся на головну сторінку */
                    form.reset() /* Очищаєм поля після входу */

                } catch (error) {
                    this.$notify({
                        type: 'error',
                        title: 'An error has occurred',
                        text: error.message
                    });
                } finally {
                    this.loading = false
                }

            }
        }

    }
}
</script>

<style lang="scss" scoped>
.login {
    &__title {
        text-align: center;
    }

    &__form {
        display: block;
        flex-direction: column;
    }

    &__input {
        margin-bottom: 20px;
        width: 100%;
    }

    &__btn {
        margin-top: 15px;
        width: 100%;
    }
}
</style>