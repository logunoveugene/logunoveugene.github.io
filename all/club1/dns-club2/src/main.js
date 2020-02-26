import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./filters"

//
// import dayjs from 'dayjs'
// import relativeTime from 'dayjs/plugin/relativeTime'
// import 'dayjs/locale/ru'
//


import CripLoading from "crip-vue-loading"
import axios from 'axios'

import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


import VModal from 'vue-js-modal'
Vue.use(VModal, {dialog: true})

import VTree from 'vue-tree-halower'
Vue.use(VTree)

import rate from 'vue-rate';
Vue.use(rate)


import Ripple from './libs/fi-ripple.js';
Vue.directive('Ripple', Ripple);


import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)



import VTooltip from 'v-tooltip'
Vue.use(VTooltip)

import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')

require('vue-multiselect/dist/vue-multiselect.min.css')




import SocialSharing from 'vue-social-sharing';

Vue.use(SocialSharing);





Vue.use(CripLoading,{
    axios: axios,

    // Show loader when vue-router detects route change
    applyOnRouter: true,

    // Default color of loader
    color: "#e68102",

    // Direction of progress: "right" | "left"
    direction: "right",

    // Loader color when request fails
    failColor: "#ac2925",

    // Height of loader
    height: "2px",

    // When set to true - loader will log details in to console
    verbose: false,
})




Vue.config.productionTip = false

import store from './store';


new Vue({
    router,
    store,
    render: h => h(App),

}).$mount('#app')
