const path = require ("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "main.[contenthash:8].js", // MD5 Hashing; ':8' limits hash to 8 characters
    path: path.resolve(__dirname, "build")
  },

  module: {
    rules: [
      {
        // webpack will come across the css file by importing it in the index.js
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", // Take that translation and inject it through the DOM
          "css-loader", // Translates CSS into valid JS ↑
          "sass-loader", // Compiles SCSS into CSS ↑
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
};