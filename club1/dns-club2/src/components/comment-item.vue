<template>
    <div class="comment d-flex" >
        <div :style="{opacity: (comment.rate>=0)?1:(comment.rate>-10)?.5: .25 }" class="mr-3 comment__comment-author-img-wrap">
            <img :src="comment.autorImg" alt="" class="comment__comment-author-img rounded-circle">
        </div>
        <div class="w-100 d-flex flex-column">
            <div :style="{opacity: (comment.rate>=0)?1:(comment.rate>-10)?.5: .25 }" class="d-flex justify-content-between">
                <div class="d-flex flex-column">
                    <div class="d-flex">
                        <img :src="comment.autorImg" alt="" class="comment__comment-author-img-mob rounded-circle">

                        <author :author="comment.autor"/>


                    </div>
                    <div class="small mb-2 text-muted">
                        <div class="d-inline-block" v-if="comment.parentId">
                            <div class=" d-inline-block mr-2 icon-reply"></div>
                            <div class="mr-1 d-inline-block">
                                <a href="" class="link link--color-grey">Василий</a>
                            </div>
                        </div>
                        <div class="d-inline-block ">{{comment.date | fdate}}</div>
                    </div>
                </div>
                <div class="d-flex">


                    <v-popover offset="0">
                        <div class="comment__menu">
                            <div class="icon-dots-hor"></div>
                        </div>
                        <template slot="popover">
                            <div class="py-2 pt-3 text-left px-3 ">
                                <a href="" class="link link--color-grey">Скопировать ссылку</a>
                            </div>
                            <div class="py-2 text-left px-3 ">
                                <a href="" class="link link--color-grey">Пожаловаться</a>
                            </div>
                            <div class="py-2 pb-3  text-left px-3 ">
                                <a href="" class="link link--color-grey">Заблокировать</a>
                            </div>

                        </template>
                    </v-popover>


                </div>

            </div>
            <div :style="{opacity: (comment.rate>=0)?1:(comment.rate>-10)?.5: .25 }" class="mb-3" v-html="comment.comment"></div>
            <div :style="{opacity: (comment.rate>=0)?1:(comment.rate>-10)?.5: .25 }" class="d-flex align-items-center">
                <div class="comment__rate d-flex mr-4 align-items-center">

                    <div class="comment__rate-up icon-thumb-up pt-1" @click="++comment.rate"></div>
                    <div class="comment__rate-count small" :class="{'comment__rate-count--red': comment.rate<0 }">
                        <span v-if="comment.rate>0">+</span>
                        {{comment.rate}}
                    </div>
                    <div class="comment__rate-down icon-thumb-down " @click="--comment.rate"></div>
                </div>

                <div class="small mr-3">
                    <div v-if="!replyBox" class="link link--color-blue" @click="replyBox=!replyBox">Ответить</div>

                </div>
                <div class="small ml-auto">
                    <div v-if="comment.child && comment.child.length>0   && childExtend" class="link link--color-grey link--doted "
                         @click="childExtend=!childExtend">Свернуть ответы
                        {{comment.child.length}}
                    </div>
                    <div v-if="comment.child && comment.child.length>0  && !childExtend" class=" link link--color-grey link--doted "
                         @click="childExtend=!childExtend">Развернуть ответы
                        {{comment.child.length}}
                    </div>
                </div>
            </div>
            <div class="mt-4" v-if="replyBox">
                <div class="d-flex flex-column">
                    <div class="h2">Добавление ответа</div>
                    <div class="comment__reply-box">
                        <editor-tip-tap-comment></editor-tip-tap-comment>
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

            <div v-if="comment.child &&  comment.child.length>0 && childExtend" class="comment__child-wrap">
                <comment-item v-for="comment in comment.child" :comment="comment" :key="comment.id"></comment-item>
            </div>

        </div>
        <v-dialog/>
    </div>
</template>

<script>
    import commentItem from "./comment-item.vue"
    import editorTipTapComment from "./editor-tip-tap-comment.vue"
    import author from "./post-block/parts/author.vue"

    export default {
        name: "comment-item",
        components: {
            commentItem,
            author,
            editorTipTapComment
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
    .tooltip-inner {
        max-width: 400px;
    }

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
        transition: opacity 1s;

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
            padding-top: 6px;
            color: #999;
            opacity: .7;
            &:hover {
                opacity: 1;
            }

        }
        &__rate-count {
            padding: 6px 10px;
            margin: 0 10px;
            background: #f0f8e1;
            border-radius: 8px;
            color: #6BA833;
            font-weight: 700;

            &--red {
                background: #f8e1eb;
                border-radius: 8px;
                color: #a81d00;
            }
        }

        &__rate-down {
            font-size: 18px;
            padding-top: 8px;
            cursor: pointer;
            color: #999;
            opacity: .7;
            &:hover {
                opacity: 1;
            }
        }
        &__menu-share {
            font-size: 18px;
            color: #ccc;
            cursor: pointer;

            &:hover {
                color: #999;
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

    .comment blockquote {
        padding-left: 15px;
        border-left: 3px solid #ff8700;
        padding-bottom: 0;
        margin-bottom: 2rem;
        font-style: italic;

    }

    .comment p:last-child {
        margin-bottom: 0;
    }


</style>