<template>
    <v-popover offset="0">
        <div class="d-md-flex">
            <div class="link link--dropdown ">
                <span class="" v-if="!formatDateRange">{{selectedRange}}</span>
                <span class="d-inline-block" v-if="formatDateRange">За период {{searchDateSumbit[0]| date}}г. – {{searchDateSumbit[1]| date}}г. </span>
            </div>
        </div>
        <template slot="popover">
            <div class="py-2 pt-3 text-left px-3 ">
                <a href="#" @click="selectedRange='За сегодня', formatDateRange=null" class="link link--color-grey">За сегодня</a>
            </div>
            <div class="py-2 text-left px-3 ">
                <a href="#" @click="selectedRange='За неделю', formatDateRange=null"  class="link link--color-grey">За неделю</a>
            </div>
            <div class="py-2 text-left px-3 ">
                <a href="#" @click="selectedRange='За месяц', formatDateRange=null"  class="link link--color-grey">За месяц</a>
            </div>
            <div class="py-2 text-left px-3 ">
                <a href="#" @click="selectedRange='За все время', formatDateRange=null"  class="link link--color-grey">За все время</a>
            </div>
            <div class="py-2 pb-3 text-left px-3 ">
                <a href="#"  class="link link--color-grey">Выбрать период</a>
                <flat-pickr
                        v-model="date"
                        @on-close="selectDate"
                        :config="config"
                        class="height-0 "
                        placeholder="Выбрать период"
                        name="date">
                </flat-pickr>
                <!--<a href="#" class="link link&#45;&#45;color-grey">Выбрать период</a>-->
            </div>
        </template>
    </v-popover>
</template>

<script>

    import flatPickr from 'vue-flatpickr-component';

    import {ru as russian} from 'flatpickr/dist/l10n/ru.js';

    import '../flatRickr.css';


    export default {
        name: "dateRangeSelect",
        components: {
            flatPickr
        },

        data: function () {
            return {


                date: '',
                formatDateRange:null,
                selectedRange:"За все время",
                // Get more form https://chmln.github.io/flatpickr/options/
                config: {
                    wrap: true,
                    // weekNumbers: true,

                    mode: "range",
                    maxDate: "today",
                    dateFormat: "Y-m-d",
                    defaultDate: "today",
                    // inline: true,
                    "locale": "ru"

                },


            }
        },
        computed: {
            searchDateSumbit: function() {
                let d= this.date.split(' — ');

                return d


            },
        },


        methods: {

            selectDate(){

                this.formatDateRange = true;
            }

        },
    }
</script>

<style >
    .form-control.flatpickr-input{
        background-color: #ffffff;
        border: none;
        padding: 0;
        font-size: 14px;
        font-family: "PT Sans";
        line-height: 12px;
        display: block;
        height: 21px;
        outline: none;
    }
    .height-0 {
        position: absolute;
        bottom: 15px;
        opacity: 0;
        line-height: 0px;
        margin: 0;
        border: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        /* display: flex; */
    }


    .flatpickr-day.selected.endRange, .flatpickr-day.startRange.endRange, .flatpickr-day.endRange.endRange {
        border-radius: 0 .2rem .2rem 0;
        border-left: none;
    }

    .flatpickr-day.selected.startRange, .flatpickr-day.startRange.startRange, .flatpickr-day.endRange.startRange {
        border-radius: .2rem 0 0 .2rem;
        border-right: none;
    }

    .flatpickr-day.selected, .flatpickr-day.startRange, .flatpickr-day.endRange, .flatpickr-day.selected.inRange, .flatpickr-day.startRange.inRange, .flatpickr-day.endRange.inRange, .flatpickr-day.selected:focus, .flatpickr-day.startRange:focus, .flatpickr-day.endRange:focus, .flatpickr-day.selected:hover, .flatpickr-day.startRange:hover, .flatpickr-day.endRange:hover, .flatpickr-day.selected.prevMonthDay, .flatpickr-day.startRange.prevMonthDay, .flatpickr-day.endRange.prevMonthDay, .flatpickr-day.selected.nextMonthDay, .flatpickr-day.startRange.nextMonthDay, .flatpickr-day.endRange.nextMonthDay {
        background: #fff6d4;
        -webkit-box-shadow: none;
        box-shadow: none;
        color: #000;
        border: none;
    }

    .flatpickr-day.inRange {
        border-radius: 0;
        -webkit-box-shadow: -5px 0 0 #fff6d4, 5px 0 0 #fff6d4;
        box-shadow: -5px 0 0 #fff6d4, 5px 0 0 #fff6d4;
    }

    .flatpickr-day.inRange, .flatpickr-day.prevMonthDay.inRange, .flatpickr-day.nextMonthDay.inRange, .flatpickr-day.today.inRange, .flatpickr-day.prevMonthDay.today.inRange, .flatpickr-day.nextMonthDay.today.inRange, .flatpickr-day:hover, .flatpickr-day.prevMonthDay:hover, .flatpickr-day.nextMonthDay:hover, .flatpickr-day:focus, .flatpickr-day.prevMonthDay:focus, .flatpickr-day.nextMonthDay:focus {
        cursor: pointer;
        outline: 0;
        background: #fff6d4;
        border-color: #fff6d4;
    }

    .flatpickr-day.today {
        border-color: #ddd;
    }

    .flatpickr-day {
        border-radius: .2rem;
    }

    .flatpickr-day.selected.startRange.endRange, .flatpickr-day.startRange.startRange.endRange, .flatpickr-day.endRange.startRange.endRange {
        border-radius: .2rem;
    }

    .flatpickr-calendar {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        border: 1px solid #ddd;
        padding: 1rem;
        border-radius: 8px;
        width: 342px !important;
        display: none;
    }

    .flatpickr-month {
        margin-bottom: 1rem;
    }

    .flatpickr-weekdaycontainer {
        background: transparent;
        text-align: center;
        overflow: hidden;
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        height: 28px;
    }




</style>