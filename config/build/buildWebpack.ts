import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/types'

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const isDev = options.mode === 'development'

  return {
    mode: options.mode ?? 'development', // определяет формат сборки: dev или prod
    entry: options.paths.entry, // путь к точке входа в приложение
    output: {
      path: options.paths.output, // куда будет сохраняться бандл
      filename: '[name].[contenthash].js', // название бандла
      clean: true, // очищает папку build перед тем как положить туда бандл
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : false, // подключение source map 
    devServer: isDev ? buildDevServer(options) : undefined
  }
}