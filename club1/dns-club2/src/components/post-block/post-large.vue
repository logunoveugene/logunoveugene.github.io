<template>
    <div class="post">
        <div class="post-large">

            <div class="post-large__title  mb-3 ">
                <div class="h3 d-inline-block mb-0 mr-1"  v-if="post.autor==='1'">
                    <a href="#" class="link link--color-grey">
                        <span class=" icon-pen"></span>
                    </a>
                </div>
                <router-link class="link link--color-black" :to="{ name: 'post', params: { id: post.id }}">
                    <span class="text-warning" v-if="post.isDraft" >[Черновик]</span>  {{post.title}}
                </router-link>
            </div>
            <div class="d-flex align-items-start align-items-md-center flex-column flex-md-row justify-content-between">
                <div class="small mb-3 d-flex align-items-center  ">
                    <img :src="post.autorImg" alt="" class="post-large__author-img  rounded-circle">
                    <div class="mr-2">
                        <author :author="post.autor"

                                linkTag="link--color-blue"/>
                    </div>
                    {{post.date | fdate}}
                </div>
                <post-tag-full class="mb-3"
                               :source="post.source"
                               :format="post.format"
                               :tags="post.tags"
                ></post-tag-full>
            </div>
            <div class="mb-3">{{post.teaser}}</div>

            <div class="post-large__img-wrap">
                <img :src="post.img" alt="" class="post-large__img">
            </div>
            <post-info
                    :like="post.like"
                    :comment="post.comment"
                    :view="post.view"
                    border="false"
            ></post-info>
        </div>
    </div>

</template>

<script>
    import postInfo from './parts/post-info.vue'
    import postTagFull from './parts/post-tag-full.vue'
    import postTeaser from './parts/post-teaser.vue'
    import author from "./parts/author.vue"

    export default {
        components: {
            postInfo,
            postTagFull,
            postTeaser,
            author
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

    .post-large__draft {
        background-color: #fff2bf;
        display: inline-block;
        padding: 2px 8px;

        border-radius: 4px;
        font-size: .875rem;
    }

    .post-large__img-wrap {
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 1rem;
    }

    .post-large__img {
        width: 100%;
        height: auto;
    }

    .post-large__title {
        font-size: 1.125rem;
        line-height: 1.3;
        font-weight: 700;

    }

    @media (min-width: 768px) {
        .post-large__title {
            font-size: 1.5rem;
            line-height: 1.3;
            font-weight: 700;
        }
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

    .post-large__author-img {
        width: 20px;
        height: 20px;
        margin-right: .5rem;
        display: block;
        border-radius: 50% !important;
    }


</style>