import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import { createVitePlugins } from './build/vite/plugin'
import { wrapperEnv } from './build/utils'
import { resolve } from 'path'
import { internalIpV4 } from "internal-ip";

// https://vitejs.dev/config/
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// @ts-expect-error process is a nodejs global
const mobile = !!/android|ios/.exec(process.env.TAURI_ENV_PLATFORM);

export default async ({ command, mode }: ConfigEnv): UserConfig => {
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

    // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
    //
    // 1. prevent vite from obscuring rust errors
    clearScreen: false,

    // 2. tauri expects a fixed port, fail if that port is not available
    server: {
      port: 4096,
      strictPort: true,
      host: mobile ? '0.0.0.0' : false,
      hmr: mobile
        ? {
          protocol: "ws",
          host: internalIpV4(),
          port: 1421,
        }
        : undefined,
      watch: {
        // 3. tell vite to ignore watching `src-tauri`
        ignored: ["**/src-tauri/**"],
      },
    },

    base: './',

    envPrefix: [
      'VITE_',
      'TAURI_ENV_PLATFORM',
      'TAURI_ENV_ARCH',
      'TAURI_ENV_FAMILY',
      'TAURI_ENV_PLATFORM_VERSION',
      'TAURI_ENV_PLATFORM_TYPE',
      'TAURI_ENV_DEBUG',
      'TAURI_SIGNING_PRIVATE_KEY',
      'TAURI_SIGNING_PRIVATE_KEY_PASSWORD',
      'TAURI_CLI_NO_DEV_SERVER_WAIT',
      'TAURI_CLI_PORT',
      'TAURI_CLI_CONFIG_DEPTH',
      'TAURI_BUNDLER_WIX_FIPS_COMPLIANT',
      'TAURI_CLI_WATCHER_IGNORE_FILENAME',
      'TAURI_LINUX_AYATANA_APPINDICATOR',
      'APPLE_DEVELOPMENT_TEAM'

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
