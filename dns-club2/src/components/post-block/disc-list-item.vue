<template>
    <div class="discussions__item">
        <div class="d-flex">

            <div class="discussions__info">

                <div class="discussions__title mb-2 mb-md-3 h2">
                    <router-link class="link link--color-black" :to="{ name: 'discussion', params: { id: post.id }}">
                        <div class="" v-html="post.title"></div>
                    </router-link>
                </div>

                <div class="discussions__source small d-flex flex-column-reverse flex-md-row align-items-start align-items-md-center ">
                    <!--<div class="discussions__source-icon-wrap">-->
                    <!--<div class="icon-dots-hor"></div>-->
                    <!--</div>-->
                    <div class="discussions__ d-flex align-items-center small mb-2 mr-4">
                        <img :src="post.autorImg" alt="" class="discussions__author-img  rounded-circle">
                        <a class="link link--color-grey mr-2"
                           href="#">{{post.autor}}</a>
                        {{post.date | fdate}}
                    </div>
                    <div class="mb-2 ">
                        <a href="#" class="link link--color-grey ">{{post.source.title}} </a>·
                        <a href="#" class="link link--color-grey ">{{post.source.parent.title}}</a>
                    </div>

                </div>
                <div class="discussions__teaser  mb-2">
                    <div v-html="post.teaser"></div>
                </div>
                <div class="discussions__control d-flex flex-wrap align-items-center">
                    <post-info class="mr-3 mb-3"
                               :like="post.like"
                               :comment="post.comment"
                               :view="post.view"
                               :lastactivity="post.lastactivity"
                               border="false"
                    ></post-info>
                    <a href="#" class="link link--color-blue small mb-3"> Ответить</a>
                </div>
            </div>
            <div v-if="post.products" class="discussions__img-wrap">
                <img :src="post.products[0].img" alt="" class="discussions__img">
                <!--<div class="discussions__img-title ">{{post.products.length}} товар</div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import postInfo from './parts/post-info.vue'


    export default {
        components: {
            postInfo,

        },
        props: {
            post: {
                type: Object,
                default: function () {
                    return {
                        autor: "",
                        comment: "",
                        date: "",
                        format: "",
                        img: "",
                        isLocked: "",
                        like: "",
                        position: "",
                        source: "",
                        tags: "",
                        teaser: "",
                        textColor: "",
                        title: "",
                        view: ""
                    }
                }
            }
        },

        data: function () {
            return {}
        }


    }
</script>

<style>

    .discussions__item {
        margin-bottom: 1.5rem;
    }

    .discussions__img-wrap {
        margin-left: 2rem;
        margin-top: 2rem;
        display: none;
        text-align: center;

    }

    .discussions__img {
        width: 80px;
        height: auto;
    }

    @media (min-width: 768px) {
        .discussions__img-wrap {
            display: block;
            text-align: center;
        }

        .discussions__item {
            margin-bottom: 2rem;
        }

    }

    @media (min-width: 1200px) {
        .discussions__img-wrap {
            display: block;
        }

        .discussions__img {
            width: 100px;
            height: auto;
            margin-bottom: 1rem;
        }

    }

    .discussions__img-title {
        border: 1px solid #eee;
        border-radius: 5rem;
        display: inline;
        padding: .25rem .5rem;
        font-size: 0.875rem;
        color: #6c757d;
        text-align: center;
        line-height: 14px;
    }

    .discussions__author-img {
        width: 20px;
        height: 20px;
        margin-right: .5rem;
        display: block;
        border-radius: 50% !important;
    }

    /*.discussions__control, .discussions__teaser{*/
        /*padding-left: 28px;*/
    /*}*/
</style>