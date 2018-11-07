import Vue from "vue"

import dayjs from 'dayjs'
import 'dayjs/locale/ru'

dayjs.locale('ru')



Vue.filter("percent", function (value) {
    var number = +value;
    return number.toFixed(2);
})


Vue.filter("number", function (value) {
    var number = +value;
    return number.toLocaleString();
})

Vue.filter("name", function (value) {
    let fullName = value;
    let arr =  fullName.split(' ');
    return arr[0]+' ' + arr[1][0]+'. '+arr[2][0]+'.'
})


Vue.filter("fulldate", function (value) {

    return dayjs(value).format('H:mm, DD MMM YYYY');

})






