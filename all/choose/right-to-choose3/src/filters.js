import Vue from "vue"

Vue.filter("percent", function (value) {
    var number = +value;
    return number.toFixed(2);
})


Vue.filter("number", function (value) {
    var number = +value;
    return number.toLocaleString();
})




