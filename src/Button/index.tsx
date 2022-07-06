import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.less';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'primary' | 'default';
  disabled?: boolean;
}

export default function Button({ type, disabled, className, ...props }: ButtonProps) {
  return <button {...props} className={classNames(className, 'suda-button')}></button>;
}
