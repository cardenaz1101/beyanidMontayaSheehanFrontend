<template>
    <div class="bg-popup" v-show="open">
        <div class="container-popup">
            <div class="content-popup row">
                <slot />
                <div class="column col-6">
                    <div class="pe-4 d-flex flex-column py-4 h-100 justify-content-around">
                        <div>
                            <h2 class="title-popup">Titulo</h2>
                            <p class="description-popup">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div>
                            <a :href="paymentLink"  class="btn-finalize-payment">{{ t("popup.pay", {}, { locale: lang }) }} (${{priceD}})</a>
                            <div class="w-100 d-flex justify-content-center">
                                <button type="button" class="btn-close-popup" @click="$emit('close'); paymentLink = null; priceD = null">{{ t("popup.cancel", {}, { locale: lang }) }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { defineComponent } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n/index'

export default defineComponent({
    name: 'PopUp',
    props: {
        open: {
            type: Boolean,
            required: true
        },
        link: String,
        price: String,
        langg: String
    },

    setup() {
        const { t } = useI18n();
        return { t }
    },

    data () {
        return {
            paymentLink: this.link,
            priceD: this.price,
            lang: this.langg

        }
    },
    methods: {
        setTarget: function () {
            return (this.enabled ? "_blank" : "_self");
        }
    }
})
</script>

<style>

</style>