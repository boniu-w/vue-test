const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    productionSourceMap: false,
    publicPath: './',
    configureWebpack: config => {
        let plugins = [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: false,
                        drop_console: true,
                    },
                },
                sourceMap: false,
                parallel: true,
            })
        ]
        if (process.env.NODE_ENV !== 'development') {
            config.plugins = [...config.plugins, ...plugins]
        }
    },
    devServer: {
        port: 33333,
        proxy: {
            '/': {
                target: 'http://localhost:33333', //请求本地
                ws: false,
                changeOrigin: true
            },
        }
    },

}