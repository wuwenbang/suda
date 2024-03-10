/**
 * title: 自定义需求
 * desc: 通过复合组件，可以方便地自定义需求。
 * transform: true
 */
import React from 'react';
import { Price, Tag } from 'suda';

const Demo = () => {
  return (
    <Price price="90" currency="¥" desc="起" deletion="100">
      <Price.Desc value="低至" style={{ color: 'orange' }} />
      <Price.Currency style={{ color: 'orange' }} />
      <Price.Value style={{ color: 'orange', marginRight: 4 }} />
      <Tag color="#ff5500">超值特惠</Tag>
    </Price>
  );
};

export default Demo;
