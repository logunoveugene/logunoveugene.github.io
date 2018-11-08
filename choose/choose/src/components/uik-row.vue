<template>
    <div class="table__sub-row d-flex flex-nowrap "
         :class="{
                 'bg-light-red': uik.stateChange==3,
                 'bg-light-orange': uik.stateChange==2,
                 'color-blue': uik.stateHistory==2,
                 'color-orange': uik.stateHistory==3}">
        <div class="table__region  mr-4">
            <router-link class="text-dark" target="_blank" :to="{ name: 'uik', params: { id: uik.id, title: uik.title }}">
                <div class="table__region-desc  d-inline-block">{{uik.title}}</div>
            </router-link>
            <img src="../assets/info.jpg"
                 v-if="uik.stateChange==3"
                 alt=""
                 class="table__region-desc-warning-img"
                 v-tooltip="{content: 'Данные от наблюдателей и в системе ГАС Выборы различаются'}">

            <img src="../assets/info.jpg"
                 alt=""
                 v-if="uik.stateChange==2"
                 class="table__region-desc-warning-img"
                 v-tooltip="{content: 'В системе ГАС Выборы надено несколько версий данных, некоторые из них отличаются от данных наблюдателей'}">
            <img src="../assets/info.jpg"
                 v-if="uik.stateHistory==2"
                 alt=""
                 class="table__region-desc-warning-img"
                 v-tooltip="{content: 'Данные Этапа №1 и Этапа №2 незначительно различаются (менее 5%)'}">
            <img src="../assets/info.jpg"
                 alt=""
                 v-if="uik.stateHistory==3"
                 class="table__region-desc-warning-img"
                 v-tooltip="{content:'Данные Этапа №1 и Этапа №2 значительно различаются (более 5%)'}">

            <router-link class="detal-info-wrap" target="_blank" :to="{ name: 'uik', params: { id: uik.id, title: uik.title }}">
                <div class="detal-info">Детали</div>
            </router-link>
        </div>
        <div class="table__candidate-col d-flex flex-nowrap"
             v-for="res in uik.result"
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

</template>
<script>
    export default {
        name: "uik-row",
        props: {
            uik: {
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

<style>
    .detal-info-wrap {
        position: absolute;
    }

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
</style>