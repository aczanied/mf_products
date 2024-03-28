const HtmlWebackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [ 
        new HtmlWebackPlugin({ 
            template: './public/index.html'
        })
    ]
}