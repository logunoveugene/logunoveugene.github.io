import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./filters"

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


import VModal from 'vue-js-modal'

Vue.use(VModal)

import VTree from 'vue-tree-halower'

Vue.use(VTree)


Vue.config.productionTip = false

new Vue({
    router,

    render: h => h(App),

}).$mount('#app')
