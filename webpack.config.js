const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader:"babel-loader"
        }
      }
    ]
  },
  entry:{
    entry:"./src/index.js"
  },
  output:{
     //输出的路径，用了Node语法
     path:path.resolve(__dirname,'new'),
     //输出的文件名称
     filename:'index_bundle.js'
  },
  plugins:[new HtmlWebpackPlugin({
    template:"./src/index.html",
    filename:"./index.html"
  })],
  devServer:{
    port:9000
  }
}