<template>
    <div class="discussions__item">
        <div class="d-flex">
            <div class="discussions__img-wrap">
                <img :src="post.img" alt="" class="discussions__img">
            </div>
            <div class="discussions__info">
                <div class="discussions__ small mb-2">Автор:
                    <a class="link link--color-blue mr-2"
                       href="#">{{post.autor}}</a>
                    {{post.date | fdate}}
                </div>
                <div class="discussions__title h2">
                    <router-link class="link link--color-black" :to="{ name: 'discussion', params: { id: post.id }}">{{post.title}}
                    </router-link>
                </div>

                <div class="discussions__source small mb-2 d-flex align-items-center">
                    <!--<div class="discussions__source-icon-wrap">-->
                    <!--<div class="icon-dots-hor"></div>-->
                    <!--</div>-->


                    <a href="#" class="link link--color-grey">{{post.source}}</a>
                </div>
                <div class="discussions__teaser  mb-3">{{post.teaser}}</div>
                <div class="d-flex flex-wrap align-items-center">
                    <post-info class="mr-3 mb-3"
                               :like="post.like"
                               :comment="post.comment"
                               :view="post.view"
                               :lastactivity="post.lastactivity"
                    ></post-info>
                    <a href="#" class="link link--color-blue small mb-3"> Ответить</a>
                </div>
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


</style>