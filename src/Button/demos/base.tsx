/**
 * title: 按钮类型
 * desc: 按钮有六种类型，对应不同的场景。
 * transform: true
 */

import React from 'react';
import { Button } from 'suda';

const Demo = () => {
  return (
    <>
      <Button>Default Button </Button>
      <Button type="dashed"> Dashed Button </Button>
      <Button type="primary"> Primary Button </Button>
      <Button type="success"> Success Button </Button>
      <Button type="warning"> Warning Button </Button>
      <Button type="danger"> Danger Button </Button>
    </>
  );
};

export default Demo;
