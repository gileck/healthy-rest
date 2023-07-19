const path = require('path');

module.exports = {
    mode: 'development',
    devtool: "source-map",
    entry: './app/src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "app.js",
        chunkFormat: 'array-push'
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'lodash': '_'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["@babel/preset-env", { targets: { "chrome": "80" }}]],
                    }
                }
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    watchOptions: {
        ignored: /node_modules/
    }
};