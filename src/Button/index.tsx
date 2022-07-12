import React, { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';
import './index.less';
import { LoadingOutlined } from '@ant-design/icons';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * @description 按钮类型
   * @default "default"
   */
  type?: 'default' | 'danger' | 'success' | 'warning' | 'primary' | 'dashed';
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 图标
   */
  icon?: ReactNode;
  /**
   * @description 加载态
   */
  loading?: boolean;
  /**
   * @description 点击事件回调函数
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  type,
  disabled,
  icon,
  loading,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(className, 'suda-button', `suda-button-${type}`)}
      disabled={disabled}
    >
      {loading ? <LoadingOutlined /> : icon}
      {children && <span style={{ marginLeft: icon || loading ? 8 : 0 }}> {children}</span>}
    </button>
  );
}
