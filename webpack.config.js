const path = require("path");
const glob = require("glob");
const purgecssFromHtml = require("purgecss-from-html");
const ESLintPlugin = require('eslint-webpack-plugin');
// const PATHS = {
//   path: path.join(__dirname, "src/Tw"),
// };

let HtmlWebpackPlugin = require("html-webpack-plugin");
let BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
// const TerserPlugin = require("terser-webpack-plugin");
let  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// 打包时会将js文件中引入的css 打包为css文件,而不是将css内容打包到js中
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 清理 /dist 文件夹
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 用于公共库的打包
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");

// 清除不用的css
const PurgeCSSPlugin = require("purgecss-webpack-plugin");
const envPlugins = (env) => {
  // eslint-disable-next-line no-console
 
  const plugins = [
    new MiniCssExtractPlugin({
      filename: "css/[contenthash].css",

      // chunkFilename:  'css/[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, "src")}/**/*`, { nodir: true }),
      extractors: [
        {
          extractor: purgecssFromHtml,
          extensions: ["html"],
        },
      ],
      css: [],
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: 'https://unpkg.com/react@17/umd/react.production.min.js',
          global: 'React',
        },
        {
          module: 'react-dom',
          entry: 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
          global: 'ReactDOM',
        }
      ],
    } ),
    new ESLintPlugin()
  ];

  if (env !== "production") {
    plugins.push(new BundleAnalyzerPlugin());
  }
  if(env==='production'){
    plugins.push(new CleanWebpackPlugin())
  }
  console.log("ppp", plugins);
  return plugins;
};

module.exports = {
  mode: 'production',
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
        test: /\.css$/,

        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name(resourcePath, resourceQuery) {
            // `resourcePath` - `/absolute/path/to/file.js`
            // `resourceQuery` - `?foo=bar`

            if (process.env.NODE_ENV === "development") {
              return "[path][name].[ext]";
            }

            return "img/[contenthash].[ext]";
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
  performance: {
    maxAssetSize: 100000,
  },

  optimization: {
    minimize: true,

    minimizer: process.env.NODE_ENV==='production'?[
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
    ]:[],

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
      chunks: "async",
      minSize: 20000,
      cacheGroups: {
        materialui: {
          test: /[\\/]node_modules[\\/](@material-ui)[\\/]/,
          name: "materialui",
          chunks: "initial",
        },
      },
    },
  },
  devtool: "source-map",
  // devServer: {
  //   contentBase: path.join(__dirname, "dist"),
  //   compress: true,
  //   port: 9000,
  // },
};
