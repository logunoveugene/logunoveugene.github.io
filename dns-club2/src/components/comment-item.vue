<template>
    <div class="comment d-flex">
        <div class="mr-3 comment__comment-author-img-wrap">
            <img :src="comment.autorImg" alt="" class="comment__comment-author-img rounded-circle">
        </div>
        <div class="w-100 d-flex flex-column">
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-column">
                    <div class="d-flex">
                        <img :src="comment.autorImg" alt="" class="comment__comment-author-img-mob rounded-circle">
                        <div class="">{{comment.autor}}</div>
                    </div>
                    <div class="small mb-2 text-muted">{{comment.date | fdate}}</div>
                </div>


                <v-popover offset="0">
                    <div class="comment__menu">
                        <div class="icon-dots-hor"></div>
                    </div>
                    <template slot="popover">
                        <div class="py-3 px-3 bb-1">Пожаловаться</div>
                        <div class="py-3 px-3  ">Заблокировать</div>
                    </template>
                </v-popover>


            </div>
            <div class="mb-3">{{comment.comment}}</div>
            <div class="d-flex">
                <div class="comment__rate d-flex mr-4">

                    <div class="comment__rate-up icon-thumb-up"></div>
                    <div class="comment__rate-count small">{{comment.rate}}</div>
                    <div class="comment__rate-down icon-thumb-down"></div>
                </div>

                <div class="small mr-3">
                    <div v-if="!replyBox" class="link link--color-blue" @click="replyBox=!replyBox">Ответить</div>

                </div>
                <div class="small ml-auto">
                    <div v-if="comment.child  && childExtend" class="link link--color-grey link--doted "
                         @click="childExtend=!childExtend">Свернуть ответы
                        {{comment.child.length}}
                    </div>
                    <div v-if="comment.child  && !childExtend" class=" link link--color-grey link--doted "
                         @click="childExtend=!childExtend">Развернуть ответы
                        {{comment.child.length}}
                    </div>
                </div>
            </div>
            <div class="mt-4" v-if="replyBox">
                <div class="d-flex flex-column">
                    <div class="h2">Добавление ответа</div>
                    <div class="comment__reply-box">
                        <froala :tag="'textarea'" :config="config" v-model="replyText"></froala>
                    </div>
                    <div class=" d-flex align-items-center">
                        <button type="button" class="btn btn--color-white ">Опубликовать</button>
                        <div class="small">
                            <div v-if="replyBox" class=" ml-4 link link--color-grey" @click="replyBox=!replyBox">
                                Отменить
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="comment.child && childExtend" class="comment__child-wrap">
                <comment-item v-for="comment in comment.child" :comment="comment" :key="comment.id"></comment-item>
            </div>

        </div>
        <v-dialog/>
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
                childExtend: true,
                replyBox: false,
                config: {
                    toolbarInline: true,
                    placeholderText: 'Вам слово...',
                    heightMin: 80,
                    charCounterMax: 140,
                    quickInsertButtons: ['image', 'video', 'table'],
                    toolbarButtons: ['bold', 'italic', 'quote', 'paragraphFormat', 'insertLink', 'underline', 'formatOL', 'formatUL'],
                    events: {
                        'froalaEditor.initialized': function (e, editor) {
                            editor.events.focus(true)
                        }
                    }
                },
                replyText: ''

            }
        },

    }
</script>

<style lang="scss">
    .fr-box {
        position: relative;
        max-width: 100%;
        height: 100%;
    }

    .fr-box .fr-counter {
        border: none;
        top: 0;
        font-family: "PT Sans";
        font-size: 14px;

    }

    .comment {
        margin-bottom: 2rem;

        &__reply-box {
            border: 1px solid #e8e3e3;
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 1rem;
            max-width: 100%;
        }

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
            margin-top: 2rem;
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

        &__menu {
            font-size: 22px;
            color: #ccc;
            cursor: pointer;

            &:hover {
                color: #999;
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
                width: 40px;
                height: 40px;

            }
            &__child-wrap {
                padding-left: 1rem;
                border-left: 1px solid #eee;
                margin-top: 3rem;
            }

        }
    }


</style>