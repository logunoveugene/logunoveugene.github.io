<template>
    <div class="about">

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="small mb-2">Клуб / Обсуждения</div>
                    <h1 class="page__title">Обсуждения</h1>
                </div>


                <div class="col-12 col-md-12 col-lg-8">
                    <div class=" d-none d-lg-block mb-4">
                        <div class=" card-block layout--bg-grey  p-4 ">
                            <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                                <div class="d-flex flex-column mb-3 mb-md-0">
                                    <div class="h2 mb-0">Нужна помощь?</div>
                                    <div class="small">Найди ответ на любой вопрос о компьютерах, электорнике или
                                        бытовой технике
                                    </div>
                                </div>
                                <div class="">
                                    <div class="btn btn--color-white ">Задать вопрос</div>
                                </div>

                            </div>


                        </div>
                    </div>
                    <div class="d-flex  d-block d-lg-none ">
                        <div class="mr-3 w-100">
                            <div class="btn btn--color-white mb-4 w-100" @click="show">Поиск вопроса</div>
                        </div>
                        <div class="mr-0">
                            <div class="btn btn--color-white ">Задать вопрос</div>
                        </div>
                    </div>
                    <div class="d-flex  justify-content-between mb-4 align-items-center small">
                        <nav class="nav nav-pills nav-justified">
                            <a class="pill-item link pill-item--active " href="#">Свежее</a>
                            <a class="pill-item link" href="#">Популярное</a>
                            <a class="pill-item link" href="#">Лучшее</a>
                        </nav>
                        <div class="d-none d-md-flex  ">за сегодня
                            <div class="small pt-1 ml-1 text-secondary">
                                <div class="icon-down"></div>
                            </div>
                        </div>
                    </div>


                    <div class="discussions">
                        <div class="discussions__item" v-for="(discussion, index) in discussions" :key="index">
                            <div class="d-flex">
                                <div class="discussions__img-wrap">
                                    <img :src="discussion.img" alt="" class="discussions__img">
                                </div>
                                <div class="discussions__info">
                                    <div class="discussions__ small mb-2">Автор:
                                        <a class="link link--color-blue mr-2"
                                           href="#">{{discussion.autor}}</a>
                                        {{discussion.date | fdate}}
                                    </div>
                                    <div class="discussions__title h2">
                                        <a href="#" class="link link--color-black">{{discussion.title}}</a>
                                    </div>

                                    <div class="discussions__source small mb-2 d-flex align-items-center">
                                        <!--<div class="discussions__source-icon-wrap">-->
                                        <!--<div class="icon-dots-hor"></div>-->
                                        <!--</div>-->


                                        <a href="#" class="link link--color-grey">{{discussion.source}}</a>
                                    </div>
                                    <div class="discussions__teaser small mb-3">{{discussion.teaser}}</div>
                                    <div class="d-flex flex-wrap align-items-center">
                                        <post-info class="mr-3 mb-3"
                                                   :like="discussion.like"
                                                   :comment="discussion.comment"
                                                   :view="discussion.view"
                                                   :lastactivity="discussion.lastactivity"
                                        ></post-info>
                                        <a href="#" class="link link--color-blue small mb-3"> Ответить</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-12 col-lg-4">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-12 order-2 order-lg-1">
                            <div class="card-block mb-4">
                                <div class="">
                                    <div class="p-4 bb-1">
                                        <div class="h4 mb-0 d-flex align-items-center justify-content-between">Тема
                                            <div class="icon-down" @click="category=!category"></div>
                                        </div>
                                        <div class="tree" v-if="category">
                                            <input class="tree-search-input" type="text" v-model.lazy="searchword"
                                                   placeholder="Поиск категории"/>
                                            <!--<button class=" tree-search-btn" type="button" @click="search">GO</button>-->
                                            <v-tree ref='tree' :data='treeData1' :multiple="true" :halfcheck='true'/>
                                        </div>
                                    </div>
                                    <div class="p-4 bb-1">
                                        <div class="h4 mb-0 d-flex align-items-center justify-content-between">Товары и
                                            бренды
                                            <div class="icon-down" @click="brand=!brand"></div>
                                        </div>
                                        <div class="tree" v-if="brand">
                                            <input class="tree-search-input mb-0" type="text"
                                                   placeholder="Упоминание товара"/>
                                            <input class="tree-search-input mb-0" type="text"
                                                   placeholder="Упоминание бренда"/>

                                        </div>
                                    </div>
                                    <div class="p-4">
                                        <div class="h4 mb-0 d-flex align-items-center justify-content-between">Тип
                                            вопроса
                                            <div class="icon-down" @click="posttype=!posttype"></div>
                                        </div>
                                        <div class="tree" v-if="posttype">


                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <modal name="hello-world" :adaptive="true" width="100%" height="auto" scrollable="true">
            <div class="layout--bg-grey p-3 d-flex align-items-center justify-content-between ">
                <div class="h2 mb-0">Заголовок</div>
                <div class="" @click="hide">
                    <div class="h1 mb-0 icon-close"></div>
                </div>
            </div>
            <div class="">
                <div class="p-4 bb-1">
                    <div class="h4 mb-0 d-flex align-items-center justify-content-between">Тема
                        <div class="icon-down" @click="category=!category"></div>
                    </div>
                    <div class="tree" v-if="category">
                        <input class="tree-search-input" type="text" v-model.lazy="searchword"
                               placeholder="Поиск категории"/>
                        <!--<button class=" tree-search-btn" type="button" @click="search">GO</button>-->
                        <v-tree ref='tree' :data='treeData1' :multiple="true" :halfcheck='true'/>
                    </div>
                </div>
                <div class="p-4 bb-1">
                    <div class="h4 mb-0 d-flex align-items-center justify-content-between">Товары и
                        бренды
                        <div class="icon-down" @click="brand=!brand"></div>
                    </div>
                    <div class="tree" v-if="brand">
                        <input class="tree-search-input mb-0" type="text"
                               placeholder="Упоминание товара"/>
                        <input class="tree-search-input mb-0" type="text"
                               placeholder="Упоминание бренда"/>

                    </div>
                </div>
                <div class="p-4">
                    <div class="h4 mb-0 d-flex align-items-center justify-content-between">Тип
                        вопроса
                        <div class="icon-down" @click="posttype=!posttype"></div>
                    </div>
                    <div class="tree" v-if="posttype">


                    </div>
                </div>


            </div>
        </modal>


    </div>
