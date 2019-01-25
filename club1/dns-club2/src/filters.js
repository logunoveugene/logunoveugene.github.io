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




