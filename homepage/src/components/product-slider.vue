<template>
    <div class="product-swiper__wrap">

        <product-swiper class="product-swiper" :options="productOption">

            <product-slide v-if="activetab =='Новинки'">
                <div class="all-product">
                    <div class="d-flex align-items-center h5 mb-3">
                        <div class=" ">Только свежее  </div><div class="all-product__icon-ask icon-ask"></div>
                    </div>


                    <ul class="nav nav--vertical ">
                        <li class="nav__link nav__link--vertical">
                            <a href="#" class="link link--color-grey"><span class="">Samsung</span><span
                                    class="text-black-50 ml-1">15</span> </a>
                        </li>
                        <li class="nav__link nav__link--vertical">
                            <a href="#" class="link link--color-grey"><span class="">Apple</span> <span
                                    class="text-black-50 ml-1">48</span> </a>
                        </li>
                        <li class="nav__link nav__link--vertical">
                            <a href="#" class="link link--color-grey"><span class="">Asus</span> <span
                                    class="text-black-50 ml-1">12</span> </a>
                        </li>
                        <li class="nav__link nav__link--vertical">
                            <a href="#" class="link link--color-grey"><span class="">Xiaomi</span> <span
                                    class="text-black-50 ml-1">36</span> </a>
                        </li>
                        <!--<li class="nav__link nav__link&#45;&#45;vertical">-->
                            <!--<a href="#" class="link link&#45;&#45;color-grey"><span class="">GoPro</span> <span-->
                                    <!--class="text-black-50 ml-1">2</span> </a>-->
                        <!--</li>-->

                    </ul>
                    <div class="mt-auto">
                        <button class="btn btn-outl-orange">Все новинки</button>
                    </div>

                </div>
            </product-slide>
            <product-slide v-for="(product, index) in slideinfo.product" :key="index">
                <div class="product-plate d-flex flex-column">
                    <div class="product-plate__image-wrap">
                        <div v-if="index==3" class="product__vobler-item">Лучшая цена</div>

                        <img v-if="index==0" class="product__vobler-rounded" src="https://i.snag.gy/QG4KOn.jpg" alt="">
                        <img :src="product.img" alt="" class="product-plate__image">
                    </div>

                    <div class="product-plate__link  mb-2">
                        <a href="" class="link link--color-grey">{{product.title}}</a>
                    </div>
                    <div class="product-plate__social d-flex align-items-center mb-2">
                        <div class="product-plate__rating-wrap">
                            <rate :length="5" v-model="product.rating" :readonly="true"/>
                        </div>
                        <div class="extrasmall ml-2">
                            <a href="" class="link link--color-blue">{{product.reviewcount}}</a>
                        </div>
                        <div class="ml-3 d-flex align-items-center extrasmall ml-1">
                            <a href="" class="link link--color-blue">
								<span class="icon__wrap">
									<span class="icon__img small mr-1 icon-chat-bubble"></span>
								</span>

                                {{product.comment}}</a>
                        </div>
                    </div>

                    <div class="product-plate__price d-flex flex-column">
                        <div class="d-flex">
                            <div v-if="product.oldprice" class="product__old-price extrasmall mb-0 mr-2">
                                {{product.oldprice | formatedNumber }} ₽
                            </div>
                            <div v-if="product.oldprice" class="extrasmall mb-0 text-danger">выгода
                                {{product.oldprice-product.price | formatedNumber }} ₽
                            </div>
                        </div>
                        <div class="d-flex mt-auto">
                            <div class="h3 mb-0  ">{{product.price | formatedNumber}} ₽</div>
                            <div v-if="index==4" class="ml-2 badge-info__wrap">
                                <div class="badge badge-info">бонус 1 500</div>
                            </div>
                        </div>

                    </div>

                </div>

            </product-slide>
            <product-slide v-if="activetab =='Новинки'">
                <div class="all-product">
                    <div class="d-flex align-items-center h5 mb-3">
                        <div class=" ">Только свежее  </div><div class="all-product__icon-ask icon-ask"></div>
                    </div>


                    <ul class="nav nav--vertical ">
                        <li class="nav__link nav__link--vertical">
                            <a href="#" class="link link--color-grey"><span class="">Samsung</span><span
                                    class="text-black-50 ml-1">15</span> </a>
                        </li>
                        <li class="nav__link nav__link--vertical">
                            <a href="#" class="link link--color-grey"><span class="">Apple</span> <span
                                    class="text-black-50 ml-1">48</span> </a>
                        </li>
                        <li class="nav__link nav__link--vertical">
                            <a href="#" class="link link--color-grey"><span class="">Asus</span> <span
                                    class="text-black-50 ml-1">12</span> </a>
                        </li>
                        <li class="nav__link nav__link--vertical">
                            <a href="#" class="link link--color-grey"><span class="">Xiaomi</span> <span
                                    class="text-black-50 ml-1">36</span> </a>
                        </li>
                        <!--<li class="nav__link nav__link&#45;&#45;vertical">-->
                        <!--<a href="#" class="link link&#45;&#45;color-grey"><span class="">GoPro</span> <span-->
                        <!--class="text-black-50 ml-1">2</span> </a>-->
                        <!--</li>-->

                    </ul>
                    <div class="mt-auto">
                        <button class="btn btn-outl-orange">Все новинки</button>
                    </div>

                </div>
            </product-slide>


            <div class="sw-button-prev" slot="button-prev">
                <div class="icon-arrow-left "></div>
            </div>
            <div class="sw-button-next" slot="button-next">
                <div class="icon-arrow-right "></div>
            </div>

            <div class="swiper-scrollbar" slot="scrollbar"></div>
        </product-swiper>


    </div>

</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'


    export default {
        components: {
            productSwiper: swiper,
            productSlide: swiperSlide

        },
        props: {
            activetab: {
                type: String,
                default: ""
            },
            slideinfo: {
                type: Object,
                default: function () {
                    return {}
                }
            }
        },

        data: function () {
            return {
                productOption: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    observer: true,
                    observeParents: true,
                    watchOverflow: true,
                    breakpoints: {

                        1200: {
                            slidesPerView: 3,
                            freeMode: true,
                            spaceBetween: 30
                        },
                        768: {
                            slidesPerView: "auto",
                            freeMode: true,
                            spaceBetween: 20
                        }
                    },
                    navigation: {
                        nextEl: '.sw-button-next',
                        prevEl: '.sw-button-prev'
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        hide: true,
                        draggable: true

                    }


                },

            }
        },
        filters: {

            formatedNumber: function (value) {
                return value.toLocaleString();
            }
        },

    }
</script>

<style>


    .product-swipe {

        box-shadow: none;
        align-items: center;
        display: flex;
        margin-bottom: .25rem;

    }

    .all-product {
        height: 290px;
        border: 1px solid #eee;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        border-radius: .5rem;

    }

    .all-roduct__img {
        max-width: 40%;
        opacity: 0.1;
        margin-top: 23px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media (max-width: 992px) {
        .product-swiper {
            border-radius: .5rem;
            border: none;
            position: relative;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
            transition: .5s;
            overflow: hidden;
            background-color: #fff;
            padding: 1rem;

        }

        .product-swiper__wrap {
            padding: 0 10px 4px;

        }

    }
    .all-product__icon-ask{
    font-size: 24px;
    line-height: 22px;
    height: 24px;
    margin-left: .25rem;
    color: #999;
    }


</style>