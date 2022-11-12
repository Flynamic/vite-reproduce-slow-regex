import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
import AntdMomentResolver from 'vite-plugin-antdv1-momentjs-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AntdMomentResolver(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'ViteReproduceSlowRegex',
      fileName: 'reproduce-slow-regex',
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-router': 'Router',
        },
      },
      plugins: [
        rollupNodePolyFill(),
      ],
    },
  },
  define: {
    'process.env': {},
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm.js',
      },
      {
        find: 'util',
        replacement: 'rollup-plugin-node-polyfills/polyfills/util',
      },
      {
        find: 'url',
        replacement: 'rollup-plugin-node-polyfills/polyfills/url',
      },
      {
        find: 'querystring',
        replacement: 'rollup-plugin-node-polyfills/polyfills/qs',
      },
      {
        find: 'http',
        replacement: 'rollup-plugin-node-polyfills/polyfills/http',
      },
      {
        find: 'stream',
        replacement: 'rollup-plugin-node-polyfills/polyfills/stream',
      },
      {
        find: 'buffer',
        replacement: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
      },
      {
        find: 'string_decoder',
        replacement: 'rollup-plugin-node-polyfills/polyfills/string-decoder',
      },
      {
        find: 'process',
        replacement: 'rollup-plugin-node-polyfills/polyfills/process-es6',
      },
      {
        find: 'events',
        replacement: 'rollup-plugin-node-polyfills/polyfills/events',
      },
      {
        find: /^~/,
        replacement: '',
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: '@root-entry-name: default;',
      },
    },
  },
})
