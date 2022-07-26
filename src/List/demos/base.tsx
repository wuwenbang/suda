/**
 * title: 基础功能
 * desc: 列表基础功能。
 * transform: true
 */
import React from 'react';
import { List } from 'suda';

const Demo = () => {
  const data = [
    { key: '1', content: 'List Item Content 1' },
    { key: '2', content: 'List Item Content 2' },
    { key: '3', content: 'List Item Content 3' },
    { key: '4', content: 'List Item Content 4' },
  ];
  return (
    <List
      bordered
      dataSource={data}
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      renderItem={(item) => <List.Item key={item.key}>{item.content}</List.Item>}
    />
  );
};

export default Demo;
