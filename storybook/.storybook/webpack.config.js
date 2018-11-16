const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve(__dirname, "../")
            },
            {
                test: /\.js?$/,
                loaders: [require.resolve('@storybook/addon-storysource/loader')],
                include: path.resolve(__dirname, '../stories'),
                enforce: 'pre',
            },
        ]
    }
};

