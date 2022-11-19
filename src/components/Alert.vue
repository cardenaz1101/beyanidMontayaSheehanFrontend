<template>
    <div>

    </div>
</template>

<script>
export default {
    name: "AlertAll",
    methods: {
        AlertEasy: function (title, icon) {
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