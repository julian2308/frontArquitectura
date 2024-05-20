import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://julian2308.github.io/frontArquitectura',
  plugins: [react()],
})
