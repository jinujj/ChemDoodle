const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "chemDoodleIndex.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "ChemDoodle Plugin",
      myPageHeader: "ChemDoodle Plugin",
      template: "./src/index.html",
      filename: "../demo/index.html" //relative to root of the application
    }),
    new CopyPlugin([{ from: "./install/*", to: "../demo/" }])
  ],
  devServer: {
    //contentBase: path.join(__dirname, ''),
    writeToDisk: true,
    open: true,
    openPage: "../demo/index.html",
    watchContentBase: true,
    hotOnly: true
  },
  watchOptions: {
    poll: 1000 // Check for changes every second
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
