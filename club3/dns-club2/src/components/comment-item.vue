<template>
    <div class="comment d-flex">
        <div class="mr-3 comment__comment-author-img-wrap">
            <img :src="comment.autorImg" alt="" class="comment__comment-author-img rounded-circle">
        </div>
        <div class="d-flex flex-column">
            <div class="d-flex">
                <img :src="comment.autorImg" alt="" class="comment__comment-author-img-mob rounded-circle">
                <div class="">{{comment.autor}}</div>
            </div>

            <div class="small mb-2 text-muted">{{comment.date | fdate}}</div>
            <div class="mb-3">{{comment.comment}}</div>
            <div class="d-flex">
                <div class="comment__rate d-flex mr-4">

                    <div class="comment__rate-up icon-thumb-up"></div>
                    <div class="comment__rate-count small">{{comment.rate}}</div>
                    <div class="comment__rate-down icon-thumb-down"></div>
                </div>

                <div class="small mr-3">
                    <div class="link link--color-blue">Ответить</div>
                </div>
                <div class="small ml-auto">
                    <div v-if="comment.child  && childExtend" class="link link--color-grey link--doted " @click="childExtend=!childExtend">Свернуть ответы
                        {{comment.child.length}}
                    </div>
                    <div v-if="comment.child  && !childExtend" class=" link link--color-grey link--doted " @click="childExtend=!childExtend">Развернуть ответы
                        {{comment.child.length}}
                    </div>
                </div>


            </div>

            <div v-if="comment.child && childExtend" class="comment__child-wrap mt-5">
                <comment-item v-for="comment in comment.child" :comment="comment" :key="comment.id"></comment-item>
            </div>

        </div>

    </div>
</template>

<script>
    import commentItem from "./comment-item.vue"

    export default {
        name: "comment-item",
        components: {
            commentItem
        },
        props: {
            comment: {
                type: null,
                default: ""
            }
        },

        data: function () {
            return {
                childExtend: true

            }
        }
    }
</script>

<style lang="scss">
    .comment {
        margin-bottom: 2rem;

        &:last-child {
            margin-bottom: 0;
        }

        &__comment-author-img-wrap {
            display: none;
        }

        &__comment-author-img-mob {
            width: 20px;
            height: 20px;
            margin-right: .5rem;
            display: block;
        }

        &__child-wrap {
            padding-left: 1rem;
            border-left: 1px solid #eee;
        }

        &__rate-up {
            font-size: 18px;
            cursor: pointer;
            color: #6BA833;
            opacity: .7;
            &:hover {
                opacity: 1;
            }

        }
        &__rate-count {
            margin: 0 14px
        }

        &__rate-down {
            font-size: 18px;
            padding-top: 2px;
            cursor: pointer;
            color: #CC2E12;
            opacity: .7;
            &:hover {
                opacity: 1;
            }
        }
    }

    @media (min-width: 768px) {
        .comment {
            &__comment-author-img-mob {
                display: none;
            }
            &__comment-author-img-wrap {
                display: block;
            }

            &__comment-author-img {
                width: 45px;
                height: 45px;

            }
            &__child-wrap {
                padding-left: 1rem;
                border-left: 1px solid #eee;
            }
        }
    }
</style>