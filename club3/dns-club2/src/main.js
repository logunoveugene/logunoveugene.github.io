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



import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueQuillEditor )


Vue.config.productionTip = false

new Vue({
    router,

    render: h => h(App),

}).$mount('#app')
