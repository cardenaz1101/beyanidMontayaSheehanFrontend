<template>
<div>
    <header class="d-flex">
        <div class="container-logo d-flex">
            <router-link to="/">
                <img src="./assets/images/logo.png" class="logo-header me-3" alt="">
            </router-link>
            <h5 class="d-flex justify-content-center flex-column">Beyanid Montoya Sheehan <br><span>{{ t("logo.office", {}, { locale: lang }) }}</span></h5>
        </div>
        <div class="container-menu">
            <ul>
                <li v-if="pr == 1" :key="token">
                    <router-link class="link" to="/">{{ t("header.home", {}, { locale: lang }) }}</router-link> 
                </li>
                <li v-if="pr == 2" :key="token">{{ t("header.greeting", {}, { locale: lang }) }}, Cristian</li>
                                <li :key="token">
                    <router-link class="link" to="/us">{{ t("header.us", {}, { locale: lang }) }}</router-link>
                </li>
                <li v-if="pr == 1" :key="token">
                    <router-link class="link" to="/login">{{ t("global.login", {}, { locale: lang }) }}</router-link>
                </li>
                <li v-if="pr == 2" :key="token">
                    <button class="link" v-on:click="logout()">{{ t("header.logout", {}, { locale: lang }) }}</button>
                </li> 
                <li>
                    <select class="form-select form-select-sm" v-model="lang" id="lang">
                        <option value="en">{{ t("lang.en", {}, { locale: lang }) }}</option>
                        <option value="es">{{ t("lang.es", {}, { locale: lang }) }}</option>
                    </select>
                </li>
            </ul>
        </div>
        <i class="fa-solid fa-bars menu-mobile"></i>
    </header>
    <div class="container-social-networks">
        <a href="https://www.facebook.com/" target="_blank" class="container-icons container-icons-f d-flex justify-content-center align-items-center">
            <i class="fa-brands fa-facebook-f social-networks-icons"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" class="container-icons container-icons-i d-flex justify-content-center align-items-center">
            <i class="fa-brands fa-instagram social-networks-icons"></i>
        </a>
        <a href="https://www.google.com/" target="_blank" class="container-icons container-icons-m d-flex justify-content-center align-items-center">
            <i class="fa-regular fa-envelope social-networks-icons"></i>
        </a>
        <a href="https://web.whatsapp.com/" target="_blank" class="container-icons container-icons-w d-flex justify-content-center align-items-center">
            <i class="fa-brands fa-whatsapp social-networks-icons"></i>
        </a>
    </div>
    <div  class="container-general">
        <router-view :langg="lang" :key="lang"/>
    </div>
    <footer>
        <div class="row m-0">
            <div class="col-12 col-lg-6 d-flex justify-content-center">
                <ul class="m-0 p-0">
                    <li><a href="#" class="text-footer link-footer"></a></li>
                    <li><a href="#" class="text-footer link-footer">Contactanos</a></li>
                    <li><a href="#" class="text-footer link-footer">Política de privacidad</a></li>
                    <li><a href="#" class="text-footer link-footer">Terminos y condiciones</a></li>
                </ul>
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center">
                <div>
                    <p class="text-footer text-end">Redes sociales</p>
                    <p class="text-footer text-end">555 - 555 - 5555</p>
                    <p class="text-footer text-end">emailexample@gmail.com</p>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <p class="text-footer text-center">Todos los derechos reservados - Copyright © 2022</p>
        </div>
    </footer>
</div>

</template>

<script>
import { useI18n } from 'vue-i18n/index';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
    data() {
        return {
            pr : 1,
            lang: "es",
            token: localStorage.getItem('token')
        }
    },
    setup() {
        const { t } = useI18n();
        return { t }
    },
    methods: {
        async logout() {
            await localStorage.removeItem('token')
            window.location.reload()
        }
    },
    mounted() {
        if (localStorage.getItem('token') != null) {
            this.pr = 2
        } else {
            this.pr = 1
        }
    }
})
</script>

<style lang="scss" src="./assets/scss/main.scss"></style>
