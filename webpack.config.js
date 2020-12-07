const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
  module:{
    rules:[
      {
        test: /\.(js|jsx|)$/,
        exclude: /node_modules/,
        use:{
          loader:"babel-loader"
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use:{
          loader:'ts-loader'
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
     filename:'index_bundle.js',
     chunkFilename: 'assets/js/[name]-[chunkhash].js'
  },
  plugins:[new HtmlWebpackPlugin({
    template:"./src/index.html",
    filename:"./index.html"
  })],
  devServer:{
    port:2000,
    historyApiFallback: true
  },
  resolve:{
    // extensions:是为了解决引入时不用写后缀名的
    extensions:['.tsx','.ts','.js']
  },
  devtool :'cheap-module-source-map'

}