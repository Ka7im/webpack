const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = (env) => { // получаем переменную окружения

  return {
    mode: env.mode ?? 'development', // определяет формат сборки: dev или prod
    entry: path.resolve(__dirname, 'src', 'index.js'), // путь к точке входа в приложение, как правило это index.js файл
    output: {
      path: path.resolve(__dirname, 'build'), // куда будет сохраняться бандл
      filename: '[name].[contenthash].js', // название бандла
      clean: true, // очищает папку build перед тем как положить туда бандл
    },
    plugins: [ // подключение плагинов
      new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}), // путь до нашего html файла
      new webpack.ProgressPlugin()
    ] 
  }
}