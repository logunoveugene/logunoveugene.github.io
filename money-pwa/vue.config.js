const path = require('path');

module.exports = {
    transpileDependencies: [
        /\bvue-awesome\b/
    ],
    configureWebpack: {
        resolve: {
            alias: {
                'numeric-keyboard': 'numeric-keyboard/dist/numeric_keyboard.vue.js'
            }
        }
    }
}