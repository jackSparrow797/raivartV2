const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    watch: true,
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + '/public/assets', 'design')
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // fallback to style-loader in development
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
}