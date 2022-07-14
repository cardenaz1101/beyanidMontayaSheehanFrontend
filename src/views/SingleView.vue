<template>
    <h1 style="text-align:center">{{name}}</h1>
    <div class="row container-box-documents m-0 d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-6 col-xl-4 px-4 column column-s" v-for="(document, index) of documents" :key="index">
            <div class="type-document-box">
                <h2 class="type-document-box-title">{{document.name}}</h2>
            </div>
        </div>
        <div v-if="documents.length == 0">
            <h1>No hay documentos</h1>
        </div>
    </div>

</template>

<script>
import Api from '@/services/Api'

export default {
    data() {
        return {
            id: null,
            name: null,
            documents: []
        }
    },
    async created() {
        
        this.id = this.$router.currentRoute.value.params.id;
        const get = await Api().get('documentTypes/getOne/' + this.id)
        this.name = get.data[0].name
        this.documents = get.data[0].documents;

    }
}
</script>

<style>

</style>