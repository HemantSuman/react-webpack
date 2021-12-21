const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
// const ESLintPlugin = require("eslint-webpack-plugin");
// const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "production",
  target: "web",
  // externalsPresets: { node: true },
  // externals: [nodeExternals({
  //  importType: "var"
  // })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            // options: {
            //   cacheDirectory: false,
            // },
          }
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              encoding: false,
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ]
};
