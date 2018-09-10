const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js',
  ],
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js', // relative to the outputPath (defaults to / or root of the site)
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  },
  devServer: {
    /*headers: {
		'Content-Security-Policy': "script-src 'self' * 'unsafe-inline' 'unsafe-eval'; connect-src 'self' *; "
	},
    */
    contentBase: path.resolve(__dirname, './public'),
    watchContentBase: true, // initiate a page refresh if static content changes
    proxy: [
      // allows redirect of requests to webpack-dev-server to another destination
      {
        context: ['/api', '/server'], // can have multiple
        target: 'http://127.0.0.1:3000', // server and port to redirect to
        secure: false,
        changeOrigin: true,
      },
    ],
    port: 3030, // port webpack-dev-server listens to, defaults to 8080
    overlay: {
      // Shows a full-screen overlay in the browser when there are compiler errors or warnings
      warnings: false, // defaults to false
      errors: false, // defaults to false
    },
  },
};
