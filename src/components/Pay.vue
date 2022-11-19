<template ref="Pruebaa">
    <div class="container-box-documents d-flex justify-content-center align-items-cente flex-column">
        <h1 class="text-center m-0">
            Procesando pago...
        </h1>
        <p class="text-center">Por favor espere</p>
    </div>
</template>

<script>
import Api from '@/services/Api'


export default {
    name: "paymentProcess",
    async created () {

        let params =  new URLSearchParams(location.search);
        var token =  params.get('token');
        var documentTypeId = localStorage.getItem('dti');
        const res = await Api().get('paymentGateways/capturePayment/' + token + '/' + documentTypeId, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        console.log(res);
        if (res.data.status == "COMPLETED") {
            this.$router.push(`/typeDocument/${documentTypeId}`);
            await this.showAlert('Pago Exitoso', 'success')

        } else {
            this.showAlert('No se realizo el pago con exito', 'error')
        }
        
    },
    methods: {
        showAlert: function (title, icon) {
            this.$swal({
                title: title,
                icon: icon,
                showConfirmButton: false,
                timer: 2500
            });
        },
    }
}
</script>

<style>

</style>