// webpack.config.js (Create this file in your project's root)
const webpack = require("webpack");

module.exports = {
  resolve: {
    fallback: {
      process: require.resolve("process/browser"), // Fix for missing 'process' module
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
