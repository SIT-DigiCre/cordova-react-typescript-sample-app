"use strict";

module.exports = {
  // webpackの対象となるファイル。
  // これがビルドされてoutputのファイルに出力されると考えればOK。
  entry: './src/main.js', 
  output: {
    filename: 'www/js/main.js' // 出力ファイル
  },
  resolve: {
    //　自分が作ったモジュールのルートディレクトリ
    root: __dirname + 'src/', 
  },
  module: { 
    loaders: [
    ]
  }
};