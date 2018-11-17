import Vue from "vue"

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ru'


dayjs.locale('ru')
dayjs.extend(relativeTime)


Vue.filter("fdate", function (value) {
    return dayjs().to(dayjs(value));
})


Vue.filter("fulldate", function (value) {
     dayjs().to(dayjs(value));
    return dayjs(value).format('H:mm, DD MMM YYYY');

})




