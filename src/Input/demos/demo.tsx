import React from 'react';
import { Input, Space } from 'suda';

const Demo = () => {
  return (
    <Space direction="vertical">
      <Input placeholder="请输入内容" />
      <Input disabled placeholder="请输入内容" />
    </Space>
  );
};

export default Demo;
