<template>
    <div id="app">
        <nav class="navbar navbar-dark bg-blue-dark">
            <span class="navbar-brand ml-3 my-2 h1">Право на выбор</span>
        </nav>
        <div class="py-5 bg-blue-light sticky-top">
            <div class="container-fluid">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide>
                        <div class="table">
                            <div class=" d-flex flex-nowrap">
                                <div class="table__info-main  mr-4">
                                    <div class="d-flex flex-column">
                                        <div class="small">Обработано бюллетеней</div>
                                        <div class="h2 mb-3">72%</div>
                                        <div class="small">Последнее обновление</div>
                                        <div class="h2">18:28 16.12.18</div>
                                    </div>
                                </div>
                                <div class="table__info-candidate d-flex flex-column">
                                    <div class="mb-3">
                                        <img class="table__info-candidate-img" src="https://i.snag.gy/aDzHEi.jpg"/>
                                    </div>
                                    <div class="h6">Кожемяко Олег Николаевич</div>
                                    <div class="small">от Единой России</div>
                                </div>
                                <div class="table__info-candidate d-flex flex-column">
                                    <div class="mb-3">
                                        <img class="table__info-candidate-img" src="https://i.snag.gy/vuPGzr.jpg"/>
                                    </div>
                                    <div class="h6">Ищенко Андрей Сергеевич</div>
                                    <div class="small">от КПРФ</div>
                                </div>
                                <div class="table__info-candidate d-flex flex-column">
                                    <div class="mb-3">
                                        <img class="table__info-candidate-img" src="https://i.snag.gy/wmRz3a.jpg"/>
                                    </div>
                                    <div class="h6">Андрейченко Андрей Валерьевич</div>
                                    <div class="small">от ЛДПР</div>
                                </div>
                                <div class="table__info-candidate d-flex flex-column">
                                    <div class="mb-3">
                                        <img class="table__info-candidate-img" src="https://i.snag.gy/beuL5m.jpg"/>
                                    </div>
                                    <div class="h6">Недействительные бюллетени</div>
                                    <div class="small"><a href="">Подробнее</a></div>
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
                            <div class="table__row-head mt-3 d-flex flex-nowrap">
                                <div class="table__region  mr-4">Избирательные участки</div>
                                <div class="table__candidate-col d-flex flex-nowrap">
                                    <div class="table__candidate-sub  d-inline-block ">Наблюдатели</div>
                                    <div class="table__candidate-sub d-inline-block ">ГАС Выборы</div>
                                </div>
                                <div class="table__candidate-col d-flex flex-nowrap">
                                    <div class="table__candidate-sub  d-inline-block ">Наблюдатели</div>
                                    <div class="table__candidate-sub d-inline-block ">ГАС Выборы</div>
                                </div>
                                <div class="table__candidate-col d-flex flex-nowrap">
                                    <div class="table__candidate-sub  d-inline-block ">Наблюдатели</div>
                                    <div class="table__candidate-sub d-inline-block ">ГАС Выборы</div>
                                </div>
                                <div class="table__candidate-col d-flex flex-nowrap">
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
                                <div class="table__candidate-col d-flex flex-nowrap">
                                    <div class="table__candidate-sub  d-inline-block ">40.45%</div>
                                    <div class="table__candidate-sub d-inline-block ">40.21%</div>
                                </div>
                                <div class="table__candidate-col d-flex flex-nowrap">
                                    <div class="table__candidate-sub  d-inline-block ">28.45%</div>
                                    <div class="table__candidate-sub d-inline-block ">28.21%</div>
                                </div>
                                <div class="table__candidate-col d-flex flex-nowrap">
                                    <div class="table__candidate-sub  d-inline-block ">2.45%</div>
                                    <div class="table__candidate-sub d-inline-block ">2.21%</div>
                                </div>
                                <div class="table__candidate-col d-flex flex-nowrap">
                                    <div class="table__candidate-sub  d-inline-block ">0.45%</div>
                                    <div class="table__candidate-sub d-inline-block ">0.21%</div>
                                </div>
                            </div>

                            <table-row :districtInfo="district"
                                       v-for="district in districts"
                                       :key="district.id"></table-row>

                        </div>
                    </swiper-slide>
                </swiper>
                <!--<div class="table__row-left-wrap d-flex flex-column">-->
                <!--<div class="table__region-left  mr-4">Избирательные участки</div>-->
                <!--<div class="table__row-left" v-for="district in districts"-->
                <!--:key="district.id">{{district.title}}-->
                <!--</div>-->
                <!--</div>-->
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
    import 'swiper/dist/css/swiper.css'
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
                districts: {},
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
        computed: {},
        updated() {
            this.$nextTick(() => {
                const personNames = this.$refs.mySwiper.swiper
                const tableData = this.$refs.mySwiper2.swiper
                personNames.controller.control = tableData
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
                })
        }
    }
</script>

<style lang="scss">
    .navbar-brand {
        font-size: 1.5rem;
        font-weight: 700;
    }

    .table thead th {

        font-weight: 500;
    }

    .table td, .table th {
        font-size: 14px;
    }

    .sticky-top {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 500;
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
    }

    .bg-blue-dark {
        background: #152f81;
    }

    .table__row-left-wrap {
        position: absolute;
        top: 0;
        z-index: 100;
        background: #fff;
    }

    .table__row-left {
        height: 60px;
        padding: 18px 0;
    }

    .table__region-left {
        height: 60px;
        padding: 18px 0;
        font-size: 12px;
        margin-top: 1rem;
    }

    .table {
        display: table;
        margin-bottom: 0;
        &__wrap {
            position: relative;
        }
        &__row-region {
            height: 60px;
            padding: 18px 0;
            font-weight: 700;
            &:hover {
                background: #f2f2f2;
            }

        }
        &__row {
            height: 60px;
            padding: 18px 0;

            &:hover {
                background: #f6f6f6;
            }

        }
        &__row-head {
            height: 60px;
            padding: 18px 0;
            font-size: 12px;

        }

        &__region {
            position: relative;
            min-width: 350px;
            padding-left: 1rem;
        }
        &__info-main {
            min-width: 350px;
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
            width: 90px;
        }
    }

    .swiper-slide {
        display: table;
    }


</style>
