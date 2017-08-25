const autoprefixer = require( 'autoprefixer' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' );
const webpack = require( 'webpack' );




module.exports = {
    entry: './app/main.js',
    output: {
        filename: './build/app.min.js',
    },


    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: { minimize: true },
                        },
                        {
                            loader: 'postcss-loader',
                        },
                        {
                            loader: 'sass-loader',
                        }
                    ]
                }),
            },
        ]
    },


    plugins: [
        new ExtractTextPlugin({
            allChunks: true,
            filename: 'build/app.min.css',
        }),
        new UglifyJSPlugin({
            compress: {
                warnings: false,
            },
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Tether: 'tether'
        }),
    ],


    //
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}