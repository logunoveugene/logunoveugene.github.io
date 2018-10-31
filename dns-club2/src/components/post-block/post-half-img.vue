<template>
    <div class="post">
        <div class="post-half">
            <div class="post-half__image-wrap"
                 v-bind:style="{ backgroundColor: post.bgColor,  backgroundImage: 'url(' +  post.img + ')'}">
                <div class="post-half__fotmat-icon-wrap" v-bind:style="{ color: post.textColor}">

                    <div class="post-half__fotmat-icon" v-if="post.format=='Видео'">
                        <div class="icon-video"></div>
                    </div>
                    <div class="post-half__fotmat-icon" v-if="post.format=='Фото'">
                        <div class="icon-photo"></div>
                    </div>
                </div>

            </div>
            <post-tag
                    :source="post.source"
                    :format="post.format"
                    :tags="post.tags"

            ></post-tag>

            <div class="post-half__title  mb-3 h2">
                <router-link class="link link--color-black" :to="{ name: 'post', params: { id: post.id }}">
                    {{post.title}}
                </router-link>
            </div>
            <div class="small mb-3">
                Автор: <a class="link link--color-blue mr-2" href="#">{{post.autor}}</a> {{post.date | fdate}}
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
    import postTag from './parts/post-tag.vue'

    export default {
        components: {
            postInfo,
            postTag
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
    .post-half__image-wrap {
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

    /*@media (max-width: 768px){
    .post-half__image-wrap{
        background-position: center  ;
    }
    }*/

    .post-half__fotmat-icon {

        display: inline-block;
        font-size: 23px;
        margin-right: 12px;
    }

    .post-half__fotmat-icon-wrap {
        padding: 1.5rem 0 0 1.5rem;

    }


</style>