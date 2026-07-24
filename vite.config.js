// vite.config.js
/*import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',  // 👈 Raiz do projeto (onde está o index.html)
  
  build: {
    outDir: 'dist',  // 👈 Cria a dist na RAIZ
    assetsDir: 'assets',  // 👈 JS e CSS vão para dist/assets/
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')  // 👈 HTML na raiz
      }
    }
  },
  
  // 👇 Isso garante que as imagens sejam copiadas
  publicDir: 'src/images',  // 👈 Copia imagens para a dist
  
  // 👇 Resolve os caminhos
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@images': resolve(__dirname, 'src/images'),
      '@scripts': resolve(__dirname, 'src/scripts'),
      '@styles': resolve(__dirname, 'src/styles')
    }
  }
})*/
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  },
  server: {
    watch: {
      usePolling: true,
      interval: 1000
    },
    hmr: {
      overlay: true
    }
  },
  // IMPORTANTE: Forçar o Vite a processar arquivos SCSS
  plugins: [
    {
      name: 'scss-reload',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.scss')) {
          server.ws.send({
            type: 'full-reload',
            path: '*'
          });
        }
      }
    }
  ]
})