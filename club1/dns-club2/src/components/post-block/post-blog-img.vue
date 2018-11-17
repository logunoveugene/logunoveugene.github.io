<template>
    <div class="post-blog">

        <div class="post-blog-img"
             v-bind:style="{  backgroundColor: post.bgColor}">
            <div class="post-blog-img__img-wrap">
                <div v-bind:style="{ boxShadow: '0px -100px 60px -50px inset ' +  post.bgColor}"
                     class="post-blog-img__img-shadow"></div>
                <img :src="post.img" class="post-blog-img__img" alt="">
            </div>
            <div class="post-blog-img__info-wrap">
                <post-tag class="justify-content-center mt-auto post-blog-img__tag" :source="post.source"
                          :format="post.format"
                          :tags="post.tags"
                          :color="post.textColor"
                          v-bind:style="{ color: post.textColor }"
                ></post-tag>

                <div class="post-blog-img__title mb-3 h2">
                    <router-link v-bind:style="{ color: post.textColor }"
                                 class="link link--color-black"
                                 :to="{ name: 'post', params: { id: post.id }}">
                        {{post.title}}
                    </router-link>
                </div>

                <div class="small mb-3" v-bind:style="{ color: post.textColor }">
                    Автор: <a v-bind:style="{ color: post.textColor }" class="link link--color-blue mr-2" href="#">{{post.autor}}</a>
                    {{post.date | fdate}}
                </div>
                <post-teaser
                        :teaser="post.teaser"
                        :color="post.textColor"
                >
                </post-teaser>
                <post-info
                        :like="post.like"
                        :comment="post.comment"
                        :view="post.view"
                ></post-info>
            </div>
        </div>
    </div>
</template>
<script>
    import postInfo from './parts/post-info.vue'
    import postTag from './parts/post-tag.vue'
    import postTeaser from './parts/post-teaser.vue'


    export default {
        name: "post-blog-mg",
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
    .post-blog-img {
        background: #fff;
        overflow: hidden;
        border-radius: .5rem;
        text-align: center;
        background-position: center top;
        background-repeat: no-repeat;
        background-size: contain;

    }

    .post-blog-img__img-wrap {
        position: relative;
    }

    .post-blog-img__img {
        width: 100%;
    }

    .post-blog-img__img-shadow {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1000;
    }

    .post-blog-img__info-wrap {
        padding: 0 1.5rem 2rem 1.5rem;
    }

    .post-blog-img__image-wrap {
        overflow: hidden;
        border-radius: .5rem;
        position: relative;
        width: 100%;
        max-width: 100%;
        height: auto;
        background-position: center top;
        background-repeat: no-repeat;
        background-size: contain;
        min-height: 200px;

    }

    .post-blog-img__info-title {
        background: linear-gradient(to top, rgba(256, 256, 256, 0.9) 35%, rgba(0, 0, 0, 0) 80%);
        height: 200px;
    }

    .post-blog-img__image {
        width: auto;
        max-width: 100%;
        height: auto;

    }


</style>