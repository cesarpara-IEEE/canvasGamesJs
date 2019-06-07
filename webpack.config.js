const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');

module.exports = {

  entry:{
    app: './src/public/js/app.js'
  },

  output:{
    path: path.resolve(__dirname, './src/build'),
    filename: 'app.bundle.js'
  },


  module:{
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      } 
    ]
  },

  plugins:[
    new HtmlWebpackPlugin({ 
      template: './src/public/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      } 
    }),
    new MiniCssExtractPlugin({
      filename: 'app.bundle.css'
    })
  ]
}