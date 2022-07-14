/**
 * title: 分割线类型
 * desc: 通过 type 字段设置，分割线分为水平和垂直两种类型。
 * transform: true
 */
import React from 'react';
import { Divider } from 'suda';

const Demo = () => {
  return (
    <div>
      <span>Hello World!</span>
      <Divider type="vertical" />
      <span>Hello World!</span>
      <Divider type="vertical" />
      <span>Hello World!</span>
    </div>
  );
};

export default Demo;
