/**
 * title: 标签颜色
 * desc: 预设颜色标签与自定义颜色标签
 * transform: true
 */
import React from 'react';
import { Tag } from 'suda';

const Demo = () => {
  return (
    <>
      <div>
        <Tag>default</Tag>
        <Tag color="success">success</Tag>
        <Tag color="processing">processing</Tag>
        <Tag color="warning">warning</Tag>
        <Tag color="error">error</Tag>
      </div>
      <div style={{ marginTop: 12 }}>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
        <Tag color="#ff5500">#ff5500</Tag>
      </div>
    </>
  );
};

export default Demo;
