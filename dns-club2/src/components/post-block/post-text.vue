<template>
    <div class="post">
        <div class="post-text">
            <post-tag
                    :source="post.source"
                    :format="post.format"
                    :tags="post.tags"
            ></post-tag>

            <div class="post-text__title mb-2 h2">
                <router-link class="link link--color-black" :to="{ name: 'post', params: { id: post.id }}">
                    {{post.title}}
                </router-link>
            </div>
            <div class="small mb-3">
                Автор: <a class="link link--color-blue mr-2" href="#">{{post.autor}}</a> {{post.date | fdate}}
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