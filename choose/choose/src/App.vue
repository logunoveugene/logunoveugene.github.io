<template>
    <div id="app">
        <nav class="navbar navbar-dark bg-blue-dark">
            <router-link to="/"><span class="navbar-brand ml-3 mb-0 h1">Право на выбор</span></router-link>
            <div class="d-flex flex-column flex-md-row align-items-start align-items-md-center ">
                <v-popover offset="5">
                    <div class="ml-3 mb-3 mb-md-0  d-flex">
                        <div class="mr-2">
                            <img src="./assets/ask.jpg" alt="">
                        </div>
                        <div class="navbar__legend text-white">Обозначения</div>
                    </div>
                    <template slot="popover">
                        <div class="navbar__legend-item">
                            <div class="navbar__legend-item-img color-blue ">УИК № 000</div>
                            <div class="navbar__legend-item-desc">Данные Этапа №1 и Этапа №2 незначительно различаются
                                (менее 5%)
                            </div>

                        </div>
                        <div class="navbar__legend-item">
                            <div class="navbar__legend-item-img color-orange">УИК № 000</div>
                            <div class="navbar__legend-item-desc"> Данные Этапа №1 и Этапа №2 значительно различаются
                                (более 5%)
                            </div>
                        </div>
                        <div class="navbar__legend-item">
                            <div class="navbar__legend-item-img bg-light-red ">УИК № 000</div>
                            <div class="navbar__legend-item-desc">Данные от наблюдателей и в системе ГАС Выборы
                                различаются
                            </div>
                        </div>
                        <div class="navbar__legend-item">
                            <div class="bg-light-orange navbar__legend-item-img">УИК № 000</div>
                            <div class="navbar__legend-item-desc">В системе ГАС Выборы найдено несколько версий данных,
                                некоторые из них
                                отличаются от данных наблюдателей
                            </div>
                        </div>

                    </template>
                </v-popover>
                <div class="mr-3 ml-4 text-white d-none d-md-block">|</div>
                <div class="btn-group btn-group-toggle btn-sm mx-2 mb-2 mb-md-0" data-toggle="buttons">
                    <label @click="isPercent=true" class="btn btn-light btn-sm btn-secondary"
                           :class="{active : isPercent}">
                        <input type="radio" name="options" id="option1" autocomplete="off" checked> Проценты
                    </label>
                    <label @click="isPercent=false" class="btn btn-light btn-sm btn-secondary"
                           :class="{active : !isPercent}">
                        <input type="radio" name="options" id="option2" autocomplete="off"> Абсолютные значения
                    </label>
                </div>
            </div>
        </nav>
        <router-view :isPercent="isPercent"></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {
                isPercent: true,
            }
        }


    }
</script>
<style lang="scss">

    .navbar {
        background: #152f81;

        &__legend {
            border-bottom: 1px dotted #a5a9de;;
            cursor: pointer;
            font-size: 14px;
            line-height: 24px;
            height: 23px;
        }

        &__legend-item {
            width: 100%;
            font-size: 14px;
            text-align: left;
            margin-bottom: 1rem;
            position: relative;

        }

        &__legend-item-img {
            display: inline-block;
            width: 90px;
            position: absolute;
            left: 0;
            top: 2px;

        }

        &__legend-item-desc {
            display: inline-block;
            margin-left: 110px;

        }

        &-brand {
            font-size: 1.5rem;
            font-weight: 700;
        }
    }

    .tooltip {
        display: block !important;
        z-index: 10000;

        .tooltip-inner {
            background: white;
            color: black;
            border-radius: 4px;
            padding: 15px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            max-width: 100vw;
            width: 400px;
        }

        .tooltip-arrow {
            width: 0;
            height: 0;
            border-style: solid;
            position: absolute;
            margin: 5px;
            border-color: white;
            z-index: 1;
        }

        &[x-placement^="top"] {
            margin-bottom: 5px;

            .tooltip-arrow {
                border-width: 5px 5px 0 5px;
                border-left-color: transparent !important;
                border-right-color: transparent !important;
                border-bottom-color: transparent !important;
                bottom: -5px;
                left: calc(50% - 5px);
                margin-top: 0;
                margin-bottom: 0;
            }
        }

        &[x-placement^="bottom"] {
            margin-top: 5px;

            .tooltip-arrow {
                border-width: 0 5px 5px 5px;
                border-left-color: transparent !important;
                border-right-color: transparent !important;
                border-top-color: transparent !important;
                top: -5px;
                left: calc(50% - 5px);
                margin-top: 0;
                margin-bottom: 0;
            }
        }

        &[x-placement^="right"] {
            margin-left: 5px;

            .tooltip-arrow {
                border-width: 5px 5px 5px 0;
                border-left-color: transparent !important;
                border-top-color: transparent !important;
                border-bottom-color: transparent !important;
                left: -5px;
                top: calc(50% - 5px);
                margin-left: 0;
                margin-right: 0;
            }
        }
        &[x-placement^="left"] {
            margin-right: 5px;

            .tooltip-arrow {
                border-width: 5px 0 5px 5px;
                border-top-color: transparent !important;
                border-right-color: transparent !important;
                border-bottom-color: transparent !important;
                right: -5px;
                top: calc(50% - 5px);
                margin-left: 0;
                margin-right: 0;
            }
        }
        &.popover {
            border: none;

            .popover-inner {
                background: #ffffff;
                color: black;
                padding: 24px;
                border-radius: 5px;
                box-shadow: 0 5px 30px rgba(black, .1);
            }

            .popover-arrow {
                border-color: #ffffff;
            }
        }
        &[aria-hidden='true'] {
            visibility: hidden;
            opacity: 0;
            transition: opacity .15s, visibility .15s;
        }

        &[aria-hidden='false'] {
            visibility: visible;
            opacity: 1;
            transition: opacity .15s;
        }
    }

    .bg-light-red {
        background: #ffe5e8 !important;
    }

    .bg-light-orange {
        background: #fff0d3 !important;
    }

    .color-blue {
        color: #144ebf;
    }

    .color-orange {
        color: #a75f00;
    }
    .bg-blue-light {
        background-color: #f0fcff;
        box-shadow: 0 0 20px rgba(0, 0, 0, .1);
        padding-bottom: 10px;
    }
    .swiper-button-disabled {
        display: none;
    }

    .swiper-button-next, .swiper-button-prev {
        position: absolute;
        top: 50%;
        width: 50px;
        height: 50px;
        border-radius: 10px;
        margin-top: -22px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        z-index: 10;
        cursor: pointer;
        -moz-background-size: 27px 44px;
        -webkit-background-size: 27px 44px;
        background-size: 10px 34px;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #fff;
    }
    .swiper-slide {
        display: table;
    }

</style>
