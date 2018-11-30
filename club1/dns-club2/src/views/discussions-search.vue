<template>
    <div class="about">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-md-flex small mb-2 d-flex">
                        <router-link class="link link--color-black" to="/">Клуб</router-link>
                        <div class="mx-2">/</div>
                        <div class="text-muted">Коммуникатор</div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <h1 class="page__title mb-0 ">Коммуникатор</h1>
                        <router-link to="/newdesc" class=" link link--color-black new-discuss-btn d-lg-none d-block ">
                            <div class="new-discuss-btn-icon">
                                <div class=" text-success d-inline-block mr-2 icon-add"></div>
                            </div>
                            <div class="d-inline-block">Создать тему</div>
                        </router-link>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-8">
                    <div class="discussions__search">
                        <input type="text" v-model="discussionsSearch" placeholder="Поиск по темам"
                               class="field w-100 mb-4 ">
                        <div class="suggestion" v-if="discussionsSearch!=false">
                            <div class="suggestion__group">
                                <div class="suggestion__list">
                                    <div class="suggestion__item">Подскажите, в ближайшее время не предвидится акции на
                                        телевизор LED Hisense H55A6100, по которой он стоил 35000р?
                                    </div>
                                    <div class="suggestion__item">Выбор бюджетного ноутбука до 15 000р. 3 варианта</div>
                                    <div class="suggestion__item">Будет ли работать на материнской плате Asus P8H61-M pro с3 2100? </div>
                                    <div class="suggestion__item">Выбор бюджетного ноутбука до 15 000р. 3 варианта</div>
                                    <div class="suggestion__item">Выбор бюджетного ноутбука до 15 000р. 3 варианта</div>
                                </div>
                            </div>
                            <div class="suggestion__group">
                                <div class="suggestion__group-title">
                                    <div class="d-flex   align-items-center">
                                        <div class="h6 font-weight-bold mb-0 mr-3">Товары</div>

                                    </div>
                                </div>
                                <div class="suggestion__list" @click="themeFilter()">
                                    <div class="suggestion__item">
                                        <div class="d-flex align-items-center ">
                                            <div data-v-00eef1f8="" class="custom-control custom-checkbox">
                                                <input data-v-00eef1f8="" type="checkbox" id="product1" class="custom-control-input">
                                                <label data-v-00eef1f8="" for="product1" class="custom-control-label">Ноутбук DELL Inspiron 3552-5010 черный</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="suggestion__item">
                                        <div class="d-flex align-items-center ">
                                            <div data-v-00eef1f8="" class="custom-control custom-checkbox">
                                                <input data-v-00eef1f8="" type="checkbox" id="product2" class="custom-control-input">
                                                <label data-v-00eef1f8="" for="product2" class="custom-control-label">Нетбук Irbis NB29 белый</label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="suggestion__item">
                                        <div class="d-flex align-items-center ">
                                            <div data-v-00eef1f8="" class="custom-control custom-checkbox">
                                                <input data-v-00eef1f8="" type="checkbox" id="product3" class="custom-control-input">
                                                <label data-v-00eef1f8="" for="product3" class="custom-control-label">Нетбук Irbis NB29 белый</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="suggestion__group">
                                <div class="suggestion__group-title">
                                    <div class="d-flex   align-items-center">
                                        <div class="h6 font-weight-bold mb-0 mr-3">Категории товаров</div>

                                    </div>
                                </div>
                                <div class="suggestion__list" @click="themeFilter()">
                                    <div class="suggestion__item">
                                        <div class="d-flex align-items-center ">
                                            <div data-v-00eef1f8="" class="custom-control custom-checkbox">
                                                <input data-v-00eef1f8="" type="checkbox" id="category1" class="custom-control-input">
                                                <label data-v-00eef1f8="" for="category1" class="custom-control-label">Ноутбуки</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="suggestion__item">
                                        <div class="d-flex align-items-center ">
                                            <div data-v-00eef1f8="" class="custom-control custom-checkbox">
                                                <input data-v-00eef1f8="" type="checkbox" id="category2" class="custom-control-input">
                                                <label data-v-00eef1f8="" for="category2" class="custom-control-label">Нетбуки</label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="suggestion__item">
                                        <div class="d-flex align-items-center ">
                                            <div data-v-00eef1f8="" class="custom-control custom-checkbox">
                                                <input data-v-00eef1f8="" type="checkbox" id="category3" class="custom-control-input">
                                                <label data-v-00eef1f8="" for="category3" class="custom-control-label">Ультрабуки</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="suggestion__group">
                                <div class="suggestion__group-title">
                                    <div class="d-flex   align-items-center">
                                        <div class="h6 font-weight-bold mb-0 mr-3">Бренды</div>

                                    </div>
                                </div>
                                <div class="suggestion__list" @click="themeFilter()">
                                    <div class="suggestion__item">
                                        <div class="d-flex align-items-center ">
                                            <div data-v-00eef1f8="" class="custom-control custom-checkbox">
                                                <input data-v-00eef1f8="" type="checkbox" id="product14" class="custom-control-input">
                                                <label data-v-00eef1f8="" for="product14" class="custom-control-label">DELL</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="suggestion__item">
                                        <div class="d-flex align-items-center ">
                                            <div data-v-00eef1f8="" class="custom-control custom-checkbox">
                                                <input data-v-00eef1f8="" type="checkbox" id="product21" class="custom-control-input">
                                                <label data-v-00eef1f8="" for="product21" class="custom-control-label">Asus</label>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="mb-4" v-if="discussionsSearchResalt">
                            <div class="filter__item">Товар: Нетбук Irbis NB29 белый
                                <div class="filter__item-icon icon-close"
                                     @click="discussionsSearchResalt=!discussionsSearchResalt"></div>
                            </div>
                        </div>
                    </div>
                    <div class=" d-none d-lg-block mb-4">
                        <div class=" card-block layout--bg-grey p-4">
                            <div class="d-flex flex-column ">
                                <div class="d-flex flex-column mb-3 mb-md-0">
                                    <div class="h2 mb-2">Есть что обсудить или нужна помощь экспертов?</div>
                                    <div class="small mb-3">Пиши, справшивай, обсуждай – будь уверен, здесь тебе
                                        ответят.
                                    </div>
                                </div>
                                <router-link to="/newdesc">
                                    <div class="btn btn--color-white mr-3 ">Создать тему</div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="d-block d-lg-none">
                            <div v-ripple class="collapse-block card-block card-block--full-mobile "
                                 @click="searchPlate=!searchPlate">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="collapse-block__title">Поиск темы</div>
                                    <div class="collapse-block__icon">
                                        <div v-if="!searchPlate" class="icon-down"></div>
                                        <div v-if="searchPlate" class="icon-up"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="collapse-plate pt-4  d-block d-lg-none" v-if="searchPlate">
                            <div class="">
                                <div class="pb-4 bb-1">
                                    <div class="h2 mb-2 d-flex align-items-center">Разделы</div>
                                    <category></category>
                                </div>
                                <!--<div class="py-4 bb-1">-->
                                <!--<div class="h2 mb-3 d-flex align-items-center justify-content-between ">Поиск по-->
                                <!--упоминаниям-->
                                <!--</div>-->
                                <!--<product-category-brand-search></product-category-brand-search>-->
                                <!--</div>-->
                                <div class="py-4 bb-1">
                                    <div class="h2 mb-3 d-flex align-items-center justify-content-between ">Настройки
                                        показа
                                    </div>


                                    <div class="custom-control custom-radio custom-control-inline mb-1 d-block">
                                        <input type="radio" id="customRadioInline00" name="customRadioInline1" class="custom-control-input" checked>
                                        <label class="custom-control-label" for="customRadioInline00">Все темы</label>
                                    </div>

                                    <div class="custom-control custom-radio custom-control-inline mb-1 d-block">
                                        <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
                                        <label class="custom-control-label" for="customRadioInline1">Без ответов</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline mb-1 d-block">
                                        <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
                                        <label class="custom-control-label" for="customRadioInline2">Без моих ответов</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline d-block">
                                        <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input">
                                        <label class="custom-control-label" for="customRadioInline3">С моими ответами</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" d-none d-lg-flex  justify-content-between align-items-center ">
                        <nav class="nav nav-pills nav-justified">
                            <a class="link link--pill link--color-black link--pill-active  " href="#">Новые темы</a>
                            <a class="link link--pill link--color-black" href="#">Лучшие</a>
                            <a class="link link--pill link--color-black" href="#">Популярные</a>
                        </nav>
                        <v-popover offset="0">

                            <div class="d-none  d-md-flex">
                                <div class="link link--dropdown">За сегодня</div>
                            </div>
                            <template slot="popover">
                                <div class="py-3 px-3 bb-1">За сегодня</div>
                                <div class="py-3 px-3 bb-1">За неделю</div>
                                <div class="py-3 px-3 bb-1">За месяц</div>
                                <div class="py-3 px-3  bb-1 ">За все время</div>
                                <div class="py-3 px-3">Выбрать период</div>

                            </template>
                        </v-popover>


                    </div>
                    <div class="discussions">
                        <paginate
                                name="discuss"
                                :list="discussions"
                                :per="3"
                        >

                            <disc-list-item :post="post"
                                            v-for="(post, index) in paginated('discuss')"
                                            :key="index">
                            </disc-list-item>
                        </paginate>

                        <div class="btn paginate__button btn-block mb-4 ">Показать еще</div>

                        <paginate-links :limit="3"
                                        for="discuss"
                                        :show-step-links="true"
                                        :step-links="{
                                            next: 'h',
                                            prev: 'g'
                                          }">
                        </paginate-links>

                    </div>
                </div>
                <div class="col-12 col-lg-4 d-none d-lg-block">
                    <div class="card-block card-block--shadow mb-4 ">
                        <div class="">
                            <div class="p-4 bb-1">
                                <div class="h2 mb-2 d-flex align-items-center">Разделы</div>
                                <category></category>
                            </div>
                            <!--<div class="p-4 bb-1">-->
                            <!--<div class="h2 mb-3 d-flex align-items-center justify-content-between ">Поиск по-->
                            <!--упоминаниям-->
                            <!--</div>-->

                            <!--<product-category-brand-search></product-category-brand-search>-->
                            <!--</div>-->
                            <div class="p-4 bb-1">
                                <div class="h2 mb-3 d-flex align-items-center justify-content-between ">Настройки
                                    показа
                                </div>

                                <div class="custom-control custom-radio custom-control-inline mb-1 d-block">
                                    <input type="radio" id="customRadioInline0" name="customRadioInline1" class="custom-control-input" checked>
                                    <label class="custom-control-label" for="customRadioInline0">Все темы</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline mb-1 d-block">
                                    <input type="radio" id="customRadioInline4" name="customRadioInline1" class="custom-control-input">
                                    <label class="custom-control-label" for="customRadioInline4">Без ответов</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline mb-1 d-block">
                                    <input type="radio" id="customRadioInline5" name="customRadioInline1" class="custom-control-input">
                                    <label class="custom-control-label" for="customRadioInline5">Без моих ответов</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline d-block">
                                    <input type="radio" id="customRadioInline6" name="customRadioInline1" class="custom-control-input">
                                    <label class="custom-control-label" for="customRadioInline6">С моими ответами</label>
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
    import postInfo from '@/components/post-block/parts/post-info.vue'
    import DiscListItem from "@//components/post-block/disc-list-item";
    import category from "@//components/category.vue";
    import productCategoryBrandSearch from "@//components/product-category-brand-search.vue"


    export default {
        name: 'discussions',
        components: {
            DiscListItem,
            postInfo,
            productCategoryBrandSearch,
            category
        },
        data: function () {
            return {

                discussionsSearch: "",
                discussionsSearchResalt: "",
                category: true,
                searchPlate: false,
                paginate: ['discuss'],
                brand: false,
                isCategory: false,
                posttype: false,
                discussions: [],
                topusers: [],
                userslevel: [],
                surveys: [],
                error: [],
                searchword: '',
                initSelected: [],
                stateLoad: false


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
            },
            themeFilter() {

                this.discussionsSearchResalt = true

            }
        },

        created() {


            this.axios.get('https://club-route.firebaseio.com/discussions.json')
                .then(response => {
                    this.discussions = response.data
                })
                .catch(e => {
                    this.error.push(e)
                });
            this.axios.get('https://club-route.firebaseio.com/top-users.json')
                .then(response => {
                    this.topusers = response.data
                })
                .catch(e => {
                    this.error.push(e)
                });
            this.axios.get('https://club-route.firebaseio.com/users-level.json')
                .then(response => {
                    this.userslevel = response.data
                })
                .catch(e => {
                    this.error.push(e)
                });
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
<style lang="scss" scoped>

    .discussions {
        padding-top: 1.5rem;
    }

    .new-discuss-btn {
        border: 1px solid #eee;
        padding: 7px 12px 6px 35px;
        border-radius: 50px;
        position: relative;
        white-space: nowrap;
    }

    .new-discuss-btn-icon {
        position: absolute;
        left: 11px;
        top: 9px;
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

    .paginate__button {
        border: 1px solid #ddd;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
        padding: 10px 17px 9px;
        border-radius: 8px;
        &:hover {
            background: #fff6e5;
        }
    }

    ul.paginate-links.discuss {
        margin-left: 0;
        padding-left: 0;
        overflow: hidden;
        border: 1px solid #ddd;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
        padding: 0;
        border-radius: 8px;
        display: inline-flex;
        max-width: 100%;
        justify-content: center;
        width: 100%;
        position: relative;
    }

    li.number a, .right-arrow a, .left-arrow a {
        flex-grow: 1;
        display: flex;
        align-items: center;
        text-align: center;
        cursor: pointer;
        transition: .1s;
        border-bottom: 3px solid #fff;
        padding: 11px 16px 8px;

        &:hover {
            background: #fff6e5;
            border-bottom: 3px solid #fff6e5;
        }
    }

    li.number.active a {
        border-bottom: 3px solid #e68c00;
    }

    li.number, .right-arrow, .left-arrow {

        cursor: pointer;
        display: flex;

    }

    .right-arrow {
        position: absolute;
        right: 0;
        display: flex;
        cursor: pointer;
        font-family: "mydns" !important;
    }

    .left-arrow {
        position: absolute;
        left: 0;
        display: flex;
        cursor: pointer;
        font-family: "mydns" !important;
    }

    .ellipses {
        padding: 11px 5px 8px;
        display: inline-block;
        cursor: pointer;
    }

    li.right-arrow.disabled a {
        opacity: .4;
        cursor: not-allowed;
        &:hover {
            background: #fff;
            border-bottom: 3px solid #fff;
        }
    }

    li.left-arrow.disabled a {
        opacity: .4;
        cursor: not-allowed;
        &:hover {
            background: #fff;
            border-bottom: 3px solid #fff;
        }
    }

    .discussions__search {
        position: relative;
    }

    .suggestion {
        position: absolute;
        z-index: 997;
        background: white;
        box-shadow: 0 9px 30px rgba(0, 0, 0, 0.02), 0 3px 6px rgba(0, 0, 0, 0.05), 0 9px 50px rgba(0, 0, 0, 0.03);
        border-radius: 0 0 8px 8px;
        max-width: 100%;
        top: 40px;
    }

    .suggestion__item {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        border-bottom: 1px solid #eee;
        padding:6px 15px;
        font-size: 14px;
        cursor: pointer;
        &:hover {
            background: #ffeec3;
        }
    }

    .suggestion__group-title {
        font-size: 14px;
        border-bottom: 1px solid #eee;
        padding: 15px 15px 6px;
        box-shadow: inset 0 13px 10px -10px rgba(0, 0, 0, 0.1);

    }

    .filter__item {
        display: inline-block;
        background: #FC8507;
        padding: 4px 11px;
        font-size: 14px;
        border-radius: 28px;
        position: relative;
        padding-right: 33px;
        color: #fff;
        cursor: pointer;
        transition: all .2s;

        &:hover {
            background: #FFA218;
            text-decoration: line-through;
        }

    }

    .filter__item-icon {
        position: absolute;
        right: 10px;
        top: 7px;
        color: #fff;
    }


    .custom-control-label{
        padding-top: 1px ;
    }

</style>