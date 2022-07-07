import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { useValidateForm } from 'vee-validate'


createApp(App).use(router, axios, VueAxios, useValidateForm).mount('#app')

export default () => {
    return axios.create({
        baseURL : 'https://4aad-186-155-74-86.ngrok.io',
    })
}

