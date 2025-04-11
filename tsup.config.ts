import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['cli.ts'],
  format: ['esm'],
  clean: true,
  splitting: true, // 启用代码分割
  treeshake: true, // 启用 tree shaking
  target: 'es2022',
  minify: true,
  platform: 'node',
  esbuildOptions(options) {
    options.charset = 'utf8' // 添加这行来保留中文字符
      options.define = {
        'process.env.VERSION': `"${require('./package.json').version}"`,
        'process.env.IS_BUILD': "true"
    }
  }
})