/**
 * title: 使用与禁用
 * desc: 开关的使用与禁用。
 * transform: true
 */
import React from 'react';
import { Space, Switch } from 'suda';

const Demo = () => {
  return (
    <Space>
      <Switch defaultChecked={true} />
      <Switch defaultChecked={true} disabled />
    </Space>
  );
};

export default Demo;
