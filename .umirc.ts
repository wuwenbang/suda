import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'suda',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  devServer: {
    port: 1998, // 自定义端口号
  },
  base: process.env.NODE_ENV === 'production' ? '/suda/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/suda/' : '/',
  // more config: https://d.umijs.org/config
});
