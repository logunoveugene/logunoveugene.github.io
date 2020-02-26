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
        <div class="pt-4 bg-blue-light sticky-top">
            <div class="container-fluid">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide>
                        <div class="table">
                            <div class="table__info d-flex flex-nowrap">
                                <div class="table__info-main  mr-4">
                                    <div class="d-flex flex-column">
                                        <div class="small">Обработано бюллетеней</div>
                                        <div class="h5 mb-3">578 688 (72%)</div>
                                        <div class="small">Последнее обновление</div>
                                        <div class="">18:28 16.12.18</div>
                                    </div>
                                </div>
                                <div v-for="candidate in candidates" :key="candidate.id"
                                     class="table__info-candidate d-flex flex-column">
                                    <div class="h6">{{candidate.name}}</div>
                                    <div class="small">{{candidate.consignment}}</div>
                                </div>
                            </div>
                            <div class="table__row-head mt-2 d-flex flex-nowrap">
                                <div class="table__region  mr-4">Избирательные участки</div>
                                <div v-for="candidate in candidates" :key="candidate.id"
                                     class="table__candidate-col d-flex flex-nowrap">
                                    <div class="table__candidate-sub  d-inline-block ">Наблюдатели</div>
                                    <div class="table__candidate-sub d-inline-block ">ГАС Выборы</div>
                                </div>
                            </div>
                            <div class="table__row-region d-flex flex-nowrap ">
                                <div class="table__region  mr-4">
                                    <img class="table__region-button"
                                         src="https://i.snag.gy/3Kc1JH.jpg"
                                         alt="">
                                    <div class="table__region-desc">Всё Приморье</div>
                                </div>
                                <div class="d-flex" v-if="districts[0]">
                                    <div
                                            class="table__candidate-col d-flex flex-nowrap"
                                            v-for="res in districts[0].result"
                                            :key="res.candidateId">
                                        <div class="table__candidate-sub  d-inline-block ">
                                            <span v-if="isPercent">{{res.GASResult | percent }}%</span>
                                            <span v-if="!isPercent">{{res.GASResultAbs | number }}</span>
                                        </div>
                                        <div class="table__candidate-sub d-inline-block ">
                                            <span v-if="isPercent">{{res.watcherResult | percent }}%</span>
                                            <span v-if="!isPercent">{{res.watcherResultAbs | number}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
        </div>
        <div class="container-fluid">
            <div class="table__wrap">
                <swiper :options="swiperOption" ref="mySwiper2">
                    <swiper-slide>
                        <div class="table">
                            <table-row :districtInfo="district"
                                       :isPercent="isPercent"
                                       v-for="district in districts"
                                       :key="district.id">
                            </table-row>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <modal name="uik-info"
               width="800"
               :scrollable=true
               height="auto"
               :adaptive="true"
        >
            <div class="p-4">
                <div class="d-flex justify-content-between mb-4">
                    <div class="h2">Данные по УИК № 05407</div>
                    <span class="h4" @click="hideModal">&times;</span>
                </div>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Кожемяко Олег Николаевич</th>
                        <th scope="col">Ищенко Андрей Сергеевич</th>
                        <th scope="col">Андрейченко Андрей Валерьевич</th>
                        <th scope="col">Недействительные бюллетени</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Наблюдатель КПРФ хххх предварительно</td>
                        <td>10%</td>
                        <td>10%</td>
                        <td>10%</td>
                        <td>10%</td>
                    </tr>
                    <tr>
                        <td>Наблюдатель КПРФ хххх предварительно</td>
                        <td>10%</td>
                        <td>10%</td>
                        <td>10%</td>
                        <td>10%</td>
                    </tr>
                    <tr>
                        <td>Наблюдатель КПРФ хххх предварительно</td>
                        <td>10%</td>
                        <td>10%</td>
                        <td>10%</td>
                        <td>10%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </modal>
    </div>
</template>

<script>

    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import tableRow from './components/table-row.vue'


    export default {
        name: 'app',
        components: {
            swiper,
            swiperSlide,
            tableRow
        },
        data() {
            return {
                districts: [],
                candidates: [],
                isPercent: true,
                swiperOption: {
                    slidesPerView: 'auto',
                    freeMode: true,
                    watchOverflow: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
        methods: {
            hideModal() {
                this.$modal.hide('uik-info');
            }
        },

        updated() {
            this.$nextTick(() => {
                const personNames = this.$refs.mySwiper.swiper;
                const tableData = this.$refs.mySwiper2.swiper;
                personNames.controller.control = tableData;
                tableData.controller.control = personNames
            })
        },
        created() {
            this.axios.get('https://right-to-choose.firebaseio.com/districts.json')
                .then(response => {
                    this.districts = response.data
                })
                .catch(e => {
                    this.error.push(e)
                });

            this.axios.get('https://right-to-choose.firebaseio.com/candidate.json')
                .then(response => {
                    this.candidates = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })
        }
    }
</script>

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

    .bg-blue-light {
        background-color: #f0fcff;
        box-shadow: 0 0 20px rgba(0, 0, 0, .1);
        padding-bottom: 10px;
    }

    .bg-blue-dark {
        background: #152f81;
    }



    .table {
        display: table;
        margin-bottom: 0;
        &__wrap {
            position: relative;
        }
        &__row-region {
            height: 50px;
            padding: 13px 0;
            font-weight: 700;

        }
        &__row {
            height: 50px;
            padding: 13px 0;

            &:hover {
                background: #f6f6f6;
            }

        }
        &__row-head {
            height: 50px;
            padding: 17px 0;
            font-size: 12px;

        }

        &__region {
            position: relative;
            min-width: 290px;
            padding-left: 1rem;
        }
        &__info {
            border-bottom: 1px solid #dff0f5;
            padding-bottom: 16px;
        }
        &__info-main {
            min-width: 290px;
            padding-left: 1rem;
        }
        &__info-candidate {
            width: 200px;
            margin-right: 40px;
        }

        &__region-desc {
            margin-left: 40px;
        }

        &__region-button {
            margin-right: .5rem;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
        }

        &__candidate-col {
            text-align: right;
            width: 200px;
            margin-right: 40px;
        }

        &__candidate-sub {
            width: 80px;
            margin-right: 10px;
        }
        &:last-child {
            margin-right: 0;
        }
    }

    .swiper-slide {
        display: table;
    }

</style>
