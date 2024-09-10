const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  mode: 'production',
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // Output bundle filename
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'], // Process HTML files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // HTML template to use
      filename: 'index.html', // Output HTML file
    }),
    new webpack.DefinePlugin({
      'process.env.PROXY_URL': JSON.stringify(process.env.PROXY_URL), // Define environment variable
    }),
  ],
};
