/**
 * title: 基本使用
 * desc: 标签的基本用法
 * transform: true
 */
import { LoadingOutlined, QuestionCircleOutlined, QuestionOutlined } from '@ant-design/icons';
import React from 'react';
import { Tag } from 'suda';

const Demo = () => {
  return (
    <div>
      <Tag>Default Tag</Tag>
      <Tag icon={<LoadingOutlined />}>Icon Tag</Tag>
    </div>
  );
};

export default Demo;
