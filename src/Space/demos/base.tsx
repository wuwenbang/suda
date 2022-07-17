/**
 * title: 基础用法
 * desc: 相邻组件水平间距。
 * transform: true
 */

import React from 'react';
import { Space, Button } from 'suda';
const Demo = () => {
  return (
    <Space>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
    </Space>
  );
};

export default Demo;
