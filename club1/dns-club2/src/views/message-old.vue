<template>
    <div class="message-page mb-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="small mb-2 d-flex">
                        <router-link class="link link--color-black" to="/">Клуб</router-link>
                        <div class="mx-2">/</div>
                        <span class="text-muted">Сообщения</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <h1 class="page__title mb-0">Сообщения</h1>


                        <a href="#" @click="sendMode=!sendMode"
                           class=" link link--color-black new-post-btn d-lg-none d-block ">
                            <div class="new-post-btn-icon">
                                <div class=" text-success d-inline-block mr-2 icon-add"></div>
                            </div>
                            <div class="d-inline-block">Написать</div>
                        </a>

                    </div>
                </div>


                <div v-if="!sendMode" class="col-12 col-md-12 col-lg-8">
                    <nav class="nav nav-pills  nav-justified mb-4 ">
                        <a class="link link--pill   link--color-grey"
                           href="#"
                           v-bind:class="{'link--pill-active':selectedGroup==='incomingMailList'}"
                           v-on:click="selectList('incomingMailList')"
                        >Входящие</a>
                        <a class="link link--pill link--color-grey"
                           href="#"
                           v-bind:class="{'link--pill-active':selectedGroup==='outgoingMailList'}"
                           v-on:click="selectList('outgoingMailList')"
                        >Отправленные</a>
                        <a class="link link--pill link--color-grey"
                           href="#"
                           v-bind:class="{'link--pill-active':selectedGroup==='blockedMailList'}"
                           v-on:click="selectList('blockedMailList')"
                        >Заблокированные</a>
                        <a class="link link--pill link--color-grey"
                           href="#"
                           v-bind:class="{'link--pill-active':selectedGroup==='blackList'}"
                           v-on:click="chooseBlackList()"
                        >Черный список</a>
                    </nav>

                    <div v-if="selectedGroup!=='blackList'" class="" v-for="(item, index) in selectedList">
                        <message-item :message="item" :key="index"></message-item>
                    </div>


                    <div v-if="selectedGroup==='blackList' && index<4" class="mb-4" v-for="(item, index) in blackList">
                        <div class="d-flex mb-1">
                            <img :src="item.img" alt="" class="message-old__author-img rounded-circle">
                            <author :author="item.name" :authorImg="item.img"/>
                        </div>
                        <div class="small">
                            <a href="#" class="link link--color-blue">Разблокировать</a>
                        </div>
                    </div>


                </div>


                <div v-if="sendMode" class="col-12 col-md-12 col-lg-8">
                    <div class="mb-5">
                        <div class="h2">Отправка сообщения</div>

                        <div class="w-50">
                            <input type="text" placeholder="Найти пользователя" v-model="userSearchName"
                                   class="field mb-3">
                        </div>
                        <div class="message-old__new-message">
                            <editor-tip-tap-comment/>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="btn btn--color-orange">Отправить</div>
                            <div class=" ml-4 link link--color-grey" @click="sendMode=!sendMode">
                                Отменить
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!sendMode" class="col-12 col-lg-4 d-none d-lg-block">
                    <div id="#newmessage" class="card-block card-block--shadow mb-4">
                        <div class="p-4">
                            <div class="h2">Быстрое сообщение</div>
                            <input type="text" placeholder="Найти пользователя" v-model="userSearchName"
                                   class="field mb-3">
                            <!--<div class="message-old__new-message">-->
                            <!--<editor-tip-tap-comment/>-->
                            <!--</div>-->
                            <div class="btn btn--color-white" @click="sendMode=!sendMode">Написать</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // @ is an alias to /src

    import author from '@/components/post-block/parts/author.vue'
    import messageItem from '@/components/message-item.vue'


    import editorTipTapComment from '@/components/editor-tip-tap-comment.vue'

    export default {
        name: 'message-old',
        components: {
            author,
            messageItem,

            editorTipTapComment

        },
        props: {
            isAuth: {
                type: false,
                default: ""
            }
        },
        data: function () {
            return {

                selectedGroup: "incomingMailList",
                selectedList: null,
                descExtend: false,
                sendMode: false,
                blackList: null,
                userSearchName: ""

            }
        },
        methods: {

            selectList(listname) {
                this.selectedGroup = listname;
                this.axios.get(`https://club-route.firebaseio.com/${listname}.json`)
                    .then(response => {
                        this.selectedList = response.data;
                    })
                    .catch(e => {
                        this.error.push(e)
                    })
            },
            chooseBlackList() {
                this.selectedGroup = "blackList";
                this.axios.get("https://club-route.firebaseio.com/top-users.json")
                    .then(response => {
                        this.blackList = response.data;
                    })
                    .catch(e => {
                        this.error.push(e)
                    })
            }


        },
        created() {
            this.axios.get('https://club-route.firebaseio.com/incomingMailList.json')
                .then(response => {
                    this.incomingMailList = response.data
                    this.selectedList = [...this.incomingMailList]
                })
                .catch(e => {
                    this.error.push(e)
                })

        }

    }
</script>
<style>
    .posts {
        padding-top: 1.5rem;
    }

    .discussions__source-icon-wrap {
        border: 1px solid #eee;
        width: 22px;
        border-radius: 4px;
        height: 22px;
        margin-right: 9px;
        padding: 2px 0 0 3px;
        color: #999;
    }

    .new-post-btn {
        border: 1px solid #eee;
        padding: 7px 12px 6px 35px;
        border-radius: 50px;
        position: relative;
    }

    .new-post-btn-icon {
        position: absolute;
        left: 11px;
        top: 9px;
    }

    .message-old__new-message {
        border: 1px solid #e8e3e3;
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 1rem;
        max-width: 100%;
    }

    .message-old__author-img {
        width: 20px;
        height: 20px;
        margin-right: .5rem;
        display: block;
        border-radius: 50% !important;
    }
</style>