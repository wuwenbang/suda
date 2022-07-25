import classNames from 'classnames';
import React, { FC, HTMLAttributes, useCallback, useMemo, useState } from 'react';
import './index.less';

interface SwitchProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /**
   * @description 开关值
   */
  checked?: boolean;
  /**
   * @description 开关变化时的回调函数
   */
  onChange?: (checked: boolean) => void;
  /**
   * @description 禁止开关
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 开关默认值
   * @default false
   */
  defaultChecked?: boolean;
}

const Switch: FC<SwitchProps> = ({
  className,
  children,
  checked,
  disabled = false,
  defaultChecked = false,
  onChange,
  ...props
}) => {
  const [innerChecked, setInnerChecked] = useState(defaultChecked);
  const isChecked = useMemo(() => {
    return checked ?? innerChecked;
  }, [checked, innerChecked]);
  const onCheckChange = useCallback(() => {
    if (disabled) return;
    if (onChange) onChange(checked ?? innerChecked);
    if (!checked) setInnerChecked((value) => !value);
  }, [checked, innerChecked]);
  return (
    <button
      disabled={disabled}
      onClick={onCheckChange}
      className={classNames(
        className,
        'suda-switch',
        isChecked ? 'suda-switch-checked' : '',
        disabled ? 'suda-switch-disabled' : '',
      )}
      {...props}
    >
      <div className="suda-switch-handle"></div>
    </button>
  );
};

export default Switch;
