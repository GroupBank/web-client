module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js'
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
