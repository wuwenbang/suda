/**
 * title: 基本使用
 * desc: 开关的基本使用方式。
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
