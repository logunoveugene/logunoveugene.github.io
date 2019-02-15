/**
 * Vuex
 * http://vuex.vuejs.org/zh-cn/intro.html
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    state: {
        // 当前用户f
        user: {
            name: 'василий',
            img: 'https://i.snag.gy/g0pxqj.jpg'
        },
        // 会话列表
        sessions: [
            {
                id: 1,
                user: {
                    name: 'Big Boss',
                    img: 'https://i.snag.gy/d7sDXn.jpg'
                },
                messages: [
                    {
                        content: 'Привет!',
                        date: now
                    }, {
                        content: 'Как жизнь?',
                        date: now
                    }
                ]
            },
            {
                id: 2,
                user: {
                    name: 'Admin',
                    img: 'https://i.snag.gy/p8753Y.jpg'
                },
                messages: [ {
                    content: 'Ваша статья – просто жэсть, больше не позорьтесь',
                    date: now
                },]
            }
        ],
        // 当前选中的会话
        currentSessionId: null,
        // 过滤出只包含这个key的会话
        filterKey: ''
    },
    mutations: {
        INIT_DATA(state) {
            let data = localStorage.getItem('vue-chat-session');
            if (data) {
                state.sessions = JSON.parse(data);
            }
        },
        // 发送消息
        SEND_MESSAGE({sessions, currentSessionId}, content) {
            let session = sessions.find(item => item.id === currentSessionId);
            session.messages.push({
                content: content,
                date: new Date(),
                self: true
            });
        },
        // 选择会话
        SELECT_SESSION(state, id) {
            state.currentSessionId = id;
        },
        // 搜索
        SET_FILTER_KEY(state, value) {
            state.filterKey = value;
        }
    },
    getters: {
        // 过滤后的会话列表
        sessions: ({sessions, filterKey}) => {
            let result = sessions.filter(session => session.user.name.includes(filterKey));
            return result;
        },
        // 当前会话index
        currentId: ({currentSessionId}) => currentSessionId,
        // 当前会话 session
        session: ({sessions, currentSessionId}) => sessions.find(session => session.id === currentSessionId)
    }
});

store.watch(
    (state) => state.sessions,
    (val) => {
        console.log('CHANGE: ', val);
        localStorage.setItem('vue-chat-session', JSON.stringify(val));
    },
    {
        deep: true
    }
);

export default store;
