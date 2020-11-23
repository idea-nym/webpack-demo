const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    // This makes use of Object Syntax, the most scalable way of defining entries. main and vendor are arbitrary names pertaining to their respective environment concerns.
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  
  module: {
    rules: [
      {
        // webpack will come across the css file by importing it in the index.js
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", // Take that translation and inject it through the DOM
          "css-loader", // Translates CSS into valid JS ↑
          "sass-loader" // Compiles SCSS into CSS ↑
        ],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash:8].[ext]",
            outputPath: "assets",
            esModule: false,
          }
        }
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
};