import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import legacy from '@vitejs/plugin-legacy'
import macrosPlugin from 'vite-plugin-babel-macros'
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      }
    }),
    tsconfigPaths({}),
    legacy({
      targets: ['defaults']
    }),
    macrosPlugin(),
  ],
})
