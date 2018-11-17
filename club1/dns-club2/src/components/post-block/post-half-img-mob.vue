<template>
    <div class="post">
        <div class="post-half-mob d-flex">

            <div class="d-flex flex-column">
                <div class="post-half-mob__title  mb-1 h4">
                    <router-link class="link link--color-black" :to="{ name: 'post', params: { id: post.id }}">
                        {{post.title}}
                    </router-link>
                </div>
                <div class="small mb-1">
                    {{post.date | fdate}}
                </div>
                <post-info
                        :like="post.like"
                        :comment="post.comment"
                        :view="post.view"
                        border="false"
                ></post-info>
            </div>
            <div class="">
                <div @mouseover="isHovered = true" @mouseleave="isHovered = false"
                     class="post-half-mob__image-wrap  ml-3"
                     :style="{ backgroundColor: post.bgColor,  backgroundImage: 'url(' +  post.img + ')'}"
                >
                </div>
            </div>
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
            return {
                isHovered: false
            }
        }


    }
</script>

<style>


    .post-half-mob__image-wrap.post-half-mob__image-wrap--hovered {
        box-shadow: 0 12px 40px -10px rgba(0, 0, 0, .4);
        /*background-size: 105%;*/
    }

    .post-half-mob__image-wrap {
        overflow: hidden;
        border-radius: .25rem;
        margin-bottom: 1rem;
        width: 100px;
        height: 55px;
        /*min-height: 170px;*/
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100%;
        transition: transform .15s ease-in, box-shadow .2s ease-in;
        cursor: pointer;

    }

    /*@media (max-width: 768px){
    .post-half-mob__image-wrap{
        background-position: center  ;
    }
    }*/

    .post-half-mob__fotmat-icon {

        display: inline-block;
        font-size: 23px;
        margin-right: 12px;
    }

    .post-half-mob__fotmat-icon-wrap {
        padding: 1.5rem 0 0 1.5rem;

    }


</style>