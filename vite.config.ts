import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      fix: true,
      emitWarning: true,
    }),
    stylelintPlugin({
      include: ['src/**/*.css', 'src/**/*.scss'],
    }),
  ],
});
