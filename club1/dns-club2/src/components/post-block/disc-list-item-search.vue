<template>
    <div class="discussions-search__item">
        <div class="d-flex flex-column">
            <div class="d-flex">
                <div class="discussions-search__info">
                    <div class="discussions-search__title mb-2 mb-md-3 h2">
                        <router-link class="link link--color-black"
                                     :to="{ name: 'discussion', params: { id: post.id }}">
                            <div class="" v-html="post.title"></div>
                        </router-link>
                    </div>
                    <div class="discussions-search__source small d-flex flex-column-reverse flex-md-row align-items-start align-items-md-center ">
                        <!--<div class="discussions-search__source-icon-wrap">-->
                        <!--<div class="icon-dots-hor"></div>-->
                        <!--</div>-->
                        <div class="discussions-search__ d-flex align-items-center small mb-2 mr-4">
                            <img :src="post.autorImg" alt="" class="discussions-search__author-img  rounded-circle">
                            <a class="link link--color-grey mr-2"
                               href="#">{{post.autor}}</a>
                            <div class=""> {{post.date | fulldate}}</div>

                        </div>
                        <div class="mb-2 ">
                            <a href="#" class="link link--color-grey ">{{post.source.title}} </a>·
                            <a href="#" class="link link--color-grey ">{{post.source.parent.title}}</a>
                        </div>
                    </div>

                    <div class="discussions-search__teaser  mb-3">
                        <div v-html="post.teaser"></div>
                    </div>

                </div>
                <div v-if="post.products" class="discussions-search__img-wrap">
                    <img :src="post.products[0].img" alt="" class="discussions-search__img">

                    <!--<div class="discussions-search__img-title ">{{post.products.length}} товар</div>-->
                </div>
            </div>

            <div v-if="post.answers" class="discussions-search__answers mb-3">
                <div class="discussions-search__answer-item" v-for="answer in post.answers">
                    <div class="d-flex small">
                        <img :src="answer.autorImg" alt="" class="discussions-search__author-img  rounded-circle">
                        <a class="link link--color-grey mr-2"
                           href="#">{{answer.autor}}</a>
                        <!--<div class=" d-inline-block mr-2 icon-reply"></div>-->
                        <!--<a class="link link&#45;&#45;color-grey mr-2" href="#">{{answer.replyAuthor}}</a>-->
                        <div class=""> {{answer.date | fulldate}}</div>
                    </div>

                    <div class="small link link--color-grey" v-html="answer.message"></div>
                </div>

            </div>
            <div v-if="post.products && post.products[0].title" class="discussions-search__product small mb-3">Товары в теме: <span v-html="post.products[0].title"></span> </div>

            <div class="discussions-search__control d-flex flex-wrap align-items-center">
                <post-info class="mr-3  "
                           :like="post.like"
                           :comment="post.comment"
                           :view="post.view"
                           :lastactivity="post.lastactivity"
                           border="false"
                ></post-info>
                <a href="#" class="link link--color-blue small  "> Ответить</a>
            </div>
        </div>
    </div>
</template>

<script>
    import postInfo from './parts/post-info.vue'


    export default {
        components: {
            postInfo,

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

<style lang="scss">

   .discussions-search__item .highlight{
        background: #fff2bf;
    }

    .discussions-search__answers {
        padding-left: 25px;
        border-left: 1px solid #eee;
    }

    .discussions-search__answer-item{
        margin-bottom: 1.25rem;

        &:last-child{
             margin-bottom: 0;
         }
    }

    .discussions-search__item {
        margin-bottom: 1.5rem;
    }

    .discussions-search__img-wrap {
        margin-left: 2rem;
        margin-top: 2rem;
        display: none;
        text-align: center;

    }

    .discussions-search__img {
        width: 80px;
        height: auto;
    }

    @media (min-width: 768px) {
        .discussions-search__img-wrap {
            display: block;
            text-align: center;
        }

        .discussions-search__item {
            margin-bottom: 3rem;
        }

    }

    @media (min-width: 1200px) {
        .discussions-search__img-wrap {
            display: block;
        }

        .discussions-search__img {
            width: 100px;
            height: auto;
            margin-bottom: 1rem;
        }

    }

    .discussions-search__img-title {
        border: 1px solid #eee;
        border-radius: 5rem;
        display: inline;
        padding: .25rem .5rem;
        font-size: 0.875rem;
        color: #6c757d;
        text-align: center;
        line-height: 14px;
    }

    .discussions-search__author-img {
        width: 20px;
        height: 20px;
        margin-right: .5rem;
        display: block;
        border-radius: 50% !important;
    }

    /*.discussions-search__control, .discussions-search__teaser{*/
    /*padding-left: 28px;*/
    /*}*/
</style>