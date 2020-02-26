<template>
    <div class="post">
        <div class="post-half">
            <router-link :to="{ name: 'post', params: { id: post.id }}">
                <div @mouseover="isHovered = true" @mouseleave="isHovered = false" class="post-half__image-wrap"

                     :style="[isHovered ? { backgroundColor: post.bgColor,

                  boxShadow: '0 12px 40px -10px'+ post.bgColor +'80, 0 12px 30px -10px rgba(0,0,0,0.1)',
                    backgroundImage: 'url(' +  post.img + ')'} :
                     { backgroundColor: post.bgColor,  backgroundImage: 'url(' +  post.img + ')'}]"

                >


                    <div class="post-half__fotmat-icon-wrap" v-bind:style="{ color: post.textColor}">

                        <div class="post-half__fotmat-icon" v-if="post.format=='Видео'">
                            <div class="icon-video"></div>
                        </div>
                        <div class="post-half__fotmat-icon" v-if="post.format=='Фото'">
                            <div class="icon-photo"></div>
                        </div>
                    </div>

                </div>
            </router-link>
            <post-tag

                    :source="post.source"
                    :format="post.format"
                    :tags="post.tags"

            ></post-tag>

            <div class="post-half__title  mb-2 h2">
                <div class="h3 d-inline-block mb-0 mr-1"  v-if="post.autor==='1'">
                    <a href="#" class="link link--color-grey">
                        <span class=" icon-pen"></span>
                    </a>
                </div>
                <router-link class="link link--color-black" :to="{ name: 'post', params: { id: post.id }}">
                    {{post.title}}
                </router-link>
            </div>
            <div class="small mb-3 d-flex">
                Автор:
                <div class="ml-1 mr-2">
                    <author :author="post.autor"
                            linkTag="link--color-blue  "/>
                </div>

                {{post.date | fdate}}
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
    import author from "./parts/author.vue"

    export default {
        components: {
            postInfo,
            postTag,
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
            return {
                isHovered: false
            }
        }


    }
</script>

<style>


    .post-half__image-wrap.post-half__image-wrap--hovered {
        box-shadow: 0 12px 40px -10px rgba(0, 0, 0, .4);
        /*background-size: 105%;*/
    }

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
        background-size: 100%;
        transition: transform .15s ease-in, box-shadow .2s ease-in, background-color 1s;
        cursor: pointer;

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