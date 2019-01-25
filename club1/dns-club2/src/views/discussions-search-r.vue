<template>
    <div class="about">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-md-flex small mb-2 d-flex flex-wrap">
                        <router-link class="link link--color-black" to="/">Клуб</router-link>
                        <div class="mx-2">/</div>
                        <router-link class="link link--color-black" to="/discussions">Коммуникатор</router-link>
                        <div class="mx-2">/</div>
                        <div class="text-muted">Результаты поиска по запросу "Intel Core i3-8100"</div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <h1 class="page__title mb-0 ">Результаты поиска по запросу "Intel Core i3-8100"</h1>
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
                        <div class="search-ext  mb-4 ">
                            <input type="text" v-model="discussionsSearch" placeholder="Поиск по темам"
                                   class="field field--search w-100">
                            <div class="search-ext__btn-search icon-search"></div>
                            <div class="search-ext__detals">
                                <div class="d-flex justify-content-between ">
                                    <div class="mb-0">Найдено 3 темы</div>
                                    <div class="d-flex">

                                        <div class="search-ext__icon">
                                            <div @click="(searchExtPlate=!searchExtPlate) && (searchExtPlateFilter=false)"
                                                 class="link link--color-grey icon-settings-1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="searchExtPlate" class="search-ext__plate pt-3">
                                    <div class="mb-3">


                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1"
                                                   checked>
                                            <label class="custom-control-label" for="customCheck1">Искать в названиях
                                                тем</label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck151"
                                                   checked>
                                            <label class="custom-control-label" for="customCheck151">Искать в
                                                ответах</label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customChe6565655"
                                                   checked>
                                            <label class="custom-control-label" for="customChe6565655">Искать в
                                                привязанных товарах</label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customChe54545"
                                                   checked>
                                            <label class="custom-control-label" for="customChe54545">Искать в
                                                привязанных брендах</label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customChec6565"
                                                   checked>
                                            <label class="custom-control-label" for="customChec6565">Искать в
                                                привязанных категориях товара</label>
                                        </div>

                                    </div>
                                    <div class="btn btn--color-white">Применить</div>
                                </div>



                            </div>

                        </div>

                        <div class="suggestion-wrap"
                             v-if="discussionsSearch==true && discussionsSearch!='Intel Core i3-8100' ">
                            <div class="suggestion">
                                <div class="suggestion__group">
                                    <div class="suggestion__list">
                                        <div class="suggestion__item">Подскажите, в ближайшее время не предвидится акции
                                            на телевизор LED Hisense H55A6100, по которой он стоил 35000р?
                                        </div>
                                        <div class="suggestion__item">Выбор бюджетного ноутбука до 15 000р. 3 варианта
                                        </div>
                                        <div class="suggestion__item">Будет ли работать на материнской плате Asus
                                            P8H61-M Pro с i3 2100?
                                        </div>
                                        <div class="suggestion__item">Выбор бюджетного ноутбука до 15 000р. 3 варианта
                                        </div>
                                        <div class="suggestion__item">Можно ли при покупке увеличить ОЗУ?</div>
                                        <div class="suggestion__item">Интересует возможность установки SSD в ноутбук
                                            ASUS N56JN
                                        </div>
                                        <div class="suggestion__item">Подскажите, пожалуйста, подойдет ли данный
                                            вентилятор к процессорному куллеру Zalman CNPS10X Performa?
                                        </div>
                                        <div class="suggestion__item">Выбор бюджетного ноутбука до 15 000р. 3 варианта
                                        </div>
                                        <div class="suggestion__item">Будет ли работать на материнской плате Asus
                                            P8H61-M Pro с i3 2100?
                                        </div>
                                        <div class="suggestion__item">Выбор бюджетного ноутбука до 15 000р. 3 варианта
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

                    <div class="">
                        <div class="d-block d-lg-none">
                            <div v-ripple class="collapse-block card-block card-block--full-mobile "
                                 @click="searchPlate=!searchPlate">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="collapse-block__title">Фильтры</div>
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
                                    <category-cut></category-cut>
                                </div>

                                <div class="py-4 bb-1">
                                    <div class="h2 mb-3 d-flex align-items-center justify-content-between ">Настройки
                                        показа
                                    </div>

                                    <div class="custom-control custom-radio custom-control-inline mb-1 d-block">
                                        <input type="radio" id="customRadioInline00" name="customRadioInline1"
                                               class="custom-control-input" checked>
                                        <label class="custom-control-label" for="customRadioInline00">Все темы</label>
                                    </div>

                                    <div class="custom-control custom-radio custom-control-inline mb-1 d-block">
                                        <input type="radio" id="customRadioInline1" name="customRadioInline1"
                                               class="custom-control-input">
                                        <label class="custom-control-label" for="customRadioInline1">Без ответов</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline mb-1 d-block">
                                        <input type="radio" id="customRadioInline2" name="customRadioInline1"
                                               class="custom-control-input">
                                        <label class="custom-control-label" for="customRadioInline2">Без моих
                                            ответов</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline d-block">
                                        <input type="radio" id="customRadioInline3" name="customRadioInline1"
                                               class="custom-control-input">
                                        <label class="custom-control-label" for="customRadioInline3">С моими
                                            ответами</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-none d-lg-flex  justify-content-between align-items-center ">
                        <nav class="nav nav-pills nav-justified">
                            <a class="link link--pill link--color-black link--pill-active  " href="#">Наиболее
                                релевантные</a>
                            <a class="link link--pill link--color-black" href="#">Сначала свежие</a>

                        </nav>
                        <v-popover offset="0">

                            <div class="d-none  d-md-flex">
                                <div class="link link--dropdown">За все время</div>
                            </div>
                            <template slot="popover">
                                <template slot="popover">
                                    <div class="py-2 pt-3 text-left px-3 ">
                                        <a href="" class="link link--color-grey">За сегодня</a>
                                    </div>
                                    <div class="py-2 text-left px-3 ">
                                        <a href="" class="link link--color-grey">За неделю</a>
                                    </div>
                                    <div class="py-2 text-left px-3 ">
                                        <a href="" class="link link--color-grey">За месяц</a>
                                    </div>
                                    <div class="py-2 text-left px-3 ">
                                        <a href="" class="link link--color-grey">За все время</a>
                                    </div>
                                    <div class="py-2 pb-3 text-left px-3 bb-1">
                                        <a href="" class="link link--color-grey">Выбрать период</a>
                                    </div>
                                </template>

                            </template>
                        </v-popover>

                    </div>
                    <div class="discussions">
                        <paginate
                                name="discuss"
                                :list="discussions"
                                :per="7"
                        >

                            <disc-list-item-search :post="post"
                                                   v-for="(post, index) in paginated('discuss')"
                                                   :key="index">
                            </disc-list-item-search>
                        </paginate>

                        <!--<div class="btn paginate__button btn-block mb-4 ">Показать еще</div>-->

                        <!--<paginate-links :limit="3"-->
                        <!--for="discuss"-->
                        <!--:show-step-links="true"-->
                        <!--:step-links="{-->
                        <!--next: 'h',-->
                        <!--prev: 'g'-->
                        <!--}">-->
                        <!--</paginate-links>-->

                    </div>
                </div>
                <div class="col-12 col-lg-4 d-none d-lg-block">
                    <div class="card-block card-block--shadow mb-4 ">
                        <div class="">
                            <div class="p-4 bb-1">
                                <div class="h2 mb-2 d-flex align-items-center">Разделы</div>
                                <category-cut></category-cut>
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
                                    <input type="radio" id="customRadioInline0" name="customRadioInline1"
                                           class="custom-control-input" checked>
                                    <label class="custom-control-label" for="customRadioInline0">Все темы</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline mb-1 d-block">
                                    <input type="radio" id="customRadioInline4" name="customRadioInline1"
                                           class="custom-control-input">
                                    <label class="custom-control-label" for="customRadioInline4">Без ответов</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline mb-1 d-block">
                                    <input type="radio" id="customRadioInline5" name="customRadioInline1"
                                           class="custom-control-input">
                                    <label class="custom-control-label" for="customRadioInline5">Без моих
                                        ответов</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline d-block">
                                    <input type="radio" id="customRadioInline6" name="customRadioInline1"
                                           class="custom-control-input">
                                    <label class="custom-control-label" for="customRadioInline6">С моими
                                        ответами</label>
                                </div>
                            </div>
                            <div v-if="allFilter" class="p-4 bb-1">
                                <div class="h2 mb-3 d-flex align-items-center justify-content-between ">Привязаны к
                                    теме
                                </div>

                                <div class="discussions__search">
                                    <div class="search-ext  mb-4 ">
                                        <input type="text" v-model="discussionsSearchExt" placeholder="Товары"

                                               class="field w-100 ">
                                        <div class="search-ext__btn-search icon-search"></div>
                                    </div>

                                </div>
                                <div class="search-ext  mb-4 ">
                                    <input type="text" placeholder="Бренды"

                                           class="field w-100 ">
                                    <div class="search-ext__btn-search icon-search"></div>
                                </div>
                                <div class="search-ext mb-1">
                                    <input type="text" placeholder="Категории товаров"

                                           class="field w-100 ">
                                    <div class="search-ext__btn-search icon-search"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-4">
                        <div v-if="!allFilter" @click="allFilter=true" class="link link--doted  link--color-grey">Все
                            фильтры
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
    import DiscListItemSearch from "@//components/post-block/disc-list-item-search";
    import categoryCut from "@//components/category-cut.vue";
    import productCategoryBrandSearch from "@//components/product-category-brand-search.vue"


    export default {
        name: 'discussions',
        components: {
            DiscListItemSearch,
            postInfo,
            productCategoryBrandSearch,
            categoryCut
        },
        data: function () {
            return {
                searchExtPlate: false,
                searchExtPlateFilter: false,
                discussionsSearch: "Intel Core i3-8100",
                discussionsSearchResalt: "",
                category: true,
                allFilter: false,
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


            this.axios.get('https://club-route.firebaseio.com/searchDisc.json')
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
<style lang="scss">
    .search-ext {
        background: #f2f2f2;
        border-radius: 8px;
        position: relative;
    }

    .search-ext__btn-search {
        position: absolute;
        right: 10px;
        top: 8px;
        font-size: 22px;
        color: #dddddd;

    }

    .search-ext__detals {
        padding: 10px;
    }

    .search-ext__icon {
        font-size: 20px;
        height: 22px;
        overflow: hidden;
    }

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
        border: 1px solid #ddd;
        border-top: 0;
        box-shadow: 20px 29px 40px -20px rgba(0, 0, 0, 0.08), -20px 29px 40px -20px rgba(0, 0, 0, 0.08), 0 25px 30px -20px rgba(0, 0, 0, 0.04);
        border-radius: 0 0 8px 8px;
        max-width: 100%;
        top: 35px;
        padding: 8px 0;
    }

    .suggestion__item {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;

        padding: 6px 15px;

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

    .custom-control-label {
        padding-top: 1px;
    }

</style>