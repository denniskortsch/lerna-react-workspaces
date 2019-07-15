const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    path: __dirname + "/dist",
    publicPath: "/"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json"],
    symlinks: true
  },
  devServer: {
    port: 3000,
    watchContentBase: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve("babel-loader"),
          options: {
            rootMode: "upward"
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: true,
      chunks: "all"
    }
  }
};
