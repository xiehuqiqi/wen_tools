// vite.config.ts
import { loadEnv } from "file:///D:/wen/pr/wen_tools/node_modules/.pnpm/vite@4.5.3_@types+node@18.19.39_less@4.2.0_sass@1.77.6_terser@5.31.1/node_modules/vite/dist/node/index.js";

// build/vite/plugin.ts
import vue from "file:///D:/wen/pr/wen_tools/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@4.5.3_@types+node@18.19.39_less@4.2.0_sass@1.77.6_terser@5.31.1_n35arxy2e5lwowq5hjhihtil2u/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueJsx from "file:///D:/wen/pr/wen_tools/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@4.5.3_@types+node@18.19.39_less@4.2.0_sass@1.77.6_terser@5._c6goxmbmdbbljfmfciywhq4wgi/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import Components from "file:///D:/wen/pr/wen_tools/node_modules/.pnpm/unplugin-vue-components@0.25.2_@babel+parser@7.24.7_rollup@2.79.1_vue@3.4.31_typescript@5.5.3_/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///D:/wen/pr/wen_tools/node_modules/.pnpm/unplugin-auto-import@0.16.7_@vueuse+core@10.4.1_vue@3.4.31_typescript@5.5.3___rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js";
import Icons from "file:///D:/wen/pr/wen_tools/node_modules/.pnpm/unplugin-icons@0.16.6_@vue+compiler-sfc@3.4.31_vue-template-compiler@2.7.16/node_modules/unplugin-icons/dist/vite.mjs";
import IconsResolver from "file:///D:/wen/pr/wen_tools/node_modules/.pnpm/unplugin-icons@0.16.6_@vue+compiler-sfc@3.4.31_vue-template-compiler@2.7.16/node_modules/unplugin-icons/dist/resolver.mjs";
import { VitePWA } from "file:///D:/wen/pr/wen_tools/node_modules/.pnpm/vite-plugin-pwa@0.16.7_vite@4.5.3_@types+node@18.19.39_less@4.2.0_sass@1.77.6_terser@5.31.1___akapyabmvznfg57k65jtifb3gu/node_modules/vite-plugin-pwa/dist/index.js";
import Inspect from "file:///D:/wen/pr/wen_tools/node_modules/.pnpm/vite-plugin-inspect@0.7.42_rollup@2.79.1_vite@4.5.3_@types+node@18.19.39_less@4.2.0_sass@1.77.6_terser@5.31.1_/node_modules/vite-plugin-inspect/dist/index.mjs";
import { visualizer } from "file:///D:/wen/pr/wen_tools/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@2.79.1/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { vitePluginForArco } from "file:///D:/wen/pr/wen_tools/node_modules/.pnpm/@arco-plugins+vite-vue@1.4.5/node_modules/@arco-plugins/vite-vue/lib/index.js";
import { NaiveUiResolver } from "file:///D:/wen/pr/wen_tools/node_modules/.pnpm/unplugin-vue-components@0.25.2_@babel+parser@7.24.7_rollup@2.79.1_vue@3.4.31_typescript@5.5.3_/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { ArcoResolver } from "file:///D:/wen/pr/wen_tools/node_modules/.pnpm/unplugin-vue-components@0.25.2_@babel+parser@7.24.7_rollup@2.79.1_vue@3.4.31_typescript@5.5.3_/node_modules/unplugin-vue-components/dist/resolvers.mjs";
function createVitePlugins(viteEnv, isDev) {
  const vitePlugins = [
    vue({
      reactivityTransform: true
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "wen_tools",
        short_name: "wen_tools",
        theme_color: "#4d4d4d",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        navigateFallback: "/",
        cleanupOutdatedCaches: false
      },
      // client: {
      //   installPrompt: true,
      //   periodicSyncForUpdates: 20
      // },
      devOptions: {
        enabled: true,
        type: "module"
      }
    }),
    VueJsx(),
    Inspect(),
    vitePluginForArco({
      theme: "@arco-themes/vue-gi-demo"
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: ["src/components/", "src/layout/", "src/views", "src/assets"],
      resolvers: [
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon"
        }),
        NaiveUiResolver(),
        ArcoResolver({
          sideEffect: true
        })
      ],
      dts: "src/types/components.d.ts"
    }),
    AutoImport({
      // dts: path.resolve(pathSrc, 'typings', 'auto-imports.d.ts'),
      dts: "src/types/auto-imports.d.ts",
      // imports: ['vue', '@vueuse/core'],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      imports: ["vue", "vue/macros", "vue-router", "pinia", "@vueuse/core"],
      dirs: ["src/composables", "src/utils"],
      // Auto import for all module exports under directories
      // dirs: [
      //   // './hooks',
      //   // './composables'
      //   // ...
      // ],
      eslintrc: {
        // enabled: true, // Default `false`
        enabled: false,
        // Default `false`
        filepath: "./.eslintrc-auto-import.json",
        // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true
        // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      // Auto import functions from UILibrary, e.g. Message, Spin, Loading, MessageBox... (with style)
      resolvers: [
        // Auto import icon components
        NaiveUiResolver(),
        ArcoResolver()
      ]
    }),
    Icons({
      compiler: "vue3",
      customCollections: {
        // custom: FileSystemIconLoader(`${vitePath.src}/assets/svg`)
      },
      scale: 1,
      defaultClass: "inline-block",
      autoInstall: true
    }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: "test.html",
      //分析图生成的文件名
      open: false
      //如果存在本地服务端口，将在打包后自动展示
    })
  ];
  return vitePlugins;
}

