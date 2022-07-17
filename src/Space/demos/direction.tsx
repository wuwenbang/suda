/**
 * title: 垂直间距
 * desc: 相邻组件垂直间距。
 * transform: true
 */

import React from 'react';
import { Space, Button } from 'suda';
const Demo = () => {
  return (
    <Space direction="vertical">
      <div>Hello World!</div>
      <div>Hello World!</div>
      <div>Hello World!</div>
    </Space>
  );
};

export default Demo;
