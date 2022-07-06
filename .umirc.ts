import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'suda',
  favicon: '/images/icon-soda-16.png',
  logo: '/images/icon-soda-80.png',
  outputPath: 'docs-dist',
  mode: 'site',
  devServer: {
    port: 1998, // 自定义端口号
  },
  base: process.env.NODE_ENV === 'production' ? '/suda/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/suda/' : '/',
  // more config: https://d.umijs.org/config
});
