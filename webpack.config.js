const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
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
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      //   {
      //     test: /\.(png|jp(e*)g|svg)$/i,  
      //     use: [{
      //       loader: 'url-loader',
      //       options: { 
      //         limit: 1000000, // Convert images < 8kb to base64 strings
      //       } 
      //     }]
      //   },
      {
        test: /\.(png|jpe?g|gif|doc|pdf|swf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              url: true,
              //   name: '[name].[ext]',
              //   name: '[contenthash].[ext]',
              //   name: '[path][name].[ext]',
              //   name: 'png/[name].[ext]',
              //   name(file) {
              //     if (ext === 'png') {
              //       return 
              //     }
              //   }
              name(file) {
                console.log('file', file);
                if (file.endsWith('png')) {
                  return 'png/[name].[ext]'; 
                } else if (file.endsWith('jpg') || file.endsWith('jpeg')) {
                  return 'img/[name].[ext]';
                } else if (file.endsWith('doc') || file.endsWith('pdf')) {
                  return 'doc/[name].[ext]';
                } else if (file.endsWith('swf')) {
                  return 'swf/[name].[ext]';
                }
                return '[name].[ext]';
              }
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      shared: path.resolve(__dirname, 'src/shared'),
      modules: path.resolve(__dirname, 'src/modules'),
      components: path.resolve(__dirname, 'src/components'),
      utils: path.resolve(__dirname, 'src/utils'),
      public: path.resolve(__dirname, 'src/public'),
    },
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/public/index.html",
      filename: "./index.html"
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // port: 9000,
    historyApiFallback: true,
    hot: true,
  }
};