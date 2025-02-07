const path = require('path');
// require("babel-register");
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { rootDirectory } = require('./src/siteConfig.json');

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
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|docx?|pdf|swf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              url: true,
              name(file) {
                if (/\/png\//.test(file)) {
                  return 'png/[name].[ext]';
                  // return `${rootDirectory}/png/[name].[ext]`;
                } else if (/\/img\//.test(file)) {
                  return 'img/[name].[ext]';
                  // return `${rootDirectory}/img/[name].[ext]`;
                } else if (/\.(docx?|pdf)$/.test(file)) {
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
      src: path.resolve(__dirname, 'src'),
      root: path.resolve(__dirname),
    },
  },
  output: {
    path: __dirname + '/dist',
    publicPath: `${rootDirectory}/`,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/public/index.html",
      filename: "./index.html",
      minify: {
        removeScriptTypeAttributes: true,
      },
    }),
    new CopyPlugin([
      { from: './web.config', to: './web.config' },
      { from: './src/public/favicon.png', to: './favicon.png' },
    ]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      optipng: {
        optimizationLevel: 3,
      },
    }),
    //new BundleAnalyzerPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 9000,
    // open: rootDirectory.replace(/^\//, ''),
    historyApiFallback: true,
    hot: true,
  },
  mode: 'production',
};