<template>
    <div class="about">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="small mb-2">Клуб / Обсуждения</div>
                    <div class="d-flex align-items-center justify-content-between">
                        <h1 class="page__title ">Обсуждения</h1>
                        <div class="d-lg-none d-block mb-3">
                            <div class=" text-success d-inline-block mr-2 icon-add"></div>
                            <div class="d-inline-block">Начать</div>
                        </div>


                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-8">
                    <div class=" d-none d-lg-block mb-4">
                        <div class=" card-block layout--bg-grey  p-4 ">
                            <div class="d-flex flex-column ">
                                <div class="d-flex flex-column mb-3 mb-md-0">
                                    <div class="h2 mb-2">Есть что обсудить или нужна помощь экспертов?</div>
                                    <div class="small mb-3">Пиши, справшивай, обсуждай – будь уверен, здесь тебе
                                        ответят.
                                    </div>
                                </div>
                                <div class="">
                                    <div class="btn btn--color-white mr-3 ">Задать вопрос</div>
                                    <div class="btn btn--color-white ">Обсудить</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="">
                        <div class="d-block d-lg-none">
                            <div v-ripple class=" mb-4 card-block card-block--full-mobile p-3 "
                                 @click="searchPlate=!searchPlate">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="">Поиск вопроса</div>
                                    <div v-if="!searchPlate" class="icon-down"></div>
                                    <div v-if="searchPlate" class="icon-up"></div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4 d-block d-lg-none" v-if="searchPlate">
                            <div class="">
                                <div class="">
                                    <div class="pb-4 bb-1">
                                        <div class="h1 mb-3 d-flex align-items-center justify-content-between ">Тема</div>
                                        <div class="filter__search-input-wrap mb-4">
                                            <input class="filter__search-input" type="text" placeholder="Название темы"/>
                                            <div class="filter__search-input-icon">
                                                <div class="icon-search"></div>
                                            </div>
                                        </div>
                                        <div class="h4 mb-3">ТОП за неделю 🔥</div>
                                        <div class="filter__links-item d-flex justify-content-between">
                                            <div class="filter__links-item-title"><a href="#"
                                                                                     class="link link--color-black">Помогите с
                                                выбором</a></div>
                                            <div class="filter__links-item-amount">+11
                                            </div>
                                        </div>
                                        <div class="filter__links-item d-flex justify-content-between">
                                            <div class="filter__links-item-title"><a href="#"
                                                                                     class="link link--color-black">Тендеры на
                                                обзоры Клуба DNS</a></div>
                                            <div class="filter__links-item-amount">+8
                                            </div>
                                        </div>

                                        <div class="filter__links-item d-flex justify-content-between">
                                            <div class="filter__links-item-title"><a href="#"
                                                                                     class="link link--color-black">Майнинг</a>
                                            </div>
                                            <div class="filter__links-item-amount">+4
                                            </div>
                                        </div>


                                    </div>
                                    <div class="py-4 bb-1">
                                        <div class="h1 mb-3 d-flex align-items-center justify-content-between ">Поиск по
                                            упоминаниям
                                        </div>
                                        <div class="filter__search-input-wrap mb-4">
                                            <input class="filter__search-input" type="text"
                                                   placeholder="Товар, бренд или категориям"/>
                                            <div class="filter__search-input-icon">
                                                <div class="icon-search"></div>
                                            </div>
                                        </div>
                                        <div class="h4 mb-3">Сегодня в тренде 😎</div>
                                        <div class="filter__links-item d-flex justify-content-between">
                                            <div class="filter__links-item-title"><a href="#"
                                                                                     class="link link--color-black">Смартфон
                                                Apple iPhone 8 Plus 64 ГБ</a></div>
                                            <div class="filter__links-item-amount">+11
                                            </div>
                                        </div>
                                        <div class="filter__links-item d-flex justify-content-between">
                                            <div class="filter__links-item-title"><a href="#"
                                                                                     class="link link--color-black">Блок питания
                                                DEXP DTS-600EPS</a></div>
                                            <div class="filter__links-item-amount">+8
                                            </div>
                                        </div>

                                        <div class="filter__links-item d-flex justify-content-between">
                                            <div class="filter__links-item-title"><a href="#"
                                                                                     class="link link--color-black">Адаптер
                                                питания сетевой 5bites PA90A-05</a></div>
                                            <div class="filter__links-item-amount">+4
                                            </div>
                                        </div>


                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>


                    <div class=" d-none d-lg-flex  justify-content-between mb-4 align-items-center small">
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
                        <disc-list-item :post="post" v-for="(post, index) in discussions" :key="index"></disc-list-item>
                    </div>

                </div>
                <div class="col-12 col-lg-4 d-none d-lg-block">


                    <div class="card-block mb-4">
                        <div class="">
                            <div class="p-4 bb-1">
                                <div class="h1 mb-3 d-flex align-items-center justify-content-between ">Тема</div>
                                <div class="filter__search-input-wrap mb-4">
                                    <input class="filter__search-input" type="text" placeholder="Название темы"/>
                                    <div class="filter__search-input-icon">
                                        <div class="icon-search"></div>
                                    </div>
                                </div>
                                <div class="h4 mb-3">ТОП за неделю 🔥</div>
                                <div class="filter__links-item d-flex justify-content-between">
                                    <div class="filter__links-item-title"><a href="#"
                                                                             class="link link--color-black">Помогите с
                                        выбором</a></div>
                                    <div class="filter__links-item-amount">+11
                                    </div>
                                </div>
                                <div class="filter__links-item d-flex justify-content-between">
                                    <div class="filter__links-item-title"><a href="#"
                                                                             class="link link--color-black">Тендеры на
                                        обзоры Клуба DNS</a></div>
                                    <div class="filter__links-item-amount">+8
                                    </div>
                                </div>

                                <div class="filter__links-item d-flex justify-content-between">
                                    <div class="filter__links-item-title"><a href="#"
                                                                             class="link link--color-black">Майнинг</a>
                                    </div>
                                    <div class="filter__links-item-amount">+4
                                    </div>
                                </div>


                            </div>
                            <div class="p-4 bb-1">
                                <div class="h1 mb-3 d-flex align-items-center justify-content-between ">Поиск по
                                    упоминаниям
                                </div>
                                <div class="filter__search-input-wrap mb-4">
                                    <input class="filter__search-input" type="text"
                                           placeholder="Товар, бренд или категориям"/>
                                    <div class="filter__search-input-icon">
                                        <div class="icon-search"></div>
                                    </div>
                                </div>
                                <div class="h4 mb-3">Сегодня в тренде 😎</div>
                                <div class="filter__links-item d-flex justify-content-between">
                                    <div class="filter__links-item-title"><a href="#"
                                                                             class="link link--color-black">Смартфон
                                        Apple iPhone 8 Plus 64 ГБ</a></div>
                                    <div class="filter__links-item-amount">+11
                                    </div>
                                </div>
                                <div class="filter__links-item d-flex justify-content-between">
                                    <div class="filter__links-item-title"><a href="#"
                                                                             class="link link--color-black">Блок питания
                                        DEXP DTS-600EPS</a></div>
                                    <div class="filter__links-item-amount">+8
                                    </div>
                                </div>

                                <div class="filter__links-item d-flex justify-content-between">
                                    <div class="filter__links-item-title"><a href="#"
                                                                             class="link link--color-black">Адаптер
                                        питания сетевой 5bites PA90A-05</a></div>
                                    <div class="filter__links-item-amount">+4
                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>


                </div>

            </div>
        </div>

        <div class="icon-search"></div>
    </div>
</template>
<script>
    // @ is an alias to /src
    import postInfo from '@/components/post-block/parts/post-info.vue'
    import DiscListItem from "../components/post-block/disc-list-item";


    export default {
        name: 'discussions',
        components: {
            DiscListItem,
            postInfo
        },
        data: function () {
            return {
                category: true,
                searchPlate: false,
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

    .filter__search-input-wrap {
        position: relative;
    }

    .filter__search-input {
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 8px 11px 6px;

        line-height: 24px;
        outline: none;
        font-size: 14px;

    }

    .filter__search-input-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #999;
        font-size: 20px;
    }

    .filter__links-item {
        border-bottom: 1px dotted #ddd;
        height: 20px;
        margin-bottom: 12px;
    }

    .filter__links-item-title {
        background-color: #fff;
        height: 23px;
        white-space: nowrap;
        overflow: hidden;
        font-size: .875rem;
    }

    .filter__links-item-amount {
        background-color: #fff;
        color: #6ba833;
        height: 23px;
        font-size: .875rem;
    }
</style>