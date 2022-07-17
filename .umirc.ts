import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'suda',
  favicon: 'favicon.ico',
  logo: './logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  mfsu: {},
  devServer: {
    port: 1998, // 自定义端口号
  },
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      // skipPropsWithName: ['title'],
      // 是否忽略没有文档说明的属性，默认值为 false
      // skipPropsWithoutDoc: true,
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/suda/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/suda/' : '/',
  // more config: https://d.umijs.org/config
});
