const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports =  (env = {mode: 'development'})  => {
    const isProduction = env.mode === 'production';
    const plugins = [
      new MiniCssExtractPlugin({
        filename: "css/style.css"
      })
    ];

    return {
      mode: env.mode,
      entry: {
        app: ["./src/index.js", "./src/scss/style.scss"]
      },
        output: {
            path:   __dirname + "/dist",
            filename:"bundle.js"
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['babel-loader']
            },
            {
              test: /\.scss$/,
              use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: !isProduction,
                    url: false
                  }
                },
                // SASS
                {
                  loader: "sass-loader"
                }
              ]
            }
          ]
        },
        // CSS minification
        // this section works only in production mode
        optimization: {
          minimize: true,
          minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCssAssetsPlugin(),
          ],
        },
        plugins,
        devServer: {
          contentBase: path.join(__dirname, 'src'),
          compress: true,
          port: 9000,
      }
    }
}
