var DefinePlugin = require('webpack').DefinePlugin;
var env = process.argv[2] !== "-p" ? '"development"' : '"production"'; 
module.exports = {
  entry: './examples/entry.js',
  output: {
    filename: 'examples.js',
    path: './build',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(noode_modules)/,
        loader: 'babel-loader'
      },
      { test: /\.css$/,  loader: "style-loader!css-loader" }
    ]
  },
  plugins: [
    new DefinePlugin({
      "process.env.NODE_ENV":env
    })
  ]
}

/*
library: "stateful-react-youtube",
libraryTarget: "umd",
umdNamedDefine: true
devtool: 'source-map',
*/
