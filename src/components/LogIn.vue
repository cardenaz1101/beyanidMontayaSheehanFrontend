<template>
    <div v-if="error.length>0" class="alert alert-danger" role="alert">
        {{error[0]}}
    </div>
    <form @submit.prevent="LogIn">
        <div class="m-0 mb-3 row">
            <div class="col-12 mb-3">
                <input type="email" placeholder="Correo" class="form-control form-control-lg" v-model="data.email">
            </div>
            <div class="col-12 mb-3">
                <input type="password" placeholder="Contraseña" class="form-control form-control-lg" v-model="data.password">
            </div>
            <div class="mb-3">
                <button type="submit" class="btn-orange">Iniciar Sesion</button>
            </div>
        </div>
    </form>
</template>

<script>

import Api from '@/services/Api'

export default {
    name: "LogIn",
    data() {
        return {
            data : {
                email: "",
                password: "",
            },
            token:"",
            error: []
        }
    },
    methods : {
        async LogIn()
        {
            try {
                this.error = []

                if (!this.data.email) {
                    this.error.push("Ingresar correo")
                }
                if (!this.data.password) {
                    this.error.push("Ingresar contraseña")
                }

                if (this.error.length == 0) {
                    await Api().post('users/login', this.data).then((res) => {this.token = res.data})
                    if (this.token) {
                        localStorage.setItem('token', this.token)
                        this.$router.push('/typeDocuments')
                    }
                }

            } catch (error) {
                if (error.response.status == 500) {
                    this.error.push(error.response.data.message)
                }
            }
        }
    }
}
</script>

<style>

</style>