<template>
    <div>
        <div class="row container-box-documents m-0 d-flex justify-content-center align-items-center">
            <div class="col-12 col-md-6 col-xl-4 px-4 column" v-for="item in array" :key="item.id">
                <router-link :to="{name: 'typeDocument', params: {id: item.id}}">
                    <div class="type-document-box">
                        <h2 class="type-document-box-title">{{item.name}}</h2>
                    </div>
                </router-link>
            </div>
        </div>
        <TypeDocuments @getTypeDocuments="getTypeDocuments"></TypeDocuments>
    </div>
</template>

<script>

import TypeDocuments from '@/components/TypeDocuments.vue'
import { defineComponent } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n/index'


export default defineComponent({

    props: {
        langg: String
    },
    setup() {
        const { t } = useI18n();
        return { t }
    },
    data () {
        return {
            array: [],
            lang: this.langg
        }
    }, 
    components: {
        TypeDocuments,
    },
    methods: {
        async getTypeDocuments (data) {
            this.array = data
            
        }
        
    },
})
</script>

<style>

</style>