import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/types'


export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true, // автоматическое открытие браузера при запуске dev сервера
    // работает только для dev сервера, если раздавать статику через nginx, то надо делать проксирование на index
    historyApiFallback: true,
    hot: true,
  }
}