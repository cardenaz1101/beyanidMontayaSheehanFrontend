<template>
    <div>

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
        console.log(token);
        const res = await Api().get('paymentGateways/capturePayment/' + token + '/' + documentTypeId, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        console.log(res);
    }
}
</script>

<style>

</style>