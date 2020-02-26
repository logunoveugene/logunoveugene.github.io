<template>
    <div class="post">
        <div class="post-large">
            <div class="post-large__title  mb-3 h1">
                <a href="#" class="link link--color-black">{{post.title}}</a>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-2">
                <div class="small mb-2 ">
                    Автор: <a class="link link--color-blue mr-2" href="#">{{post.autor}}</a> {{post.date | fdate}}
                </div>
                <post-tag class="d-none   "
                        :source="post.source"
                        :format="post.format"
                        :tags="post.tags"
                ></post-tag>
            </div>
            <div class="mb-3">{{post.teaser}}</div>

            <div class="post-large__img-wrap">
                <img :src="post.img" alt="" class="post-large__img">
            </div>
            <!--<div class="post-large__image-wrap"-->
            <!--v-bind:style="{ backgroundColor: post.bgColor,  backgroundImage: 'url(' +  post.img + ')'}">-->
            <!--<div class="post-large__fotmat-icon-wrap" v-bind:style="{ color: post.textColor}">-->

            <!--<div class="post-large__fotmat-icon" v-if="post.format=='Видео'">-->
            <!--<div class="icon-video"></div>-->
            <!--</div>-->
            <!--<div class="post-large__fotmat-icon" v-if="post.format=='Фото'">-->
            <!--<div class="icon-photo"></div>-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->


            <post-info

                    :like="post.like"
                    :comment="post.comment"
                    :view="post.view"
            ></post-info>
        </div>
    </div>

</template>

<script>
    import postInfo from './parts/post-info.vue'
    import postTag from './parts/post-tag.vue'
    import postTeaser from './parts/post-teaser.vue'

    export default {
        components: {
            postInfo,
            postTag,
            postTeaser
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
                        bgColor: "#eee",
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
    .post-large__image-wrap {
        overflow: hidden;
        border-radius: .5rem;
        margin-bottom: 1rem;
        width: 100%;
        max-width: 100%;
        height: auto;
        min-height: 170px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .post-large__img-wrap {
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 1.5rem;
    }

    .post-large__img {
        width: 100%;
        height: auto;
    }

    /*@media (max-width: 768px){
    .post-large__image-wrap{
        background-position: center  ;
    }
    }*/

    .post-large__fotmat-icon {

        display: inline-block;
        font-size: 23px;
        margin-right: 12px;
    }

    .post-large__fotmat-icon-wrap {
        padding: 1.5rem 0 0 1.5rem;

    }


</style>