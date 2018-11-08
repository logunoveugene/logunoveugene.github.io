<template>
    <div class="home">
        <div class="container bg-blue-light sticky-top">
            <div class="container  ">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide>
                        <div class="table">
                            <div class="table__info pt-3 d-flex flex-nowrap">
                                <div class="table__info-main  mr-4">
                                    <div class="d-flex flex-column">
                                        <div class="small">Обработано {{districtUpdate.processedGAS | number }} бюл.</div>
                                    </div>
                                </div>
                                <div v-for="candidate in candidates" :key="candidate.id"
                                     class="table__info-candidate d-flex flex-column">
                                    <div v-if="candidate.name!='Недейств. бюллетени'" class="small font-weight-bold"> {{candidate.name | name}}</div>
                                    <div v-if="candidate.name=='Недейств. бюллетени'" class="small font-weight-bold"> {{candidate.name}}</div>
                                </div>
                            </div>
                            <div class="table__row-head mt-2 d-flex flex-nowrap">
                                <div class="table__region  mr-4">Избирательные комиссии</div>
                                <div v-for="candidate in candidates" :key="candidate.id"
                                     class="table__candidate-col d-flex flex-nowrap">
                                    <div class="table__candidate-sub  d-inline-block ">Наблюдатели</div>
                                    <div class="table__candidate-sub d-inline-block ">ГАС Выборы</div>
                                </div>
                            </div>
                            <div class="table__row-region d-flex flex-nowrap ">
                                <div class="table__region  mr-4">
                                    <img class="table__region-button"
                                         src="../assets/prim.jpg"
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
        <div class="container bg-white ">
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
    </div>
</template>

<script>


    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import tableRow from '@//components/table-row.vue'

    export default {
        name: 'home',
        components: {
            swiper,
            swiperSlide,
            tableRow
        },
        data() {
            return {
                districts: [],
                candidates: [],
                districtUpdate:'',
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
        props: {
            isPercent: {
                type: null,
                default: ''
            },
            scrolled: {
                type: null,
                default: false
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
            this.axios.get('https://right-to-choose.firebaseio.com/updateInfo.json')
                .then(response => {
                    this.districtUpdate = response.data;
                    this.transferDistrictUpdate();
                })
                .catch(e => {
                    this.error.push(e)
                });


            this.axios.get('https://right-to-choose.firebaseio.com/districts.json')
                .then(response => {
                    this.districts = response.data;
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

        },
        methods:{
            transferDistrictUpdate(){
                this.$emit('transferDistrictUpdate', this.districtUpdate);
            }
        }

    }
</script>
<style lang="scss">
    .table {
        display: table;
        margin-bottom: 0;
        &__wrap {
            position: relative;
        }
        &__row-region {
            height: 40px;
            padding: 8px 0;
            font-weight: 700;
            font-size: 14px;

        }
        &__row {
            height: 40px;
            padding: 9px 0;
            font-size: 14px;

            &:hover {
                background: #f6f6f6;
            }

        }
        &__row-head {
            height: 25px;
            padding: 4px 0;
            font-size: 12px;

        }

        &__region {
            position: relative;
            width: 200px;
            padding-left: 1rem;
        }
        &__info {
            border-bottom: 1px solid #dff0f5;
            padding-bottom: 12px;
        }
        &__info-main {
            min-width: 200px;
            padding-left: 1rem;
        }
        &__info-candidate {
            width: 190px;
            margin-right: 15px;
        }

        &__region-desc {
            margin-left: 40px;
            max-width: 92%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
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
            width: 190px;
            margin-right: 15px;
        }

        &__candidate-sub {
            width: 80px;
            margin-right: 10px;
        }
        &:last-child {
            margin-right: 0;
        }
    }
</style>
