const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/, // look for any js files
        exclude: /node_modules/,
        use: { // run these for each file
          loader: 'babel-loader',
          options: {
            presets: ['env'] // pass this option to babel
          }
        }
      }
    ]
  }
};
