<template>
    <div id="app">
        <div class="container">
            <div class="table__wrap">
                <div class="table">
                    <div class="table__row row" v-for="district in districts" :key="district.id">
                        <div class="table__region col mr-4">{{district.title}}</div>
                        <div class="table__candidate-col col" v-for="res in district.result" :key="res.candidateId">
                            <div class="table__candidate-sub  d-inline-block mr-3">{{res.GASResult | percent }}%</div>
                            <div class="table__candidate-sub d-inline-block mr-4">{{res.watcherResult | percent }}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'

    import {swiper, swiperSlide} from 'vue-awesome-swiper'


    export default {
        name: 'app',
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                districts: {}

            }
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
    .table {
        overflow-x: scroll;
        overflow-y: visible;
        padding-left: 200px;

        &__wrap{
            position: relative;
        }
        &__row {
            height: 60px;
            padding: 18px 0;

            &:hover {
                background: #f6f6f6;
            }

        }
        &__region {
            position: absolute;
            left: 0;
            width: 200px;
        }
    }

</style>
