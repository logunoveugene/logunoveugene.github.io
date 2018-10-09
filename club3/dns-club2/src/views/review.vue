<template>
    <div class="about">

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="small mb-2">Клуб / Обзоры</div>
                    <h1 v-if="initSelected.length==0 || initSelected.length>1 " class="page__title">Обзоры</h1>
                    <h1 v-if="initSelected.length==1" class="page__title">{{initSelected[0].title}}</h1>

                </div>
                <div class="col-12 col-md-12 col-lg-8">
                    <div class="d-flex  d-block d-lg-none ">
                        <div class="w-100">
                            <div class="btn btn--color-white mb-4 w-100" @click="show">Поиск обзора</div>
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
                        <div class="" v-for="(rev, index) in review" :key="index">
                            <postLarge :post="rev"></postLarge>
                        </div>
                    </div>

                </div>
                <div class="col-12 col-lg-4 ">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-12 mb-4 d-none d-lg-block ">
                            <div class="card-block mb-4">
                                <div class="">
                                    <div class="p-4 bb-1">
                                        <div @click="category=!category"
                                             class="h4 mb-0 d-flex align-items-center justify-content-between">Тема
                                            <div class="icon-down"></div>
                                        </div>
                                        <div class="tree" v-if="category">
                                            <input class="tree-search-input"
                                                   type="text"
                                                   v-model.lazy="searchword"
                                                   placeholder="Поиск категории"
                                                   v-on:keyup.enter="search"
                                            />
                                            <!--<button class=" tree-search-btn" type="button" @click="search">GO</button>-->
                                            <v-tree ref='tree'
                                                    :data='treeData1'
                                                    :multiple="true"
                                                    @node-check='selectedNodes'
                                                    :halfcheck='true'
                                                    @click="selectedNodes"/>
                                        </div>
                                    </div>
                                    <div class="p-4 bb-1">
                                        <div @click="thame=!thame"
                                             class="h4 mb-0 d-flex align-items-center justify-content-between">Рубрики
                                            <div class="icon-down"></div>
                                        </div>
                                        <div class="tree" v-if="thame">
                                            <div class="custom-control custom-checkbox mt-4">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                <label class="custom-control-label" for="customCheck1">Профессиональные
                                                    обзоры</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" id="customCheck2">
                                                <label class="custom-control-label" for="customCheck2">Любительские
                                                    обзоры</label>
                                            </div>


                                        </div>
                                    </div>
                                    <div class="p-4">
                                        <div @click="brand=!brand"
                                             class="h4 mb-0 d-flex align-items-center justify-content-between">Формат
                                            <div class="icon-down"></div>
                                        </div>
                                        <div class="tree" v-if="brand">
                                            <div class="custom-control custom-checkbox mt-4">
                                                <input type="checkbox" class="custom-control-input" id="customCheck3">
                                                <label class="custom-control-label" for="customCheck3">Текст</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" id="customCheck4">
                                                <label class="custom-control-label" for="customCheck4">Видео</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" id="customCheck5">
                                                <label class="custom-control-label" for="customCheck5">Фото</label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="h1 mb-4">Самое обсуждаемое</div>
                            <div class="row">
                                <div class="col-12">
                                    <post-half-img :post="review[3]"></post-half-img>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <post-text-short :post="review[0]"></post-text-short>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <post-text-short :post="review[2]"></post-text-short>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
        <modal name="filter" :adaptive="true" width="100%" height="auto" scrollable="true">
            <div class="layout--bg-grey p-3 d-flex align-items-center justify-content-between ">
                <div class="h2 mb-0">Заголовок</div>
                <div class="" @click="hide">
                    <div class="h1 mb-0 icon-close"></div>
                </div>
            </div>
            <div class="">
                <div class="p-4 bb-1">
                    <div @click="category=!category"
                         class="h4 mb-0 d-flex align-items-center justify-content-between">Тема
                        <div class="icon-down"></div>
                    </div>
                    <div class="tree" v-if="category">
                        <input class="tree-search-input"
                               type="text"
                               v-model.lazy="searchword"
                               placeholder="Поиск категории"
                               v-on:keyup.enter="search"
                        />
                        <!--<button class=" tree-search-btn" type="button" @click="search">GO</button>-->
                        <v-tree ref='tree'
                                :data='treeData1'
                                :multiple="true"
                                @node-check='selectedNodes'
                                :halfcheck='true'
                                @click="selectedNodes"/>
                    </div>
                </div>
                <div class="p-4 bb-1">
                    <div @click="thame=!thame"
                         class="h4 mb-0 d-flex align-items-center justify-content-between">Рубрики
                        <div class="icon-down"></div>
                    </div>
                    <div class="tree" v-if="thame">
                        <div class="custom-control custom-checkbox mt-4">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1">Профессиональные
                                обзоры</label>
                        </div>
                        <div class="custom-control custom-checkbox mt-2">
                            <input type="checkbox" class="custom-control-input" id="customCheck2">
                            <label class="custom-control-label" for="customCheck2">Любительские
                                обзоры</label>
                        </div>


                    </div>
                </div>
                <div class="p-4">
                    <div @click="brand=!brand"
                         class="h4 mb-0 d-flex align-items-center justify-content-between">Формат
                        <div class="icon-down"></div>
                    </div>
                    <div class="tree" v-if="brand">
                        <div class="custom-control custom-checkbox mt-4">
                            <input type="checkbox" class="custom-control-input" id="customCheck3">
                            <label class="custom-control-label" for="customCheck3">Текст</label>
                        </div>
                        <div class="custom-control custom-checkbox mt-2">
                            <input type="checkbox" class="custom-control-input" id="customCheck4">
                            <label class="custom-control-label" for="customCheck4">Видео</label>
                        </div>
                        <div class="custom-control custom-checkbox mt-2">
                            <input type="checkbox" class="custom-control-input" id="customCheck5">
                            <label class="custom-control-label" for="customCheck5">Фото</label>
                        </div>

                    </div>
                </div>


            </div>

        </modal>


    </div>
</template>
<script>
    // @ is an alias to /src

    import postLarge from '@/components/post-block/post-large.vue'
    import postTextShort from '@/components/post-block/post-text-short.vue'
    import postHalfImg from '@/components/post-block/post-half-img.vue'

    export default {
        name: 'review',
        components: {
            postTextShort,
            postHalfImg,
            postLarge
        },
        data: function () {
            return {
                category: true,
                thame: false,
                brand: false,
                review: [],
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
                        title: 'Компьютеры, игры, комплектующие',
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
                this.$modal.show('filter');
            },
            hide() {
                this.$modal.hide('filter');
            },


            search() {
                this.$refs.tree.searchNodes(this.searchword)
            },
            selectedNodes() {
                this.initSelected = this.$refs.tree.getCheckedNodes()

            }
        },
        created() {
            this.axios.get('https://club-route.firebaseio.com/digest.json')
                .then(response => {
                    this.review = response.data
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