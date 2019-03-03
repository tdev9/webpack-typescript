const path = require('path');

module.exports = {
  entry: {
      'main':'./src/index.ts',
    },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // .ts and .tsx files if we use it in react project
        use: 'ts-loader',
        exclude: /node_modules/ // Exclude node modules direcotry
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ] // Resolve these extensions
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};