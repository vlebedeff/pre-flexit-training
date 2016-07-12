var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    js: "./src/index.tsx", 
    css: "./src/index.css"
  },
  output: {
    filename: "./dist/bundle.js",
  },

  devtool: "source-map",

  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ],

    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')}
    ]
  },

  postcss: function (webpack) {
    return [
      require('postcss-import')({addDependencyTo: webpack}),
      require('postcss-nested')
    ];
  },

  plugins: [
    new ExtractTextPlugin('./dist/bundle.css')
  ],

  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }
};
