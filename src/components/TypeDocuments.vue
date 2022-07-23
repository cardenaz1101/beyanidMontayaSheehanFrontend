<template>
    <div>
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
            const get = await Api().get('documentTypes/getAll', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            this.TypeDocuments = get.data;
        }
    },
    watch: {
        TypeDocuments: function () {
            this.$emit('getTypeDocuments', this.TypeDocuments)
        }
    },
    created() {
        this.getTypeDocuments()
    }
}
</script>

<style>

</style>