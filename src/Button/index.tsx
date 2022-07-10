import React, { HTMLAttributes, MouseEventHandler } from 'react';
import classNames from 'classnames';
import './index.less';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * @description 按钮类型
   * @default "default"
   */
  type?: 'primary' | 'dashed' | 'default';
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 点击事件回调函数
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ type, disabled, className, children, ...props }: ButtonProps) {
  // const classNameList = [className];
  return (
    <button
      {...props}
      className={classNames(className, 'suda-button', `suda-button-${type}`)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
