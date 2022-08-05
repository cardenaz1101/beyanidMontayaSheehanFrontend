<template>
    <div v-if="error.length>0" class="alert alert-danger" role="alert">
        {{error[0]}}
    </div>
    <form @submit.prevent="LogIn">
        <div class="m-0 mb-3 row">
            <div class="col-12 mb-3">
                <input type="email" :placeholder= "t('form.email', {}, { locale: lang })" class="form-control form-control-lg" v-model="data.email">
            </div>
            <div class="col-12 mb-3">
                <input type="password" :placeholder= "t('form.password', {}, { locale: lang })" class="form-control form-control-lg" v-model="data.password">
            </div>
            <div class="mb-3">
                <button type="submit" class="btn-orange">{{ t("global.login", {}, { locale: lang }) }}</button>
            </div>
        </div>
    </form>
</template>

<script>

import Api from '@/services/Api'
import { defineComponent } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n/index'

export default  defineComponent({
    name: "LogIn",
    props: {
        langg: String
    },
    setup() {
        const { t } = useI18n();
        return { t }
    },
    data() {
        return {
            data : {
                email: "",
                password: "",
            },
            token: {},
            error: [],
            lang: this.langg,
        }
    },
    methods : {
        async LogIn()
        {
            try {
                this.error = []

                if (!this.data.email) {
                    this.error.push("Ingresar correo")
                }
                if (!this.data.password) {
                    this.error.push("Ingresar contraseña")
                }

                if (this.error.length == 0) {
                    await Api().post('users/login', this.data).then((res) => {this.token = res.data})
                    if (this.token) {
                        localStorage.setItem('token', this.token.token)
                        window.location.reload()
                    }
                }

            } catch (error) {
                if (error.response.status == 500) {
                    this.error.push(error.response.data.message)
                }
            }
        }
    }
})
</script>

<style>

</style>