// build/utils.ts
function wrapperEnv(envConf) {
  const ret = {};
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n");
    realName = realName === "true" ? true : realName === "false" ? false : realName;
    if (envName === "VITE_PORT") {
      realName = Number(realName);
    }
    if (envName === "VITE_PROXY") {
      try {
        realName = JSON.parse(realName);
      } catch (error) {
      }
    }
    ret[envName] = realName;
    process.env[envName] = realName;
  }
  return ret;
}

// vite.config.ts
import { resolve } from "path";
import { internalIpV4 } from "file:///D:/wen/pr/wen_tools/node_modules/.pnpm/internal-ip@7.0.0/node_modules/internal-ip/index.js";
function pathResolve(dir) {
  return resolve(process.cwd(), ".", dir);
}
var mobile = !!/android|ios/.exec(process.env.TAURI_ENV_PLATFORM);
var vite_config_default = async ({ command, mode }) => {
  const root = process.cwd();
  const isBuild = command === "build";
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  return {
    resolve: {
      alias: [
        {
          find: /\/#\//,
          replacement: pathResolve("types") + "/"
        },
        {
          find: "@",
          replacement: pathResolve("src") + "/"
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
      host: mobile ? "0.0.0.0" : false,
      hmr: mobile ? {
        protocol: "ws",
        host: internalIpV4(),
        port: 1421
      } : void 0,
      watch: {
        // 3. tell vite to ignore watching `src-tauri`
        ignored: ["**/src-tauri/**"]
      }
    },
    base: "./",
    envPrefix: [
      "VITE_",
      "TAURI_ENV_PLATFORM",
      "TAURI_ENV_ARCH",
      "TAURI_ENV_FAMILY",
      "TAURI_ENV_PLATFORM_VERSION",
      "TAURI_ENV_PLATFORM_TYPE",
      "TAURI_ENV_DEBUG",
      "TAURI_SIGNING_PRIVATE_KEY",
      "TAURI_SIGNING_PRIVATE_KEY_PASSWORD",
      "TAURI_CLI_NO_DEV_SERVER_WAIT",
      "TAURI_CLI_PORT",
      "TAURI_CLI_CONFIG_DEPTH",
      "TAURI_BUNDLER_WIX_FIPS_COMPLIANT",
      "TAURI_CLI_WATCHER_IGNORE_FILENAME",
      "TAURI_LINUX_AYATANA_APPINDICATOR",
      "APPLE_DEVELOPMENT_TEAM"
    ],
    build: {
      // Tauri uses Chromium on Windows and WebKit on macOS and Linux
      target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
      // don't minify for debug builds
      minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
      // 为调试构建生成源代码映射 (sourcemap)
      sourcemap: !!process.env.TAURI_DEBUG
    }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW4udHMiLCAiYnVpbGQvdXRpbHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3ZW5cXFxccHJcXFxcd2VuX3Rvb2xzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3ZW5cXFxccHJcXFxcd2VuX3Rvb2xzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi93ZW4vcHIvd2VuX3Rvb2xzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnLCBDb25maWdFbnYgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyBjcmVhdGVWaXRlUGx1Z2lucyB9IGZyb20gJy4vYnVpbGQvdml0ZS9wbHVnaW4nXG5pbXBvcnQgeyB3cmFwcGVyRW52IH0gZnJvbSAnLi9idWlsZC91dGlscydcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgaW50ZXJuYWxJcFY0IH0gZnJvbSBcImludGVybmFsLWlwXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5mdW5jdGlvbiBwYXRoUmVzb2x2ZShkaXI6IHN0cmluZykge1xuICByZXR1cm4gcmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLicsIGRpcilcbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciBwcm9jZXNzIGlzIGEgbm9kZWpzIGdsb2JhbFxuY29uc3QgbW9iaWxlID0gISEvYW5kcm9pZHxpb3MvLmV4ZWMocHJvY2Vzcy5lbnYuVEFVUklfRU5WX1BMQVRGT1JNKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHsgY29tbWFuZCwgbW9kZSB9OiBDb25maWdFbnYpOiBVc2VyQ29uZmlnID0+IHtcbiAgY29uc3Qgcm9vdCA9IHByb2Nlc3MuY3dkKClcbiAgY29uc3QgaXNCdWlsZCA9IGNvbW1hbmQgPT09ICdidWlsZCdcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCByb290KVxuICBjb25zdCB2aXRlRW52ID0gd3JhcHBlckVudihlbnYpXG4gIHJldHVybiB7XG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9cXC8jXFwvLyxcbiAgICAgICAgICByZXBsYWNlbWVudDogcGF0aFJlc29sdmUoJ3R5cGVzJykgKyAnLydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6ICdAJyxcbiAgICAgICAgICByZXBsYWNlbWVudDogcGF0aFJlc29sdmUoJ3NyYycpICsgJy8nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICAvLyBcdTUxNjhcdTVDNDBcdTVGMTVcdTUxNjVcdTRFODYgc2NzcyBcdTc2ODRcdTY1ODdcdTRFRjZcbiAgICAgICAgc2Nzczoge1xuICAgICAgICAgIC8vIFx1NkRGQlx1NTJBMFx1NEY2MFx1NzY4NFx1NTE2OFx1NUM0MFx1NTE3MVx1NEVBQnNjc3NcdTY1ODdcdTRFRjZcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYGAsXG4gICAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHBvc3Rjc3M6IHt9XG4gICAgfSxcbiAgICBwbHVnaW5zOiBjcmVhdGVWaXRlUGx1Z2lucyh2aXRlRW52LCBpc0J1aWxkKSxcblxuICAgIC8vIFZpdGUgb3B0aW9ucyB0YWlsb3JlZCBmb3IgVGF1cmkgZGV2ZWxvcG1lbnQgYW5kIG9ubHkgYXBwbGllZCBpbiBgdGF1cmkgZGV2YCBvciBgdGF1cmkgYnVpbGRgXG4gICAgLy9cbiAgICAvLyAxLiBwcmV2ZW50IHZpdGUgZnJvbSBvYnNjdXJpbmcgcnVzdCBlcnJvcnNcbiAgICBjbGVhclNjcmVlbjogZmFsc2UsXG5cbiAgICAvLyAyLiB0YXVyaSBleHBlY3RzIGEgZml4ZWQgcG9ydCwgZmFpbCBpZiB0aGF0IHBvcnQgaXMgbm90IGF2YWlsYWJsZVxuICAgIHNlcnZlcjoge1xuICAgICAgcG9ydDogNDA5NixcbiAgICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gICAgICBob3N0OiBtb2JpbGUgPyAnMC4wLjAuMCcgOiBmYWxzZSxcbiAgICAgIGhtcjogbW9iaWxlXG4gICAgICAgID8ge1xuICAgICAgICAgIHByb3RvY29sOiBcIndzXCIsXG4gICAgICAgICAgaG9zdDogaW50ZXJuYWxJcFY0KCksXG4gICAgICAgICAgcG9ydDogMTQyMSxcbiAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHdhdGNoOiB7XG4gICAgICAgIC8vIDMuIHRlbGwgdml0ZSB0byBpZ25vcmUgd2F0Y2hpbmcgYHNyYy10YXVyaWBcbiAgICAgICAgaWdub3JlZDogW1wiKiovc3JjLXRhdXJpLyoqXCJdLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgYmFzZTogJy4vJyxcblxuICAgIGVudlByZWZpeDogW1xuICAgICAgJ1ZJVEVfJyxcbiAgICAgICdUQVVSSV9FTlZfUExBVEZPUk0nLFxuICAgICAgJ1RBVVJJX0VOVl9BUkNIJyxcbiAgICAgICdUQVVSSV9FTlZfRkFNSUxZJyxcbiAgICAgICdUQVVSSV9FTlZfUExBVEZPUk1fVkVSU0lPTicsXG4gICAgICAnVEFVUklfRU5WX1BMQVRGT1JNX1RZUEUnLFxuICAgICAgJ1RBVVJJX0VOVl9ERUJVRycsXG4gICAgICAnVEFVUklfU0lHTklOR19QUklWQVRFX0tFWScsXG4gICAgICAnVEFVUklfU0lHTklOR19QUklWQVRFX0tFWV9QQVNTV09SRCcsXG4gICAgICAnVEFVUklfQ0xJX05PX0RFVl9TRVJWRVJfV0FJVCcsXG4gICAgICAnVEFVUklfQ0xJX1BPUlQnLFxuICAgICAgJ1RBVVJJX0NMSV9DT05GSUdfREVQVEgnLFxuICAgICAgJ1RBVVJJX0JVTkRMRVJfV0lYX0ZJUFNfQ09NUExJQU5UJyxcbiAgICAgICdUQVVSSV9DTElfV0FUQ0hFUl9JR05PUkVfRklMRU5BTUUnLFxuICAgICAgJ1RBVVJJX0xJTlVYX0FZQVRBTkFfQVBQSU5ESUNBVE9SJyxcbiAgICAgICdBUFBMRV9ERVZFTE9QTUVOVF9URUFNJ1xuXG4gICAgXSxcbiAgICBidWlsZDoge1xuICAgICAgLy8gVGF1cmkgdXNlcyBDaHJvbWl1bSBvbiBXaW5kb3dzIGFuZCBXZWJLaXQgb24gbWFjT1MgYW5kIExpbnV4XG4gICAgICB0YXJnZXQ6XG4gICAgICAgIHByb2Nlc3MuZW52LlRBVVJJX1BMQVRGT1JNID09ICd3aW5kb3dzJyA/ICdjaHJvbWUxMDUnIDogJ3NhZmFyaTEzJyxcbiAgICAgIC8vIGRvbid0IG1pbmlmeSBmb3IgZGVidWcgYnVpbGRzXG4gICAgICBtaW5pZnk6ICFwcm9jZXNzLmVudi5UQVVSSV9ERUJVRyA/ICdlc2J1aWxkJyA6IGZhbHNlLFxuICAgICAgLy8gXHU0RTNBXHU4QzAzXHU4QkQ1XHU2Nzg0XHU1RUZBXHU3NTFGXHU2MjEwXHU2RTkwXHU0RUUzXHU3ODAxXHU2NjIwXHU1QzA0IChzb3VyY2VtYXApXG4gICAgICBzb3VyY2VtYXA6ICEhcHJvY2Vzcy5lbnYuVEFVUklfREVCVUdcbiAgICB9XG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcd2VuXFxcXHByXFxcXHdlbl90b29sc1xcXFxidWlsZFxcXFx2aXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3ZW5cXFxccHJcXFxcd2VuX3Rvb2xzXFxcXGJ1aWxkXFxcXHZpdGVcXFxccGx1Z2luLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi93ZW4vcHIvd2VuX3Rvb2xzL2J1aWxkL3ZpdGUvcGx1Z2luLnRzXCI7LypcbiAqIEBBdXRob3I6IHN1d2VubWFvIHNoZW5taW5nMjZAb3V0bG9vay5jb21cbiAqIEBEYXRlOiAyMDI0LTA3LTAzIDE1OjA2OjQwXG4gKiBATGFzdEVkaXRvcnM6IHN1d2VubWFvIHNoZW5taW5nMjZAb3V0bG9vay5jb21cbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjQtMDctMDkgMTM6MDA6MzdcbiAqIEBGaWxlUGF0aDogXFx3ZW5fdG9vbHNcXGJ1aWxkXFx2aXRlXFxwbHVnaW4udHNcbiAqIEBEZXNjcmlwdGlvbjpcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjQgYnkgJHtnaXRfbmFtZV9lbWFpbH0sIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IFZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgSWNvbnMgZnJvbSAndW5wbHVnaW4taWNvbnMvdml0ZSdcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJ1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcbmltcG9ydCBJbnNwZWN0IGZyb20gJ3ZpdGUtcGx1Z2luLWluc3BlY3QnXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJ1xuaW1wb3J0IHsgdml0ZVBsdWdpbkZvckFyY28gfSBmcm9tICdAYXJjby1wbHVnaW5zL3ZpdGUtdnVlJ1xuXG5pbXBvcnQgeyBOYWl2ZVVpUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5pbXBvcnQgeyBBcmNvUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVml0ZVBsdWdpbnModml0ZUVudiwgaXNEZXY6IGJvb2xlYW4pIHtcbiAgY29uc3Qgdml0ZVBsdWdpbnM6IFBsdWdpbiB8IFBsdWdpbltdID0gW1xuICAgIHZ1ZSh7XG4gICAgICByZWFjdGl2aXR5VHJhbnNmb3JtOiB0cnVlXG4gICAgfSksXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5zdmcnLCAnc2FmYXJpLXBpbm5lZC10YWIuc3ZnJ10sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAnd2VuX3Rvb2xzJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ3dlbl90b29scycsXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnIzRkNGQ0ZCcsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgd29ya2JveDoge1xuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrOiAnLycsXG4gICAgICAgIGNsZWFudXBPdXRkYXRlZENhY2hlczogZmFsc2VcbiAgICAgIH0sXG4gICAgICAvLyBjbGllbnQ6IHtcbiAgICAgIC8vICAgaW5zdGFsbFByb21wdDogdHJ1ZSxcbiAgICAgIC8vICAgcGVyaW9kaWNTeW5jRm9yVXBkYXRlczogMjBcbiAgICAgIC8vIH0sXG4gICAgICBkZXZPcHRpb25zOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIHR5cGU6ICdtb2R1bGUnXG4gICAgICB9XG4gICAgfSksXG4gICAgVnVlSnN4KCksXG4gICAgSW5zcGVjdCgpLFxuICAgIHZpdGVQbHVnaW5Gb3JBcmNvKHtcbiAgICAgIHRoZW1lOiAnQGFyY28tdGhlbWVzL3Z1ZS1naS1kZW1vJ1xuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgLy8gYWxsb3cgYXV0byBsb2FkIG1hcmtkb3duIGNvbXBvbmVudHMgdW5kZXIgYC4vc3JjL2NvbXBvbmVudHMvYFxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcbiAgICAgIC8vIGFsbG93IGF1dG8gaW1wb3J0IGFuZCByZWdpc3RlciBjb21wb25lbnRzIHVzZWQgaW4gbWFya2Rvd25cbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXG4gICAgICBkaXJzOiBbJ3NyYy9jb21wb25lbnRzLycsICdzcmMvbGF5b3V0LycsICdzcmMvdmlld3MnLCAnc3JjL2Fzc2V0cyddLFxuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NTZGRVx1NjgwN1x1N0VDNFx1NEVGNlxuICAgICAgICBJY29uc1Jlc29sdmVyKHtcbiAgICAgICAgICBwcmVmaXg6ICdJY29uJ1xuICAgICAgICB9KSxcbiAgICAgICAgTmFpdmVVaVJlc29sdmVyKCksXG4gICAgICAgIEFyY29SZXNvbHZlcih7XG4gICAgICAgICAgc2lkZUVmZmVjdDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIGR0czogJ3NyYy90eXBlcy9jb21wb25lbnRzLmQudHMnXG4gICAgfSksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICAvLyBkdHM6IHBhdGgucmVzb2x2ZShwYXRoU3JjLCAndHlwaW5ncycsICdhdXRvLWltcG9ydHMuZC50cycpLFxuICAgICAgZHRzOiAnc3JjL3R5cGVzL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICAgIC8vIGltcG9ydHM6IFsndnVlJywgJ0B2dWV1c2UvY29yZSddLFxuICAgICAgLy8gR2VuZXJhdGUgY29ycmVzcG9uZGluZyAuZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbiBmaWxlLlxuICAgICAgLy8gZXNsaW50IGdsb2JhbHMgRG9jcyAtIGh0dHBzOi8vZXNsaW50Lm9yZy9kb2NzL3VzZXItZ3VpZGUvY29uZmlndXJpbmcvbGFuZ3VhZ2Utb3B0aW9ucyNzcGVjaWZ5aW5nLWdsb2JhbHNcbiAgICAgIGltcG9ydHM6IFsndnVlJywgJ3Z1ZS9tYWNyb3MnLCAndnVlLXJvdXRlcicsICdwaW5pYScsICdAdnVldXNlL2NvcmUnXSxcbiAgICAgIGRpcnM6IFsnc3JjL2NvbXBvc2FibGVzJywgJ3NyYy91dGlscyddLFxuICAgICAgLy8gQXV0byBpbXBvcnQgZm9yIGFsbCBtb2R1bGUgZXhwb3J0cyB1bmRlciBkaXJlY3Rvcmllc1xuICAgICAgLy8gZGlyczogW1xuICAgICAgLy8gICAvLyAnLi9ob29rcycsXG4gICAgICAvLyAgIC8vICcuL2NvbXBvc2FibGVzJ1xuICAgICAgLy8gICAvLyAuLi5cbiAgICAgIC8vIF0sXG4gICAgICBlc2xpbnRyYzoge1xuICAgICAgICAvLyBlbmFibGVkOiB0cnVlLCAvLyBEZWZhdWx0IGBmYWxzZWBcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsIC8vIERlZmF1bHQgYGZhbHNlYFxuICAgICAgICBmaWxlcGF0aDogJy4vLmVzbGludHJjLWF1dG8taW1wb3J0Lmpzb24nLCAvLyBEZWZhdWx0IGAuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uYFxuICAgICAgICBnbG9iYWxzUHJvcFZhbHVlOiB0cnVlIC8vIERlZmF1bHQgYHRydWVgLCAodHJ1ZSB8IGZhbHNlIHwgJ3JlYWRvbmx5JyB8ICdyZWFkYWJsZScgfCAnd3JpdGFibGUnIHwgJ3dyaXRlYWJsZScpXG4gICAgICB9LFxuICAgICAgLy8gQXV0byBpbXBvcnQgZnVuY3Rpb25zIGZyb20gVUlMaWJyYXJ5LCBlLmcuIE1lc3NhZ2UsIFNwaW4sIExvYWRpbmcsIE1lc3NhZ2VCb3guLi4gKHdpdGggc3R5bGUpXG4gICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgLy8gQXV0byBpbXBvcnQgaWNvbiBjb21wb25lbnRzXG4gICAgICAgIE5haXZlVWlSZXNvbHZlcigpLFxuICAgICAgICBBcmNvUmVzb2x2ZXIoKVxuICAgICAgXVxuICAgIH0pLFxuICAgIEljb25zKHtcbiAgICAgIGNvbXBpbGVyOiAndnVlMycsXG4gICAgICBjdXN0b21Db2xsZWN0aW9uczoge1xuICAgICAgICAvLyBjdXN0b206IEZpbGVTeXN0ZW1JY29uTG9hZGVyKGAke3ZpdGVQYXRoLnNyY30vYXNzZXRzL3N2Z2ApXG4gICAgICB9LFxuICAgICAgc2NhbGU6IDEsXG4gICAgICBkZWZhdWx0Q2xhc3M6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgYXV0b0luc3RhbGw6IHRydWVcbiAgICB9KSxcbiAgICB2aXN1YWxpemVyKHtcbiAgICAgIGd6aXBTaXplOiB0cnVlLFxuICAgICAgYnJvdGxpU2l6ZTogdHJ1ZSxcbiAgICAgIGVtaXRGaWxlOiBmYWxzZSxcbiAgICAgIGZpbGVuYW1lOiAndGVzdC5odG1sJywgLy9cdTUyMDZcdTY3OTBcdTU2RkVcdTc1MUZcdTYyMTBcdTc2ODRcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgIG9wZW46IGZhbHNlIC8vXHU1OTgyXHU2NzlDXHU1QjU4XHU1NzI4XHU2NzJDXHU1NzMwXHU2NzBEXHU1MkExXHU3QUVGXHU1M0UzXHVGRjBDXHU1QzA2XHU1NzI4XHU2MjUzXHU1MzA1XHU1NDBFXHU4MUVBXHU1MkE4XHU1QzU1XHU3OTNBXG4gICAgfSlcbiAgXVxuICByZXR1cm4gdml0ZVBsdWdpbnNcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcd2VuXFxcXHByXFxcXHdlbl90b29sc1xcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcd2VuXFxcXHByXFxcXHdlbl90b29sc1xcXFxidWlsZFxcXFx1dGlscy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd2VuL3ByL3dlbl90b29scy9idWlsZC91dGlscy50c1wiO2ltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG4vLyBpbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RldkZuKG1vZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gbW9kZSA9PT0gJ2RldmVsb3BtZW50J1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9kRm4obW9kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBtb2RlID09PSAncHJvZHVjdGlvbidcbn1cblxuLyoqXG4gKiBXaGV0aGVyIHRvIGdlbmVyYXRlIHBhY2thZ2UgcHJldmlldyBcdTc1MUZcdTYyMTBcdTUzMDVcdTk4ODRcdTg5QzhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVwb3J0TW9kZSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52LlJFUE9SVCA9PT0gJ3RydWUnXG59XG5cbi8vIFJlYWQgYWxsIGVudmlyb25tZW50IHZhcmlhYmxlIGNvbmZpZ3VyYXRpb24gZmlsZXMgdG8gcHJvY2Vzcy5lbnZcbmV4cG9ydCBmdW5jdGlvbiB3cmFwcGVyRW52KGVudkNvbmY6IFJlY29yZGFibGUpOiBJbXBvcnRNZXRhRW52IHtcbiAgY29uc3QgcmV0OiBhbnkgPSB7fVxuXG4gIGZvciAoY29uc3QgZW52TmFtZSBvZiBPYmplY3Qua2V5cyhlbnZDb25mKSkge1xuICAgIGxldCByZWFsTmFtZSA9IGVudkNvbmZbZW52TmFtZV0ucmVwbGFjZSgvXFxcXG4vZywgJ1xcbicpXG4gICAgcmVhbE5hbWUgPVxuICAgICAgcmVhbE5hbWUgPT09ICd0cnVlJyA/IHRydWUgOiByZWFsTmFtZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogcmVhbE5hbWVcblxuICAgIGlmIChlbnZOYW1lID09PSAnVklURV9QT1JUJykge1xuICAgICAgcmVhbE5hbWUgPSBOdW1iZXIocmVhbE5hbWUpXG4gICAgfVxuICAgIGlmIChlbnZOYW1lID09PSAnVklURV9QUk9YWScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlYWxOYW1lID0gSlNPTi5wYXJzZShyZWFsTmFtZSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIH1cbiAgICByZXRbZW52TmFtZV0gPSByZWFsTmFtZVxuICAgIHByb2Nlc3MuZW52W2Vudk5hbWVdID0gcmVhbE5hbWVcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogR2V0IHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc3RhcnRpbmcgd2l0aCB0aGUgc3BlY2lmaWVkIHByZWZpeFxuICogQHBhcmFtIG1hdGNoIHByZWZpeFxuICogQHBhcmFtIGNvbmZGaWxlcyBleHRcbiAqL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldEVudkNvbmZpZyhcbi8vICAgbWF0Y2ggPSAnVklURV9HTE9CXycsXG4vLyAgIGNvbmZGaWxlcyA9IFsnLmVudicsICcuZW52LnByb2R1Y3Rpb24nXVxuLy8gKSB7XG4vLyAgIGxldCBlbnZDb25maWcgPSB7fVxuLy8gICBjb25mRmlsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuLy8gICAgIHRyeSB7XG4vLyAgICAgICBjb25zdCBlbnYgPSBkb3RlbnYucGFyc2UoXG4vLyAgICAgICAgIGZzLnJlYWRGaWxlU3luYyhwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgaXRlbSkpXG4vLyAgICAgICApXG4vLyAgICAgICBlbnZDb25maWcgPSB7IC4uLmVudkNvbmZpZywgLi4uZW52IH1cbi8vICAgICB9IGNhdGNoIChlcnJvcikge31cbi8vICAgfSlcblxuLy8gICBPYmplY3Qua2V5cyhlbnZDb25maWcpLmZvckVhY2goKGtleSkgPT4ge1xuLy8gICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYF4oJHttYXRjaH0pYClcbi8vICAgICBpZiAoIXJlZy50ZXN0KGtleSkpIHtcbi8vICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoZW52Q29uZmlnLCBrZXkpXG4vLyAgICAgfVxuLy8gICB9KVxuLy8gICByZXR1cm4gZW52Q29uZmlnXG4vLyB9XG5cbi8qKlxuICogR2V0IHVzZXIgcm9vdCBkaXJlY3RvcnlcbiAqIEBwYXJhbSBkaXIgZmlsZSBwYXRoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290UGF0aCguLi5kaXI6IHN0cmluZ1tdKSB7XG4gIHJldHVybiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgLi4uZGlyKVxufVxuXG4vKipcbiAqIFx1ODlFM1x1Njc5MFx1OERFRlx1NUY4NFxuICogQHBhcmFtIGJhc2VQYXRoIC0gXHU1N0ZBXHU3ODQwXHU4REVGXHU1Rjg0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUGF0aChyb290UGF0aDogc3RyaW5nLCBiYXNlUGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHJvb3QgPSBmaWxlVVJMVG9QYXRoKG5ldyBVUkwocm9vdFBhdGgsIGJhc2VQYXRoKSlcbiAgY29uc3Qgc3JjID0gYCR7cm9vdH1zcmNgXG5cbiAgcmV0dXJuIHtcbiAgICByb290LFxuICAgIHNyY1xuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxlQUFlOzs7QUNVeEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sYUFBYTtBQUNwQixTQUFTLGtCQUFrQjtBQUMzQixTQUFTLHlCQUF5QjtBQUVsQyxTQUFTLHVCQUF1QjtBQUNoQyxTQUFTLG9CQUFvQjtBQUN0QixTQUFTLGtCQUFrQixTQUFTLE9BQWdCO0FBQ3pELFFBQU0sY0FBaUM7QUFBQSxJQUNyQyxJQUFJO0FBQUEsTUFDRixxQkFBcUI7QUFBQSxJQUN2QixDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxlQUFlLENBQUMsZUFBZSx1QkFBdUI7QUFBQSxNQUN0RCxVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLGtCQUFrQjtBQUFBLFFBQ2xCLHVCQUF1QjtBQUFBLE1BQ3pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtBLFlBQVk7QUFB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
