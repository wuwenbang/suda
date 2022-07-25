/**
 * title: 基础功能
 * desc: 多选框的基础功能与禁止选项。
 * transform: true
 */
import React, { useState } from 'react';
import { Checkbox } from 'suda';

const Demo = () => {
  const [value, setValue] = useState<string[]>(['A', 'B']);
  const onChange = (val: string) => {
    setValue((prevValue) => {
      let nextValue = [];
      if (prevValue.includes(val)) {
        nextValue = prevValue.filter((item) => item !== val);
      } else {
        nextValue = [...prevValue, val];
      }
      return nextValue;
    });
  };
  return (
    <Checkbox.Group value={value} onChange={onChange}>
      <Checkbox value="A">A</Checkbox>
      <Checkbox value="B">B</Checkbox>
      <Checkbox value="C">C</Checkbox>
      <Checkbox value="D" disabled>
        D
      </Checkbox>
    </Checkbox.Group>
  );
};

export default Demo;
