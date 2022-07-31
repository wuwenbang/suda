import React, { ChangeEventHandler, FC, HTMLAttributes, useContext } from 'react';
import classNames from 'classnames';
import './index.less';
import { CheckboxGroupContext } from '../CheckboxGroup';
import RcCheckbox from 'rc-checkbox';
interface CheckboxProps extends HTMLAttributes<HTMLLabelElement> {
  /**
   * @description 多选框的值，根据这个值来判断是否被选中
   */
  value: string;
  /**
   * @description 禁止多选框
   * @default false
   */
  disabled?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ className, children, disabled, value, ...props }) => {
  const checkboxContext = useContext(CheckboxGroupContext);
  const checkboxValue = checkboxContext?.value;
  const onCheckboxChange = checkboxContext?.onChange;
  return (
    <label className={classNames(className, 'suda-checkbox-wrapper')} {...props}>
      <RcCheckbox
        onClick={() => {
          onCheckboxChange?.(value);
        }}
        prefixCls="suda-checkbox"
        checked={checkboxValue?.includes(value)}
        disabled={disabled}
      />
      <span>{children}</span>
    </label>
  );
};

export default React.memo(Checkbox);
