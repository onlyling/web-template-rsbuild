import fs from 'node:fs'
import path from 'node:path'

import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { config as dotenvConfig } from 'dotenv'

const { BUILD_ENV } = process.env
const APP_NAME = 'web template'
const HTML_PLACEHOLDER = fs.readFileSync('src/placeholder.html')

const { REACT_APP_BASE_URL, REACT_APP_API_HOST } = dotenvConfig({
  path: path.join(__dirname, `/.env.${BUILD_ENV}`),
}).parsed

export default defineConfig({
  source: {
    entry: {
      index: path.relative(__dirname, 'src/index.tsx'),
    },
    alias: {
      '@': path.relative(__dirname, 'src'),
    },
    // TODO 向构建环境传递变量 https://rsbuild.dev/zh/config/source/define
    define: {
      'process.env': JSON.stringify(process.env),
    },
  },
  output: {
    // TODO 结合自身需求设置静态资源路径
    // assetPrefix: './',
  },
  server: {
    proxy: {
      [`${REACT_APP_BASE_URL}`]: REACT_APP_API_HOST,
    },
  },
  plugins: [pluginReact()],
  html: {
    template: path.relative(__dirname, 'src/index.html'),
    favicon: path.relative(__dirname, 'public/favicon_qgl.ico'),
    title: APP_NAME,
    templateParameters: {
      description: 'web template by rsbuild',
      placeholder: `<div class="app-placeholder">${HTML_PLACEHOLDER}<p>${APP_NAME}</p> </div>`,
    },
  },
})
