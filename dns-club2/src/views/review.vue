<template>
    <div class="about">

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="small mb-2">
                        <router-link class="link link--color-black" to="/">Клуб</router-link>
                        /
                        <snap class="text-muted">Обзоры</snap>
                    </div>
                    <h1 v-if="initSelected.length==0 || initSelected.length>1 " class="page__title">Обзоры</h1>
                    <h1 v-if="initSelected.length==1" class="page__title">{{initSelected[0].title}}</h1>
                </div>
                <div class="col-12 col-md-12 col-lg-8">
                    <div class="d-block d-lg-none">
                        <div v-ripple class="collapse-block  mb-3 card-block card-block--full-mobile "
                             @click="searchPlate=!searchPlate">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="">Настройка показа</div>
                                <div class="collapse-block__icon ">
                                    <div v-if="!searchPlate" class="icon-down"></div>
                                    <div v-if="searchPlate" class="icon-up"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-4" v-if="searchPlate">
                        <div class="">
                            <div class="pb-4 bb-1">
                                <div class="h2 mb-2 d-flex align-items-center">Разделы</div>
                                <category></category>
                            </div>
                            <div class="py-4 bb-1">
                                <div class="h2 mb-2 d-flex align-items-center justify-content-between ">Формат
                                </div>
                                <div class="small d-flex">

                                    <div class="mr-3">
                                        <a href="#" class="link link--doted link--color-grey">Текст</a>
                                    </div>
                                    <div class="mr-3">
                                        <a href="#" class="link link--doted link--color-grey">Видео</a>
                                    </div>
                                    <div class="mr-3">
                                        <a href="#" class="link link--doted link--color-grey">Фото</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="d-none d-lg-flex justify-content-between mb-4 align-items-center small ">
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
                                        <div class="h2 mb-2 d-flex align-items-center">Разделы</div>
                                        <category></category>
                                    </div>
                                    <div class="p-4 bb-1">
                                        <div class="h2 mb-2 d-flex align-items-center justify-content-between ">Формат
                                        </div>
                                        <div class="small d-flex">

                                            <div class="mr-3">
                                                <a href="#" class="link link--doted link--color-grey">Текст</a>
                                            </div>
                                            <div class="mr-3">
                                                <a href="#" class="link link--doted link--color-grey">Видео</a>
                                            </div>
                                            <div class="mr-3">
                                                <a href="#" class="link link--doted link--color-grey">Фото</a>
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
    </div>
</template>
<script>
    // @ is an alias to /src

    import postLarge from '@/components/post-block/post-large.vue'
    import postTextShort from '@/components/post-block/post-text-short.vue'
    import postHalfImg from '@/components/post-block/post-half-img.vue'
    import category from "@//components/category.vue";

    export default {
        name: 'review',
        components: {
            postTextShort,
            postHalfImg,
            postLarge,
            category
        },
        data: function () {
            return {
                category: true,
                searchPlate: false,
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