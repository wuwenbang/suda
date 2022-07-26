/**
 * title: 基础功能
 * desc: 基础功能使用。
 * transform: true
 */
import React from 'react';
import { Select } from 'suda';

const Demo = () => {
  return (
    <Select>
      <Select.Option key="1">1</Select.Option>
      <Select.Option key="2">2</Select.Option>
      <Select.Option key="3">3</Select.Option>
    </Select>
  );
};

export default Demo;
