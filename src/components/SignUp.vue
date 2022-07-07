<template>
    <div v-if="error.length>0" class="alert alert-danger" role="alert">
        {{error[0]}}
    </div>
    <form @submit.prevent="SignUp">
        <div class="m-0 mb-3 row">
            <div class="col-12 mb-3">
                <input type="text" placeholder="Nombres" class="form-control" v-model="data.firstName">
                <input v-validate="'numeric'" data-vv-as="field" name="numeric_field" type="text">
            </div>
            <div class="col-12 mb-3">
                <input type="text" placeholder="Apellidos" class="form-control" v-model="data.lastName">
            </div>
            <div class="col-6 mb-3">
                <input type="number" placeholder="Documento" class="form-control" v-model="data.document">
            </div>
            <div class="col-6 mb-3">
                <input type="number" placeholder="Telefono" class="form-control" v-model="data.phone">
            </div>
            <div class="col-12 mb-3">
                <input type="email" placeholder="Correo" class="form-control" v-model="data.email">
            </div>
            <div class="col-12 mb-3">
                <input type="password" placeholder="Contraseña" class="form-control" v-model="data.password">
            </div>
            <div class="mb-3">
                <button type="submit" class="btn-orange">Registrar</button>
            </div>
        </div>
    </form>
</template>

<script>

// import axios from 'axios'
import Api from '@/services/Api'

export default {
    name: "SignUp",
    data() {
        return {
            error : [],
            data : {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                document: "",
                phone: "",
            }
        }
    },
    methods : {
        async SignUp()
        {

            this.error = []

            if (!this.data.firstName) {
                this.error.push("Ingrese nombre")
            }
            if (!this.data.lastName) {
                this.error.push("Ingrese apellido")
            }
            if (!this.data.document) {
                this.error.push("Ingrese numero de documento")
            }
            if (!this.data.phone) {
                this.error.push("Ingrese numero celular")
            }
            if (!this.data.email) {
                this.error.push("Ingrese correo")
            }
            if (!this.data.password) {
                this.error.push("Ingrese contraseña")
            }
            
            if (this.error.length > 0) {
                console.log("Errores");
                console.log(this.error);
            } else {
                const res = await Api().post('/api/users/signUp', this.data).then()

                if (res.data.id) {
                    this.$router.push('/login')
                }

                // this.data.firstName = "";
                // this.data.lastName = "";
                // this.data.email = "";
                // this.data.password = "";
                // this.data.document = "";
                // this.data.phone = "";
            }
            
        }
    }
}
</script>

<style>

</style>