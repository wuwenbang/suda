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

const Tag: FC<TagProps> = ({ className, children, color, icon, ...props }) => {
  if (color && colorPresetMap.has(color)) {
    color = colorPresetMap.get(color);
  }
  return (
    <span
      {...props}
      className={classNames(className, 'suda-tag')}
      style={color ? { color: 'white', background: color, borderColor: color } : {}}
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

export default React.memo(Tag);
