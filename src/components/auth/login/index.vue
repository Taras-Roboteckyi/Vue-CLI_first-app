<template>
    <AuthContainer>
        <h1>Login</h1>
        <Form ref="form" @submit.prevent="handleSubmit">
            <CustomInput v-model="formData.email" name="email" :rules="emailRules" />
            <CustomInput v-model="formData.password" name="password" :rules="passwordRules" />
            <Button type="submit">Click me</Button>
        </Form>
    </AuthContainer>
</template>

<script>
import Form from '../../shared/form'
import CustomInput from '../../shared/CustomInput.vue'
import Button from '../../shared/Button.vue'
import { emailValidation, passwordValidation, isRequired } from '@/utils/validationRules'
import AuthContainer from '../AuthContainer.vue'

export default {
    name: 'LoginComponent',
    components: { Form, CustomInput, Button, AuthContainer },
    data() {
        return {
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
            return [this.rules.isRequired, this.rules.passwordValidation]
        }
    },
    methods: {
        handleSubmit() {
            const isFormValid = this.$refs.form.validate()/* так ми можем визивати методи з дочерного копонента в батьківському компоненті. По суті це вважається антипатерном, але для форми це дуже зручно, форма визве метод validate і перевіре кожне поле на валідацію. */
            if (isFormValid) {
                console.log(this.formData)

            }
        }

    }
}
</script>

<style lang="scss" scoped></style>