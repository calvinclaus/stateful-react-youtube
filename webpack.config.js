var DefinePlugin = require('webpack').DefinePlugin;
var env = process.argv[2] !== "-p" ? '"development"' : '"production"'; 
var build = process.argv[3] === "-b"; 
if (build) {
  module.exports = {
    entry: './src/entry.js',
    output: {
      filename: 'library.js',
      path: './build',
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    externals: {
      'react': {
        'commonjs': 'react',
        'commonjs2': 'react',
        'amd': 'react',
        'root': 'React'
      }
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
      }),
    ]
  }
} else {
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
      }),
    ]
  }
}
