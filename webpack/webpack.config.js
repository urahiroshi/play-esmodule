const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './main.ts'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js',
  },
};
