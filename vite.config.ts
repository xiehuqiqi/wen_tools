import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import { createVitePlugins } from './build/vite/plugin'
import { wrapperEnv } from './build/utils'
import { resolve } from 'path'
// https://vitejs.dev/config/
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const isBuild = command === 'build'
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)
  return {
    resolve: {
      alias: [
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/'
        },
        {
          find: '@',
          replacement: pathResolve('src') + '/'
        }
      ]
    },
    css: {
      preprocessorOptions: {
        // 全局引入了 scss 的文件
        scss: {
          // 添加你的全局共享scss文件
          additionalData: ``,
          javascriptEnabled: true
        }
      },
      postcss: {}
    },
    plugins: createVitePlugins(viteEnv, isBuild),

    clearScreen: false,

    server: {
      host: '0.0.0.0',
      port: 4096,
      strictPort: true
    },

    base: './',

    envPrefix: [
      'VITE_',
      'TAURI_PLATFORM',
      'TAURI_ARCH',
      'TAURI_FAMILY',
      'TAURI_PLATFORM_VERSION',
      'TAURI_PLATFORM_TYPE',
      'TAURI_DEBUG'
    ],
    build: {
      // Tauri uses Chromium on Windows and WebKit on macOS and Linux
      target:
        process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
      // don't minify for debug builds
      minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
      // 为调试构建生成源代码映射 (sourcemap)
      sourcemap: !!process.env.TAURI_DEBUG
    }
  }
}
