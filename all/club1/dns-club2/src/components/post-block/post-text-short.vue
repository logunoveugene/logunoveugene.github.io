<template>
    <div class="post">
        <div class="post-text">
            <post-tag
                    :source="post.source"
                    :format="post.format"
                    :tags="post.tags"
            ></post-tag>

            <div class="post-text__title mb-3 h2">
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