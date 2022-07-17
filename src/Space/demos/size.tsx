/**
 * title: 间距大小
 * desc: 间距预设大、中、小三种大小。<br>通过设置 size 为 large middle 分别把间距设为大、中间距。若不设置 size，则间距为小。
 * transform: true
 */

import React from 'react';
import { Space, Button } from 'suda';
const Demo = () => {
  return (
    <Space direction="vertical">
      <Space size="small">
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
      </Space>
      <Space size="middle">
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
      </Space>
      <Space size="large">
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
      </Space>
    </Space>
  );
};

export default Demo;
