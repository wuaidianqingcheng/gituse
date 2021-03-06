/*
 * @Author: WH
 * @Date: 2020-05-18 14:31:18
 * @LastEditors: WH
 * @LastEditTime: 2020-05-25 17:04:44
 * @Description: file content
 * @FilePath: \deao_platform\vue.config.js
 */
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
    // css相关配置
    css: {
        // 启用 CSS modules
        modules: false,
        // requireModuleExtension: false,
        // 是否使用css分离插件
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    //remUnit这个配置项的数值是多少呢？？？ 通常我们是根据设计图来定这个值，原因很简单，便于开发。
                    //假如设计图给的宽度是750，我们通常就会把remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
                    require('postcss-px2rem')({
                        remUnit: 192
                    })
                ]
            }
        },
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
            .set("@utils", resolve('src/utils'))
    },

}