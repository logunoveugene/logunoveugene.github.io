<template>
    <div class="post">
        <div class="post-lock"
             @mouseover="isHovered = true" @mouseleave="isHovered = false"

             :style="[isHovered ?   {   backgroundImage: 'url(' +  post.img + ')',
                        backgroundColor: post.bgColor,
                                        boxShadow: 'inset 360px 0px 100px -60px ' +  post.bgColor + ', 0 12px 40px -10px'+ post.bgColor +'80, 0 12px 30px -10px rgba(0,0,0,0.2)'}:
                      { backgroundImage: 'url(' +  post.img + ')',
                        backgroundColor: post.bgColor,
                        boxShadow: 'inset 360px 0px 100px -60px ' +  post.bgColor}
                     ]" >

            <div class="post-lock__info align-self-stretch">
                <post-tag
                        :source="post.source"
                        :format="post.format"
                        :tags="post.tags"
                        :color="post.textColor"
                ></post-tag>

                <div class="post-lock__title">
                    <router-link class="link link--color-black link--opacity-hover"
                                 v-bind:style="{ color: post.textColor }"
                                 :to="{ name: 'post', params: { id: post.id }}">
                        {{post.title}}
                    </router-link>
                </div>
                <div class="small mb-3" v-bind:style="{ color: post.textColor }">
                    Автор: <a v-bind:style="{ color: post.textColor }" class="link link--color-blue link--opacity-hover mr-2" href="#">{{post.autor}}</a>
                    {{post.date | fdate}}
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
            return {
                isHovered: false
            }
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
        min-height: 300px;
        transition: transform .15s ease-in, box-shadow .2s ease-in;

    }

    .post-lock__info {
        display: flex;
        flex-direction: column;
        text-align: left;
        align-items: start;
        align-self: stretch;
    }

    .post-lock__title {
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        width: 40%;
        margin-bottom: .5rem;
        /*	width: calc(100% - 4rem)*/
    }

    @media (max-width: 768px) {
        .post-lock__title {
            font-size: 28px;
            line-height: 34px;
        }

        .post-lock__title {
            width: 100%;

        }

        .post-lock {
            background-image: none !important;
        }
    }
    @media (max-width: 1200px) {
        .post-lock {

            background-size: cover ;
        }
    }


</style>