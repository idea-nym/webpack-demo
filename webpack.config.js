const path = require ("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build")
  },

  module: {
    rules: [
      {
        // webpack will come across the css file by importing it in the index.js
        test: /\.css$/i,
        use: [
          "style-loader", // Take that translation and inject it through the DOM
          "css-loader" // Translate into valid JS ↑
        ],
      },
    ],
  },
};