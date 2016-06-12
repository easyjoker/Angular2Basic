//webpack的公共設定
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    //進入點
    //polyfills:加入一些舊瀏覽器未實作的 es5 功能。
    //vendor:供應商文件像是angular2,bootstrap.css,Loadash
    //app:我們應用程式的進入點
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },
    //用來解析副檔名
  resolve: {
    extensions: ['', '.js', '.ts']
  },
    //指定加載器
    //ts:把 typescript 轉譯成 es5 的加載器。
    //html:讀取組件模板的加載器。
    //images/fonts:圖片和字體的加載器。
    //css:第一個是"應用程式級"的加載器。第二個是"組件局部"的。
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },
    //CommonsChunkPlugin:幫我們把供應商的包排除在app之外。
    //HtmlWebpackPlugin:幫我們自動注入script和link標籤。
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
