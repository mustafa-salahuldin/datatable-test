const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    externals: {
        jquery: 'jQuery',
        bootstrap: 'bootstrap'
    }, entry: {
        app_myapp: "./src/index.js"
        },
    output: {
        path: path.resolve(__dirname, "wwwroot/js"),
        filename: '[name].js',
        libraryTarget: 'var',
        // `library` determines the name of the global variable
        library: '[name]'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: require.resolve('@open-wc/webpack-import-meta-loader'),
            },
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
            {
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    mode: "development",
    devtool: "source-map",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash].css"
        })
    ]
};