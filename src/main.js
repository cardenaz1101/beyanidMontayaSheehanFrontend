import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import { useValidateForm } from 'vee-validate'
import { createI18n } from 'vue-i18n/index'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



const i18n = createI18n({
  legacy: false,
  locale: "es",
  messages: {
    en: require('@/lang/en'),
    es: require('./lang/es.json')
  }
});

const app = createApp(App)

app.use(i18n)
app.use(VueSweetalert2)
app.use(router)
// app.use(axios)
app.mount('#app')