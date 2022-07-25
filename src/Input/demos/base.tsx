/**
 * title: 使用与禁用
 * desc: 输入框的使用与禁用。
 * transform: true
 */
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
