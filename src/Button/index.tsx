import React, { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'primary' | 'default';
  disabled?: boolean;
}

export default function Button({ type, disabled, ...props }: ButtonProps) {
  return <button {...props}></button>;
}
