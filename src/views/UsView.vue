<template>
    <div class="container-login">
        <div class="row px-5">
            <div class="col-12 col-lg-8 d-flex justify-content-center align-items-center px-5">
                <p class="text-justify px-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tenetur dolores? Sunt deserunt consectetur facere magni reprehenderit rem est minus eos aliquam provident recusandae, consequatur cumque voluptatum laboriosam voluptatem quo?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusamus culpa quasi! Excepturi facere aspernatur quam saepe modi exercitationem magni eveniet laborum dolorem placeat? Animi ipsa consectetur error doloremque debitis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed officia voluptatibus asperiores ut! Voluptatibus amet, tempore voluptas, sapiente ipsa pariatur corporis autem aut consectetur expedita perferendis repudiandae eum incidunt.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum maxime excepturi eligendi rerum perspiciatis exercitationem labore, ducimus sequi harum dolorum odio et consequatur repellendus, laudantium voluptas odit eum atque aliquid?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab cum, excepturi iusto, architecto minima dolor voluptates animi provident reprehenderit tempore cumque dolorem sequi tenetur distinctio veritatis ipsam? Recusandae, vero quaerat.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi possimus nam sit ducimus consequuntur tempora officia ut hic aliquam quia ipsa quod illo alias eligendi distinctio, mollitia, dolorum dignissimos temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius fuga perspiciatis alias culpa eveniet laborum quasi animi velit maiores assumenda cumque id vero praesentium eligendi nesciunt optio, nostrum nisi? Ut.
                </p>
            </div>
            <div class="col-12 col-lg-4">
                <img src="../assets/images/us1.jpeg" style="width:100%" alt="">
            </div>
        </div>
    </div>
    <div class="py-6">
        <h1 class="text-center">Título</h1>
    </div>
    <swiper :slidesPerView="3" :pagination="{ clickable: true,}" :navigation="true" :modules="modules" class="mySwiper">
        <!-- <swiper-slide><img src="../assets/images/us9.jpeg" alt=""></swiper-slide> -->
        <!-- <swiper-slide><img src="../assets/images/us3.jpeg" alt=""></swiper-slide> -->
        <swiper-slide><img src="../assets/images/us4.jpeg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/us5.jpeg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/us6.jpeg" alt=""></swiper-slide>
        <!-- <swiper-slide><img src="../assets/images/us7.jpeg" alt=""></swiper-slide> -->
        <swiper-slide><img src="../assets/images/us8.jpeg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/us2.jpeg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/us10.jpeg" alt=""></swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
}
</script>

<style>

</style>