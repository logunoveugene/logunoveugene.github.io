! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("dayjs")) : "function" == typeof define && define.amd ? define(["dayjs"], t) : e.dayjs_locale_ru = t(e.dayjs)
}(this, function(e) {
    "use strict";
    e = e && e.hasOwnProperty("default") ? e.default : e;
    var t = {
        name: "ru",
        weekdays: "Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота".split("_"),
        months: "Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split("_"),
        ordinal: function(e) {
            return e
        },
        relativeTime: {
          future: ' %s назад',
          past: 'через %s ',
          s: 'несколько секунд',
          m: 'минуту',
          mm: '%d минуты',
          h: 'час',
          hh: '%d часов',
          d: 'день',
          dd: '%d дней',
          M: 'месяц',
          MM: '%d месяцев',
          y: 'год',
          yy: '%d лет'
      }
    };
    return e.locale(t, null, !0), t
});

