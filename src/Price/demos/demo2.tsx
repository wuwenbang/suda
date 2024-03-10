/**
 * title: 布局调整
 * desc: 通过复合组件模式，可以方便地调整布局。
 * transform: true
 */
import React from 'react';
import { Price } from 'suda';

const Demo = () => {
  return (
    <Price price="90" currency="¥" desc="起" deletion="100" style={{ flexDirection: 'column' }}>
      <Price.Deletion />
      <div>
        <Price.Currency />
        <Price.Value />
        <Price.Desc />
      </div>
    </Price>
  );
};

export default Demo;
