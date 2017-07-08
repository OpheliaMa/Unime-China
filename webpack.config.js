var path = require('path');

module.exports = {
    entry: './app/src/App.es6',
    output: {
        filename: 'bundle.js',
        path: path.resolve('./app/', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
                exclude: /node_modules/
            },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.es6']
    }
}
