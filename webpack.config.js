var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: `${SRC_DIR}/index.tsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: "awesome-typescript-loader" }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        // loader: "source-map-loader"
      },
      // {
      //   test: /\.jsx?/,
      //   include: SRC_DIR,
      //   loader: "babel-loader",
      //   query: {
      //     presets: ["@babel/preset-env", "@babel/preset-react"],
      //   },
      // },
      {
        test: /\.scss$/i,
        loaders: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        include: DIST_DIR,
        loader: "file-loader",
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};