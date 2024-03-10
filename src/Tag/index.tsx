import React, { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import './index.less';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * @description 标签图标
   */
  icon?: ReactNode;
  /**
   * @description 标签颜色
   */
  color?: string;
}

const colorPresetMap = new Map([
  ['success', '#52c41a'],
  ['processing', '#1890ff'],
  ['warning', '#faad14'],
  ['error', '#ff4d4f'],
]);

const Tag: FC<TagProps> = ({ className, children, color, icon, style, ...props }) => {
  if (color && colorPresetMap.has(color)) {
    color = colorPresetMap.get(color);
  }
  const colorStyle = color ? { color: 'white', background: color, borderColor: color } : {};
  return (
    <span
      {...props}
      className={classNames(className, 'suda-tag')}
      style={{ ...colorStyle, ...style }}
    >
      {icon ? (
        <>
          {icon}
          <span className="suda-tag-inner">{children}</span>
        </>
      ) : (
        children
      )}
    </span>
  );
};

export default Tag;
