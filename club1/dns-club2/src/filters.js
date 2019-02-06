import Vue from "vue"

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ru'


dayjs.locale('ru')
dayjs.extend(relativeTime)


Vue.filter("fdate", function (value) {
    return dayjs().to(dayjs(value));
})



Vue.filter("fromdate", function (value) {
    let d= value.split(' to ');
    return dayjs(d[0]).format('H:mm, DD MMM YYYY')+'–'+dayjs(d[1]).format('H:mm, DD MMM YYYY');
})


Vue.filter("fulldate", function (value) {
     dayjs().to(dayjs(value));
    return dayjs(value).format('H:mm, DD MMM YYYY');

})

Vue.filter("date", function (value) {
    dayjs().to(dayjs(value));
    return dayjs(value).format('DD MMM YY');

})



Vue.filter("formatNumber", function nFormatter(num) {
    var si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "K" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(1).replace(rx, "$1") + si[i].symbol;
})








