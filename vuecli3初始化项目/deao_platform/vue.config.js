// 引入path
//引入gzip压缩插件
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
// 配置文件路径
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    //基本路径(相对于服务器根目录   静态资源的相对路径)
    publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/", //font scss资源路径 不同环境切换控制
    productionSourceMap: false, //打包时不要map文件
    //输出文件目录
    outputDir: "dist",
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',
    // 关闭eslint智能检测
    lintOnSave: false,
    devServer: {
        host: 'localhost',
        host: "0.0.0.0",
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器  
        hotOnly: true, // 热更新
        port: 8090
        // proxy:{
        //   '/': {
        //     target: 'http://192.168.0.125:3000/',
        //     changeOrigin: true,
        //     pathRewrite: {}
        //   },
    },
    configureWebpack: {
        plugins: [

            // gzip压缩配置
            new CompressionPlugin({
                test: /\.js$|\.html$|\.css/, //匹配文件名
                threshold: 10240, //对超过10kb的数据进行压缩
                deleteOriginalAssets: false, //是否删除原文件
            })
        ]
    },
    // 配置假名
    chainWebpack: (config) => {
        // 文件别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@views', resolve('src/views'))
            .set('@assets', resolve('src/assets'))
            .set('@store', resolve('src/store'))
            .set('@router', resolve('src/router'))
            .set('@components', resolve('src/components'))
            .set('@httpRequest', resolve('src/httpRequest'))

    }
};