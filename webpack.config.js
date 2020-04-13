const path = require('path');


const app = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'development',
  // エントリーポイントの設定
  entry: './src/js/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, 'public/js')
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.html/,
      loader: 'htmlhint-loader',
      exclude: /node-modules/
    }]
  }
};

module.exports = app;
