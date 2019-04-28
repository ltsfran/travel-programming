const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const rootPath = path.join(__dirname, '../../client');

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': path.join(rootPath, 'src/index.jsx')
  },
  output: {
    path: path.join(rootPath, 'dist')
  },
  devServer: {  
    open: true,
    historyApiFallback: true,
    port: 3000
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@app': rootPath
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(rootPath, 'public/index.html'),
      filename: "./index.html"
    })
  ]
}