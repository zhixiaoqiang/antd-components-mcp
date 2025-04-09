import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['server.ts', 'scripts/extract-docs.ts', 'test-server.ts'],
  format: ['esm'],
  clean: true,
  splitting: false,
  target: 'es2022',
  platform: 'node',
  esbuildOptions(options) {
      options.define = {
        'process.env.VERSION': `"${require('./package.json').version}"`
    }
  }
})