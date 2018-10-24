<template>
    <div class="table__row-wrap">
        <div class="table__row d-flex flex-nowrap"
             :class="{ 'bg-light-red': districtInfo.stateChange==3,
             'bg-light-orange': districtInfo.stateChange==2,
             'color-blue': districtInfo.stateHistory==2,
             'color-orange': districtInfo.stateHistory==3  }">

            <div class="table__region  mr-4">
                <img class="table__region-button"
                     src="https://i.snag.gy/GaKMbf.jpg"
                     alt=""
                     @click="moreInfo"
                     v-if="!extend"
                >
                <img class="table__region-button"
                     src="https://i.snag.gy/O7IHcm.jpg"
                     alt=""
                     @click="extend = false"
                     v-if="extend"
                >
                <div class="table__region-desc d-inline-block">{{districtInfo.title}}</div>
                <img src="https://i.snag.gy/MOuXow.jpg"
                     v-if="districtInfo.stateChange==3"
                     alt=""
                     class="table__region-desc-warning-img"
                     v-tooltip="{content: 'Данные от наблюдателей и в системе ГАС Выборы различаются'}">


                <img src="https://i.snag.gy/MOuXow.jpg"
                     alt=""
                     v-if="districtInfo.stateChange==2"
                     class="table__region-desc-warning-img"
                     v-tooltip="{content: 'В системе ГАС Выборы надено несколько версий данных, некоторые из них отличаются от данных наблюдателей'}">
                <img src="https://i.snag.gy/MOuXow.jpg"
                     v-if="districtInfo.stateHistory==2"
                     alt=""
                     class="table__region-desc-warning-img"
                     v-tooltip="{content: 'Данные Этапа №1 и Этапа №2 незначительно различаются (менее 5%)'}">


                <img src="https://i.snag.gy/MOuXow.jpg"
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
        <div class="" v-if="extend" v-for="districtInfo in districts" :key="districtInfo.id">
            <div class="table__sub-row d-flex flex-nowrap "
                 :class="{
                 'bg-light-red': districtInfo.stateChange==3,
                 'bg-light-orange': districtInfo.stateChange==2,
                 'color-blue': districtInfo.stateHistory==2,
                 'color-orange': districtInfo.stateHistory==3}">
                <div class="table__region  mr-4">

                    <div class="table__region-desc  d-inline-block">УИК № {{districtInfo.id}}</div>


                    <img src="https://i.snag.gy/MOuXow.jpg"
                         v-if="districtInfo.stateChange==3"
                         alt=""
                         class="table__region-desc-warning-img"
                         v-tooltip="{content: 'Данные от наблюдателей и в системе ГАС Выборы различаются'}">


                    <img src="https://i.snag.gy/MOuXow.jpg"
                         alt=""
                         v-if="districtInfo.stateChange==2"
                         class="table__region-desc-warning-img"
                         v-tooltip="{content: 'В системе ГАС Выборы надено несколько версий данных, некоторые из них отличаются от данных наблюдателей'}">


                    <img src="https://i.snag.gy/MOuXow.jpg"
                         v-if="districtInfo.stateHistory==2"
                         alt=""
                         class="table__region-desc-warning-img"
                         v-tooltip="{content: 'Данные Этапа №1 и Этапа №2 незначительно различаются (менее 5%)'}">


                    <img src="https://i.snag.gy/MOuXow.jpg"
                         alt=""
                         v-if="districtInfo.stateHistory==3"
                         class="table__region-desc-warning-img"
                         v-tooltip="{content:'Данные Этапа №1 и Этапа №2 значительно различаются (более 5%)'}">
                    <div class="detal-info " @click="showModal">Детали</div>

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
        </div>


    </div>
</template>

<script>

    export default {
        name: 'table-row',
        data() {
            return {
                extend: false,
                districts: {}
            }
        },
        methods: {
            moreInfo() {
                this.extend = true;
                this.axios.get('https://right-to-choose.firebaseio.com/districts.json')
                    .then(response => {
                        this.districts = response.data
                    })
                    .catch(e => {
                        this.error.push(e)
                    })
            },
            showModal () {
                this.$modal.show('uik-info');
           }
        },
        props: {
            districtInfo: {
                type: null,
                default: ''

            },
            isPercent:{
                type: null,
                default: ''
            }


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .detal-info{
        display: none;
    }

    .table__sub-row:hover .detal-info{
        display: inline-block;
        margin-left: 20px;
        cursor: pointer;
        border-bottom: 1px dotted #999;
        color: #666;
    }
    .table__sub-row:hover .detal-info:hover{

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
            border:none;

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




</style>
