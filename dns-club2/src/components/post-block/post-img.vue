<template>
    <div class="post">
        <div class="post-image">
            <div class="post-image__image-wrap"

                 :style="[isHovered ? {  backgroundColor: post.bgColor,

                 boxShadow: '0 12px 40px -10px'+ post.bgColor +'80, 0 12px 30px -10px rgba(0,0,0,0.1)',
                 backgroundImage: 'url(' +  post.img + ')'} :
                 {  backgroundColor: post.bgColor, backgroundImage: 'url(' +  post.img + ')'}]"

                 @mouseover="isHovered = true" @mouseleave="isHovered = false"
            >
                <div class=" post-image__gradient-wrap"
                     v-bind:style="{ boxShadow: '0px 250px 100px -60px inset ' + post.bgColor+'CC, 0px 170px 40px -60px inset' + post.bgColor}">
                    <div class="post-image__info">
                        <div class="post__tags-wrap ">
                            <div class="post__fotmat-icon" v-bind:style="{ color: post.textColor }"
                                 v-if="post.format=='Видео'">
                                <div class="icon-video"></div>
                            </div>
                            <div class="post__fotmat-icon" v-bind:style="{ color: post.textColor }"
                                 v-if="post.format=='Фото'">
                                <div class="icon-photo"></div>
                            </div>
                            <post-tag
                                    :source="post.source"
                                    :format="post.format"
                                    :tags="post.tags"
                                    :color="post.textColor"
                            ></post-tag>
                        </div>
                        <div class="post__title  mb-2 h2" v-bind:style="{ color: post.textColor }">
                            <router-link class="link link--color-black"
                                         v-bind:style="{ color: post.textColor }"
                                         :to="{ name: 'post', params: { id: post.id }}">
                                {{post.title}}
                            </router-link>
                        </div>
                        <div class="small mb-3" v-bind:style="{ color: post.textColor }">
                            Автор: <a v-bind:style="{ color: post.textColor }" class="link link--color-blue mr-2"
                                      href="#">{{post.autor}}</a>
                            {{post.date |
                            fdate}}
                        </div>
                        <div class="mt-auto">
                            <post-info
                                    :like="post.like"
                                    :comment="post.comment"
                                    :view="post.view"
                            ></post-info>
                        </div>

                    </div>
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
                pallete: '',
                isHovered: false
            }
        }
    }
</script>

<style>
    .post-image {
        display: flex;
        height: 100%;
    }

    .post-image__image-wrap {
        overflow: hidden;
        border-radius: .5rem;
        position: relative;
        width: 100%;
        max-width: 100%;
        height: auto;
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: contain;
        transition: all .15s ease-in;
    }

    .post-image__image-wrap.post-image__image-wrap--hovered {
        box-shadow: 0 12px 40px -10px rgba(0, 0, 0, .4);

    }

    /*@media (max-width: 768px){
        .post-image__image-wrap{
            background-position: center  ;
        }
        }*/

    .post-image__gradient-wrap {
        padding: 2rem;
        width: 100%;
        height: 100%;
    }

    .post-image__info {

        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 230px;
    }

    .post-image__tags {
        font-size: 11px;
        text-transform: uppercase;
        display: flex;
        margin-bottom: 0.5rem;
        flex-wrap: wrap;

    }

    .post__tags-wrap {
        display: flex;
        align-items: center;
    }

    .post__fotmat-icon {

        display: inline-block;
        font-size: 23px;
        margin-right: 12px;

    }


</style>