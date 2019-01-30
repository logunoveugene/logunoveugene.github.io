<template>
    <div class="header">
        <div class="header__top-line d-none d-lg-block main-layout" :class="live">
            <div class="header__container container">
                <div class="header__top-grid row">
                    <div class="header__top-block col-8 col-lg-8">
                        <div class="header__project-nav">
                            <ul class="nav small">
                                <li class="nav__link">
                                    <a class="link link--color-grey" href="#">DNS</a>
                                </li>
                                <li class="nav__link">
                                    <a class="link link--color-grey" href="#">DNS Технопоинт</a>
                                </li>
                                <li class="nav__link">
                                    <a class="link link--color-grey" href="#">DNS Сервис</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="header__top-block col-2 col-lg-4">

                        <div class="small">
                            <a href="#" class="link link--color-grey">
                                <span class="tour">
                                    <span class="tour__icon icon-info"></span>
                                    <span class="tour__desc">Тур по сайту</span>
                                </span>
                            </a>
                        </div>
                        <div v-if="!isAuth" class="header__user-nav">
                            <img class="header__user-img mr-2" src="https://i.snag.gy/hamMgu.jpg" alt="">
                            <ul class="nav small">
                                <li class="nav__link">
                                    <a class="link link--color-grey" v-on:click="$emit('auth')" href="#">Вход</a>
                                </li>
                                <li class="nav__link">
                                    <a class="link link--color-grey" href="#">Регистрация</a>
                                </li>
                            </ul>
                        </div>
                        <div v-if="isAuth" class="header__user-nav">
                            <ul class="nav small">
                                <li class="nav__link">
                                    <v-popover offset="5">
                                        <!---->
                                        <img class="header__user-img mr-2" src="https://i.snag.gy/z07FBT.jpg" alt="">
                                        <a class="link link--color-grey link--dropdown"
                                           href="#">Александр</a>
                                        <template slot="popover">
                                            <div class="py-2 pt-3 text-left px-3 ">
                                                <a href="" class="link link--color-grey">Личные сообщения</a>
                                            </div>
                                            <div class="py-2 text-left px-3 ">
                                                <a href="" class="link link--color-grey">Мои статьи</a>
                                            </div>
                                            <!--<div class="py-2 text-left px-3 ">-->
                                                <!--<a href="" class="link link&#45;&#45;color-grey">Личные сообщения</a>-->
                                            <!--</div>-->
                                            <div class="py-2 text-left px-3 ">
                                                <a href="" class="link link--color-grey">Мои темы</a>
                                            </div>
                                            <div class="py-2 text-left px-3 ">
                                                <a href="" class="link link--color-grey">Обратная связь</a>
                                            </div>
                                            <div class="py-2 pb-3 text-left px-3 bb-1">
                                                <a href="" class="link link--color-grey">Профиль</a>
                                            </div>
                                            <div class="py-3 text-left px-3 ">
                                                <a href="#" class="link link--color-grey" v-on:click="$emit('logout')">Выход</a>
                                            </div>
                                        </template>
                                    </v-popover>
                                </li>
                                <!--<li class="nav__link">-->
                                <!--<a class="link link&#45;&#45;color-grey" v-on:click="$emit('logout')"  href="#">-->
                                <!--Выйти-->
                                <!--</a>-->
                                <!--</li>-->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="efir__button" v-on:click="$emit('liveon')" v-if="live == ''">
                <div class="small">
                    <a href="#"
                       class=" pt-1 link link--color-grey">Эфир
                        <span class="badge badge-danger ml-1">+1</span></a>
                </div>
            </div>
        </div>
        <headroom v-bind:offset="143" :class="live" class="main-layout">

            <!--<fixed-header  :class="live" :threshold="65" :fixed.sync="isFixed">-->
            <div class="fixed-plate" :class="{ 'is-fixed': isFixed }">
                <div class="header__bottom-line">
                    <div class="header__container container">
                        <div class="header__bottom-grid t row">
                            <div class="header__bottom-block col-3 d-lg-none">
                                <div class="header__mobile-menu">
                                    <div @click="isMenu=true" class="header__mobile-menu-img">
                                        <div class="icon-line-menu"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="header__bottom-block justify-content-lg-start col-6 col-lg-8">
                                <router-link to="/">
                                    <img class="heaader__logo" src="https://i.snag.gy/SWcknL.jpg" alt="">
                                </router-link>

                                <div class="header__main-nav d-none d-lg-flex">
                                    <router-link to="/review" class="link link--color-grey">
                                        Дайджест
                                    </router-link>
                                    <router-link to="/review" class="link link--color-grey">
                                        Обзоры
                                    </router-link>
                                    <router-link to="/review" class="link link--color-grey">
                                        Лайфхаки
                                    </router-link>
                                    <router-link to="/discussions" class="link link--color-grey">
                                        Коммуникатор
                                    </router-link>
                                </div>

                            </div>
                            <div class="header__bottom-block col-3 col-lg-4">
                                <transition name="fademy">
                                    <div v-if="!isSearchExtend" class="header__create-controls d-none d-lg-flex">
                                        <div class="header__create-controls-item">
                                            <div class="header__create-controls-icon">
                                                <div class="icon-pen"></div>
                                            </div>
                                            <router-link class="link link--color-grey" to="/newpost">Написать статью
                                            </router-link>
                                        </div>
                                        <div class="header__create-controls-item">
                                            <div class="header__create-controls-icon">
                                                <div class="icon-speech-bubble-outline"></div>
                                            </div>
                                            <router-link class="link link--color-grey" to="/newdesc">Создать тему
                                            </router-link>
                                        </div>
                                    </div>
                                </transition>

                                <div class="header__search">

                                    <div v-if="!isSearchExtend" @click="searchExtend" class="header__search-img">
                                        <div class="icon-search"></div>
                                    </div>
                                    <div v-if="isSearchExtend" @click="isSearchExtend = false"
                                         class="header__search-img">
                                        <div class="icon-close"></div>
                                    </div>


                                    <!---->
                                    <!--<img v-if="!isSearchExtend" @click="searchExtend" class="header__search-img"-->
                                    <!--src="https://i.snag.gy/7rBCoa.jpg" alt="">-->
                                    <!--<img v-if="isSearchExtend" @click="isSearchExtend = false"-->
                                    <!--class="header__search-img"-->
                                    <!--src="https://i.snag.gy/7rBCoa.jpg" alt="">-->
                                </div>

                            </div>
                            <transition name="fademy">
                                <div v-if="isSearchExtend" class="header__search-extend">
                                    <input placeholder="Поиск"
                                           v-on:keyup.enter="submitSearch()"
                                           ref="headerSearchField"
                                           type="search"
                                           class="header__search-extend-field">
                                    <v-popover offset="5">
                                        <div class="header__search-extend-btn">по всему сайту
                                            <div class="header__search-extend-btn-icon icon-down"></div>
                                        </div>
                                        <template slot="popover">
                                            <div class="py-3 px-3 bb-1"><a href="" class="link link--color-grey">в дайджесте</a></div>
                                            <div class="py-3 px-3 bb-1"><a href="" class="link link--color-grey">в обзорах</a></div>
                                            <div class="py-3 px-3 bb-1"><a href="" class="link link--color-grey">в лайфхаках</a></div>
                                            <div class="py-3 px-3"><a href="" class="link link--color-grey">в коммуникаторе</a></div>
                                        </template>
                                    </v-popover>

                                </div>

                            </transition>
                            <!--@blur="isSearchExtend=false"-->
                        </div>
                    </div>
                </div>
            </div>
        </headroom>
        <div v-if="isMenu" class="menu">
            <div class="p-3 bb-1 d-flex justify-content-between ">
                <div class="h1 mb-0">Меню</div>
                <div @click="isMenu = false" class="h1 mb-0 px-2">×</div>
            </div>
            <div class="menu__scroll ">
                <a href="#" class="link link--color-grey ">
                    <div v-ripple class="p-3 bb-1" @click="isMenu = false">
                        <div class="h4 mb-0">Войти в личный кабинет</div>
                    </div>
                </a>
                <router-link to="/review" class="link link--color-grey">
                    <div v-ripple class="p-3 bb-1" @click="isMenu = false">
                        <div class="h4 mb-0">Дайджест</div>
                    </div>
                </router-link>
                <router-link to="/review" @click="isMenu = false" class="link link--color-grey">
                    <div v-ripple class="p-3 bb-1" @click="isMenu = false">
                        <div class="h4 mb-0">Обзоры</div>
                    </div>
                </router-link>
                <router-link to="/review" @click="isMenu = false" class="link link--color-grey">
                    <div v-ripple class="p-3 bb-1" @click="isMenu = false">
                        <div class="h4 mb-0">Лайфхаки</div>
                    </div>
                </router-link>
                <router-link to="/discussions" @click="isMenu = false" class="link link--color-grey">
                    <div v-ripple class="p-3 bb-1" @click="isMenu = false">
                        <div class="h4 mb-0">Обсуждения</div>
                    </div>
                </router-link>
                <router-link to="/newpost" @click="isMenu = false" class="link link--color-grey">
                    <div v-ripple class="p-3 bb-1" @click="isMenu = false">
                        <div class="d-flex">
                            <div class="header__create-controls-icon">
                                <div class="icon-pen"></div>
                            </div>
                            <div class="h4 mb-0">Написать</div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/newdesc" @click="isMenu = false" class="link link--color-grey">
                    <div v-ripple class="p-3 bb-1" @click="isMenu = false">
                        <div class="d-flex">
                            <div class="header__create-controls-icon">
                                <div class="icon-speech-bubble-outline"></div>
                            </div>
                            <div class="h4 mb-0">Создать тему</div>
                        </div>
                    </div>
                </router-link>


            </div>

        </div>
    </div>

