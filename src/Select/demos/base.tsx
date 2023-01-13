/**
 * title: 基础功能
 * desc: 基础功能使用。
 * transform: true
 */
import React from 'react';
import { Select } from 'suda';

const Demo = () => {
  return (
    <Select defaultValue={'1'}>
      <Select.Option key="1">Option 1</Select.Option>
      <Select.Option key="2">Option 2</Select.Option>
      <Select.Option key="3">Option 3</Select.Option>
    </Select>
  );
};

export default Demo;
