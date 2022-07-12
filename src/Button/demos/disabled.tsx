/**
 * title: 按钮禁用状态
 * desc: 添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
 * transform: true
 */

import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';
import { Button } from 'suda';

const Demo = () => {
  return (
    <>
      <Button>Default Button </Button>
      <Button disabled> Disable Button </Button>
    </>
  );
};

export default Demo;
