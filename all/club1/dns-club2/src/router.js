import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Главная',
            component: Home
        },
        {
            path: '/discussions',
            name: 'discussions',
    
            component: () => import(/* webpackChunkName: "discussions" */ './views/discussions.vue')
        },

        {
            path: '/discussions-search-r',
            name: 'discussionsSearchR',
    
            component: () => import(/* webpackChunkName: "discussions-search-result" */ './views/discussions-search-r.vue')
        },
        {
            path: '/search-r',
            name: 'SearchR',
    
            component: () => import(/* webpackChunkName: "global-search" */ './views/search-r.vue')
        },
        {
            path: '/review',
            name: 'review',
    
            component: () => import(/* webpackChunkName: "article-list" */ './views/review.vue')
        },
        {
            path: '/post/:id',
            name: 'post',
    
            component: () => import(/* webpackChunkName: "article-page" */ './views/post.vue')
        },
        {
            path: '/discussion/:id',
            name: 'discussion',
    
            component: () => import(/* webpackChunkName: "discussion-item" */ './views/disc-item.vue')
        },
        {
            path: '/newpost',
            name: 'newpost',
    
            component: () => import(/* webpackChunkName: "create-article" */ './views/newpost.vue')
        },
        {
            path: '/newdesc',
            name: 'newdesc',
    
            component: () => import(/* webpackChunkName: "create-discussion" */ './views/newdesc.vue')
        },
  

        {
            path: '/users',
            name: 'users',
    
            component: () => import(/* webpackChunkName: "users" */ './views/users.vue')
        },
        {
            path: '/awards',
            name: 'awards',
    
            component: () => import(/* webpackChunkName: "awards" */ './views/awards.vue')
        },

        {
            path: '/info-page',
            name: 'info-page',
    
            component: () => import(/* webpackChunkName: "info-page" */ './views/info-page.vue')
        },

        {
            path: '/message',
            name: 'message',

            component: () => import(/* webpackChunkName: "message" */ './views/message.vue')
        },

        {
            path: '/message-old',
            name: 'message',

            component: () => import(/* webpackChunkName: "message-old" */ './views/message-old.vue')
        },
        {
            path: '/test',
            name: 'test',
    
            component: () => import(/* webpackChunkName: "test" */ './views/test.vue')
        },
        {
            path: '/404',
            name: '404',

            component: () => import(/* webpackChunkName: "404" */ './views/404.vue')
        },
        {
            path: '/403',
            name: '403',

            component: () => import(/* webpackChunkName: "403" */ './views/403.vue')
        },

    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
