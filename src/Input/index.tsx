import React, { ChangeEventHandler, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.less';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * @description 输入框内容
   */
  value?: string;
  /**
   * @description 输入框内容变化时的回调函数
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * @description 禁止输入框
   * @default false
   */
  disabled?: boolean;
}

const Input: FC<InputProps> = ({ className, children, disabled, ...props }) => {
  return (
    <input
      disabled={disabled}
      className={classNames(className, 'suda-input', disabled ? 'suda-input-disabled' : '')}
      {...props}
    />
  );
};

export default Input;
