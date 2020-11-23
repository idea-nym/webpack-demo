const path = require ("path");
const common = require("./webpack.common");
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "[name].[contenthash:8].bundle.js", // MD5 Hashing; ':8' limits hash to 8 characters
    path: path.resolve(__dirname, "build"),
    publicPath: ''
  },

  plugins: [
    new CleanWebpackPlugin()
  ],
});