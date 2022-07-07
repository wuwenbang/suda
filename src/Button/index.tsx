import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.less';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * @description 按钮类型
   * @default "default"
   */
  type?: 'primary' | 'default';
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  className?: string;
}

export default function Button({ type, disabled, className, children, ...props }: ButtonProps) {
  // const classNameList = [className];
  return (
    <button
      {...props}
      className={classNames(
        className,
        'suda-button',
        type === 'primary' ? 'suda-button-primary' : null,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
