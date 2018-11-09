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
                    <div class=" d-none d-lg-block mb-4">
                        <div class=" card-block layout--bg-grey  p-4 ">
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
                                <div class="pb-3  bb-1">
                                    <div class="h2 mb-2 d-flex align-items-center">Разделы</div>
                                    <category></category>
                                </div>
                                <div class=" py-3 bb-1">
                                    <div class="h2 mb-2 d-flex align-items-center justify-content-between ">Поиск по
                                        упоминаниям
                                    </div>
                                    <div class="small d-flex">
                                        <div class="mr-3">
                                            <a href="#" class="link link--doted link--color-grey">Товар</a>
                                        </div>
                                        <div class="mr-3">
                                            <a href="#" class="link link--doted link--color-grey">Категория</a>
                                        </div>
                                        <div class="mr-3">
                                            <a href="#" class="link link--doted link--color-grey">Бренд</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" d-none d-lg-flex  justify-content-between align-items-center ">
                        <nav class="nav nav-pills nav-justified">
                            <a class="link link--pill link--color-black link--pill-active  " href="#">Новые сообщения</a>
                            <a class="link link--pill link--color-black" href="#">Новые темы</a>

                        </nav>
                        <div class="d-none d-md-flex  ">за сегодня
                            <div class="small pt-1 ml-1 text-secondary">
                                <div class="icon-down"></div>
                            </div>
                        </div>
                    </div>
                    <div class="discussions">
                        <paginate
                                name="discuss"
                                :list="discussions"
                                :per="4"
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
                    <div class="card-block mb-4">
                        <div class="">
                            <div class="p-4 bb-1">
                                <div class="h2 mb-2 d-flex align-items-center">Разделы</div>
                                <category></category>
                            </div>
                            <div class="p-4 bb-1">
                                <div class="h2 mb-3 d-flex align-items-center justify-content-between ">Поиск по
                                    упоминаниям
                                </div>
                                <nav class="nav nav-pills nav-justified small mb-3">
                                    <a class="link link--pill link--color-black link--pill-active  " href="#">Товар</a>
                                    <a class="link link--pill link--color-black" href="#">Категория</a>
                                    <a class="link link--pill link--color-black" href="#">Бренд</a>
                                </nav>

                                <input type="text" class="field field--normal" placeholder="Укажите название или артикул">

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


    export default {
        name: 'discussions',
        components: {
            DiscListItem,
            postInfo,

            category
        },
        data: function () {
            return {
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
                stateLoad:false


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

.discussions{
    padding-top: 1.5rem;
}
    .new-discuss-btn {
        border: 1px solid #eee;
        padding: 7px 12px 6px 35px;
        border-radius: 50px;
        position: relative;
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

</style>