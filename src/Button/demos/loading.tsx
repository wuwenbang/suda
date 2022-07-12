/**
 * title: 按钮加载状态
 * desc: 添加 loading 属性即可让按钮处于加载状态，第二个示例演示点击后进入加载状态。
 * transform: true
 */

import React, { useState } from 'react';
import { Button } from 'suda';

const Demo = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Button loading>Loading Button </Button>
      <Button loading={isLoading} onClick={() => setIsLoading((value) => !value)}>
        Click Me!
      </Button>
    </>
  );
};

export default Demo;
