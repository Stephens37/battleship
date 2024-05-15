const path = require('path');

module.exports = {
  mode: 'development', // Set to 'production' for production
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'battleship'), // Output directory
    filename: 'src/bundle.js', // Output filename
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Don't apply to files residing in node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader for transpilation
          options: {
            presets: ['@babel/preset-env'], // Use @babel/preset-env for compatibility with browsers
          },
        },
      },
    ],
  },
};