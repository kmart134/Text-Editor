const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.
//solved webpack.config.js in activity 28

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        //template
        //title
      }),
      new InjectManifest({
        //swSrc
        //swDest
      }),
      new WebpackPwaManifest({
        //fingerprints
        //inject
        //name
        //short_name
        //description
        //background_color
        //theme_color
        //start_url
        //publicPath
          icons:[
            //src
            //sizes
            //destination
          ]
      })
      
    ],

    module: {
      rules: [
        {
          //test for css
          //use
        },
        {
          //test for js
          //exclude node.modules
        }
      ],
    },
  };
};
