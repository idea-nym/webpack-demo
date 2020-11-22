const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",

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