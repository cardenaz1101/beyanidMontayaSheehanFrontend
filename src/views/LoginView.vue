<template>
    <div class="container-login">
        <div class="container-content">
            <div class="container-logo-login d-flex justify-content-center">
                <router-link to="/">
                    <img src="../assets/images/logo.png" class="logo-header me-3" alt="">
                </router-link>
                <h5 class="d-flex justify-content-center flex-column">Beyanid Montoya Sheehan <br><span>{{ t("logo.office", {}, { locale: lang }) }}</span></h5>
            </div>
            <div class="row m-0 container-btn">
                <button v-on:click="showLogIn()" :class="{'btn-login-active' : current == 1}" class="btn-login col-6">{{ t("global.login", {}, { locale: lang }) }}</button>
                <button v-on:click="showSignUp()" :class="{'btn-login-active' : current == 2}" class="btn-login col-6">Registrarse</button>
            </div>
            <div v-if="current == 1">
                <LogIn :key="lang"/>
            </div>
            <div v-if="current == 2">
                <SignUp :key="lang"/>
            </div>
        </div>
    </div>
</template>

<script>

import SignUp from '@/components/SignUp.vue'
import LogIn from '@/components/LogIn.vue'
import { defineComponent } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n/index'


export default defineComponent({
    props: {
        langg: String
    },
    data(){
        return {
            current: 1,
            btn_login_active: false,
            lang: this.langg
        }
    },
    setup() {
        const { t } = useI18n();
        return { t }
    },
    components: {
        SignUp,
        LogIn,
    },
    methods : {
        showLogIn()
        {
            this.current = 1;
            this.btn_login_active = false;

        },
        showSignUp()
        {
            this.current = 2;
            this.btn_login_active = true;
        }
    },
    created() {

    }
})
</script>

<style>

</style>