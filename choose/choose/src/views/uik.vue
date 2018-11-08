<template>
    <div class="home">
        <div class=" bg-blue-light sticky-top">
            <div class="container">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide>
                        <div class="table">
                            <div class="table__info pt-3 d-flex flex-nowrap">
                                <div class="table__info-main  mr-4">
                                    <div    class="d-flex flex-column">
                                        <div class="small">Обработано {{uikDetals.processed | number}} бюл.</div>
                                    </div>
                                </div>
                                <div v-for="candidate in candidates" :key="candidate.id"
                                     class="uik__info-candidate d-flex flex-column">
                                    <div v-if="candidate.name!='Недейств. бюллетени'" class="small font-weight-bold"> {{candidate.name | name}}</div>
                                    <div v-if="candidate.name=='Недейств. бюллетени'" class="small font-weight-bold"> {{candidate.name}}</div>

                                </div>
                            </div>


                        </div>
                    </swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
        </div>
        <div class="container bg-white">
            <div class="table__wrap">
                <swiper :options="swiperOption" ref="mySwiper2">
                    <swiper-slide>
                        <div class="table ">
                            <div class=" ">
                                <div class="uik__sub-row d-flex flex-nowrap"
                                     v-for="(result, index) in uikDetals.result" :key="index">
                                    <div class="uik__info-title">{{result.title}}</div>
                                    <div class="uik__info-col d-flex flex-nowrap"
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
        methods:{
            transferData(){
                this.$emit('transferData', this.uikDetals);
            }
        },
        created() {
            this.axios.get('https://right-to-choose.firebaseio.com/uikDetals.json?orderBy="id"&equalTo="' + this.$route.params.id + '"')
                .then(response => {
                    this.uikDetals = Object.values(response.data)[0];
                    this.transferData()
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
    .uik__sub-row {
        height: auto;
        padding: 1rem 0;
        font-size: 14px;
        &:hover {
            background: #f2f2f2;
        }

    }

    .uik__info-title {
        font-size: 14px;

        padding-right: 1rem;
        margin-right: 1.5rem !important;
        width: 200px;
        padding-left: 1rem;
    }
    .uik__info-col {
        text-align: left;
        width: 150px;
        margin-right: 15px;
    }
    .uik__info-candidate{
        width: 150px;
        margin-right: 15px;
    }
</style>
