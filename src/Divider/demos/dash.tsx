/**
 * title: 虚线与实线
 * desc: 添加 dash 属性即可让分割线出于虚线状态。
 * transform: true
 */

import React from 'react';
import { Divider } from 'suda';

const Demo = () => {
  return (
    <div>
      <div>Hello World!</div>
      <Divider />
      <div>Hello World!</div>
      <Divider dash />
      <div>Hello World!</div>
    </div>
  );
};

export default Demo;
