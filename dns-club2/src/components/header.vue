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
                        <div class="small" v-on:click="$emit('liveon')" v-if="live == ''">
                            <a href="#"
                               class="link link--color-grey">Эфир</a>
                        </div>
                        <div class="small">
                            <a href="#" class="link link--color-grey">Тур по сайту</a>
                        </div>
                        <div class="header__user-nav">
                            <ul class="nav small">
                                <li class="nav__link">
                                    <a class="link link--color-grey" href="#">Вход</a>
                                </li>
                                <li class="nav__link">
                                    <a class="link link--color-grey" href="#">Регистрация</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <fixed-header class="main-layout" :class="live" :threshold="65" :fixed.sync="isFixed">
            <div class="fixed-plate" :class="{ 'is-fixed': isFixed }">
                <div class="header__bottom-line">
                    <div class="header__container container">
                        <div class="header__bottom-grid t row">
                            <div class="header__bottom-block col-3 d-lg-none">
                                <div class="header__mobile-menu">
                                    <div class="header__mobile-menu-img">
                                        <div class="icon-line-menu"></div>
                                    </div>

                                </div>
                            </div>
                            <div class="header__bottom-block justify-content-lg-start col-6 col-lg-8">
                                <router-link to="/">
                                    <img class="heaader__logo" src="https://i.snag.gy/0aAx5r.jpg" alt="">
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
                                        Обсуждения
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
                                            <router-link class="link link--color-grey" to="/newpost">Написать
                                            </router-link>
                                        </div>
                                        <div class="header__create-controls-item">
                                            <div class="header__create-controls-icon">
                                                <div class="icon-speech-bubble-outline"></div>
                                            </div>
                                            <router-link class="link link--color-grey" to="/newdesc">Обсудить
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
                                           ref="headerSearchField"
                                           type="search"
                                           class="header__search-extend-field">
                                    <v-popover offset="5">
                                        <div class="header__search-extend-btn">по всему сайту
                                            <div class="header__search-extend-btn-icon icon-down"></div>
                                        </div>
                                        <template slot="popover">
                                            <div class="py-3 px-3 bb-1">В дайджесте</div>
                                            <div class="py-3 px-3 bb-1">В обзорах</div>
                                            <div class="py-3 px-3 bb-1">В лайфхаках</div>
                                            <div class="py-3 px-3 bb-1">В обсуждениях</div>
                                        </template>
                                    </v-popover>

                                </div>

                            </transition>
                            <!--@blur="isSearchExtend=false"-->
                        </div>
                    </div>
                </div>
            </div>
        </fixed-header>
    </div>

</template>

<script>

    import FixedHeader from 'vue-fixed-header'

    export default {
        components: {
            FixedHeader
        },
        props: {
            live: {
                type: null,
                default: "showlive"
            }
        },
        methods: {
            searchExtend() {
                this.isSearchExtend = true
                this.$nextTick(function () {

                    this.$refs.headerSearchField.focus();

                })


            }
        },
        data: function () {
            return {
                isFixed: false,
                isSearchExtend: false
            }
        }
    }
</script>

<style>
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

    /*.fixed-plate.is-fixed {*/
    /*position: fixed;*/
    /*top: 0;*/
    /*z-index: 1000;*/
    /*width: 100%;*/
    /*background-color: #fff;*/
    /*display: block;*/
    /*opacity: 1;*/
    /*}*/

    .is-fixed .header__bottom-line {
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
    }

    .header__bottom-line {
        padding: 1rem 0;
    }

    @media (min-width: 992px) {
        .header__bottom-line {
            padding: 3rem 0 2rem;
        }

        .header {
            height: 160px;
        }
    }

    .heaader__logo {
        height: 26px;
        width: auto;
        margin-top: -5px;

    }

    .header__user-nav {
        text-align: right;
        justify-content: flex-end;

        display: flex;
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
</style>

