<template>
<div>
    <header class="d-flex">
        <div class="container-logo d-flex">
            <router-link to="/">
                <img src="./assets/images/logo.png" class="logo-header me-3" alt="">
            </router-link>
            <h5 class="d-flex justify-content-center flex-column">Beyanid Montoya Sheehan <br><span>Oficina Legal</span></h5>
        </div>
        <div class="container-menu">
            <ul v-if="pr == 1">
                <li>
                    <router-link to="/">{{ t("header.home", {}, { locale: lang }) }}</router-link> 
                </li>
                <li>
                    <router-link to="/login">{{ t("header.login", {}, { locale: lang }) }}</router-link>
                </li>
                <li>
                    <select v-model="lang">
                        <option value="en">English</option>
                        <option value="es">Español</option>
                    </select>
                </li>
            </ul>
            <ul v-if="pr == 2">
                <li>Hola</li>
                <li>
                    <button v-on:click="logout()">Cerrar sesión</button>
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
        <router-view/>
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
            lang: "es"
        }
    },
    setup() {
        const { t } = useI18n();
        return { t }
    },
    methods: {
        logout() {
            localStorage.removeItem('token')
            this.$router.push('/')
        }
    },
    created() {
        if (localStorage.getItem('token') != null) {
            this.pr = 2
        } else {
            this.pr = 1
        }
    }
})
</script>

<style lang="scss" src="./assets/scss/main.scss"></style>
