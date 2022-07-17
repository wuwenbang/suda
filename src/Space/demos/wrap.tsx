/**
 * title: 自动换行
 * desc: 是否自动换行。
 * transform: true
 */

import React from 'react';
import { Space, Button } from 'suda';
const Demo = () => {
  return (
    <Space wrap>
      {new Array(20).fill(null).map((_, index) => (
        <Button key={index}>Button</Button>
      ))}
    </Space>
  );
};

export default Demo;
