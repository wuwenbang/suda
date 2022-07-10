import React from 'react';
import { Button } from 'suda';

const Demo = () => {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button>Default Button </Button>
      <Button type="primary">Primary Button </Button>
      <Button type="dashed"> Dashed Button </Button>
      <Button disabled> Disable Button </Button>
    </div>
  );
};

export default Demo;
