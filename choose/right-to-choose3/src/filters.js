import Vue from "vue"

Vue.filter("percent", function (value) {
    var number = +value;
    return number.toFixed(2);
})