</template>

<script>

    import headroom from './fixedHeader/headroom.vue'

    export default {
        components: {
            headroom
        },
        props: {
            live: {
                type: null,
                default: "showlive"
            },
            isAuth: {
                type: null,
                default: false
            }
        },
        methods: {
            searchExtend() {
                this.isSearchExtend = true
                this.$nextTick(function () {

                    this.$refs.headerSearchField.focus();

                })


            },
            submitSearch() {
                this.isSearchExtend = false
                this.$router.push({path: '/search-r'})
            },
        },
        data: function () {
            return {
                isFixed: false,
                isSearchExtend: false,
                isMenu: false
            }
        }
    }
</script>

<style>

    .tour {
        display: flex;
        align-items: center;
    }

    .tour__icon {
        display: inline-block;
        height: 19px;
        font-size: 18px;
        overflow: hidden;
        padding: 0;
        margin: 0;
        margin-right: 3px;
    }

    .efir__button {
        position: fixed;
        z-index: 999999;
        right: 0;
        top: 80px;
        background: #f6f6f6;
        height: 37px;
        padding: .5rem .75rem;
        border-radius: 8px 0 0 8px;
        /*box-shadow: 0 1px 2px rgba(0,0,0,.08), 0 3px 10px rgba(0,0,0,.1)  ;*/

    }

    .fademy-enter-active, .fademy-leave-active {
        transition: opacity .2s;
    }

    .fademy-enter, .fademy-leave-to /* .fade-leave-active до версии 2.1.8 */
    {
        opacity: 0;

    }

    .header {
        height: 70px;
    }

    .fixed-plate {
        position: relative;
        opacity: 1;
        background: #fff;

    }

    .fixed-plate.is-fixed {
        position: fixed;
        top: 0;
        z-index: 91000;
        width: 100%;
        background-color: #fff;
        display: block;
        opacity: 1;
    }

    .headroom--not-top .header__bottom-line {
        padding: 1rem 0;
        box-shadow: 0 0 15px rgba(0, 0, 0, .1);
    }

    .header__fixed-bottom-line {
        padding: 1rem 0;
        box-shadow: 0 0 15px rgba(0, 0, 0, .1);
    }

    .header__top-line {
        width: auto;
        background-color: #f6f6f6;
        padding: .5rem 0;
        height: 46px;

    }

    .header__top-grid {

        justify-content: space-between;
        -ms-flex-direction: row;
        flex-direction: row;
        display: -ms-flexbox;
        display: flex;
    }

    .header__top-block {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
        align-items: center;
    }

    .header__bottom-line {
        padding: 1rem 0;
    }

    @media (min-width: 992px) {
        .header__bottom-line {
            padding: 3rem 0 2rem;
        }

        .header {
            height: 180px;
        }
    }

    .heaader__logo {
        height: 22px;
        width: auto;
        margin-top: -1px;

    }

    .header__user-nav {
        text-align: right;
        justify-content: flex-end;

        display: flex;
    }

    .header__user-img {
        max-height: 30px;
        width: auto;
    }

    .header__main-nav {
        width: 100%;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
        display: -ms-flexbox;
        display: flex;
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        margin: 0 3rem;
    }

    .header__bottom-grid {
        display: flex;
        align-items: center;
        position: relative;
    }

    .header__bottom-block {
        display: flex;
        justify-content: center;
    }

    .header__create-controls {
        display: -ms-flexbox;
        display: flex;
    }

    .header__create-controls-item {
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-direction: row;
        flex-direction: row;
        display: -ms-flexbox;
        display: flex;
        font-size: .875rem;
        font-weight: 700;
        margin-right: 3rem;
        white-space: nowrap;

    }

    .header__create-controls-icon {
        margin-right: .5rem
    }

    .header__search {
        text-align: right;
        width: 100%;
        cursor: pointer;
        position: relative;
        height: 26px;
    }

    .header__search-img {
        color: #222528;
        font-size: 25px;
        height: 30px;
        position: absolute;
        top: -1px;
        right: 0;
    }

    .header__search-extend {
        width: calc(100% - 60px);
        max-width: calc(100vw - 90px);
        position: absolute;
        left: 20px;
        top: -10px;
        display: flex;
        border-bottom: 1px solid #ddd;
        background: #fff;

    }

    @media (min-width: 992px) {
        .header__search-extend {
            width: calc(100% - 250px);
            max-width: calc(100vw - 120px);
            position: absolute;
            left: 190px;

        }
    }

    @media (min-width: 1200px) {
        .header__search-extend {
            width: calc(100% - 280px);
            max-width: calc(100vw - 120px);
            position: absolute;
            left: 225px;
        }
    }

    .header__search-extend-field {

        width: 100%;
        border: none;
        border-radius: 0px;
        line-height: 16px;
        padding: 12px 0 6px;
        font-size: 16px;
        outline: none;
    }

    .header__search-extend-btn {
        border: 0;
        background: #fff;
        outline: none;
        width: 130px;
        line-height: 16px;
        padding: 12px 0 6px;
        cursor: pointer;
        position: relative;
    }

    .header__search-extend-btn-icon.icon-down {
        position: absolute;
        right: 5px;
        top: 15px;
        font-size: 12px;
        color: #999;
    }

    .header__mobile-menu {
        justify-content: start;
        width: 100%;
        position: relative;
        height: 30px;
    }

    .header__mobile-menu-img {

        position: absolute;
        font-size: 18px;
        color: #222528;
        top: 5px;
    }

    .menu {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        background: #fff;
        z-index: 999999;
    }

    .menu__scroll {
        width: 100%;
        height: calc(100vh - 72px);
        overflow: scroll;
    }

    .headroom {
        top: 0px;
        left: 0px;
        right: 0px;
        z-index: 999;
        transform: translate3d(0px, 0px, 0px);
        transition-delay: 0s;
    }

    .headroom--top {
        position: relative;
        transform: translate3d(0px, 0px, 0px) !important;
        transition: translate3d 0ms ease-in-out 0s !important;
    }

    .headroom--not-top {
        position: fixed;
        transform: translate3d(0px, -100%, 0px);
        transition-delay: -0.25s;
    }

    .headroom--pinned {
        transition: all 250ms ease-in-out 0s;
        transform: translate3d(0px, 0px, 0px);
    }

    .headroom--unpinned {
        transform: translate3d(0px, -100%, 0px);

    }

    /*.headroom--not-bottom*/


</style>

