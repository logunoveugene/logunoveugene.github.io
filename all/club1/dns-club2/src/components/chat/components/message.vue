<script>
    import {mapGetters, mapState} from 'vuex';

    export default {
        computed: {
            // 使用 (...) 对象展开运算符将 getter 以及 state 混入 computed 对象中
            ...mapGetters([
                'session',
                'currentId'
            ]),
            ...mapState([
                'user'
            ])
        },
        filters: {
            // 将日期过滤为 hour:minutes
            time(date) {
                if (typeof date === 'string') {
                    date = new Date(date);
                }
                return date.getHours() + ':' + date.getMinutes();
            }
        },
        directives: {
            // 发送消息后滚动到底部
            'scroll-bottom': {
                // 在当前组件及其子组件更新完成后调用
                componentUpdated: function (el, binding, vnode) {
                    el.scrollTop = el.scrollHeight - el.clientHeight;
                }
            }
        }
    };
</script>

<template>
    <div class="message">
        <div class="empty-mesage" v-if="currentId==null">
            <div class="h1 mb-1 ">Выберите диалог</div>
            <div class="">или воспользуйтесь поиском для создания нового</div>
        </div>
        <div class="d-block d-md-none flex-fill bg-white mob-header" v-if="session">
            <div class="d-flex justify-content-between">

                <div class="d-flex align-items-center p-3">
                    <img class="avatar" width="30" height="30" :alt="session.user.name" :src="session.user.img">
                    <div class="font-weight-bold">
                        {{session.user.name}}
                    </div>
                </div>

                <v-popover offset="0">
                    <div class="massage-icon-menu p-3">
                        <div class="icon-menu pt-2"></div>
                    </div>
                    <template slot="popover">
                        <div class="py-2 py-3 text-center px-3 bb-1">
                            <a href="#" class="link link--color-grey">Удалить переписку</a>
                        </div>
                        <div class="py-2 py-3 text-center px-3">
                            <a href="#" class="link link--color-grey">В черный список</a>
                        </div>
                    </template>
                </v-popover>
            </div>

        </div>
        <ul class="message-list" v-if="session" v-scroll-bottom>

            <li v-for="(item, index) in session.messages">
                <div v-if="index >= 1 && `${session.messages[index - 1].date}` !== `${item.date}` || index === 0"
                     class="time" :class="{ self: item.self }">
                    <span>{{ item.date | time }}</span>
                </div>
                <div class="message-item" :class="{ self: item.self }">
                    <img class="avatar" width="30" height="30" :src="item.self ? user.img : session.user.img"/>
                    <div class="text">{{ item.content }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    .message-item {
        position: relative;

        display: flex;
        margin: 10px 0
    }

    .message-item.self {
        width: 100%;
        text-align: right;
        justify-content: flex-end;
    }

    .self .avatar {
        order: 50;
    }

    .message {
        /*padding: 0px   10px 0 0;*/
        position: relative;
        width: 100%;
        box-shadow: inset 0px -23px 20px -20px rgba(0, 0, 0, .1);

        .message-list {
            overflow-y: scroll;
            list-style-type: none;
            height: 100%;
            /*padding-right: 15px;*/
            padding: 16px;
        }

        .time {

            text-align: left;

            > span {
                display: inline-block;
                padding-left: 40px;
                font-size: 12px;
                color: #999;
                border-radius: 2px;

            }
        }
        .avatar {

            margin: 0 10px 0 0;
            border-radius: 50px;
        }
        .text {
            display: inline-block;
            position: relative;
            padding: 10px;
            max-width: calc(100% - 40px);
            min-height: 30px;
            line-height: 1.5;
            font-size: 14px;
            text-align: left;
            word-break: break-all;
            background-color: #fafafa;
            border-radius: 0 8px 8px 8px;
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.04), 0 2px 5px 0 rgba(0, 0, 0, 0.06);

        }

        .self {
            text-align: right;

            .avatar {
                float: right;
                margin: 0 0 0 10px;
            }
            .text {
                background-color: #FFF7DA;
                border-radius: 8px 0 8px 8px;
            }

        }
        .time.self {

            padding-right: 40px;

        }
    }

    .empty-mesage {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #999999;
    }

    .mob-header {
        border: 1px solid #eee;
        border-radius: 8px 8px 0 0;
    }
</style>