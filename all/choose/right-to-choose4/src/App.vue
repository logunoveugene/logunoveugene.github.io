<template>
    <div id="app">
        <nav class="navbar navbar-dark bg-blue-dark">
            <span class="navbar-brand ml-3 mb-0 h1">Право на выбор</span>
            <div class="d-flex flex-column flex-md-row align-items-start align-items-md-center ">
                <v-popover offset="5">
                    <div class="ml-3 mb-3 mb-md-0  d-flex">
                        <div class="mr-2">
                            <img src="https://i.snag.gy/wJ4h2n.jpg" alt="">
                        </div>
                        <div class="navbar__legend text-white">Обозначения</div>
                    </div>
                    <template slot="popover">
                        <div class="navbar__legend-item">
                            <div class="color-blue  navbar__legend-item-img">УИК № 000</div>
                            <div class="navbar__legend-item-desc">Данные Этапа №1 и Этапа №2 незначительно различаются
                                (менее 5%)
                            </div>

                        </div>
                        <div class="navbar__legend-item">
                            <div class=" color-orange navbar__legend-item-img">УИК № 000</div>
                            <div class="navbar__legend-item-desc"> Данные Этапа №1 и Этапа №2 значительно различаются
                                (более 5%)
                            </div>
                        </div>
                        <div class="navbar__legend-item">
                            <div class=" bg-light-red navbar__legend-item-img">УИК № 000</div>
                            <div class="navbar__legend-item-desc">Данные от наблюдателей и в системе ГАС Выборы
                                различаются
                            </div>
                        </div>
                        <div class="navbar__legend-item">
                            <div class=" bg-light-orange navbar__legend-item-img">УИК № 000</div>
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
        <router-view/>
    </div>
</template>
<style lang="scss">
    .navbar__legend {
        border-bottom: 1px dotted #a5a9de;;
        cursor: pointer;
        font-size: 14px;
        line-height: 24px;
        height: 23px;
    }

    .navbar__legend-item {
        width: 100%;
        font-size: 14px;
        text-align: left;
        margin-bottom: 1rem;
        position: relative;

    }

    .navbar__legend-item-img {
        display: inline-block;
        width: 90px;
        position: absolute;
        left: 0;
        top: 2px;

    }

    .navbar__legend-item-desc {
        display: inline-block;
        margin-left: 110px;

    }

    .navbar-brand {
        font-size: 1.5rem;
        font-weight: 700;
    }
</style>

