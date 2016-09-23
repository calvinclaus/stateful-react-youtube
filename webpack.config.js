var DefinePlugin = require('webpack').DefinePlugin;
var env = process.argv[2] !== "-p" ? '"development"' : '"production"'; 
module.exports = {
  entry: {
    library: './src/entry.js',
    examples: './examples/entry.js',
  },
  output: {
    filename: '[name].js',
    path: './build',
    library: "stateful-react-youtube",
    libraryTarget: "umd",
    umdNamedDefine: true,
    devtool: 'source-map'
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
