<template>
    <div class="post-page">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="small mb-3">
                        <router-link class="link link--color-black" to="/">Клуб</router-link>
                        /
                        <router-link class="link link--color-black" to="/discussions">Обсуждения</router-link>


                    </div>
                </div>
                <div class="col-12 col-lg-8">

                    <div class="page__title mb-4">{{post.title}}</div>

                    <div class="d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div class="d-flex align-items-center">
                            <div class="mr-3">
                                <img class="post-item__author-img rounded-circle " :src="post.autorImg" alt="">
                            </div>
                            <div class="d-flex flex-column">
                                <a class="link link--color-black mr-2" href="#">{{post.autor}}</a>
                                <div class="small text-muted ">опубликованно {{post.date | fdate}}</div>
                            </div>
                        </div>

                    </div>
                    <div class="disc_teaser">
                        {{post.teaser}}
                    </div>

                </div>

                <div class="col-12 col-lg-4">
                    <div class="card-block sticky-sidebar">
                        <div class="product-list">
                            <div class="product-list__title px-4 ">
                                Упоминания товаров
                            </div>

                            <div class="product-list__item p-4 bb-1" v-for="(product, index)  in post.products"
                                 :key="index"
                                 v-if="index<3">
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex flex-column">
                                        <div class="h4">
                                            {{product.title}}
                                        </div>
                                        <div class="product-plate__social d-flex align-items-center mb-3">
                                            <div class="product-plate__rating-wrap">
                                                <rate :length="5" v-model="product.rating" :readonly="true"/>
                                            </div>
                                            <div class="small ml-2">
                                                <a href="" class="link link--color-blue">{{product.reviewcount}}</a>
                                            </div>
                                        </div>
                                        <div class="">
                                            <button type="button" class="btn btn--color-white ">Купить</button>
                                        </div>
                                    </div>


                                    <div class="ml-3 product-list__item-img-wrap">
                                        <img class="product-list__item-img" :src="product.img" alt="">
                                    </div>
                                </div>

                            </div>
                            <div class="p-4" v-if="post.products.length>3">
                                <div class="d-flex align-items-center">
                                    <div class="icon-add pt-1 mr-2"></div>
                                    Смотерть все
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>

        <div class="container ">
            <div class="row">
                <div class="col-12 col-lg-8">
                    <div class="h1 mb-0">Ответы пользователей</div>
                    <comment-grid
                            baseURL="https://club-comment.firebaseio.com"
                            apiKey="AIzaSyBugrOQJ_kK5qww87m_a0OltSOse2ur7_w"
                            nodeName="nodeNameYouWant">
                    </comment-grid>
                </div>
            </div>

        </div>


    </div>


</template>

<script>

    import postInfo from '@/components/post-block/parts/post-info.vue'
    import postTagFull from '@/components/post-block/parts/post-tag-full.vue'
    import postImg from '@/components/post-block/post-img.vue'


    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'


    export default {
        components: {
            postInfo,
            postTagFull,
            swiper,
            swiperSlide,
            postImg
        },
        data() {
            return {
                name: 'register-modules-example',
                post: {},
                posts: {},
                error: "",
                lifehackOption: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                            pagination: {
                                el: '.swiper-pagination',
                            },
                        },
                        768: {
                            slidesPerView: "auto",
                            spaceBetween: 40
                        }
                    },
                    navigation: {
                        nextEl: '.sw-button-next',
                        prevEl: '.sw-button-prev'
                    }

                },

            }
        },
        created() {
            this.axios.get('https://club-route.firebaseio.com/discussions.json?orderBy=%22id%22&equalTo=' + this.$route.params.id)
                .then(response => {
                    this.post = Object.values(response.data)[0]
                })
                .catch(e => {
                    this.error.push(e)
                })

            this.axios.get('https://club-route.firebaseio.com/digest.json')
                .then(response => {
                    this.posts = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })
        }
    }
</script>

<style>
    .post-item__author-img {
        max-width: 50px;
        height: auto;
    }

    .disc_teaser {
        margin-left: 66px;
        margin-bottom: 2rem;
    }

    .article p:first-child {
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
        margin-left: 0;
        margin-right: 0;
    }

    .product-list__item-img {
        max-width: 100%;
        height: auto;

        max-height: 100%;
        width: auto;
    }

    .product-list__item-img-wrap {
        width: 80px;
        height: 80px;
        text-align: center;
    }

    .product-list__title {
        text-transform: uppercase;
        font-size: 12px;
        color: #6BA833;
        line-height: 14px;
        padding-top: 28px;
    }

    /*---------------------рейтинг*/

    .product-plate__rating-wrap .Rate__star[data-v-59a74259] {
        padding: 0;
    }

    .product-plate__rating-wrap .icon[data-v-59a74259] {
        width: 14px;
        height: 14px;
        margin: 0 5px 0 0;
    }

    .product-plate__rating-wrap .Rate__star.filled[data-v-59a74259] {
        color: #f48615;
    }

    .sticky-sidebar {
        position: sticky !important;
        top: 80px;
    }

    /*-----------------слайдер*/

    .layout--hidden-content {
        overflow: hidden;
    }

    .swiper-container.livehack-slider {
        overflow: visible;
    }

    .swiper-container {
        width: 100%;
    }

    .livehack-slider.swiper-container .swiper-slide {
        width: 280px;

    }


</style>