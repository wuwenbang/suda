/**
 * title: 对齐方式
 * desc: 设置对齐模式。
 * transform: true
 */

import React from 'react';
import { Space, Button } from 'suda';

const Demo = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  } as const;
  const boxStyle = {
    flex: 'none',
    margin: '8px 4px',
    padding: '4px',
    border: '1px solid #cccccc',
  };
  const blockStyle = {
    display: 'inline-block',
    padding: '24px 8px',
    background: ' rgba(150, 150, 150, 0.2)',
  };
  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <Space align="center">
          center
          <Button type="primary">Primary</Button>
          <span style={blockStyle}>Block</span>
        </Space>
      </div>
      <div style={boxStyle}>
        <Space align="start">
          start
          <Button type="primary">Primary</Button>
          <span style={blockStyle}>Block</span>
        </Space>
      </div>
      <div style={boxStyle}>
        <Space align="end">
          end
          <Button type="primary">Primary</Button>
          <span style={blockStyle}>Block</span>
        </Space>
      </div>
      <div style={boxStyle}>
        <Space align="baseline">
          baseline
          <Button type="primary">Primary</Button>
          <span style={blockStyle}>Block</span>
        </Space>
      </div>
    </div>
  );
};

export default Demo;
