<template>
    <div>
        <div class="row m-0 d-flex justify-content-center">
            <div class="col-12 col-md-6 col-xl-4 px-4 column" v-for="item in array" :key="item.id">
                <div class="type-document-box">
                    {{item.name}}
                </div>
            </div>
        </div>
        <TypeDocuments></TypeDocuments>
    </div>
</template>

<script>

import TypeDocuments from '@/components/TypeDocuments.vue'

export default {
    data () {
        return {
            array: [
                {
                    name: "Name 1"
                },
                {
                    name: "Name 2"
                },
                {
                    name: "Name 3"
                },
                {
                    name: "Name 4"
                },
                {
                    name: "Name 5"
                }
            ]
        }
    }, 
    components: {
    TypeDocuments,
}
}
</script>

<style>

</style>