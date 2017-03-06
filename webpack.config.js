const join = require("path").join
const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
  app: join(__dirname, 'src'),
  build: join(__dirname, 'dist'),
  templatePath: join(__dirname, 'src/assets/templates'),
}

const commonConfig = {

  entry: {
    app: PATHS.app
  },

  output: {
    path: PATHS.build,
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [ 
          {
            loader: "url-loader",
            options: { limit: 40000 }
          },
          "image-webpack-loader"
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Demo@'
    }),
    new DashboardPlugin(),
    new ExtractTextPlugin("styles.css"),
  ]

}



module.exports = function(env) {
  console.log('env', env)

  return commonConfig
}

