const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const BundleBuddyWebpackPlugin = require('bundle-buddy-webpack-plugin');
const { ANALYZE, DEAD_CODE, NODE_ENV } = process.env

module.exports = {
  webpack: function (config) {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    config.plugins.push(new ProgressBarPlugin());

    return config
  }
}
