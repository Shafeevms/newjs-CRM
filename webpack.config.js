const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
//   resolve: {
//     fallback: {
//       "path": false,
//       "http": false,
//       "https": false,
//       "crypto": false,
//       "vm": false,
//       "os": false,
//       "fs": false,
//       "stream": false,
//       "constants": false,
//       "assert": false,
//       "child_process": false,
//       'worker_threads': false,
//       "inspector": false
//     },
// },
  mode: 'development',
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, './dist'),
      open: true,
      hot: true,
      port: 8080,
    },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kursovik JS',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/img/'),
          to: path.resolve(__dirname, './dist/img/')
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      // {
      //   test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      //   type: 'asset/resource',
      //   use: [{
      //     loader: 'url-loader',
      //     options: {}
      // }]
      // },
      // {
      //   test: /\.svg/,
      //   use: {
      //     loader: "svg-url-loader",
      //     options: {},
      //   },
      // },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        loader: 'file-loader',
      },
    ],
  }
}
