import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "./filters.js"

import axios from 'axios'
import VueAxios from 'vue-axios'

import VTooltip from 'v-tooltip'



Vue.use(VTooltip)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')