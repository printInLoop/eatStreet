module.exports = {
    entry: './app/main.js',
    output: {
        filename: './build/app.js',
    },


    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },


    //
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}