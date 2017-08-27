const autoprefixer = require( 'autoprefixer' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const webpack = require( 'webpack' );




module.exports = {
    entry: './app/client.js',
    output: {
        filename: './build/app.min.js',
    },


    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                enforce: 'pre'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'es2015' ]
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }),
            },
        ]
    },


    plugins: [
        new ExtractTextPlugin({
            allChunks: true,
            filename: 'build/app.min.css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper: ['popper.js', 'default'],
            'window.jQuery': 'jquery'
        }),
    ],


    //
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}