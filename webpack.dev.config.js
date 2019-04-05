const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const port = process.env.PORT || 3000;
const weblog = require('webpack-log');
//var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const log = weblog({ name: 'wds' }); // webpack-dev-server
log.info('project is running at: http://'+process.env+":"+port);
log.info(__dirname);
module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                }
            },
            {
                test:/\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src'),
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        //new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin(),
        new UglifyJsWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.[hash].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            favicon: 'src/favicon.ico',
            filename: './index.html',
        })
    ],
    devServer:{
        host: 'localhost',
        port: port,
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        open: true,
        hot: true,
        compress: true,
        watchOptions: {
            index: 'index.html',
            open: true,
            poll: true,
            watchContentBase: true
        }
    },

};