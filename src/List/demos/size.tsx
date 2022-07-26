/**
 * title: 列表尺寸
 * desc: 列表尺寸分为 large、middle、small，默认为 middle 。
 */

import React from 'react';
import { List, Space } from 'suda';

const Demo = () => {
  const data = [
    { key: '1', content: 'List Item Content 1' },
    { key: '2', content: 'List Item Content 2' },
    { key: '3', content: 'List Item Content 3' },
    { key: '4', content: 'List Item Content 4' },
  ];
  return (
    <Space direction="vertical" size="large">
      <List
        size="large"
        bordered
        header={<div style={{ fontWeight: 'bold' }}>Large Size List</div>}
        footer={<div>Footer</div>}
        dataSource={data}
        renderItem={(item) => <List.Item key={item.key}>{item.content}</List.Item>}
      />
      <List
        size="middle"
        bordered
        header={<div style={{ fontWeight: 'bold' }}>Middle Size List</div>}
        footer={<div>Footer</div>}
        dataSource={data}
        renderItem={(item) => <List.Item key={item.key}>{item.content}</List.Item>}
      />
      <List
        size="small"
        bordered
        header={<div style={{ fontWeight: 'bold' }}>Small Size List</div>}
        footer={<div>Footer</div>}
        dataSource={data}
        renderItem={(item) => <List.Item key={item.key}>{item.content}</List.Item>}
      />
    </Space>
  );
};

export default Demo;
