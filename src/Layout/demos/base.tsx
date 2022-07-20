/**
 * title: 基本结构
 * desc: 布局组件分为 Layout、Header、Content、Sider、Footer ，他们之间可以任意组合。
 * transform: true
 */

import React from 'react';
import { Layout } from 'suda';
const { Header, Footer, Sider, Content } = Layout;
const Demo = () => {
  const headerStyle = { background: '#1890ff', height: 80 };
  const footerStyle = { background: '#40a9ff', height: 80 };
  const contentStyle = { background: '#91d5ff', height: 120 };
  const siderStyle = { maxWidth: 200, background: '#69c0ff' };
  const layoutStyle = { marginTop: 32 };

  return (
    <Layout>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Sider style={siderStyle}>Sider</Sider>
          <Content style={contentStyle}>Content</Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Content style={contentStyle}>Content</Content>
          <Sider style={siderStyle}>Sider</Sider>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
      <Layout style={layoutStyle}>
        <Sider style={siderStyle}>Sider</Sider>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Demo;
