<template>
    <div v-if="error.length>0" class="alert alert-danger" role="alert">
        {{error[0]}}
    </div>
    <form @submit.prevent="SignUp">
        <div class="m-0 mb-3 row">
            <div class="col-12 mb-3">
                <input type="text" :placeholder= "t('form.names', {}, { locale: lang })" class="form-control" v-model="data.firstName">
            </div>
            <div class="col-12 mb-3">
                <input type="text" :placeholder= "t('form.lastName', {}, { locale: lang })" class="form-control" v-model="data.lastName">
            </div>
            <div class="col-6 mb-3">
                <input type="number" :placeholder= "t('form.id', {}, { locale: lang })" class="form-control" v-model="data.document">
            </div>
            <div class="col-6 mb-3">
                <input type="number" :placeholder= "t('form.phone', {}, { locale: lang })" class="form-control" v-model="data.phone">
            </div>
            <div class="col-12 mb-3">
                <input type="email" :placeholder= "t('form.email', {}, { locale: lang })" class="form-control" v-model="data.email">
            </div>
            <div class="col-12 mb-3">
                <input type="password" :placeholder= "t('form.password', {}, { locale: lang })" class="form-control" v-model="data.password">
            </div>
            <div class="mb-3">
                <button type="submit" class="btn-orange">{{ t("global.register", {}, { locale: lang }) }}</button>
            </div>
        </div>
    </form>
</template>

<script>

// import axios from 'axios'
import Api from '@/services/Api'
//import { defineComponent } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n/index'

export default {
    name: "SignUp",
    props: {
        langg: String
    },
    setup() {
        const { t } = useI18n();
        return { t }
    },
    data() {
        return {
            error : [],
            data : {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                document: "",
                phone: "",
            },
            lang: this.langg
        }
    },
    methods : {
        async SignUp()
        {

            this.error = []

            if (!this.data.firstName) {
                this.error.push("Ingrese nombre")
            }
            if (!this.data.lastName) {
                this.error.push("Ingrese apellido")
            }
            if (!this.data.document) {
                this.error.push("Ingrese numero de documento")
            }
            if (!this.data.phone) {
                this.error.push("Ingrese numero celular")
            }
            if (!this.data.email) {
                this.error.push("Ingrese correo")
            }
            if (!this.data.password) {
                this.error.push("Ingrese contraseña")
            }
            
            if (this.error.length == 0) {
                const res = await Api().post('users/signUp', this.data).then()
                if (res.data.id) {
                    this.$router.push('/login')
                }
            }
        }
    }
}
</script>

<style>

</style>