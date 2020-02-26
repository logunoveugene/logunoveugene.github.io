import Vue from 'vue'
import App from './App.vue'
import "./filters.js"

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import VTooltip from 'v-tooltip'

Vue.use(VTooltip)


import VModal from 'vue-js-modal'

Vue.use(VModal)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
