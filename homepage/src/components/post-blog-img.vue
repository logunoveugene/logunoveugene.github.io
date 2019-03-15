<template>
    <div class="post-blog">
        <div class="post-blog-img">
            <div class="post-blog-img__image-wrap d-flex flex-column align-items-center">

                <img class="post-blog-img__image" :src="post.img" alt="">


            </div>
            <div class="post-blog-img__tag">
                <post-tag class="justify-content-center" :source="post.source"
                          :format="post.format"
                          :tags="post.tags"
                ></post-tag>
            </div>

            <div class="post-blog-img__title-wrap mb-auto ">

                <a href="#" class="post-blog-img__title h5 link link--color-black"
                   @mouseover="titleIsHovered=true"
                   @mouseleave="titleIsHovered=false"
                   :class="{'post-blog-img__title--active': titleIsHovered && post.title.length>75,'post-blog-img__title--shadow': post.title.length>75}"

                >{{post.title}}</a>

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
    import postInfo from './post-info.vue'
    import postTag from './post-tag.vue'
    import postTeaser from './post-teaser.vue'

    import dayjs from 'dayjs'
    import relativeTime from 'dayjs/plugin/relativeTime'
    import 'dayjs/locale/ru'

    dayjs.locale('ru')
    dayjs.extend(relativeTime)


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
        filters: {
            fdate: function (value) {
                return dayjs().to(dayjs(value));
            }
        },

        data: function () {
            return {
                titleIsHovered: false
            }
        }


    }
</script>

<style>
    .post-blog {
        margin-bottom: 1.5rem;
    }

    .post-blog-img {
        background: #fff;
        padding: 1.5rem 1.5rem 2rem 1.5rem;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;

    }

    .post-blog-img__tag {
        max-height: 18px;
        overflow: hidden;
        margin-bottom: .75rem;
    }

    .post-blog-img__title-wrap {
        position: relative;
        height: 59px;
        margin-bottom: 1.25rem;
    }

    .post-blog-img__title {
        transition: all .15s ;
        max-height: 59px;
        overflow: hidden;
        display: block;

    }

    .post-blog-img__title--active {
        width: 100%;
        position: absolute;
        max-height: inherit;
        background: white;
        box-shadow: 0px 15px 20px -20px black;
        padding-bottom: 16px;
        border-radius: 0 0 8px 8px;
    }

    .post-blog-img__image-wrap {
        overflow: hidden;
        border-radius: .5rem .5rem 0 0;
        margin-bottom: 1.5rem;
        max-width: 50%;
        margin-right: auto;
        margin-left: auto;
        height: 90px;
        position: relative;

    }

    .post-blog-img__image {
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 100%;

    }

    .post-blog-img__title--shadow::before {
        display: block;
        content: '';

        box-shadow: inset  0 -10px 10px 0 rgba(256,256,256,.8);
        z-index: 70;
        height: 10px;
        width: 100%;
        position: absolute;
        bottom: 0;
    }


</style>