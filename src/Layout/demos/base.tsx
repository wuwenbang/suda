/**
 * title: 布局组件
 * desc: 布局组件分为 Layout、Header、Content、Sider、Footer ，他们之间可以任意组合。
 * transform: true
 */

import React from 'react';
import { Layout } from 'suda';

const Demo = () => {
  return (
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>Content</Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
};

export default Demo;
