

module.exports = [{
    entry: ['./app.scss', './app.js'],
    output: {
      filename: './bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'bundle.css',
              },
            },
            { loader: 'extract-loader' },
            { loader: 'css-loader' },
            {
              loader: 'sass-loader',
              options: {
                // Prefer Dart Sass
                sassOptions: {
                    includePaths: ['./node_modules']
                  },
                implementation: require('sass'),
  
                // See https://github.com/webpack-contrib/sass-loader/issues/804
                webpackImporter: false,
              },
            },
          ]
        },
        {
            test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
        }
      ]
    },
  }];