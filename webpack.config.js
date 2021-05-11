const path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");
let BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
  const  TerserPlugin =require("terser-webpack-plugin") ;
module.exports = {
  // mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx|)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          
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
        use: ["style-loader", "css-loader","postcss-loader"],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: {
          // Inline files smaller than 10 kB (10240 bytes)
          limit: 10 * 1024,
        },
      },
    ],
  },
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "new"),
    //输出的文件名称
    filename: "[name]-[chunkhash].js",
   // chunkFilename: "assets/js/[name]-[chunkhash].js",
 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    // new BundleAnalyzerPlugin(),
  ],
  devServer: {
    port: 2000,
    historyApiFallback: true,
  },
  resolve: {
  
    alias: {
      api: path.join(__dirname, '/Api.js'),
    },
      // extensions:是为了解决引入时不用写后缀名的
      extensions: [".tsx", ".ts", ".js"],
  },

  optimization: {
    minimize: false,
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
      chunks: 'all',
    }
  },
  devtool: "cheap-module-source-map",
};
