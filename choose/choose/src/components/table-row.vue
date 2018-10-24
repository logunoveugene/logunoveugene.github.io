<template>
    <div class="table__row-wrap">
        <div class="table__row d-flex flex-nowrap"
             :class="{ 'bg-light-red': districtInfo.stateChange==3,
             'bg-light-orange': districtInfo.stateChange==2,
             'color-blue': districtInfo.stateHistory==2,
             'color-orange': districtInfo.stateHistory==3  }">
            <div class="table__region  mr-4">
                <img class="table__region-button"
                     src="../assets/plus.jpg"
                     alt="Раскрыть"
                     @click="moreInfo(districtInfo.id)"
                     v-if="!extend"
                >
                <img class="table__region-button"
                     src="../assets/minus.jpg"
                     alt="Свернуть"
                     @click="extend = false"
                     v-if="extend"
                >
                <div class="table__region-desc d-inline-block">{{districtInfo.title}}</div>
                <img src="../assets/info.jpg"
                     v-if="districtInfo.stateChange==3"
                     alt=""
                     class="table__region-desc-warning-img"
                     v-tooltip="{content: 'Данные от наблюдателей и в системе ГАС Выборы различаются'}">

                <img src="../assets/info.jpg"
                     alt=""
                     v-if="districtInfo.stateChange==2"
                     class="table__region-desc-warning-img"
                     v-tooltip="{content: 'В системе ГАС Выборы надено несколько версий данных, некоторые из них отличаются от данных наблюдателей'}">
                <img src="../assets/info.jpg"
                     v-if="districtInfo.stateHistory==2"
                     alt=""
                     class="table__region-desc-warning-img"
                     v-tooltip="{content: 'Данные Этапа №1 и Этапа №2 незначительно различаются (менее 5%)'}">
                <img src="../assets/info.jpg"
                     alt=""
                     v-if="districtInfo.stateHistory==3"
                     class="table__region-desc-warning-img"
                     v-tooltip="{content:'Данные Этапа №1 и Этапа №2 значительно различаются (более 5%)'}">

            </div>
            <div class="table__candidate-col d-flex flex-nowrap"
                 v-for="res in districtInfo.result"
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
        <div v-if="extend" class="">
            <uik-row :uik="uik" :isPercent="isPercent" v-for="uik in uik" :key="uik.id"></uik-row>
        </div>

    </div>
</template>

<script>
    import uikRow from './uik-row'

    export default {
        name: 'table-row',
        data() {
            return {
                extend: false,
                uik: {}
            }
        },
        components: {
            uikRow
        },

        methods: {
            moreInfo(regionId) {
                this.extend = true;
                this.axios.get('https://right-to-choose.firebaseio.com/uik.json?orderBy="districtId"&equalTo="' + regionId + '"')
                    .then(response => {
                        this.uik = response.data
                    })
                    .catch(e => {
                        this.error.push(e)
                    })
            }

        },
        props: {
            districtInfo: {
                type: null,
                default: ''

            },
            isPercent: {
                type: null,
                default: ''
            }


        }
    }
</script>


<style lang="scss">

    .detal-info {
        display: none;
    }

    .table__sub-row:hover .detal-info {
        display: inline-block;
        margin-left: 20px;
        cursor: pointer;
        border-bottom: 1px dotted #999;
        color: #666;
    }

    .table__sub-row:hover .detal-info:hover {
        color: #333;
    }

    .table {
        &__sub-row {
            height: 36px;
            padding: 8px 0;
            font-size: 14px;
            &:hover {
                background: #f2f2f2;
            }

        }
        &__region-desc-warning-img {
            opacity: .3;
            margin-bottom: 2px;
            display: inline-block;
            margin-left: 10px;

            &:hover {
                opacity: .6;
            }
        }

    }


</style>
