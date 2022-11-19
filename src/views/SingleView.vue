<template>
    <h1 style="text-align:center">{{name}}</h1>
    <div class="row container-box-documents m-0 d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-6 col-xl-4 px-4 column column-s" v-for="(document, index) of documents" :key="index">
            <a :download="document.name" :href="document.url" >
                <div class="type-document-box">
                    <h2 class="type-document-box-title">{{document.name}}</h2>
                </div>
            </a>
        </div>
        <div v-if="documents.length == 0">
            <h1 class="text-center">No hay documentos</h1>
        </div>
        <div v-if="!this.purchased" class="row m-0 d-flex justify-content-center align-items-center">
            <div class="col-4">
                <div class="box-create-orden">
                    <div @click="createOrden(); isOpen = true" class="link-create-orden">
                        <div class="container-icon">
                            <i class="fa-solid fa-dollar-sign icon"></i>
                        </div>
                        <img src="../assets/images/descarga.png" alt="" class="image-create-orden">
                    </div>
                    <h3 class="title-create-orden">Asesoria de {{name}}</h3>
                </div>
            </div>
        </div>

    </div>
    <PopUp :open="isOpen" @close="isOpen = false" :link="paymentLink" :key="paymentLink" :price="price" :name="name" :langg="lang">
        <div class="column col-6">
            <!-- <iframe class="image-popup" src="https://player.vimeo.com/video/752215036?h=ca720ee034&title=0&byline=0&portrait=0&controls=0"></iframe> -->
            <iframe class="image-popup" src="https://www.youtube.com/embed/ax8I9GoHnRg?rel=0&showinfo=0&controls=1&autoplay=1"></iframe>   
        </div>
    </PopUp>
</template>

<script>
import Api from '@/services/Api'
import PopUp from '@/components/PopUp.vue'
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n/index'

export default defineComponent({

    props: {
        langg: String
    },
    setup () {
        const isOpen = ref(false)
        const { t } = useI18n();

        return { isOpen, t }
    },
    data() {
        return {
            id: null,
            name: null,
            documents: [],
            purchased: true,
            paymentLink: null,
            price: null,
            lang: this.langg
        }
    },
    components: {
        PopUp
    },
    methods: {
    async createOrden () 
        {
            const res =  await Api().get('paymentGateways/createPayment/'+ this.id, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            this.paymentLink = res.data.href
        }
    },  
    async created() {
        
        this.id = this.$router.currentRoute.value.params.id;
        const get = await Api().get('documentTypes/getOne/' + this.id, {                
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })

        this.purchased = get.data.purchased

        this.name = get.data.documentType[0].name
        this.documents = get.data.documentType[0].documents
        this.price = get.data.documentType[0].price
        localStorage.setItem('dti', get.data.documentType[0].id)

    }
})
</script>

<style>

</style>