<template>
    <div class="about">

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="small mb-2">Клуб / Обзоры</div>
                    <h1 class="page__title">Обзоры</h1>

                </div>
                <div class="col-12 col-md-12 col-lg-8">
                    <div class="d-flex justify-content-between mb-5 align-items-center ">
                        <nav class="nav nav-pills nav-justified ">
                            <a class="pill-item link pill-item--active " href="#">Свежее</a>
                            <a class="pill-item link" href="#">Популярное</a>
                            <a class="pill-item link" href="#">Лучшее</a>
                        </nav>
                        <!--<div class="">за сегодня</div>-->

                    </div>


                    <div class="discussions">
                        <div class="" v-for="(rev, index) in review">
                            <postLarge :post="rev"></postLarge>
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
                                        <div class="h4 mb-0 d-flex align-items-center justify-content-between">Бренд
                                            <div class="icon-down" @click="brand=!brand"></div>
                                        </div>
                                        <div class="tree" v-if="brand">
                                            <input class="tree-search-input mb-0" type="text"
                                                   placeholder="Поиск категории"/>

                                        </div>
                                    </div>
                                    <div class="p-4 bb-1">
                                        <div class="h4 mb-0 d-flex align-items-center justify-content-between">Тип
                                            вопроса
                                            <div class="icon-down" @click="brand=!brand"></div>
                                        </div>
                                        <div class="tree" v-if="brand">
                                            <input class="tree-search-input mb-0" type="text"
                                                   placeholder="Поиск категории"/>

                                        </div>
                                    </div>
                                    <div class="p-4 bb-1">
                                        <div class="h4 mb-0 d-flex align-items-center justify-content-between">Бренд
                                            <div class="icon-down" @click="brand=!brand"></div>
                                        </div>
                                        <div class="tree" v-if="brand">
                                            <input class="tree-search-input mb-0" type="text"
                                                   placeholder="Поиск категории"/>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    </div>
</template>
<script>
    // @ is an alias to /src

    import postLarge from '@/components/post-block/post-large.vue'

    export default {
        name: 'review',
        components: {

            postLarge
        },
        data: function () {
            return {
                category: true,
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


            search() {
                this.$refs.tree.searchNodes(this.searchword)
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