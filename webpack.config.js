const path = require('path');
module.exports = {
    entry: './index.js',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, './'),
    },
    mode: 'development',
    use: [
      {
        loader: 'style-loader', // inject CSS to page
      }, {
        loader: 'css-loader', // translates CSS into CommonJS modules
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }
    ]
};