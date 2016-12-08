"use strict";

module.exports = {
  // ReactのJSX記法をTypeScriptで利用する場合、拡張子はtsxとなる。
  entry: './src/main.tsx',
  output: {
    filename: 'www/js/main.js'
  },
  resolve: {
    root: __dirname + 'src/',
    // TSファイルもrequire()で解決してくれるように設定。
    // tsxを見る
    extensions: ["", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      // .ts,.tsxのファイルは読み込まれる前に変換される
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  }
};