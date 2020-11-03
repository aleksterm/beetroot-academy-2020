const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = { mode: "development" }) => {
  const isProduction = env.mode === "production";
  const plugins = [
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    })
  ];

  return {
    mode: env.mode,
    devtool: isProduction ? "" : "inline-source-map",
    entry: {
      app: ["./src/index.js", "./src/scss/style.scss"]
    },
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
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
            {
              loader: "sass-loader"
            }
          ]
        }
      ]
    },
    plugins,
      devServer: {
      contentBase: path.join(__dirname, "src"),
      compress: true,
      port: 9000,
      overlay: true,
      stats: {
        modules: false
      }
    }
  };
};
