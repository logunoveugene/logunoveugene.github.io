<template>
    <div class="post">
        <div class="post-lock"
             v-bind:style="{  backgroundImage: 'url(' +  post.img + ')', backgroundColor: post.bgColor,  boxShadow: 'inset 360px 0px 100px -60px ' +  post.bgColor}">

            <div class="post-lock__info">
                <post-tag
                        :source="post.source"
                        :format="post.format"
                        :tags="post.tags"
                        :color="post.textColor"
                ></post-tag>

                <div class="post-lock__title">
                    <a v-bind:style="{ color: post.textColor }" href="#"
                       class="link link--color-black">{{post.title}}</a>
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
</template>

<script>
    import postInfo from './parts/post-info.vue'
    import postTag from './parts/post-tag.vue'

    export default {
        name: "post-wide",
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
    .post-lock {
        background: #f6f6f6;
        border: 1px solid #eee;
        border-radius: 8px;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 2rem;
        background-size: contain;
        background-position: right;
        background-repeat: no-repeat;

    }

    .post-lock__info {
        display: flex;
        flex-direction: column;
        text-align: left;
        align-items: start;
        height: 100%;
    }

    .post-lock__title {
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        width: 40%;
        margin-bottom: 1.5rem;
        /*	width: calc(100% - 4rem)*/
    }

    @media (max-width: 768px) {
        .post-lock__title {
            font-size: 28px;
            line-height: 34px;
        }
    }


</style>