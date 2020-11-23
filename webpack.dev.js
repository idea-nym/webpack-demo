const path = require ("path");
const common = require("./webpack.common");
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: "development",
  
  output: {
    filename: "[name].bundle.js", // MD5 Hashing; ':8' limits hash to 8 characters
    path: path.resolve(__dirname, "build"),
    publicPath: ''
  },
});