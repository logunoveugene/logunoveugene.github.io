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
                        <div class="search-ext  mb-4 ">
                            <input v-model="discussionsSearch" placeholder="Поиск по темам"
                                   v-on:keyup.enter="submitSearch()"
                                   type="search"
                                   class="field w-100 ">
                            <div v-bind:class="{'search-ext__btn-search--active': discussionsSearch}"
                                 class="search-ext__btn-search icon-search"></div>
                        </div>
                        <transition name="slide-fade">
                            <div class="suggestion-wrap" v-if="discussionsSearch!=false">
                                <div class="suggestion">
                                    <div class="suggestion__group">
                                        <div class="suggestion__list">
                                            <div class="suggestion__item">Подскажите, в ближайшее время не предвидится
                                                акции
                                                на телевизор LED Hisense H55A6100, по которой он стоил 35000р?
                                            </div>
                                            <div class="suggestion__item">Выбор бюджетного ноутбука до 15 000р. 3
                                                варианта
                                            </div>
                                            <div class="suggestion__item">Будет ли работать на материнской плате Asus
                                                P8H61-M Pro с i3 2100?
                                            </div>
                                            <div class="suggestion__item">Выбор бюджетного ноутбука до 15 000р. 3
                                                варианта
                                            </div>
                                            <div class="suggestion__item">Можно ли при покупке увеличить ОЗУ?</div>
                                            <div class="suggestion__item">Интересует возможность установки SSD в ноутбук
                                                ASUS N56JN
                                            </div>
                                            <div class="suggestion__item">Подскажите, пожалуйста, подойдет ли данный
                                                вентилятор к процессорному куллеру Zalman CNPS10X Performa?
                                            </div>
                                            <div class="suggestion__item">Выбор бюджетного ноутбука до 15 000р. 3
                                                варианта
                                            </div>
                                            <div class="suggestion__item">Будет ли работать на материнской плате Asus
                                                P8H61-M Pro с i3 2100?
                                            </div>
                                            <div class="suggestion__item">Выбор бюджетного ноутбука до 15 000р. 3
                                                варианта
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                        <div class="mb-4" v-if="discussionsSearchResalt">
                            <div class="filter__item mr-3 mb-2">Товар: Телевизор LED Telefunken TF-LED19S62T2 черный
                                <div class="filter__item-icon icon-close"
                                     @click="discussionsSearchResalt=!discussionsSearchResalt"></div>
                            </div>
                            <!--<div class="filter__item mr-3 mb-2">Бренд: Xiaomi-->
                            <!--<div class="filter__item-icon icon-close"-->
                            <!--@click="discussionsSearchResalt=!discussionsSearchResalt"></div>-->
                            <!--</div>-->
                            <!--<div class="filter__item mr-3 mb-2">Категория товара: Пылесосы-->
                            <!--<div class="filter__item-icon icon-close"-->
                            <!--@click="discussionsSearchResalt=!discussionsSearchResalt"></div>-->
                            <!--</div>-->
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
                                    <div class="collapse-block__title">Фильтры</div>
                                    <div class="collapse-block__icon">
                                        <div v-if="!searchPlate" class="icon-down"></div>
                                        <div v-if="searchPlate" class="icon-up"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="collapse-plate pt-4  d-block d-lg-none" v-if="searchPlate">
                            <div class="px-3">


                                <div class="pb-4 bb-1">
                                    <nav class="nav nav-pills nav-justified">
                                        <a class="link link--pill link--color-black link--pill-active  " href="#">Новые
                                            темы</a>
                                        <a class="link link--pill link--color-black" href="#">Лучшие</a>
                                        <a class="link link--pill link--color-black" href="#">Популярные</a>
                                    </nav>

                                </div>
                                <div class="py-4 bb-1">
                                    <date-range-select></date-range-select>
                                </div>


                                <div class="py-4 bb-1">
                                    <div class="h2 mb-2 d-flex align-items-center">Разделы</div>
                                    <category></category>
                                </div>
                                <div class="py-4 bb-1">
                                    <div class="h2 mb-3 d-flex align-items-center">Настройки показа</div>
                                    <div class="custom-control custom-radio custom-control-inline mb-1  d-block">
                                        <input type="radio" id="customRadioInline12" name="userMenu"
                                               class="custom-control-input" checked>
                                        <label class="custom-control-label" for="customRadioInline12">Все темы</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline  mb-1  d-block">
                                        <input type="radio" id="customRadioInline14" name="userMenu"
                                               class="custom-control-input">
                                        <label class="custom-control-label" for="customRadioInline14">Без
                                            ответов</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline mb-1  d-block">
                                        <input type="radio" id="customRadioInline32" name="userMenu"
                                               class="custom-control-input">
                                        <label class="custom-control-label" for="customRadioInline32">Мои темы</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline mb-1  d-block">
                                        <input type="radio" id="customRadioInline32" name="userMenu"
                                               class="custom-control-input">
                                        <label class="custom-control-label" for="customRadioInline32">Мои черновики</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline mb-1  d-block">
                                        <input type="radio" id="customRadioInline3d" name="userMenu"
                                               class="custom-control-input">
                                        <label class="custom-control-label" for="customRadioInline3d">С моими
                                            ответами</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline   d-block">
                                        <input type="radio" id="customRadioInline2d" name="userMenu"
                                               class="custom-control-input">
                                        <label class="custom-control-label" for="customRadioInline2d">Без моих
                                            ответов</label>
                                    </div>
                                </div>
                                <div class="py-4 bb-1">
                                    <div class="h2 mb-3 d-flex align-items-center justify-content-between ">Привязаны к
                                        теме
                                    </div>

                                    <div class="discussions__search">
                                        <div class="search-ext  mb-4 ">
                                            <input type="text" v-model="discussionsSearchExt" placeholder="Товары"

                                                   class="field w-100 ">
                                            <div class="search-ext__btn-search icon-search"></div>
                                        </div>
                                        <transition name="slide-fade">
                                            <div class="suggestion-wrap" v-if="discussionsSearchExt!=false">
                                                <div class="suggestion">
                                                    <div class="suggestion__group">
                                                        <div class="suggestion__list">
                                                            <div @click="discussionsSearchResalt=true"
                                                                 class="suggestion__item">Телевизор LED Telefunken
                                                                TF-LED19S62T2 черный
                                                            </div>
                                                            <div @click="discussionsSearchResalt=true"
                                                                 class="suggestion__item">Телевизор LED Harper 20R470
                                                                черный
                                                            </div>
                                                            <div @click="discussionsSearchResalt=true"
                                                                 class="suggestion__item">Телевизор LED DEXP H20D7100E/W
                                                                белый
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </transition>
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
                    </div>


                    <div class=" d-none d-lg-flex  justify-content-between align-items-center ">
                        <nav class="nav nav-pills nav-justified">
                            <a class="link link--pill link--color-black link--pill-active  " href="#">Новые темы</a>
                            <a class="link link--pill link--color-black" href="#">Лучшие</a>
                            <a class="link link--pill link--color-black" href="#">Популярные</a>
                        </nav>
                        <date-range-select></date-range-select>
                    </div>
                    <div class="discussions">
                        <paginate
                                name="discuss"
                                :list="discussions"
                                :per="8"
                        >
                            <disc-list-item :post="post"
                                            v-for="(post, index) in paginated('discuss')"
                                            :key="index">
                            </disc-list-item>
                        </paginate>

                        <div class="btn paginate__button btn-block mb-4 ">Показать еще</div>

                        <paginate-links :limit="2"
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
                            <div class="p-4 bb-1">
                                <div class="h2 mb-3 d-flex align-items-center">Настройки показа</div>
                                <div class="custom-control custom-radio custom-control-inline mb-1  d-block">
                                    <input type="radio" id="customRadioInline12" name="userMenu"
                                           class="custom-control-input" checked>
                                    <label class="custom-control-label" for="customRadioInline12">Все темы</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline  mb-1  d-block">
                                    <input type="radio" id="customRadioInline14" name="userMenu"
                                           class="custom-control-input">
                                    <label class="custom-control-label" for="customRadioInline14">Без ответов</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline mb-1  d-block">
                                    <input type="radio" id="customRadioInline32" name="userMenu"
                                           class="custom-control-input">
                                    <label class="custom-control-label" for="customRadioInline32">Мои темы</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline mb-1  d-block">
                                    <input type="radio" id="customRadioInline3d" name="userMenu"
                                           class="custom-control-input">
                                    <label class="custom-control-label" for="customRadioInline3d">С моими
                                        ответами</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline   d-block">
                                    <input type="radio" id="customRadioInline2d" name="userMenu"
                                           class="custom-control-input">
                                    <label class="custom-control-label" for="customRadioInline2d">Без моих
                                        ответов</label>
                                </div>
                            </div>
                            <!--<div class="p-4 bb-1">-->
                            <!--<div class="h2 mb-3 d-flex align-items-center justify-content-between ">Поиск по-->
                            <!--упоминаниям-->
                            <!--</div>-->
                            <!--<product-category-brand-search></product-category-brand-search>-->
                            <!--</div>-->
                            <!--<div class="p-4 bb-1">-->
                            <!--<div class="h2 mb-3 d-flex align-items-center justify-content-between ">Настройки-->
                            <!--показа-->
                            <!--</div>-->
                            <!--<div class="custom-control custom-radio custom-control-inline mb-1 d-block">-->
                            <!--<input type="radio" id="customRadioInline00" name="customRadioInline1"-->
                            <!--class="custom-control-input" checked>-->
                            <!--<label class="custom-control-label" for="customRadioInline00">Все темы</label>-->
                            <!--</div>-->

                            <!--<div class="custom-control custom-radio custom-control-inline mb-1 d-block">-->
                            <!--<input type="radio" id="customRadioInline1" name="customRadioInline1"-->
                            <!--class="custom-control-input">-->
                            <!--<label class="custom-control-label" for="customRadioInline1">Без ответов</label>-->
                            <!--</div>-->
                            <!--</div>-->
                            <div v-if="allFilter" class="p-4 bb-1">
                                <div class="h2 mb-3 d-flex align-items-center justify-content-between ">Привязаны к
                                    теме
                                </div>

                                <div class="discussions__search">
                                    <div class="search-ext  mb-4">
                                        <input type="text" v-model="discussionsSearchExt" placeholder="Товары"
                                               class="field w-100 ">
                                        <div class="search-ext__btn-search icon-search"></div>
                                    </div>
                                    <transition name="slide-fade">
                                        <div class="suggestion-wrap" v-if="discussionsSearchExt!=false">
                                            <div class="suggestion">
                                                <div class="suggestion__group">
                                                    <div class="suggestion__list">
                                                        <div @click="discussionsSearchResalt=true"
                                                             class="suggestion__item">Телевизор LED Telefunken
                                                            TF-LED19S62T2 черный
                                                        </div>
                                                        <div @click="discussionsSearchResalt=true" class="suggestion__item">Телевизор LED Harper 20R470 черный</div>
                                                        <div @click="discussionsSearchResalt=true" class="suggestion__item">Телевизор LED DEXP H20D7100E/W белый</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </transition>
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
    import DiscListItem from "@//components/post-block/disc-list-item";
    import category from "@//components/category.vue";
    import productCategoryBrandSearch from "@//components/product-category-brand-search.vue"
    import dateRangeSelect from "@//components/dateRangeSelect.vue"

    import dayjs from 'dayjs'
    import relativeTime from 'dayjs/plugin/relativeTime'
    import 'dayjs/locale/ru'

    dayjs.locale('ru')
    dayjs.extend(relativeTime)


    export default {
        name: 'discussions',
        components: {
            DiscListItem,
            postInfo,
            productCategoryBrandSearch,
            category,
            dateRangeSelect,

        },
        props: {
            isAuth: {
                type: false,
                default: ""
            }
        },

        data: function () {
            return {







                discussionsSearch: "",
                discussionsSearchResalt: "",
                discussionsSearchExt: "",
                allFilter: false,
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
                stateLoad: false,


                date: '',
                formatDateRange: null,
                selectedRange: "За сегодня",
                // Get more form https://chmln.github.io/flatpickr/options/
                config: {
                    wrap: true,
                    // weekNumbers: true,

                    mode: "range",
                    maxDate: "today",
                    dateFormat: "Y-m-d",
                    defaultDate: "today",
                    // inline: true,
                    "locale": "ru"

                },


            }
        },
        computed: {
            searchDateSumbit: function () {
                let d = this.date.split('to');
                // let formatData = dayjs(d[0]).format('DD MMM YYYY')+'–'+ this.$dayjs(d[1]).format('DD MMM YYYY');
                this.selectedRange = d[0] + ' по ' + d[1];
                console.log(this.formatDateRange)
                return d


            },
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
            submitSearch() {
                this.$router.push({path: '/discussions-search-r'})
            },
            themeFilter() {
                this.discussionsSearch = "";
                this.discussionsSearchResalt = true

            },
            selectDate() {
                let d = this.date.split('to');
                // let formatData = dayjs(d[0]).format('DD MMM YYYY')+'–'+ this.$dayjs(d[1]).format('DD MMM YYYY');
                this.formatDateRange = d[0] + ' по ' + d[1];
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
<style lang="scss">


    .search-ext__btn-search {
        position: absolute;
        right: 5px;
        padding-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
        top: 4px;
        font-size: 22px;
        color: #ccc;
        background-color: #fff;
        height: 32px;
        border-radius: 8px;
        z-index: 60000;
        cursor: pointer;
        transition: all .1s;
    }

    .search-ext__btn-search--active {
        position: absolute;
        right: 5px;
        padding-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
        top: 4px;
        font-size: 22px;
        color: #fff;
        background-color: #ff7e00;
        box-shadow: inset 0 34px 25px -25px rgba(255, 188, 11, 0.5);
        height: 32px;
        border-radius: 8px;
        z-index: 60000;
        cursor: pointer;
    }

    .search-ext {
        position: relative;
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
        font-size: 14px;
    }

    li.number a, .right-arrow a, .left-arrow a {
        flex-grow: 1;
        display: flex;
        align-items: center;
        text-align: center;
        cursor: pointer;
        transition: .1s;
        border-bottom: 3px solid #fff;
        padding: 11px 13px 8px;

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
        padding: 11px 4px 8px;
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
        padding: 8px 10px;
        cursor: pointer;
        &:hover {
            background: #ffeec3;
        }
    }

    .suggestion__group-title {
        font-size: 14px;
        border-bottom: 1px solid #eee;
        padding: 16px 15px;
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


</style>