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

import rate from 'vue-rate';
Vue.use(rate)


require('froala-editor/js/froala_editor.pkgd.min')

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('font-awesome/css/font-awesome.css')
require('froala-editor/css/froala_style.min.css')

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'
Vue.use(VueFroala)




import CommentGrid from 'vue-comment-grid'

Vue.use(CommentGrid)

Vue.config.productionTip = false

new Vue({
    router,

    render: h => h(App),

}).$mount('#app')
