<template>
    <div class="post-page">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="small mb-3">
                        <router-link class="link link--color-black" to="/">Клуб</router-link>
                        /
                        <router-link class="link link--color-black" to="/discussions">Обсуждения</router-link>

                        <router-link v-if="post.source.parent" class="link link--color-black" to="/discussions"> /
                            {{post.source.parent.title}}
                        </router-link>
                        <router-link v-if="post.source" class="link link--color-black" to="/discussions"> /
                            {{post.source.title}}
                        </router-link>

                    </div>
                </div>


                <div class="col-12 col-lg-8 ">
                    <div class="page__title mb-3">
                        <div v-html="post.title"></div>
                    </div>


                    <div class="d-flex flex-column flex-md-row justify-content-between ">
                        <div class="d-flex align-items-center mb-3">
                            <div class="mr-3 d-none d-md-block">
                                <img class="post-item__author-img rounded-circle " :src="post.autorImg" alt="">
                            </div>
                            <div class="d-flex flex-column">
                                <div class="d-flex">
                                    <img :src="post.autorImg" alt=""
                                         class="comment__comment-author-img-mob rounded-circle">
                                    <div class="">{{post.autor}}</div>
                                </div>
                                <div class="small  text-muted">{{post.date | fdate}}</div>
                            </div>
                        </div>

                    </div>


                    <div class="disc_teaser">
                        <div class="mb-4">
                            <div v-html="post.teaser"></div>
                        </div>
                        <div class="d-flex">
                            <div class="comment__rate d-flex mr-4">

                                <div class="comment__rate-up icon-thumb-up"></div>
                                <div class="comment__rate-count small">{{post.like}}</div>
                                <div class="comment__rate-down icon-thumb-down"></div>
                            </div>

                            <div class="small mr-3">
                                <div class="link link--color-blue">
                                    Ответить
                                </div>

                            </div>
                        </div>
                    </div>
                    <div v-if="post.products" class="d-block d-lg-none ">
                        <div class="card-block card-block--full-mobile p-3 " @click="collapseProduct=!collapseProduct">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="">Упомянутые товары
                                    <span class="text-muted ml-2">{{post.products.length}}</span>
                                </div>
                                <div v-if="!collapseProduct" class="icon-down"></div>
                                <div v-if="collapseProduct" class="icon-up"></div>
                            </div>
                        </div>
                    </div>
                    <div class="my-4" v-if="collapseProduct">
                        <product-list :products="post.products"></product-list>
                    </div>


                    <div class="card-block card-block--full-mobile layout--bg-grey mb-5">
                        <div class=" p-3">
                            <div class="d-flex flex-column flex-md-row justify-content-between align-items-start  align-items-md-center">
                                <div class="mb-3 mb-md-0">Знаете кого-то кто сможет ответить на вопрос? Поделитесь с ним
                                    ссылкой
                                </div>
                                <img src="https://i.snag.gy/vqCKB1.jpg" alt="">

                            </div>
                        </div>

                    </div>
                    <div class="mb-4" v-if="comments && comments.length>1">
                        <div class="h1 mb-4">Ответы пользователей <span class="text-muted">4</span></div>
                        <comment-item v-for="comment in comments" :comment="comment" :key="comment.id"></comment-item>

                    </div>
                    <div class="h1">Ваш ответ</div>
                    <div class="comment__reply-box">
                        <froala :tag="'textarea'" :config="config" v-model="replyText"></froala>
                    </div>
                    <button type="button" class="btn btn--color-white ">Опубликовать</button>

                </div>

                <div v-if="post.products" class="col-12 col-lg-4 d-none d-lg-block">
                    <div class="">
                        <div class="">
                            <div class="mb-3">
                                Упоминания товаров
                            </div>
                            <product-list :products="post.products"></product-list>
                        </div>

                    </div>
                </div>


            </div>
        </div>


    </div>


</template>

<script>

    import postInfo from '@/components/post-block/parts/post-info.vue'
    import postTagFull from '@/components/post-block/parts/post-tag-full.vue'
    import postImg from '@/components/post-block/post-img.vue'
    import commentItem from '@/components/comment-item.vue'
    import productList from '@/components/product-list.vue'

    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'


    export default {
        components: {
            postInfo,
            postTagFull,
            swiper,
            swiperSlide,
            commentItem,
            postImg,
            productList
        },
        data() {
            return {
                name: 'register-modules-example',
                post: {},
                posts: {},
                error: "",
                comments: {},
                collapseProduct: false,
                config: {
                    toolbarInline: true,
                    placeholderText: 'Вам слово...',
                    heightMin: 80,
                    charCounterMax: 140,
                    quickInsertButtons: ['image', 'video', 'table'],
                    toolbarButtons: ['bold', 'italic', 'quote', 'paragraphFormat', 'insertLink', 'underline', 'formatOL', 'formatUL'],

                },
                replyText: '',
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
            this.axios.get('https://club-route.firebaseio.com/comments.json?orderBy=%22postId%22&equalTo=' + this.$route.params.id)
                .then(response => {
                    this.comments = Object.values(response.data)
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
    .post-page .highlight {
        background: #f8ffdd;

        border-radius: 8px;
    }

    .post-item__author-img {
        width: 40px;
        height: 40px;
    }

    .disc_teaser {
        margin-left: 0px;
        margin-bottom: 1.5rem;
    }

    @media (min-width: 768px) {
        .disc_teaser {
            margin-left: 56px;
            margin-bottom: 2rem;
        }
    }

    .article p:first-child {
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
        margin-left: 0;
        margin-right: 0;
    }

    /*---------------------рейтинг*/

    .product-plate__rating-wrap .Rate__star[data-v-59a74259] {
        padding: 0;
    }

    .product-plate__rating-wrap .icon[data-v-59a74259] {
        width: 11px;
        height: 11px;
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


</style>