</template>
<script>
    // @ is an alias to /src
    import postInfo from '@/components/post-block/parts/post-info.vue'


    export default {
        name: 'discussions',
        components: {
            postInfo
        },
        data: function () {
            return {
                category: true,
                brand: false,
                posttype: false,
                discussions: [],
                topusers: [],
                userslevel: [],
                surveys: [],
                error: [],
                searchword: '',
                initSelected: [],
                treeData1: [
                    {
                        title: 'Компьютеры, игры, комплектующие',
                        expanded: false,
                        children: [{
                            title: 'Ноутбуки и планшеты',
                            expanded: false

                        },
                            {
                                title: 'Компьютеры и периферия',
                                expanded: false

                            }, {
                                title: 'Комплектующие для ПК',
                                expanded: false

                            }]
                    }, {
                        title: 'Цифровая техника',
                        expanded: false,
                        children: [{
                            title: 'node 1-1',
                            expanded: false

                        }]
                    }, {
                        title: 'Бытовая техника',
                        expanded: false,
                        children: [{
                            title: 'node 1-1',
                            expanded: false

                        }]
                    }, {
                        title: 'Красота и здоровье',
                        expanded: false,
                        children: [{
                            title: 'node 1-1',
                            expanded: false

                        }]
                    }, {
                        title: 'Автотовары',
                        expanded: false,
                        children: [{
                            title: 'node 1-1',
                            expanded: false

                        }]
                    }, {
                        title: 'Майнинг',
                        expanded: false,
                        children: [{
                            title: 'node 1-1',
                            expanded: false

                        }]
                    },


                ],
            }
        },
        methods: {
            show() {
                this.$modal.show('hello-world');
            },
            hide() {
                this.$modal.hide('hello-world');
            },
            search() {
                this.$refs.tree.searchNodes(this.searchword)
            }
        },
        created() {
            this.axios.get('https://club-route.firebaseio.com/discussions.json')
                .then(response => {
                    this.discussions = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })
            this.axios.get('https://club-route.firebaseio.com/top-users.json')
                .then(response => {
                    this.topusers = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })
            this.axios.get('https://club-route.firebaseio.com/users-level.json')
                .then(response => {
                    this.userslevel = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })
            this.axios.get('https://club-route.firebaseio.com/survey.json')
                .then(response => {
                    this.surveys = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })
        }

    }
</script>
<style>

    .discussions__source-icon-wrap {
        border: 1px solid #eee;
        width: 22px;
        border-radius: 4px;
        height: 22px;
        margin-right: 9px;
        padding: 2px 0 0 3px;
        color: #999;
    }
</style>