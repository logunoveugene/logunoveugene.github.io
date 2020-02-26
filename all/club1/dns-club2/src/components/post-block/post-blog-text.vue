<template>
    <div class="post-blog">
        <div class="post-blog-text">
            <post-tag class="justify-content-center" :source="post.source"
                      :format="post.format"
                      :tags="post.tags"
            ></post-tag>
            <div class="post-blog-text__title  mb-3 h2">
                <router-link class="link link--color-black" :to="{ name: 'post', params: { id: post.id }}">
                    {{post.title}}
                </router-link>
            </div>
            <div class="small mb-3 d-flex justify-content-center">
                Автор:
                <div class="ml-1 mr-2">
                    <author :author="post.autor"

                            linkTag="link--color-blue"/>
                </div>

                <!--<a class="link link&#45;&#45;color-blue mr-2" href="#">{{post.autor}}</a> -->
                {{post.date | fdate}}
            </div>
            <post-teaser
                    :teaser="post.teaser">
            </post-teaser>

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
    import postTeaser from './parts/post-teaser.vue'
    import author from "./parts/author.vue"

    export default {


        name: "post-blog-text",


        components: {
            postInfo,
            postTag,
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
                        id: 5,
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
            return {
                isHovered: false
            }
        }


    }
</script>

<style>
    .post-blog-text {
        background: #fff;
        padding: 2.5rem 1.5rem 2rem 1.5rem;
        border-radius: .5rem;
        text-align: center;

    }


</style>
