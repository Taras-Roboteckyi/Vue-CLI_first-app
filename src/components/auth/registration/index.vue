<template>
    <AuthContainer class="registration">
        <MainTitle class="registration__title">Login</MainTitle>
        <Form ref="form" class="registration__form" @submit.prevent="handleSubmit">
            <CustomInput v-model="formData.name" autocomplete="username" placeholder="Name" name="name" :rules="nameRules"
                class="registration__input" />
            <CustomInput v-model="formData.email" autocomplete="email" placeholder="Email" name="email" :rules="emailRules"
                class="registration__input" />
            <CustomInput v-model="formData.password" autocomplete="current-password" type="password" placeholder="Password"
                name="password" :rules="passwordRules" class="registration__input" />
            <CustomInput v-model="formData.confirmPassword" autocomplete="current-password" type="password"
                placeholder="Confirm password" name="password" :rules="confirmPassword" class="registration__input" />
            <Button type="submit" class="registration__btn">Registration</Button>
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
import { registerUser } from '../../../services/auth_service'

export default {
    name: 'RegistrationForm',
    components: { Form, CustomInput, Button, AuthContainer, MainTitle },
    data() {
        return {
            formData: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
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
        nameRules() {
            return [this.rules.isRequired]
        },
        emailRules() {
            return [this.rules.isRequired, this.rules.emailValidation]
        },
        passwordRules() {
            return [this.rules.isRequired, this.rules.passwordValidation]
        },
        confirmPassword() {
            return [(val) => ({
                hasPassed: val === this.formData.password, /*Провіряєм на чи юзер вводить другий раз пароль правильно  */
                message: 'Password mismatch'
            })]
        }
    },
    methods: {
        async handleSubmit() {
            const isFormValid = this.$refs.form.validate()/* так ми можем визивати методи з дочерного копонента в батьківському компоненті. По суті це вважається антипатерном, але для форми це дуже зручно, форма визве метод validate і перевіре кожне поле на валідацію. */
            const { name, email, password } = this.formData
            if (isFormValid) {
                try {
                    const { data } = await registerUser({ name, email, password }) /* забираєм дані з GET запиту в auth.service */
                    console.log("data", data)
                } catch (error) {
                    console.log("error", error)
                }

            }
        }

    }
}
</script>

<style lang="scss" scoped>
.registration {
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