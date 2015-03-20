
var webpack = require('webpack');

function getPlugins() {
  var plugins = [
    new webpack.NoErrorsPlugin()//,
//      '$': 'jquery',
//      'jQuery': 'jquery',
//      'window.jQuery': 'jquery'
//    })
  ];

  if (process.env.NODE_ENV === 'production') {
    plugins.concat([
      new webpack.DefinePlugin({
        '__DEV__': false
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({comments: false}),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ]);
  } else {
    plugins.push(
      new webpack.DefinePlugin({
        '__DEV__': true
      })
    );
  }

  plugins.push(new webpack.optimize.CommonsChunkPlugin('shared.js'));

  return plugins;
}


module.exports = {
  entry : {
    app: [
      'webpack-dev-server/client?http://localhost:8080/app/',
      'webpack/hot/only-dev-server',
      './app/scripts/app.jsx'
    ]
  },

  output : {
    path: process.env.NODE_ENV === 'production'
      ? './_bundled'
      : './_debug'
    ,
    filename: 'app.js',
    chunkFilename: 'chunk-[name].js',
    publicPath: '/scripts/'
  },

  cache: process.env.NODE_ENV !== 'production',
  debug: process.env.NODE_ENV !== 'production',
  devtool: 'eval',

  target: process.env.NODE_ENV === 'production'
    ? 'node-webkit'
    : 'web'
  ,

  stats: {
    colors: true,
    reasons: process.env.NODE_ENV !== 'production'
  },

  externals: {
    'jQuery': '$'
  },

  module: {

    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['react-hot', /*'jshint-loader', */'jsx-loader?harmony'],
        exclued: /node_modules/
      },
      {
        test: /\.es6\.js$/,
        loader: '6to5-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.gif/,
        loader: 'url-loader?limit=10000&mimetype=image/gif'
      },
      {
        test: /\.jpg/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg'
      },
      {
        test: /\.png/,
        loader: 'url-loader?limit=10000&mimetype=image/png'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: getPlugins(),

  resolve : {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.es6.js', '.jsx'],
    alias : {
      actions : __dirname + '/app/scripts/actions',
      constants : __dirname + '/app/scripts/constants',
      stores : __dirname + '/app/scripts/stores',
      mixins : __dirname + '/app/scripts/mixins',
      utils : __dirname + '/app/scripts/utils',
      core : __dirname + '/app/scripts/core'
    }
  }
};
