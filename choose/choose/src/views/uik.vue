<template>
    <div class="home">
        <div class="pt-4 bg-blue-light sticky-top">
            <div class="container-fluid">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide>
                        <div class="table">
                            <div class="d-flex flex-nowrap">
                                <div class="table__info-main  mr-4">
                                    <div class="d-flex flex-column">
                                        <div class="small">Обработано бюллетеней</div>
                                        <div class="h5 mb-2">1088 (100%)</div>
                                        <div class="small">Последнее обновление</div>
                                        <div class="mb-3">18:28 16.12.18</div>
                                    </div>
                                </div>
                                <div v-for="candidate in candidates" :key="candidate.id"
                                     class="table__info-candidate d-flex flex-column">
                                    <div class="h6">{{candidate.name}}</div>
                                    <div class="small">{{candidate.consignment}}</div>
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
                        <div class="table pt-4">
                            <div class=" ">

                                <div class="uik__sub-row d-flex flex-nowrap"
                                     v-for="(result, index) in uikDetals.result" :key="index">
                                    <div class="uik__info-title">{{result.title}}</div>
                                    <div class="table__candidate-col d-flex flex-nowrap"
                                         v-for="(value, index) in result.value"
                                         :key="index">
                                        <div class="table__candidate-sub  d-inline-block ">
                                            <span v-if="isPercent">{{value.watcherResult | percent }}%</span>
                                            <span v-if="!isPercent">{{value.watcherResultAbs | number }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

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
        name: 'uik',
        components: {
            swiper,
            swiperSlide,
            tableRow
        },
        data() {
            return {
                uikDetals: {},
                candidates: [],
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
            this.axios.get('https://right-to-choose.firebaseio.com/uikDetals.json?orderBy="id"&equalTo="' + this.$route.params.id + '"')
                .then(response => {
                    this.uikDetals = Object.values(response.data)[0]
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
<style>
.uik__sub-row{
    height: 70px;
    padding-left: 1rem;
}

    .uik__info-title{
        width: 290px;
        font-size: 14px;
        padding-right: 1rem;
    }
</style>
