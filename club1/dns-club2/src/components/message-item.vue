<template>
    <div class="message-old mb-4 pb-2">


        <div class="d-flex mb-2 small">
            <img :src="message.autorImg" alt="" class="message-old__author-img rounded-circle">
            <!--<a class="link link&#45;&#45;color-grey mr-2"-->
            <!--href="#">{{post.autor}}</a>-->
            <div class="mr-2">
                <author :author="message.autor" :authorImg="message.autorImg"/>
            </div>


            <div class=""> {{message.dateCreate | fdate}}</div>
        </div>
        <div class="d-flex justify-content-between mb-2">
            <div @click="descExtend=!descExtend" class="link link--color-blue">{{message.title}}</div>


            <v-popover offset="0">
                <div class="small  menu-detail">
                    <div class="icon-menu"></div>
                </div>
                <template slot="popover">

                    <div class="py-2 text-left px-3 ">
                        <a href="" class="link link--color-grey">Удалить сообщение</a>
                    </div>
                    <div class="py-2 pb-3  text-left px-3 ">
                        <a href="" class="link link--color-grey">Заблокировать пользователя</a>
                    </div>

                </template>
            </v-popover>

        </div>


        <div class="bg-light p-3 mb-3" v-if="descExtend">
            <div v-html="message.desc"></div>
        </div>

        <div v-if="message.type==='incomingMailList' && !replyBox" class="link link--color-grey small"
             @click="replyBox=!replyBox">
            Ответить
        </div>

        <div class="mt-3 mb-5" v-if="replyBox">
            <div class="d-flex flex-column">
                <div class="h2">Ответить на сообщение</div>
                <div class="message-old__reply-box">
                    <editor-tip-tap-comment></editor-tip-tap-comment>
                </div>
                <div class=" d-flex align-items-center">
                    <button type="button" class="btn btn--color-white ">Отправить</button>
                    <div class="small">
                        <div v-if="replyBox" class=" ml-4 link link--color-grey" @click="replyBox=!replyBox">
                            Отменить
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

    import editorTipTapComment from "./editor-tip-tap-comment.vue"
    import author from "./post-block/parts/author.vue"

    export default {
        name: "comment-item",
        components: {

            author,
            editorTipTapComment
        },
        props: {
            message: {
                type: null,
                default: ""
            }
        },

        data: function () {
            return {

                descExtend: false,
                replyBox: false


            }
        },

    }
</script>

<style lang="scss">
    .message-old__author-img {
        width: 20px;
        height: 20px;
        margin-right: .5rem;
        display: block;
        border-radius: 50% !important;
    }

    .message-old__reply-box {
        border: 1px solid #e8e3e3;
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 1rem;
        max-width: 100%;
    }


    .menu-detail {
        font-size: 14px;
        color: #ccc;
        cursor: pointer;
    }
</style>