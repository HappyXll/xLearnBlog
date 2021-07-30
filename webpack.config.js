const path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");
let BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 打包时会将js文件中引入的css 打包为css文件,而不是将css内容打包到js中
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 清理 /dist 文件夹 暂时不能用,只能暂时用于webpack 5
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const envPlugins =(env)=>{
  
  console.log("env",env);
  const plugins =[new MiniCssExtractPlugin({filename: "[name].css", chunkFilename: "[id].css", ignoreOrder: true,}),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
  })];
if(env!=='production'){
  console.log("1");
  plugins.push(new BundleAnalyzerPlugin);
}
return plugins
} 

module.exports = {
  // mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx|)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.css$/i,
      
        use: [ MiniCssExtractPlugin.loader, "css-loader", 
       
      ],
      },
      {
        test:  /\.(png|jpe?g|gif)$/i,
        loader:'file-loader',
        options: {
          name(resourcePath, resourceQuery) {
            // `resourcePath` - `/absolute/path/to/file.js`
            // `resourceQuery` - `?foo=bar`

            if (process.env.NODE_ENV === 'development') {
              return '[path][name].[ext]';
            }

            return 'img/[contenthash].[ext]';
          },
        },
      },
    ],
  },
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    //输出的文件名称
    filename: "[name]-[chunkhash].js",
    // chunkFilename: "assets/js/[name]-[chunkhash].js",
    // clean: true,
  },
  plugins: envPlugins(process.env.NODE_ENV),
  devServer: {
    port: 2000,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      api: path.join(__dirname, "/Api.js"),
    },
    // extensions:是为了解决引入时不用写后缀名的
    extensions: [".tsx", ".ts", ".js"],
  },

  optimization: {
    minimize: true,
   
     // minimizer: [new UglifyJsPlugin()],
  
    // minimizer:[new TerserPlugin({
    //   minify: (file, sourceMap) => {
    //     // https://github.com/mishoo/UglifyJS2#minify-options
    //     const uglifyJsOptions = {
    //       /* your `uglify-js` package options */
    //     };

    //     if (sourceMap) {
    //       uglifyJsOptions.sourceMap = {
    //         content: sourceMap,
    //       };
    //     }

    //     return require("uglify-js").minify(file, uglifyJsOptions);
    //   },
    // })

    // ]
    splitChunks: {
      chunks: "all",
      minSize:20000,
      cacheGroups: {
        materialui: {
          test: /[\\/]node_modules[\\/](@material-ui)[\\/]/,
          name: 'materialui',
          chunks: 'all',
        },
      },
    },
  },
  devtool: "cheap-module-source-map",
};
