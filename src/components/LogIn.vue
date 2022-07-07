<template>
    <form action="">
        <div class="m-0 mb-3 row">
            <div class="col-12 mb-3">
                <input type="email" placeholder="Correo" class="form-control form-control-lg" v-model="data.email">
            </div>
            <div class="col-12 mb-3">
                <input type="password" placeholder="Contraseña" class="form-control form-control-lg" v-model="data.password">
            </div>
            <div class="mb-3">
                <button type="button" class="btn-orange" v-on:click="LogIn()">Iniciar Sesion</button>
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
            token:""
        }
    },
    methods : {
        async LogIn()
        {
            await Api().post('api/users/login', this.data).then((res) => {this.token = res.data})
            localStorage.setItem('token', this.token);
        }
    }
}
</script>

<style>

</style>