import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


export default defineConfig({
  plugins: [vueJsx({}), vue(), ],
  envDir: 'env',
  server: {
    host: '0.0.0.0', //局域网内可访问
    strictPort: true, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
    port: 8888,
    proxy: {
      "/api": {
        target: `http://test-config.shebao.net`,
        changeOrigin: true
      }
    },
  }
})

