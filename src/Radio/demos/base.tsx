/**
 * title: 基础功能
 * desc: 单选框的基础功能与禁止选项。
 * transform: true
 */
import React, { useState } from 'react';
import { Radio } from 'suda';

const Demo = () => {
  const [value, setValue] = useState('A');
  return (
    <Radio.Group value={value} onChange={(val) => setValue(val)}>
      <Radio value="A">A</Radio>
      <Radio value="B">B</Radio>
      <Radio value="C">C</Radio>
      <Radio value="D" disabled>
        D
      </Radio>
    </Radio.Group>
  );
};

export default Demo;
