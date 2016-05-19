module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dist.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};