const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss|css$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve(__dirname, "../")
            },
            {
                test: /\.js?$/,
                loaders: [require.resolve('@storybook/addon-storysource/loader')],
                include: path.resolve(__dirname, '../stories'),
                enforce: 'pre',
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }
};

