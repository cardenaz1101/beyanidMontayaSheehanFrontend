import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { useValidateForm } from 'vee-validate'

//Idiomas
// import VueI18n from 'vue-i18n'
// import en from './lang/en_US'
// import es from './lang/es_ES'


createApp(App).use(router, axios, VueAxios, useValidateForm).mount('#app')

// const i18n = new VueI18n({
//     locale: 'es',
//     messages: {
//         en: {
//             lang: en
//         },
//         es: {
//             lang: es
//         }
//     }
// })

App({
    render: h => h(App),
    // i18n
  })
