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
      <Layout.Header style={{ background: '#1890ff', height: 150 }}>Header</Layout.Header>
      <Layout style={{ height: 150 }}>
        <Layout.Sider style={{ background: '#69c0ff', maxWidth: 200 }}>Sider</Layout.Sider>
        <Layout.Content style={{ background: '#91d5ff' }}>Content</Layout.Content>
      </Layout>
      <Layout.Footer style={{ background: ' #40a9ff', height: 150 }}>Footer</Layout.Footer>
    </Layout>
  );
};

export default Demo;
