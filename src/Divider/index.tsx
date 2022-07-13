import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.less';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description 分割线类型
   * @default "horizontal"
   */
  type?: 'horizontal' | 'vertical';
  /**
   * @description 虚线
   * @default false
   */
  dash?: boolean;
}

export default function Divider({ className, children, type = 'horizontal', dash }: DividerProps) {
  return (
    <div
      className={classNames(
        'suda-divider',
        `suda-divider-${type}`,
        dash ? `suda-divider-dashed` : '',
        className,
      )}
    >
      <span>{children}</span>
    </div>
  );
}
