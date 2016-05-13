var fs = require('fs'),
  path = require('path'),
  webpack = require('webpack'),
  autoprefixer = require('autoprefixer'),
  handlebars = require('handlebars');
  layouts = require('handlebars-layouts'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  ReactToHtmlPlugin = require('./src/helpers/ReactToHtmlWebpackPlugin');

// Register helpers
handlebars.registerHelper(layouts(handlebars));

// Register partials
handlebars.registerPartial('layout', fs.readFileSync('src/pages/layout.hbs', 'utf8'));

var loaders = [
    {
      test: /\.js$/,
      loaders: [/*'react-hot',*/ 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
    },
    {
      test: /\.(png|jpg|gif|ico)$/,
      loader: 'file-loader?name=[name].[ext]'
    }
  ],

  pages = {
    index: new ReactToHtmlPlugin('../index.html', 'index', {
      template: function(data) {
        var tmpl = handlebars.compile(fs.readFileSync('src/pages/index.html', 'utf8'));
        return tmpl(data);
      }
    })
  },

  webpackConfig = {
    context: path.join(__dirname, 'src'),
    resolve: {
      alias: {
        helpers: './src/helpers',
      },
      modulesDirectories: ['node_modules', './src/components']
    },
    entry: {
      index: './app/index.js'
    },
    output: {
      path: path.join(__dirname, 'build/assets'),
      publicPath: path.join(__dirname, 'build'),
      filename: '[name].js',
      libraryTarget: 'umd'
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom',
        ReactDOMServer: 'react-dom/server',
        BaseComponent: 'BaseComponent'
      }),
      /*new webpack.HotModuleReplacementPlugin(),*/
      new ExtractTextPlugin('[name].css', { allChunks: true }),
      pages.index
    ],
    module: {
      loaders: loaders
    },
    postcss: function () {
      return [autoprefixer];
    }
  };

module.exports = webpackConfig;