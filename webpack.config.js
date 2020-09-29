const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
//Compatibilidad con los demas browsers
const autoprefixer = require('autoprefixer');
module.exports = [{
    entry: ['./js/app.js'],
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'js/bundle.js'
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8000
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            autoprefixer: {
                                browser: ["last 2 versions"]
                            },
                            plugins: () => [
                                autoprefixer
                            ]
                        }
                    },
                    'sass-loader',
          ]
        },
        {
            test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
        },
        {
          test: /\.(png|jpe?g|gif|pdf)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        }
      ]
    },
    plugins:[
      new MiniCssExtractPlugin({
        filename: "css/[name]-styles.css",
        chunkFilename: "[id].css"
    }),
    new MinifyPlugin()
    ]
  }];