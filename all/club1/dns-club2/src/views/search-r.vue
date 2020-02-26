<template>
    <div class="about">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-md-flex small mb-2 d-flex flex-wrap">
                        <router-link class="link link--color-black" to="/">Клуб</router-link>

                        <div class="mx-2">/</div>
                        <div class="text-muted">Результаты поиска по запросу "Xiaomi"</div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <h1 class="page__title mb-0 ">Результаты поиска по запросу "Xiaomi"</h1>

                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-8">
                    <div class="discussions__search">
                        <div class="search-ext  mb-4 ">
                            <input type="text" v-model="discussionsSearch" placeholder="Поиск по сайту"
                                   class="field field--search w-100">
                            <div class="search-ext__btn-search icon-search"></div>
                            <div class="search-ext__detals">
                                <div class="d-flex justify-content-between ">
                                    <div class="d-flex">
                                        Найдено 153 материалов
                                    </div>
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
                                            <label class="custom-control-label" for="customCheck1">Искать в
                                                названиях </label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck151"
                                                   checked>
                                            <label class="custom-control-label" for="customCheck151">Искать в
                                                содержимом</label>
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
                        <div class="collapse-plate  d-block d-lg-none" v-if="searchPlate">
                            <div class="">
                                <div class="p-4 bb-1">
                                    <div class=" ">
                                        <div class="custom-control custom-checkbox mb-2">
                                            <input type="checkbox" id="customCheck1" class="custom-control-input">
                                            <label for="customCheck1" class="custom-control-label">Статьи</label>
                                        </div>

                                        <div class="custom-control custom-checkbox  ">
                                            <input type="checkbox" id="customCheck1" class="custom-control-input">
                                            <label for="customCheck1" class="custom-control-label">Темы</label>
                                        </div>
                                    </div>
                                </div>
                                <div class=" p-4 bb-1">
                                    <nav class="nav nav-pills nav-justified">
                                        <a class="link link--pill link--color-black link--pill-active  " href="#">Наиболее
                                            релевантные</a>
                                        <a class="link link--pill link--color-black" href="#">Сначала свежие</a>
                                    </nav>
                                </div>
                                <div class="p-4">
                                    <date-range-select></date-range-select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-none d-lg-flex   justify-content-between align-items-center ">
                        <nav class="nav nav-pills nav-justified">
                            <a class="link link--pill link--color-black link--pill-active  " href="#">Наиболее
                                релевантные</a>
                            <a class="link link--pill link--color-black" href="#">Сначала свежие</a>
                        </nav>
                        <date-range-select></date-range-select>

                    </div>
                    <div class="discussions">

                            <post-search-r :post="post"
                                           v-for="(post, index) in searchArticle"
                                           :key="index">
                            </post-search-r>

                            <disc-list-item-search-lite :post="post"
                                                   v-for="(post, index) in discussions"
                                                   :key="index">
                            </disc-list-item-search-lite>

                    </div>
                </div>
                <div class="col-12 col-lg-4 d-none d-lg-block">
                    <div class="card-block card-block--shadow mb-4 ">
                        <div class="">
                            <div class="p-4 bb-1">
                                <div class=" ">
                                    <div class="custom-control custom-checkbox mb-2">
                                        <input type="checkbox" id="customCheck1" class="custom-control-input">
                                        <label for="customCheck1" class="custom-control-label">Статьи</label>
                                    </div>

                                    <div class="custom-control custom-checkbox  ">
                                        <input type="checkbox" id="customCheck1" class="custom-control-input">
                                        <label for="customCheck1" class="custom-control-label">Темы</label>
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
    import postInfo from '@/components/post-block/parts/post-info.vue'

    import categoryCut from "@//components/category-cut.vue";
    import productCategoryBrandSearch from "@//components/product-category-brand-search.vue"
    import PostSearchR from "../components/post-block/post-search-r";
    import dateRangeSelect from "@//components/dateRangeSelect.vue"
    import DiscListItemSearchLite from "@//components/post-block/disc-list-item-search-lite";

    export default {
        name: 'discussions',
        components: {
            PostSearchR,
            DiscListItemSearchLite,
            postInfo,
            productCategoryBrandSearch,
            categoryCut,
            dateRangeSelect,

        },
        data: function () {
            return {
                discussions:[],
                searchExtPlate: false,
                searchExtPlateFilter: false,
                discussionsSearch: "Xiaomi",
                discussionsSearchResalt: "",
                category: true,
                allFilter: false,
                searchPlate: false,
                paginate: ['discuss'],
                brand: false,
                isCategory: false,
                posttype: false,
                searchArticle: [],
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

            this.axios.get('https://club-route.firebaseio.com/searchArticle.json')
                .then(response => {
                    this.searchArticle = response.data
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