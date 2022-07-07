<template>
    <div>
        <button type="button" v-on:click="getTypeDocuments()">Documentos</button>
    </div>
</template>

<script>

 import Api from '@/services/Api'

export default {
    name: "TypeDocuments",
    data () {
        return {
            TypeDocuments : [],
        }
    }, 
    methods : {
        async getTypeDocuments () 
        {

            //  const get = await fetch('https://4902-52-36-213-15.ngrok.io/ping')
            //  console.log(get);
             const get = await Api().get('api/documentTypes/getAll');
             console.log(get);
        }
    }
}
</script>

<style>

</style>