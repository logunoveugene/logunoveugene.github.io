<template>
    <div class="about">

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="small mb-2 d-flex">
                        <router-link class="link link--color-black" to="/">Клуб</router-link>
                        <div class="mx-2">/</div>
                        <span class="text-muted">Обзоры</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <h1 class="page__title mb-0">Обзоры</h1>
                        <router-link to="/newpost" class=" link link--color-black new-post-btn d-lg-none d-block ">
                            <div class="new-post-btn-icon">
                                <div class=" text-success d-inline-block mr-2 icon-add"></div>
                            </div>
                            <div class="d-inline-block">Добавить обзор</div>
                        </router-link>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-8">
                    <div class="d-block d-lg-none">
                        <div v-ripple class="collapse-block card-block card-block--full-mobile "
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
                    <div class="collapse-plate pt-4  " v-if="searchPlate">
                        <div class="">
                            <div class="pb-4 bb-1">
                                <div class="h2 mb-2 d-flex align-items-center">Разделы</div>
                                <category></category>
                            </div>
                            <div class="py-4 bb-1">
                                <div class="h2 mb-2 d-flex align-items-center justify-content-between ">Формат
                                </div>
                                <div class=" d-flex">
                                    <div class="custom-control custom-checkbox mr-4">
                                        <input type="checkbox" id="customCheck1" checked="checked"
                                               class="custom-control-input">
                                        <label for="customCheck1" class="custom-control-label">Текст</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mr-4">
                                        <input type="checkbox" id="customCheck1" checked="checked"
                                               class="custom-control-input">
                                        <label for="customCheck1" class="custom-control-label">Видео</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mr-4">
                                        <input type="checkbox" id="customCheck1" checked="checked"
                                               class="custom-control-input">
                                        <label for="customCheck1" class="custom-control-label">Фото</label>
                                    </div>
                                </div>
                            </div>
                            <div class="py-4 bb-1">
                                <div class="h2 mb-2 d-flex align-items-center justify-content-between ">Рубрика
                                </div>
                                <!--<div class="small d-flex flex-column">-->

                                <!--<div class="mr-3">-->
                                <!--<a href="#" class="link link&#45;&#45;color-grey">Любительские обзоры</a>-->
                                <!--</div>-->
                                <!--<div class="mr-3">-->
                                <!--<a href="#" class="link link&#45;&#45;color-grey">Профессиональные обзоры</a>-->
                                <!--</div>-->
                                <!--<div class="mr-3">-->
                                <!--<a href="#" class="link link&#45;&#45;color-grey">От производителей</a>-->
                                <!--</div>-->

                                <!--</div>-->
                                <div class=" ">
                                    <div class="custom-control custom-checkbox mr-4">
                                        <input type="checkbox" id="customCheck1" checked="checked"
                                               class="custom-control-input">
                                        <label for="customCheck1" class="custom-control-label">Любительские
                                            обзоры</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mr-4">
                                        <input type="checkbox" id="customCheck1" checked="checked"
                                               class="custom-control-input">
                                        <label for="customCheck1" class="custom-control-label">Профессиональные
                                            обзоры</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mr-4">
                                        <input type="checkbox" id="customCheck1" checked="checked"
                                               class="custom-control-input">
                                        <label for="customCheck1" class="custom-control-label">От производителей</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-4">
                            <div v-if="!allFilter" @click="allFilter=true" class="link link--doted  link--color-grey">
                                Все
                                фильтры
                            </div>

                        </div>
                    </div>
                    <div class=" d-none d-lg-flex  justify-content-between align-items-center ">
                        <nav class="nav nav-pills nav-justified ">
                            <a class="link link--pill link--color-black link--pill-active  " href="#">Свежее</a>
                            <a class="link link--pill link--color-black" href="#">Обсуждаемые</a>
                            <a class="link link--pill link--color-black" href="#">Лучшее</a>
                        </nav>

                        <div class="d-none d-md-flex  ">
                            <date-range-select></date-range-select>
                        </div>
                    </div>
                    <div class="posts">
                        <div class="" v-for="(rev, index) in review" :key="index">
                            <postLarge :post="rev"></postLarge>
                        </div>
                    </div>

                </div>
                <div class="col-12 col-lg-4 ">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-12 mb-4 d-none d-lg-block ">


                            <div class="card-block card-block--shadow  mb-4">
                                <div class="">
                                    <div class="p-4 bb-1">
                                        <div class="h2 mb-2 d-flex align-items-center">Разделы</div>
                                        <category></category>
                                    </div>
                                    <div class="p-4 bb-1">
                                        <div class="h2 mb-2 d-flex align-items-center">Настройки показа</div>
                                        <div class="custom-control custom-radio custom-control-inline mb-1  d-block">
                                            <input type="radio" id="customRadioInline12" name="userMenu"
                                                   class="custom-control-input" checked>
                                            <label class="custom-control-label" for="customRadioInline12">Все
                                                статьи</label>
                                        </div>

                                        <div class="custom-control custom-radio custom-control-inline mb-1  d-block">
                                            <input type="radio" id="customRadioInline32" name="userMenu"
                                                   class="custom-control-input">
                                            <label class="custom-control-label" for="customRadioInline32">Мои
                                                статьи</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline  d-block">
                                            <input type="radio" id="customRadioInlinee" name="userMenu"
                                                   class="custom-control-input">
                                            <label class="custom-control-label" for="customRadioInlinee">Мои
                                                черновики</label>
                                        </div>

                                    </div>

                                    <div class="p-4 bb-1">
                                        <div class="h2 mb-2 d-flex align-items-center justify-content-between ">Рубрика
                                        </div>
                                        <div class=" ">
                                            <div class="custom-control custom-checkbox mb-2">
                                                <input type="checkbox" id="customCheck1" class="custom-control-input">
                                                <label for="customCheck1" class="custom-control-label">Любительские
                                                    обзоры</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mb-2">
                                                <input type="checkbox" id="customCheck1" class="custom-control-input">
                                                <label for="customCheck1" class="custom-control-label">Профессиональные
                                                    обзоры</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mb-2">
                                                <input type="checkbox" id="customCheck1" class="custom-control-input">
                                                <label for="customCheck1" class="custom-control-label">От
                                                    производителей</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="allFilter" class="">
                                        <div class="p-4 bb-1">
                                            <div class="h2 mb-2 d-flex align-items-center justify-content-between ">
                                                Формат
                                            </div>
                                            <div class=" d-flex">

                                                <div class=" ">
                                                    <div class="custom-control custom-checkbox mb-2">
                                                        <input type="checkbox" id="customCheck1asdas"
                                                               class="custom-control-input">
                                                        <label for="customCheck1asdas"
                                                               class="custom-control-label">Текст</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox mb-2">
                                                        <input type="checkbox" id="customCheck1dsfsd"
                                                               class="custom-control-input">
                                                        <label for="customCheck1dsfsd"
                                                               class="custom-control-label">Видео</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" id="custosadasd"
                                                               class="custom-control-input">
                                                        <label for="custosadasd"
                                                               class="custom-control-label">Фото</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--<div class="p-4 bb-1">-->
                                        <!--<div class="h2 mb-2 d-flex align-items-center justify-content-between ">Настройки показа-->
                                        <!--</div>-->
                                        <!--<div class=" d-flex">-->
                                        <!--<div class=" ">-->
                                        <!--<div class="custom-control custom-checkbox mb-2">-->
                                        <!--<input type="checkbox" id="customCheck1asdas"-->
                                        <!--class="custom-control-input">-->
                                        <!--<label for="customCheck1asdas"-->
                                        <!--class="custom-control-label">Мои статьи</label>-->
                                        <!--</div>-->

                                        <!--</div>-->
                                        <!--</div>-->
                                        <!--</div>-->
                                    </div>

                                </div>
                            </div>
                            <div class="px-4 mb-4">
                                <div v-if="!allFilter" @click="allFilter=true"
                                     class="link link--doted  link--color-grey">Все фильтры
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
    import dateRangeSelect from "@//components/dateRangeSelect.vue"

    export default {
        name: 'review',
        components: {
            postTextShort,
            postHalfImg,
            postLarge,
            category,
            dateRangeSelect

        },
        props: {
            isAuth: {
                type: false,
                default: ""
            }
        },
        data: function () {
            return {
                category: true,
                searchPlate: false,
                thame: false,
                brand: false,
                review: [],
                error: [],
                allFilter: false,
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
</style>